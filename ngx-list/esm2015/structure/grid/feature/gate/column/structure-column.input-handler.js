import { hermesFilter, hermesTake } from '@generic-ui/hermes';
import { InitFieldsCommand } from '../../../../field/core/domain/init/init-fields.command';
import { FieldsInitedEvent } from '../../../../field/core/domain/init/fields-inited.event';
import { ColumnFieldId } from '../../../../../composition/core/domain/column/field/column-field.id';
import { ColumnParams } from '../../../../../composition/core/domain/column/set-columns/column.params';
export class StructureColumnInputHandler {
    constructor(structureId, compositionId, commandDispatcher, domainEventBus, columnFieldFactory, columnAutoConfigurator, compositionCommandInvoker) {
        this.structureId = structureId;
        this.compositionId = compositionId;
        this.commandDispatcher = commandDispatcher;
        this.domainEventBus = domainEventBus;
        this.columnFieldFactory = columnFieldFactory;
        this.columnAutoConfigurator = columnAutoConfigurator;
        this.compositionCommandInvoker = compositionCommandInvoker;
    }
    handle(changes) {
        let config = [];
        if (changes.columns !== undefined && changes.columns.currentValue !== undefined) {
            config = changes.columns.currentValue;
            this.columns = config;
        }
        else {
            if (this.columns === undefined && changes.source !== undefined && changes.source !== null) {
                config = this.columnAutoConfigurator.configure(changes.source.currentValue);
                this.columns = config;
            }
            else {
                return;
            }
        }
        this.compositionCommandInvoker.setGroups(config, this.compositionId);
        // prepare model
        const { columns, groups } = this.getConfigs(config);
        const fieldConfigs = this.getFieldConfigs(columns);
        // const fieldConfigs = columns as Array<FieldConfig>;
        const initCommand = new InitFieldsCommand(this.structureId, fieldConfigs);
        this.domainEventBus
            .ofEvents([
            FieldsInitedEvent
        ])
            .pipe(hermesFilter((event) => event.getAggregateId().toString() === this.structureId.toString()), hermesTake(1))
            .subscribe((event) => {
            const fields = event.getFields(), columnFieldIds = this.convertColumnFieldIds(fields), params = this.convertColumns(columns, fields, columnFieldIds);
            this.compositionCommandInvoker.setColumns(params, this.compositionId);
            // this.compositionCommandInvoker.setGroups(this.compositionId);
        });
        this.commandDispatcher.dispatch(initCommand);
    }
    getConfigs(configs) {
        let columnConfigs = [];
        const groupConfigs = [];
        for (let i = 0; i < configs.length; i += 1) {
            const config = configs[i];
            if (config.columns !== undefined) {
                groupConfigs.push(config);
                columnConfigs = columnConfigs.concat(config.columns);
            }
            else {
                columnConfigs.push(config);
            }
        }
        return {
            columns: columnConfigs,
            groups: groupConfigs
        };
    }
    getFieldConfigs(columns) {
        return columns.map((c) => {
            return {
                field: c.field,
                type: c.type,
                matcher: c.matcher,
                summaries: c.summaries,
                sorting: c.sorting
            };
        });
    }
    convertColumnFieldIds(fields) {
        if (!fields) {
            return [];
        }
        return fields.map((field) => new ColumnFieldId(field.getId().getId()));
    }
    convertColumns(columns, fields, columnFieldIds) {
        if (!columns) {
            return [];
        }
        return columns.map((column, index) => {
            const columnFieldId = columnFieldIds[index], field = fields[index];
            const columnField = this.columnFieldFactory.create(columnFieldId, field.getAccessorMethod(), field.getDataType(), field.getSearchAccessorMethod());
            return new ColumnParams(column, columnField);
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWNvbHVtbi5pbnB1dC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9zdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL2dhdGUvY29sdW1uL3N0cnVjdHVyZS1jb2x1bW4uaW5wdXQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWtELFlBQVksRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUU5RyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUUzRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUczRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0scUVBQXFFLENBQUM7QUFFcEcsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlFQUF5RSxDQUFDO0FBU3ZHLE1BQU0sT0FBTywyQkFBMkI7SUFJdkMsWUFBNkIsV0FBd0IsRUFDakMsYUFBNEIsRUFDNUIsaUJBQW9DLEVBQ3BDLGNBQThCLEVBQzlCLGtCQUFzQyxFQUN0QyxzQkFBOEMsRUFDOUMseUJBQW9EO1FBTjNDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ2pDLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtRQUM5Qyw4QkFBeUIsR0FBekIseUJBQXlCLENBQTJCO0lBQ3hFLENBQUM7SUFFRCxNQUFNLENBQUMsT0FBMEM7UUFFaEQsSUFBSSxNQUFNLEdBQW9ELEVBQUUsQ0FBQztRQUVqRSxJQUFJLE9BQU8sQ0FBQyxPQUFPLEtBQUssU0FBUyxJQUFJLE9BQU8sQ0FB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QyxDQUFDLENBQUM7SUFFSixDQUFDO0NBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tYW5kRGlzcGF0Y2hlciwgRG9tYWluRXZlbnQsIERvbWFpbkV2ZW50QnVzLCBoZXJtZXNGaWx0ZXIsIGhlcm1lc1Rha2UgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBJbml0RmllbGRzQ29tbWFuZCB9IGZyb20gJy4uLy4uLy4uLy4uL2ZpZWxkL2NvcmUvZG9tYWluL2luaXQvaW5pdC1maWVsZHMuY29tbWFuZCc7XG5pbXBvcnQgeyBGaWVsZENvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uL2ZpZWxkL2NvcmUvYXBpL2ZpZWxkLmNvbmZpZyc7XG5pbXBvcnQgeyBGaWVsZHNJbml0ZWRFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2ZpZWxkL2NvcmUvZG9tYWluL2luaXQvZmllbGRzLWluaXRlZC5ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBGaWVsZEVudGl0eSB9IGZyb20gJy4uLy4uLy4uLy4uL2ZpZWxkL2NvcmUvZG9tYWluL2ZpZWxkL2ZpZWxkLmVudGl0eSc7XG5pbXBvcnQgeyBDb2x1bW5GaWVsZElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9kb21haW4vY29sdW1uL2ZpZWxkL2NvbHVtbi1maWVsZC5pZCc7XG5pbXBvcnQgeyBDb2x1bW5Db25maWcsIE11bHRpQ29sdW1uQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9hcGkvY29sdW1uL2NvbHVtbi5jb25maWcnO1xuaW1wb3J0IHsgQ29sdW1uUGFyYW1zIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9kb21haW4vY29sdW1uL3NldC1jb2x1bW5zL2NvbHVtbi5wYXJhbXMnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvYXBpL2NvbXBvc2l0aW9uLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9hcGkvY29tcG9zaXRpb24uaWQnO1xuaW1wb3J0IHsgQ29sdW1uRmllbGRGYWN0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9kb21haW4vY29sdW1uL2ZpZWxkL2NvbHVtLWZpZWxkLmZhY3RvcnknO1xuaW1wb3J0IHsgTmdDaGFuZ2VzIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvbmctY2hhbmdlcyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVHYXRld2F5IH0gZnJvbSAnLi4vc3RydWN0dXJlLmdhdGV3YXknO1xuaW1wb3J0IHsgQ29sdW1uQXV0b0NvbmZpZ3VyYXRvciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvYXBpL2NvbHVtbi9hdXRvL2NvbHVtbi1hdXRvLmNvbmZpZ3VyYXRvcic7XG5cblxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUNvbHVtbklucHV0SGFuZGxlciB7XG5cblx0cHJpdmF0ZSBjb2x1bW5zOiBSZWFkb25seUFycmF5PENvbHVtbkNvbmZpZyB8IE11bHRpQ29sdW1uQ29uZmlnPjtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbW1hbmREaXNwYXRjaGVyOiBDb21tYW5kRGlzcGF0Y2hlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBkb21haW5FdmVudEJ1czogRG9tYWluRXZlbnRCdXMsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29sdW1uRmllbGRGYWN0b3J5OiBDb2x1bW5GaWVsZEZhY3RvcnksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29sdW1uQXV0b0NvbmZpZ3VyYXRvcjogQ29sdW1uQXV0b0NvbmZpZ3VyYXRvcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvbkNvbW1hbmRJbnZva2VyOiBDb21wb3NpdGlvbkNvbW1hbmRJbnZva2VyKSB7XG5cdH1cblxuXHRoYW5kbGUoY2hhbmdlczogTmdDaGFuZ2VzPFN0cnVjdHVyZUdhdGV3YXk+IHwgYW55KTogdm9pZCB7XG5cblx0XHRsZXQgY29uZmlnOiBSZWFkb25seUFycmF5PENvbHVtbkNvbmZpZyB8IE11bHRpQ29sdW1uQ29uZmlnPiA9IFtdO1xuXG5cdFx0aWYgKGNoYW5nZXMuY29sdW1ucyAhPT0gdW5kZWZpbmVkICYmIGNoYW5nZXMuY29sdW1ucy5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0Y29uZmlnID0gY2hhbmdlcy5jb2x1bW5zLmN1cnJlbnRWYWx1ZTtcblx0XHRcdHRoaXMuY29sdW1ucyA9IGNvbmZpZztcblx0XHR9IGVsc2Uge1xuXG5cdFx0XHRpZiAodGhpcy5jb2x1bW5zID09PSB1bmRlZmluZWQgJiYgY2hhbmdlcy5zb3VyY2UgIT09IHVuZGVmaW5lZCAmJiBjaGFuZ2VzLnNvdXJjZSAhPT0gbnVsbCkge1xuXHRcdFx0XHRjb25maWcgPSB0aGlzLmNvbHVtbkF1dG9Db25maWd1cmF0b3IuY29uZmlndXJlKGNoYW5nZXMuc291cmNlLmN1cnJlbnRWYWx1ZSk7XG5cdFx0XHRcdHRoaXMuY29sdW1ucyA9IGNvbmZpZztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR0aGlzLmNvbXBvc2l0aW9uQ29tbWFuZEludm9rZXIuc2V0R3JvdXBzKGNvbmZpZywgdGhpcy5jb21wb3NpdGlvbklkKTtcblxuXHRcdC8vIHByZXBhcmUgbW9kZWxcblx0XHRjb25zdCB7IGNvbHVtbnMsIGdyb3VwcyB9ID0gdGhpcy5nZXRDb25maWdzKGNvbmZpZyk7XG5cblx0XHRjb25zdCBmaWVsZENvbmZpZ3MgPSB0aGlzLmdldEZpZWxkQ29uZmlncyhjb2x1bW5zKTtcblxuXHRcdC8vIGNvbnN0IGZpZWxkQ29uZmlncyA9IGNvbHVtbnMgYXMgQXJyYXk8RmllbGRDb25maWc+O1xuXG5cdFx0Y29uc3QgaW5pdENvbW1hbmQgPSBuZXcgSW5pdEZpZWxkc0NvbW1hbmQodGhpcy5zdHJ1Y3R1cmVJZCwgZmllbGRDb25maWdzKTtcblxuXHRcdHRoaXMuZG9tYWluRXZlbnRCdXNcblx0XHRcdC5vZkV2ZW50cyhbXG5cdFx0XHRcdFx0RmllbGRzSW5pdGVkRXZlbnQgYXMgYW55XG5cdFx0XHRcdF1cblx0XHRcdClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHRoZXJtZXNGaWx0ZXIoKGV2ZW50OiBEb21haW5FdmVudDxTdHJ1Y3R1cmVJZD4pID0+IGV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCkudG9TdHJpbmcoKSA9PT0gdGhpcy5zdHJ1Y3R1cmVJZC50b1N0cmluZygpKSxcblx0XHRcdFx0aGVybWVzVGFrZSgxKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoZXZlbnQ6IEZpZWxkc0luaXRlZEV2ZW50KSA9PiB7XG5cblx0XHRcdFx0Y29uc3QgZmllbGRzID0gZXZlbnQuZ2V0RmllbGRzKCksXG5cdFx0XHRcdFx0Y29sdW1uRmllbGRJZHMgPSB0aGlzLmNvbnZlcnRDb2x1bW5GaWVsZElkcyhmaWVsZHMpLFxuXHRcdFx0XHRcdHBhcmFtcyA9IHRoaXMuY29udmVydENvbHVtbnMoY29sdW1ucywgZmllbGRzLCBjb2x1bW5GaWVsZElkcyk7XG5cblx0XHRcdFx0dGhpcy5jb21wb3NpdGlvbkNvbW1hbmRJbnZva2VyLnNldENvbHVtbnMocGFyYW1zLCB0aGlzLmNvbXBvc2l0aW9uSWQpO1xuXG5cdFx0XHRcdC8vIHRoaXMuY29tcG9zaXRpb25Db21tYW5kSW52b2tlci5zZXRHcm91cHModGhpcy5jb21wb3NpdGlvbklkKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChpbml0Q29tbWFuZCk7XG5cdH1cblxuXHRwcml2YXRlIGdldENvbmZpZ3MoY29uZmlnczogUmVhZG9ubHlBcnJheTxDb2x1bW5Db25maWcgfCBNdWx0aUNvbHVtbkNvbmZpZz4pOiB7IGNvbHVtbnM6IEFycmF5PENvbHVtbkNvbmZpZz4sIGdyb3VwczogQXJyYXk8TXVsdGlDb2x1bW5Db25maWc+IH0ge1xuXG5cdFx0bGV0IGNvbHVtbkNvbmZpZ3M6IEFycmF5PENvbHVtbkNvbmZpZz4gPSBbXTtcblxuXHRcdGNvbnN0IGdyb3VwQ29uZmlnczogQXJyYXk8TXVsdGlDb2x1bW5Db25maWc+ID0gW107XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGNvbmZpZ3MubGVuZ3RoOyBpICs9IDEpIHtcblxuXHRcdFx0Y29uc3QgY29uZmlnID0gY29uZmlnc1tpXTtcblxuXHRcdFx0aWYgKChjb25maWcgYXMgTXVsdGlDb2x1bW5Db25maWcpLmNvbHVtbnMgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRncm91cENvbmZpZ3MucHVzaChjb25maWcpO1xuXHRcdFx0XHRjb2x1bW5Db25maWdzID0gY29sdW1uQ29uZmlncy5jb25jYXQoKGNvbmZpZyBhcyBNdWx0aUNvbHVtbkNvbmZpZykuY29sdW1ucyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb2x1bW5Db25maWdzLnB1c2goY29uZmlnKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0Y29sdW1uczogY29sdW1uQ29uZmlncyxcblx0XHRcdGdyb3VwczogZ3JvdXBDb25maWdzXG5cdFx0fTtcblx0fVxuXG5cdHByaXZhdGUgZ2V0RmllbGRDb25maWdzKGNvbHVtbnM6IEFycmF5PENvbHVtbkNvbmZpZz4pOiBBcnJheTxGaWVsZENvbmZpZz4ge1xuXG5cdFx0cmV0dXJuIGNvbHVtbnMubWFwKChjKSA9PiB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRmaWVsZDogYy5maWVsZCBhcyBzdHJpbmcsXG5cdFx0XHRcdHR5cGU6IGMudHlwZSxcblx0XHRcdFx0bWF0Y2hlcjogYy5tYXRjaGVyLFxuXHRcdFx0XHRzdW1tYXJpZXM6IGMuc3VtbWFyaWVzLFxuXHRcdFx0XHRzb3J0aW5nOiBjLnNvcnRpbmdcblx0XHRcdH07XG5cdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnRDb2x1bW5GaWVsZElkcyhmaWVsZHM6IEFycmF5PEZpZWxkRW50aXR5Pik6IEFycmF5PENvbHVtbkZpZWxkSWQ+IHtcblxuXHRcdGlmICghZmllbGRzKSB7XG5cdFx0XHRyZXR1cm4gW107XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZpZWxkcy5tYXAoKGZpZWxkOiBGaWVsZEVudGl0eSkgPT4gbmV3IENvbHVtbkZpZWxkSWQoZmllbGQuZ2V0SWQoKS5nZXRJZCgpKSk7XG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnRDb2x1bW5zKGNvbHVtbnM6IEFycmF5PENvbHVtbkNvbmZpZz4sIGZpZWxkczogQXJyYXk8RmllbGRFbnRpdHk+LCBjb2x1bW5GaWVsZElkczogQXJyYXk8Q29sdW1uRmllbGRJZD4pOiBBcnJheTxDb2x1bW5QYXJhbXM+IHtcblxuXHRcdGlmICghY29sdW1ucykge1xuXHRcdFx0cmV0dXJuIFtdO1xuXHRcdH1cblxuXHRcdHJldHVybiBjb2x1bW5zLm1hcCgoY29sdW1uOiBDb2x1bW5Db25maWcsIGluZGV4OiBudW1iZXIpID0+IHtcblxuXHRcdFx0Y29uc3QgY29sdW1uRmllbGRJZCA9IGNvbHVtbkZpZWxkSWRzW2luZGV4XSxcblx0XHRcdFx0ZmllbGQgPSBmaWVsZHNbaW5kZXhdO1xuXG5cdFx0XHRjb25zdCBjb2x1bW5GaWVsZCA9IHRoaXMuY29sdW1uRmllbGRGYWN0b3J5LmNyZWF0ZShcblx0XHRcdFx0Y29sdW1uRmllbGRJZCxcblx0XHRcdFx0ZmllbGQuZ2V0QWNjZXNzb3JNZXRob2QoKSxcblx0XHRcdFx0ZmllbGQuZ2V0RGF0YVR5cGUoKSxcblx0XHRcdFx0ZmllbGQuZ2V0U2VhcmNoQWNjZXNzb3JNZXRob2QoKVxuXHRcdFx0KTtcblxuXHRcdFx0cmV0dXJuIG5ldyBDb2x1bW5QYXJhbXMoY29sdW1uLCBjb2x1bW5GaWVsZCk7XG5cdFx0fSk7XG5cblx0fVxuXG59XG4iXX0=