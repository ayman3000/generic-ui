import { AggregateRoot, KeyMap } from '@generic-ui/hermes';
import { CompositionContainerWidthCalculator } from './width/composition-container-width.calculator';
import { CompositionWidthSetAggregateEvent } from './width/set-width/composition-width-set.aggregate-event';
import { CompositionContainerWidthSetAggregateEvent } from './width/set-container-width/composition-container-width-set.aggregate-event';
import { CompositionResizeWidthSetAggregateEvent } from './width/resize-width/composition-resize-width-set.aggregate-event';
import { CompositionColumnSetEnabledAggregateEvent } from './column/set-enabled/composition.column-set-enabled.aggregate-event';
import { ActiveColumnContainer } from './column/active/active-column.container';
import { ActiveColumnEntityConverter } from './column/active/active-column.entity-converter';
import { CompositionColumnMovedLeftAggregateEvent } from './column/move/left/composition.column-moved-left.aggregate-event';
import { CompositionColumnMovedRightAggregateEvent } from './column/move/right/composition.column-moved-right.aggregate-event';
import { ColumnsSetAggregateEvent } from './column/set-columns/columns-set.aggregate-event';
import { CompositionCreatedAggregateEvent } from './create/composition-created.aggregate-event';
import { emptyGroup } from './group/empty-group';
export class CompositionAggregate extends AggregateRoot {
    constructor(id, columnFactory, groupFactory, columnsParams = [], width, resizeWidth) {
        super(id, 'CompositionAggregate');
        this.allColumns = [];
        this.resizeWidthEnabled = true;
        this.activeColumnEntityConverter = new ActiveColumnEntityConverter();
        this.groups = new KeyMap();
        this.columnNameToGroupId = new Map();
        const columnConfigs = columnsParams.map((param) => param.getColumn());
        this.baseParams = columnsParams;
        this.baseColumns = columnConfigs;
        this.columnFactory = columnFactory;
        this.groupFactory = groupFactory;
        this.width = width;
        this.allColumns = this.columnFactory.create(columnsParams);
        const activeColumns = this.activeColumnEntityConverter.convertMany(this.getEnabledColumns());
        this.activeColumnContainer = new ActiveColumnContainer(this.getId(), activeColumns, width, columnConfigs);
        if (resizeWidth !== undefined && resizeWidth !== null) {
            this.resizeWidthEnabled = resizeWidth;
        }
    }
    createEvent() {
        return CompositionCreatedAggregateEvent;
    }
    // REMOVE
    getColumns() {
        return this.allColumns;
    }
    // REMOVE
    getActiveColumns() {
        return this.activeColumnContainer.getColumns();
    }
    // make private
    getWidth() {
        if (this.resizeWidthEnabled) {
            return this.containerInDOMWidth;
        }
        else {
            return this.width;
        }
    }
    // REMOVE
    isResizeEnabled() {
        return this.resizeWidthEnabled;
    }
    // REMOVE
    isReady() {
        return !!this.getWidth() && this.getActiveColumns().length > 0;
    }
    setGroups(configs) {
        for (let i = 0; i < configs.length; i += 1) {
            const config = configs[i];
            if (config.columns !== undefined) {
                const group = this.groupFactory.create(config);
                this.groups.set(group.id, group);
                config.columns.forEach((c, index) => {
                    this.columnNameToGroupId.set(c.header, group.id);
                });
            }
            else {
                this.columnNameToGroupId.set(config.header, emptyGroup.id);
            }
        }
    }
    setColumns(params) {
        this.allColumns = this.columnFactory.create(params);
        const columnConfigs = params.map((param) => param.getColumn());
        const activeColumns = this.activeColumnEntityConverter.convertMany(this.getEnabledColumns());
        this.activeColumnContainer.setColumns(activeColumns, columnConfigs);
        this.addEvent(new ColumnsSetAggregateEvent(this.getId()));
    }
    setContainerWidth(containerWidth) {
        this.setContainerWidthWithEvent(containerWidth);
        this.recalculateColumns();
    }
    setWidth(width) {
        this.setWidthWithEvent(width);
        this.setResizeWidthWithEvent(false);
        this.recalculateColumns();
    }
    setResizeWidth(enabled) {
        this.setResizeWidthWithEvent(enabled);
    }
    changeSort(sortParams) {
        this.addEvent(this.activeColumnContainer.changeSort(sortParams));
    }
    // DELEGATE
    enableColumn(columnId, enabled) {
        let enabledIndex = -1;
        this.allColumns.forEach((column, index) => {
            if (column.getId().getId() === columnId.getId()) {
                const prevState = column.isEnabled();
                column.setEnabled(enabled);
                if (prevState !== enabled) {
                    enabledIndex = index;
                }
            }
        });
        if (enabledIndex > 0) {
            if (enabled) {
                // convert
                const columnToAdd = this.activeColumnEntityConverter.convert(this.allColumns[enabledIndex]);
                this.activeColumnContainer.addColumn(columnToAdd, enabledIndex);
            }
            else {
                this.activeColumnContainer.removeColumn(enabledIndex);
            }
        }
        this.recalculateColumns();
        this.addEvent(new CompositionColumnSetEnabledAggregateEvent(this.getId(), this.getActiveColumns()));
    }
    moveLeft(columnId) {
        const columnIndex = this.findColumnIndex(columnId);
        let nextLeft, nextLeftIndex = -1;
        for (let i = columnIndex - 1; i >= 0; i -= 1) {
            const leftColumn = this.allColumns[i];
            if (leftColumn.isEnabled()) {
                nextLeft = leftColumn;
                nextLeftIndex = i;
                break;
            }
        }
        if (nextLeft && nextLeftIndex >= 0 && columnIndex >= 0) {
            const column = this.allColumns[columnIndex];
            this.allColumns[columnIndex] = nextLeft;
            this.allColumns[nextLeftIndex] = column;
        }
        this.activeColumnContainer.moveLeft(columnId);
        this.addEvent(new CompositionColumnMovedLeftAggregateEvent(this.getId(), this.getActiveColumns()));
    }
    moveRight(columnId) {
        const columnIndex = this.findColumnIndex(columnId);
        let nextRight, nextRightIndex = -1;
        for (let i = columnIndex + 1; i < this.allColumns.length; i += 1) {
            const rightColumn = this.allColumns[i];
            if (rightColumn.isEnabled()) {
                nextRight = rightColumn;
                nextRightIndex = i;
                break;
            }
        }
        if (nextRight && nextRightIndex >= 0 && columnIndex >= 0) {
            const column = this.allColumns[columnIndex];
            this.allColumns[columnIndex] = nextRight;
            this.allColumns[nextRightIndex] = column;
        }
        this.activeColumnContainer.moveRight(columnId);
        this.addEvent(new CompositionColumnMovedRightAggregateEvent(this.getId(), this.getActiveColumns()));
    }
    recalculateColumns() {
        const activeColumns = this.activeColumnEntityConverter.convertMany(this.getEnabledColumns());
        this.activeColumnContainer.setColumns(activeColumns, activeColumns.map(c => c.getColumnConfig()));
    }
    // TODO Refactor
    setWidthWithEvent(width) {
        const calculator = new CompositionContainerWidthCalculator(this.getMinColumnWidth());
        const minWidth = calculator.calculateMinWidth(this.activeColumnContainer.getColumnWidths());
        if (minWidth > width) {
            this.width = minWidth;
        }
        else {
            this.width = width;
        }
        this.activeColumnContainer.setWidth(this.getWidth());
        this.addEvent(new CompositionWidthSetAggregateEvent(this.getId()));
    }
    // TODO Refactor
    setContainerWidthWithEvent(containerWidth) {
        const calculator = new CompositionContainerWidthCalculator(this.getMinColumnWidth());
        const minWidth = calculator.calculateMinWidth(this.activeColumnContainer.getColumnWidths());
        if (minWidth > containerWidth) {
            this.containerInDOMWidth = minWidth;
        }
        else {
            this.containerInDOMWidth = containerWidth;
        }
        this.activeColumnContainer.setWidth(this.getWidth());
        this.addEvent(new CompositionContainerWidthSetAggregateEvent(this.getId(), containerWidth));
    }
    setResizeWidthWithEvent(enabled) {
        this.resizeWidthEnabled = enabled;
        this.activeColumnContainer.setWidth(this.getWidth());
        this.addEvent(new CompositionResizeWidthSetAggregateEvent(this.getId()));
    }
    // REMOVE -> move to allColumnsContainer
    getEnabledColumns() {
        return this.allColumns.filter(c => c.isEnabled());
    }
    findColumnIndex(columnId) {
        return this.allColumns.findIndex((column) => column.getId().equals(columnId));
    }
    getMinColumnWidth() {
        return this.activeColumnContainer.getMinColumnWidth();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uYWdncmVnYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9jb21wb3NpdGlvbi9jb3JlL2RvbWFpbi9jb21wb3NpdGlvbi5hZ2dyZWdhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFzQyxhQUFhLEVBQUUsTUFBTSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFPL0YsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDckcsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0seURBQXlELENBQUM7QUFDNUcsT0FBTyxFQUFFLDBDQUEwQyxFQUFFLE1BQU0sNkVBQTZFLENBQUM7QUFDekksT0FBTyxFQUFFLHVDQUF1QyxFQUFFLE1BQU0sbUVBQW1FLENBQUM7QUFFNUgsT0FBTyxFQUFFLHlDQUF5QyxFQUFFLE1BQU0scUVBQXFFLENBQUM7QUFDaEksT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFFaEYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDN0YsT0FBTyxFQUFFLHdDQUF3QyxFQUFFLE1BQU0sa0VBQWtFLENBQUM7QUFDNUgsT0FBTyxFQUFFLHlDQUF5QyxFQUFFLE1BQU0sb0VBQW9FLENBQUM7QUFDL0gsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFFNUYsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sOENBQThDLENBQUM7QUFJaEcsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBR2pELE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxhQUE0QjtJQTZCckUsWUFBWSxFQUFpQixFQUMxQixhQUFrQyxFQUNsQyxZQUFxQyxFQUNyQyxnQkFBcUMsRUFBRSxFQUN2QyxLQUFjLEVBQ2QsV0FB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cUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFFckQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLDBDQUEwQyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBRSxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBQzdGLENBQUM7SUFFTyx1QkFBdUIsQ0FBQyxPQUFnQjtRQUMvQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsT0FBTyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLHVDQUF1QyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUVELHdDQUF3QztJQUNoQyxpQkFBaUI7UUFDeEIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFTyxlQUFlLENBQUMsUUFBa0I7UUFDekMsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQW9CLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUM3RixDQUFDO0lBRU8saUJBQWlCO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDdkQsQ0FBQztDQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlRXZlbnQsIEFnZ3JlZ2F0ZUV2ZW50VHlwZSwgQWdncmVnYXRlUm9vdCwgS2V5TWFwIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgQ29sdW1uRW50aXR5IH0gZnJvbSAnLi9jb2x1bW4vY29sdW1uLmVudGl0eSc7XG5pbXBvcnQgeyBDb2x1bW5Db25maWcsIE11bHRpQ29sdW1uQ29uZmlnIH0gZnJvbSAnLi4vYXBpL2NvbHVtbi9jb2x1bW4uY29uZmlnJztcbmltcG9ydCB7IENvbHVtblBhcmFtcyB9IGZyb20gJy4vY29sdW1uL3NldC1jb2x1bW5zL2NvbHVtbi5wYXJhbXMnO1xuaW1wb3J0IHsgQ29sdW1uRW50aXR5RmFjdG9yeSB9IGZyb20gJy4vY29sdW1uL2NvbHVtbi1lbnRpdHkuZmFjdG9yeSc7XG5pbXBvcnQgeyBDaGFuZ2VTb3J0UGFyYW1zIH0gZnJvbSAnLi9jb2x1bW4vc29ydC9jaGFuZ2Utc29ydC5wYXJhbXMnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db250YWluZXJXaWR0aENhbGN1bGF0b3IgfSBmcm9tICcuL3dpZHRoL2NvbXBvc2l0aW9uLWNvbnRhaW5lci13aWR0aC5jYWxjdWxhdG9yJztcbmltcG9ydCB7IENvbXBvc2l0aW9uV2lkdGhTZXRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4vd2lkdGgvc2V0LXdpZHRoL2NvbXBvc2l0aW9uLXdpZHRoLXNldC5hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db250YWluZXJXaWR0aFNldEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi93aWR0aC9zZXQtY29udGFpbmVyLXdpZHRoL2NvbXBvc2l0aW9uLWNvbnRhaW5lci13aWR0aC1zZXQuYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uUmVzaXplV2lkdGhTZXRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4vd2lkdGgvcmVzaXplLXdpZHRoL2NvbXBvc2l0aW9uLXJlc2l6ZS13aWR0aC1zZXQuYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IENvbHVtbklkIH0gZnJvbSAnLi4vYXBpL2NvbHVtbi9jb2x1bW4uaWQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db2x1bW5TZXRFbmFibGVkQWdncmVnYXRlRXZlbnQgfSBmcm9tICcuL2NvbHVtbi9zZXQtZW5hYmxlZC9jb21wb3NpdGlvbi5jb2x1bW4tc2V0LWVuYWJsZWQuYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IEFjdGl2ZUNvbHVtbkNvbnRhaW5lciB9IGZyb20gJy4vY29sdW1uL2FjdGl2ZS9hY3RpdmUtY29sdW1uLmNvbnRhaW5lcic7XG5pbXBvcnQgeyBBY3RpdmVDb2x1bW5FbnRpdHkgfSBmcm9tICcuL2NvbHVtbi9hY3RpdmUvYWN0aXZlLWNvbHVtbi5lbnRpdHknO1xuaW1wb3J0IHsgQWN0aXZlQ29sdW1uRW50aXR5Q29udmVydGVyIH0gZnJvbSAnLi9jb2x1bW4vYWN0aXZlL2FjdGl2ZS1jb2x1bW4uZW50aXR5LWNvbnZlcnRlcic7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbHVtbk1vdmVkTGVmdEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi9jb2x1bW4vbW92ZS9sZWZ0L2NvbXBvc2l0aW9uLmNvbHVtbi1tb3ZlZC1sZWZ0LmFnZ3JlZ2F0ZS1ldmVudCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbHVtbk1vdmVkUmlnaHRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4vY29sdW1uL21vdmUvcmlnaHQvY29tcG9zaXRpb24uY29sdW1uLW1vdmVkLXJpZ2h0LmFnZ3JlZ2F0ZS1ldmVudCc7XG5pbXBvcnQgeyBDb2x1bW5zU2V0QWdncmVnYXRlRXZlbnQgfSBmcm9tICcuL2NvbHVtbi9zZXQtY29sdW1ucy9jb2x1bW5zLXNldC5hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uL2FwaS9jb21wb3NpdGlvbi5pZCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNyZWF0ZWRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4vY3JlYXRlL2NvbXBvc2l0aW9uLWNyZWF0ZWQuYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IEdyb3VwSWQgfSBmcm9tICcuLi9hcGkvZ3JvdXAvZ3JvdXAuaWQnO1xuaW1wb3J0IHsgR3JvdXAgfSBmcm9tICcuLi9hcGkvZ3JvdXAvZ3JvdXAnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Hcm91cEZhY3RvcnkgfSBmcm9tICcuL2dyb3VwL2NvbXBvc2l0aW9uLmdyb3VwLmZhY3RvcnknO1xuaW1wb3J0IHsgZW1wdHlHcm91cCB9IGZyb20gJy4vZ3JvdXAvZW1wdHktZ3JvdXAnO1xuXG5cbmV4cG9ydCBjbGFzcyBDb21wb3NpdGlvbkFnZ3JlZ2F0ZSBleHRlbmRzIEFnZ3JlZ2F0ZVJvb3Q8Q29tcG9zaXRpb25JZD4ge1xuXG5cdHByaXZhdGUgYWxsQ29sdW1uczogQXJyYXk8Q29sdW1uRW50aXR5PiA9IFtdO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgYmFzZUNvbHVtbnM6IEFycmF5PENvbHVtbkNvbmZpZz47XG5cblx0cHJpdmF0ZSByZWFkb25seSBiYXNlUGFyYW1zOiBBcnJheTxDb2x1bW5QYXJhbXM+O1xuXG5cdC8qKlxuXHQgKiBWYWx1ZSB0YWtlbiBmcm9tIHVzZXIgY29uZmlnIFt3aWR0aF1cblx0ICovXG5cdHByaXZhdGUgd2lkdGg6IG51bWJlcjtcblxuXHRwcml2YXRlIGNvbnRhaW5lckluRE9NV2lkdGg6IG51bWJlcjtcblxuXHRwcml2YXRlIHJlc2l6ZVdpZHRoRW5hYmxlZDogYm9vbGVhbiA9IHRydWU7XG5cblx0cHJpdmF0ZSByZWFkb25seSBjb2x1bW5GYWN0b3J5OiBDb2x1bW5FbnRpdHlGYWN0b3J5O1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZ3JvdXBGYWN0b3J5OiBDb21wb3NpdGlvbkdyb3VwRmFjdG9yeTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGFjdGl2ZUNvbHVtbkNvbnRhaW5lcjogQWN0aXZlQ29sdW1uQ29udGFpbmVyO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgYWN0aXZlQ29sdW1uRW50aXR5Q29udmVydGVyOiBBY3RpdmVDb2x1bW5FbnRpdHlDb252ZXJ0ZXIgPSBuZXcgQWN0aXZlQ29sdW1uRW50aXR5Q29udmVydGVyKCk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBncm91cHM6IEtleU1hcDxHcm91cElkLCBHcm91cD4gPSBuZXcgS2V5TWFwKCk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBjb2x1bW5OYW1lVG9Hcm91cElkOiBNYXA8c3RyaW5nLCBHcm91cElkPiA9IG5ldyBNYXAoKTtcblxuXHRjb25zdHJ1Y3RvcihpZDogQ29tcG9zaXRpb25JZCxcblx0XHRcdFx0Y29sdW1uRmFjdG9yeTogQ29sdW1uRW50aXR5RmFjdG9yeSxcblx0XHRcdFx0Z3JvdXBGYWN0b3J5OiBDb21wb3NpdGlvbkdyb3VwRmFjdG9yeSxcblx0XHRcdFx0Y29sdW1uc1BhcmFtczogQXJyYXk8Q29sdW1uUGFyYW1zPiA9IFtdLFxuXHRcdFx0XHR3aWR0aD86IG51bWJlcixcblx0XHRcdFx0cmVzaXplV2lkdGg/OiBib29sZWFuKSB7XG5cdFx0c3VwZXIoaWQsICdDb21wb3NpdGlvbkFnZ3JlZ2F0ZScpO1xuXG5cdFx0Y29uc3QgY29sdW1uQ29uZmlnczogQXJyYXk8Q29sdW1uQ29uZmlnPiA9IGNvbHVtbnNQYXJhbXMubWFwKChwYXJhbSkgPT4gcGFyYW0uZ2V0Q29sdW1uKCkpO1xuXG5cdFx0dGhpcy5iYXNlUGFyYW1zID0gY29sdW1uc1BhcmFtcztcblx0XHR0aGlzLmJhc2VDb2x1bW5zID0gY29sdW1uQ29uZmlncztcblxuXHRcdHRoaXMuY29sdW1uRmFjdG9yeSA9IGNvbHVtbkZhY3Rvcnk7XG5cdFx0dGhpcy5ncm91cEZhY3RvcnkgPSBncm91cEZhY3Rvcnk7XG5cblx0XHR0aGlzLndpZHRoID0gd2lkdGg7XG5cblx0XHR0aGlzLmFsbENvbHVtbnMgPSB0aGlzLmNvbHVtbkZhY3RvcnkuY3JlYXRlKGNvbHVtbnNQYXJhbXMpO1xuXG5cdFx0Y29uc3QgYWN0aXZlQ29sdW1ucyA9IHRoaXMuYWN0aXZlQ29sdW1uRW50aXR5Q29udmVydGVyLmNvbnZlcnRNYW55KHRoaXMuZ2V0RW5hYmxlZENvbHVtbnMoKSk7XG5cblx0XHR0aGlzLmFjdGl2ZUNvbHVtbkNvbnRhaW5lciA9IG5ldyBBY3RpdmVDb2x1bW5Db250YWluZXIodGhpcy5nZXRJZCgpLCBhY3RpdmVDb2x1bW5zLCB3aWR0aCwgY29sdW1uQ29uZmlncyk7XG5cblx0XHRpZiAocmVzaXplV2lkdGggIT09IHVuZGVmaW5lZCAmJiByZXNpemVXaWR0aCAhPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5yZXNpemVXaWR0aEVuYWJsZWQgPSByZXNpemVXaWR0aDtcblx0XHR9XG5cblx0fVxuXG5cdGNyZWF0ZUV2ZW50KCk6IEFnZ3JlZ2F0ZUV2ZW50VHlwZTxBZ2dyZWdhdGVFdmVudDxDb21wb3NpdGlvbklkPj4ge1xuXHRcdHJldHVybiBDb21wb3NpdGlvbkNyZWF0ZWRBZ2dyZWdhdGVFdmVudDtcblx0fVxuXG5cdC8vIFJFTU9WRVxuXHRnZXRDb2x1bW5zKCk6IEFycmF5PENvbHVtbkVudGl0eT4ge1xuXHRcdHJldHVybiB0aGlzLmFsbENvbHVtbnM7XG5cdH1cblxuXHQvLyBSRU1PVkVcblx0Z2V0QWN0aXZlQ29sdW1ucygpOiBBcnJheTxBY3RpdmVDb2x1bW5FbnRpdHk+IHtcblx0XHRyZXR1cm4gdGhpcy5hY3RpdmVDb2x1bW5Db250YWluZXIuZ2V0Q29sdW1ucygpO1xuXHR9XG5cblx0Ly8gbWFrZSBwcml2YXRlXG5cdGdldFdpZHRoKCk6IG51bWJlciB7XG5cblx0XHRpZiAodGhpcy5yZXNpemVXaWR0aEVuYWJsZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmNvbnRhaW5lckluRE9NV2lkdGg7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLndpZHRoO1xuXHRcdH1cblx0fVxuXG5cdC8vIFJFTU9WRVxuXHRpc1Jlc2l6ZUVuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMucmVzaXplV2lkdGhFbmFibGVkO1xuXHR9XG5cblx0Ly8gUkVNT1ZFXG5cdGlzUmVhZHkoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuICEhdGhpcy5nZXRXaWR0aCgpICYmIHRoaXMuZ2V0QWN0aXZlQ29sdW1ucygpLmxlbmd0aCA+IDA7XG5cdH1cblxuXHRzZXRHcm91cHMoY29uZmlnczogQXJyYXk8Q29sdW1uQ29uZmlnIHwgTXVsdGlDb2x1bW5Db25maWc+KTogdm9pZCB7XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGNvbmZpZ3MubGVuZ3RoOyBpICs9IDEpIHtcblxuXHRcdFx0Y29uc3QgY29uZmlnID0gY29uZmlnc1tpXTtcblxuXHRcdFx0aWYgKChjb25maWcgYXMgTXVsdGlDb2x1bW5Db25maWcpLmNvbHVtbnMgIT09IHVuZGVmaW5lZCkge1xuXG5cdFx0XHRcdGNvbnN0IGdyb3VwID0gdGhpcy5ncm91cEZhY3RvcnkuY3JlYXRlKGNvbmZpZyk7XG5cblx0XHRcdFx0dGhpcy5ncm91cHMuc2V0KGdyb3VwLmlkLCBncm91cCk7XG5cblx0XHRcdFx0KGNvbmZpZyBhcyBNdWx0aUNvbHVtbkNvbmZpZykuY29sdW1ucy5mb3JFYWNoKChjOiBDb2x1bW5Db25maWcsIGluZGV4OiBudW1iZXIpID0+IHtcblxuXHRcdFx0XHRcdHRoaXMuY29sdW1uTmFtZVRvR3JvdXBJZC5zZXQoYy5oZWFkZXIgYXMgc3RyaW5nLCBncm91cC5pZCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5jb2x1bW5OYW1lVG9Hcm91cElkLnNldChjb25maWcuaGVhZGVyIGFzIHN0cmluZywgZW1wdHlHcm91cC5pZCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0c2V0Q29sdW1ucyhwYXJhbXM6IEFycmF5PENvbHVtblBhcmFtcz4pOiB2b2lkIHtcblxuXHRcdHRoaXMuYWxsQ29sdW1ucyA9IHRoaXMuY29sdW1uRmFjdG9yeS5jcmVhdGUocGFyYW1zKTtcblxuXHRcdGNvbnN0IGNvbHVtbkNvbmZpZ3M6IEFycmF5PENvbHVtbkNvbmZpZz4gPSBwYXJhbXMubWFwKChwYXJhbTogQ29sdW1uUGFyYW1zKSA9PiBwYXJhbS5nZXRDb2x1bW4oKSk7XG5cblx0XHRjb25zdCBhY3RpdmVDb2x1bW5zID0gdGhpcy5hY3RpdmVDb2x1bW5FbnRpdHlDb252ZXJ0ZXIuY29udmVydE1hbnkodGhpcy5nZXRFbmFibGVkQ29sdW1ucygpKTtcblxuXHRcdHRoaXMuYWN0aXZlQ29sdW1uQ29udGFpbmVyLnNldENvbHVtbnMoYWN0aXZlQ29sdW1ucywgY29sdW1uQ29uZmlncyk7XG5cblx0XHR0aGlzLmFkZEV2ZW50KG5ldyBDb2x1bW5zU2V0QWdncmVnYXRlRXZlbnQodGhpcy5nZXRJZCgpKSk7XG5cdH1cblxuXHRzZXRDb250YWluZXJXaWR0aChjb250YWluZXJXaWR0aDogbnVtYmVyKTogdm9pZCB7XG5cblx0XHR0aGlzLnNldENvbnRhaW5lcldpZHRoV2l0aEV2ZW50KGNvbnRhaW5lcldpZHRoKTtcblxuXHRcdHRoaXMucmVjYWxjdWxhdGVDb2x1bW5zKCk7XG5cdH1cblxuXHRzZXRXaWR0aCh3aWR0aDogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5zZXRXaWR0aFdpdGhFdmVudCh3aWR0aCk7XG5cblx0XHR0aGlzLnNldFJlc2l6ZVdpZHRoV2l0aEV2ZW50KGZhbHNlKTtcblxuXHRcdHRoaXMucmVjYWxjdWxhdGVDb2x1bW5zKCk7XG5cdH1cblxuXHRzZXRSZXNpemVXaWR0aChlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy5zZXRSZXNpemVXaWR0aFdpdGhFdmVudChlbmFibGVkKTtcblx0fVxuXG5cdGNoYW5nZVNvcnQoc29ydFBhcmFtczogQXJyYXk8Q2hhbmdlU29ydFBhcmFtcz4pOiB2b2lkIHtcblx0XHR0aGlzLmFkZEV2ZW50KFxuXHRcdFx0dGhpcy5hY3RpdmVDb2x1bW5Db250YWluZXIuY2hhbmdlU29ydChzb3J0UGFyYW1zKVxuXHRcdCk7XG5cdH1cblxuXHQvLyBERUxFR0FURVxuXHRlbmFibGVDb2x1bW4oY29sdW1uSWQ6IENvbHVtbklkLCBlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG5cblx0XHRsZXQgZW5hYmxlZEluZGV4ID0gLTE7XG5cblx0XHR0aGlzLmFsbENvbHVtbnMuZm9yRWFjaCgoY29sdW1uOiBDb2x1bW5FbnRpdHksIGluZGV4OiBudW1iZXIpID0+IHtcblx0XHRcdGlmIChjb2x1bW4uZ2V0SWQoKS5nZXRJZCgpID09PSBjb2x1bW5JZC5nZXRJZCgpKSB7XG5cblx0XHRcdFx0Y29uc3QgcHJldlN0YXRlID0gY29sdW1uLmlzRW5hYmxlZCgpO1xuXG5cdFx0XHRcdGNvbHVtbi5zZXRFbmFibGVkKGVuYWJsZWQpO1xuXG5cdFx0XHRcdGlmIChwcmV2U3RhdGUgIT09IGVuYWJsZWQpIHtcblx0XHRcdFx0XHRlbmFibGVkSW5kZXggPSBpbmRleDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0aWYgKGVuYWJsZWRJbmRleCA+IDApIHtcblxuXHRcdFx0aWYgKGVuYWJsZWQpIHtcblxuXHRcdFx0XHQvLyBjb252ZXJ0XG5cdFx0XHRcdGNvbnN0IGNvbHVtblRvQWRkID0gdGhpcy5hY3RpdmVDb2x1bW5FbnRpdHlDb252ZXJ0ZXIuY29udmVydCh0aGlzLmFsbENvbHVtbnNbZW5hYmxlZEluZGV4XSk7XG5cblx0XHRcdFx0dGhpcy5hY3RpdmVDb2x1bW5Db250YWluZXIuYWRkQ29sdW1uKGNvbHVtblRvQWRkLCBlbmFibGVkSW5kZXgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5hY3RpdmVDb2x1bW5Db250YWluZXIucmVtb3ZlQ29sdW1uKGVuYWJsZWRJbmRleCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dGhpcy5yZWNhbGN1bGF0ZUNvbHVtbnMoKTtcblxuXHRcdHRoaXMuYWRkRXZlbnQoXG5cdFx0XHRuZXcgQ29tcG9zaXRpb25Db2x1bW5TZXRFbmFibGVkQWdncmVnYXRlRXZlbnQodGhpcy5nZXRJZCgpLCB0aGlzLmdldEFjdGl2ZUNvbHVtbnMoKSlcblx0XHQpO1xuXHR9XG5cblx0bW92ZUxlZnQoY29sdW1uSWQ6IENvbHVtbklkKTogdm9pZCB7XG5cblx0XHRjb25zdCBjb2x1bW5JbmRleCA9IHRoaXMuZmluZENvbHVtbkluZGV4KGNvbHVtbklkKTtcblxuXHRcdGxldCBuZXh0TGVmdCxcblx0XHRcdG5leHRMZWZ0SW5kZXggPSAtMTtcblxuXHRcdGZvciAobGV0IGkgPSBjb2x1bW5JbmRleCAtIDE7IGkgPj0gMDsgaSAtPSAxKSB7XG5cblx0XHRcdGNvbnN0IGxlZnRDb2x1bW4gPSB0aGlzLmFsbENvbHVtbnNbaV07XG5cblx0XHRcdGlmIChsZWZ0Q29sdW1uLmlzRW5hYmxlZCgpKSB7XG5cblx0XHRcdFx0bmV4dExlZnQgPSBsZWZ0Q29sdW1uO1xuXHRcdFx0XHRuZXh0TGVmdEluZGV4ID0gaTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKG5leHRMZWZ0ICYmIG5leHRMZWZ0SW5kZXggPj0gMCAmJiBjb2x1bW5JbmRleCA+PSAwKSB7XG5cblx0XHRcdGNvbnN0IGNvbHVtbiA9IHRoaXMuYWxsQ29sdW1uc1tjb2x1bW5JbmRleF07XG5cblx0XHRcdHRoaXMuYWxsQ29sdW1uc1tjb2x1bW5JbmRleF0gPSBuZXh0TGVmdDtcblx0XHRcdHRoaXMuYWxsQ29sdW1uc1tuZXh0TGVmdEluZGV4XSA9IGNvbHVtbjtcblx0XHR9XG5cblx0XHR0aGlzLmFjdGl2ZUNvbHVtbkNvbnRhaW5lci5tb3ZlTGVmdChjb2x1bW5JZCk7XG5cblx0XHR0aGlzLmFkZEV2ZW50KFxuXHRcdFx0bmV3IENvbXBvc2l0aW9uQ29sdW1uTW92ZWRMZWZ0QWdncmVnYXRlRXZlbnQodGhpcy5nZXRJZCgpLCB0aGlzLmdldEFjdGl2ZUNvbHVtbnMoKSlcblx0XHQpO1xuXHR9XG5cblx0bW92ZVJpZ2h0KGNvbHVtbklkOiBDb2x1bW5JZCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgY29sdW1uSW5kZXggPSB0aGlzLmZpbmRDb2x1bW5JbmRleChjb2x1bW5JZCk7XG5cblx0XHRsZXQgbmV4dFJpZ2h0LFxuXHRcdFx0bmV4dFJpZ2h0SW5kZXggPSAtMTtcblxuXHRcdGZvciAobGV0IGkgPSBjb2x1bW5JbmRleCArIDE7IGkgPCB0aGlzLmFsbENvbHVtbnMubGVuZ3RoOyBpICs9IDEpIHtcblxuXHRcdFx0Y29uc3QgcmlnaHRDb2x1bW4gPSB0aGlzLmFsbENvbHVtbnNbaV07XG5cblx0XHRcdGlmIChyaWdodENvbHVtbi5pc0VuYWJsZWQoKSkge1xuXG5cdFx0XHRcdG5leHRSaWdodCA9IHJpZ2h0Q29sdW1uO1xuXHRcdFx0XHRuZXh0UmlnaHRJbmRleCA9IGk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChuZXh0UmlnaHQgJiYgbmV4dFJpZ2h0SW5kZXggPj0gMCAmJiBjb2x1bW5JbmRleCA+PSAwKSB7XG5cblx0XHRcdGNvbnN0IGNvbHVtbiA9IHRoaXMuYWxsQ29sdW1uc1tjb2x1bW5JbmRleF07XG5cblx0XHRcdHRoaXMuYWxsQ29sdW1uc1tjb2x1bW5JbmRleF0gPSBuZXh0UmlnaHQ7XG5cdFx0XHR0aGlzLmFsbENvbHVtbnNbbmV4dFJpZ2h0SW5kZXhdID0gY29sdW1uO1xuXHRcdH1cblxuXHRcdHRoaXMuYWN0aXZlQ29sdW1uQ29udGFpbmVyLm1vdmVSaWdodChjb2x1bW5JZCk7XG5cblx0XHR0aGlzLmFkZEV2ZW50KFxuXHRcdFx0bmV3IENvbXBvc2l0aW9uQ29sdW1uTW92ZWRSaWdodEFnZ3JlZ2F0ZUV2ZW50KHRoaXMuZ2V0SWQoKSwgdGhpcy5nZXRBY3RpdmVDb2x1bW5zKCkpXG5cdFx0KTtcblx0fVxuXG5cdHByaXZhdGUgcmVjYWxjdWxhdGVDb2x1bW5zKCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgYWN0aXZlQ29sdW1ucyA9IHRoaXMuYWN0aXZlQ29sdW1uRW50aXR5Q29udmVydGVyLmNvbnZlcnRNYW55KHRoaXMuZ2V0RW5hYmxlZENvbHVtbnMoKSk7XG5cblx0XHR0aGlzLmFjdGl2ZUNvbHVtbkNvbnRhaW5lci5zZXRDb2x1bW5zKGFjdGl2ZUNvbHVtbnMsIGFjdGl2ZUNvbHVtbnMubWFwKGMgPT4gYy5nZXRDb2x1bW5Db25maWcoKSkpO1xuXHR9XG5cblx0Ly8gVE9ETyBSZWZhY3RvclxuXHRwcml2YXRlIHNldFdpZHRoV2l0aEV2ZW50KHdpZHRoOiBudW1iZXIpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGNhbGN1bGF0b3IgPSBuZXcgQ29tcG9zaXRpb25Db250YWluZXJXaWR0aENhbGN1bGF0b3IodGhpcy5nZXRNaW5Db2x1bW5XaWR0aCgpKTtcblxuXHRcdGNvbnN0IG1pbldpZHRoID0gY2FsY3VsYXRvci5jYWxjdWxhdGVNaW5XaWR0aCh0aGlzLmFjdGl2ZUNvbHVtbkNvbnRhaW5lci5nZXRDb2x1bW5XaWR0aHMoKSk7XG5cblx0XHRpZiAobWluV2lkdGggPiB3aWR0aCkge1xuXHRcdFx0dGhpcy53aWR0aCA9IG1pbldpZHRoO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLndpZHRoID0gd2lkdGg7XG5cdFx0fVxuXG5cdFx0dGhpcy5hY3RpdmVDb2x1bW5Db250YWluZXIuc2V0V2lkdGgodGhpcy5nZXRXaWR0aCgpKTtcblxuXHRcdHRoaXMuYWRkRXZlbnQobmV3IENvbXBvc2l0aW9uV2lkdGhTZXRBZ2dyZWdhdGVFdmVudCh0aGlzLmdldElkKCkpKTtcblx0fVxuXG5cdC8vIFRPRE8gUmVmYWN0b3Jcblx0cHJpdmF0ZSBzZXRDb250YWluZXJXaWR0aFdpdGhFdmVudChjb250YWluZXJXaWR0aDogbnVtYmVyKTogdm9pZCB7XG5cblx0XHRjb25zdCBjYWxjdWxhdG9yID0gbmV3IENvbXBvc2l0aW9uQ29udGFpbmVyV2lkdGhDYWxjdWxhdG9yKHRoaXMuZ2V0TWluQ29sdW1uV2lkdGgoKSk7XG5cblx0XHRjb25zdCBtaW5XaWR0aCA9IGNhbGN1bGF0b3IuY2FsY3VsYXRlTWluV2lkdGgodGhpcy5hY3RpdmVDb2x1bW5Db250YWluZXIuZ2V0Q29sdW1uV2lkdGhzKCkpO1xuXG5cdFx0aWYgKG1pbldpZHRoID4gY29udGFpbmVyV2lkdGgpIHtcblx0XHRcdHRoaXMuY29udGFpbmVySW5ET01XaWR0aCA9IG1pbldpZHRoO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmNvbnRhaW5lckluRE9NV2lkdGggPSBjb250YWluZXJXaWR0aDtcblx0XHR9XG5cblx0XHR0aGlzLmFjdGl2ZUNvbHVtbkNvbnRhaW5lci5zZXRXaWR0aCh0aGlzLmdldFdpZHRoKCkpO1xuXG5cdFx0dGhpcy5hZGRFdmVudChuZXcgQ29tcG9zaXRpb25Db250YWluZXJXaWR0aFNldEFnZ3JlZ2F0ZUV2ZW50KHRoaXMuZ2V0SWQoKSwgY29udGFpbmVyV2lkdGgpKTtcblx0fVxuXG5cdHByaXZhdGUgc2V0UmVzaXplV2lkdGhXaXRoRXZlbnQoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMucmVzaXplV2lkdGhFbmFibGVkID0gZW5hYmxlZDtcblx0XHR0aGlzLmFjdGl2ZUNvbHVtbkNvbnRhaW5lci5zZXRXaWR0aCh0aGlzLmdldFdpZHRoKCkpO1xuXHRcdHRoaXMuYWRkRXZlbnQobmV3IENvbXBvc2l0aW9uUmVzaXplV2lkdGhTZXRBZ2dyZWdhdGVFdmVudCh0aGlzLmdldElkKCkpKTtcblx0fVxuXG5cdC8vIFJFTU9WRSAtPiBtb3ZlIHRvIGFsbENvbHVtbnNDb250YWluZXJcblx0cHJpdmF0ZSBnZXRFbmFibGVkQ29sdW1ucygpOiBBcnJheTxDb2x1bW5FbnRpdHk+IHtcblx0XHRyZXR1cm4gdGhpcy5hbGxDb2x1bW5zLmZpbHRlcihjID0+IGMuaXNFbmFibGVkKCkpO1xuXHR9XG5cblx0cHJpdmF0ZSBmaW5kQ29sdW1uSW5kZXgoY29sdW1uSWQ6IENvbHVtbklkKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5hbGxDb2x1bW5zLmZpbmRJbmRleCgoY29sdW1uOiBDb2x1bW5FbnRpdHkpID0+IGNvbHVtbi5nZXRJZCgpLmVxdWFscyhjb2x1bW5JZCkpO1xuXHR9XG5cblx0cHJpdmF0ZSBnZXRNaW5Db2x1bW5XaWR0aCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLmFjdGl2ZUNvbHVtbkNvbnRhaW5lci5nZXRNaW5Db2x1bW5XaWR0aCgpO1xuXHR9XG59XG4iXX0=