/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { DomainEventBus } from '@generic-ui/hermes';
import { SmartComponent } from '../../../../common/cdk/component/smart-component';
import { StructureHeaderColumnsComponent } from './column/structure-header-columns.component';
import { StructureId } from '../../../core/api/structure.id';
import { FilterWarehouse } from '../../../filter/core/api/filter.warehouse';
import { CompositionWarehouse } from '../../../../composition/core/api/composition.warehouse';
import { StructureHeaderFiltersComponent } from './filters/structure-header-filters.component';
import { StructureWarehouse } from '../../core/api/structure.warehouse';
import { VerticalFormationWarehouse } from '../../../vertical-formation/core/api/vertical-formation.warehouse';
import { RowSelectionType } from '../../../source/core/api/row-selection';
import { RowSelectionTypeArchive } from '../../../source/core/api/formation/type/row-selection-type.archive';
import { CompositionId } from '../../../../composition/core/api/composition.id';
import { StyleModifier } from '../../../../common/cdk/dom/style/style-modifier';
export class StructureHeaderComponent extends SmartComponent {
    /**
     * @param {?} changeDetectorRef
     * @param {?} elementRef
     * @param {?} eventBus
     * @param {?} structureId
     * @param {?} compositionId
     * @param {?} filterWarehouse
     * @param {?} structureWarehouse
     * @param {?} rowSelectionTypeArchive
     * @param {?} structureVerticalFormationWarehouse
     * @param {?} compositionWarehouse
     */
    constructor(changeDetectorRef, elementRef, eventBus, structureId, compositionId, filterWarehouse, structureWarehouse, rowSelectionTypeArchive, structureVerticalFormationWarehouse, compositionWarehouse) {
        super(changeDetectorRef, elementRef);
        this.changeDetectorRef = changeDetectorRef;
        this.eventBus = eventBus;
        this.structureId = structureId;
        this.compositionId = compositionId;
        this.filterWarehouse = filterWarehouse;
        this.structureWarehouse = structureWarehouse;
        this.rowSelectionTypeArchive = rowSelectionTypeArchive;
        this.structureVerticalFormationWarehouse = structureVerticalFormationWarehouse;
        this.compositionWarehouse = compositionWarehouse;
        this.headerColumns = [];
        this.filterRowEnabled = false;
        this.showGroups = false;
        this.styleModifier = new StyleModifier(elementRef.nativeElement);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.hermesSubscribe(this.rowSelectionTypeArchive.on(), (/**
         * @param {?} type
         * @return {?}
         */
        (type) => {
            this.checkboxSelection = type === RowSelectionType.CHECKBOX;
        }));
        this.hermesSubscribe(this.compositionWarehouse.onHeaderColumns(this.compositionId), (/**
         * @param {?} columns
         * @return {?}
         */
        (columns) => {
            this.headerColumns = columns;
        }));
        this.hermesSubscribeWithoutRender(this.compositionWarehouse.onContainerWidth(this.compositionId), (/**
         * @param {?} width
         * @return {?}
         */
        (width) => {
            this.styleModifier.getElement(this.containerRef.nativeElement).setWidth(width);
        }));
        this.hermesSubscribe(this.filterWarehouse.onFilteringEnabled(this.structureId), (/**
         * @param {?} enabled
         * @return {?}
         */
        (enabled) => {
            this.filterRowEnabled = enabled;
        }));
        this.hermesSubscribe(this.compositionWarehouse.onGroups(this.compositionId), (/**
         * @param {?} collection
         * @return {?}
         */
        (collection) => {
            this.showGroups = collection.isVisible();
            this.groups = collection.getGroups();
        }));
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        super.ngAfterViewInit();
        this.hermesSubscribeWithoutRender(this.structureVerticalFormationWarehouse.onRowHeight(this.structureId), (/**
         * @param {?} rowHeight
         * @return {?}
         */
        (rowHeight) => {
            /** @type {?} */
            const headerHeight = +(rowHeight) + 2;
            if (this.filtersRef) {
                this.styleModifier.getElement(this.filtersRef.nativeElement).setHeight(headerHeight);
            }
        }));
    }
    /**
     * @protected
     * @return {?}
     */
    getSelectorName() {
        return 'gui-structure-header';
    }
}
StructureHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'div[gui-structure-header]',
                template: "<div *ngIf=\"showGroups\"\n\t [checkboxSelection]=\"checkboxSelection\"\n\t [groups]=\"groups\"\n\t class=\"gui-header\"\n\t gui-structure-header-groups>\n</div>\n\n<div [checkboxSelection]=\"checkboxSelection\"\n\t [columns]=\"headerColumns\"\n\t class=\"gui-header\"\n\t gui-structure-header-columns>\n</div>\n\n<div *ngIf=\"filterRowEnabled\"\n\t [columns]=\"headerColumns\"\n\t class=\"gui-header\"\n\t gui-structure-header-filters>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
StructureHeaderComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: DomainEventBus },
    { type: StructureId },
    { type: CompositionId },
    { type: FilterWarehouse },
    { type: StructureWarehouse },
    { type: RowSelectionTypeArchive },
    { type: VerticalFormationWarehouse },
    { type: CompositionWarehouse }
];
StructureHeaderComponent.propDecorators = {
    containerRef: [{ type: ViewChild, args: [StructureHeaderColumnsComponent, { read: ElementRef, static: true },] }],
    filtersRef: [{ type: ViewChild, args: [StructureHeaderFiltersComponent, { read: ElementRef, static: true },] }]
};
if (false) {
    /** @type {?} */
    StructureHeaderComponent.prototype.containerRef;
    /** @type {?} */
    StructureHeaderComponent.prototype.filtersRef;
    /** @type {?} */
    StructureHeaderComponent.prototype.headerColumns;
    /** @type {?} */
    StructureHeaderComponent.prototype.filterRowEnabled;
    /** @type {?} */
    StructureHeaderComponent.prototype.checkboxSelection;
    /** @type {?} */
    StructureHeaderComponent.prototype.groups;
    /** @type {?} */
    StructureHeaderComponent.prototype.showGroups;
    /**
     * @type {?}
     * @private
     */
    StructureHeaderComponent.prototype.styleModifier;
    /**
     * @type {?}
     * @private
     */
    StructureHeaderComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    StructureHeaderComponent.prototype.eventBus;
    /**
     * @type {?}
     * @private
     */
    StructureHeaderComponent.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    StructureHeaderComponent.prototype.compositionId;
    /**
     * @type {?}
     * @private
     */
    StructureHeaderComponent.prototype.filterWarehouse;
    /**
     * @type {?}
     * @private
     */
    StructureHeaderComponent.prototype.structureWarehouse;
    /**
     * @type {?}
     * @private
     */
    StructureHeaderComponent.prototype.rowSelectionTypeArchive;
    /**
     * @type {?}
     * @private
     */
    StructureHeaderComponent.prototype.structureVerticalFormationWarehouse;
    /**
     * @type {?}
     * @private
     */
    StructureHeaderComponent.prototype.compositionWarehouse;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9ncmlkL2ZlYXR1cmUvaGVhZGVyL3N0cnVjdHVyZS1oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWlCLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQVUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXZKLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVwRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFFbEYsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFFOUYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzdELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUM5RixPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUMvRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxtRUFBbUUsQ0FBQztBQUMvRyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxvRUFBb0UsQ0FBQztBQUU3RyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saURBQWlELENBQUM7QUFFaEYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBU2hGLE1BQU0sT0FBTyx3QkFBeUIsU0FBUSxjQUFjOzs7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b3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudEJ1cyB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvc21hcnQtY29tcG9uZW50JztcblxuaW1wb3J0IHsgU3RydWN0dXJlSGVhZGVyQ29sdW1uc0NvbXBvbmVudCB9IGZyb20gJy4vY29sdW1uL3N0cnVjdHVyZS1oZWFkZXItY29sdW1ucy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2RvbWFpbi1yZWFkL2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWNvbnRleHQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgRmlsdGVyV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vZmlsdGVyL2NvcmUvYXBpL2ZpbHRlci53YXJlaG91c2UnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25XYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2FwaS9jb21wb3NpdGlvbi53YXJlaG91c2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlSGVhZGVyRmlsdGVyc0NvbXBvbmVudCB9IGZyb20gJy4vZmlsdGVycy9zdHJ1Y3R1cmUtaGVhZGVyLWZpbHRlcnMuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZVdhcmVob3VzZSB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS53YXJlaG91c2UnO1xuaW1wb3J0IHsgVmVydGljYWxGb3JtYXRpb25XYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi92ZXJ0aWNhbC1mb3JtYXRpb24vY29yZS9hcGkvdmVydGljYWwtZm9ybWF0aW9uLndhcmVob3VzZSc7XG5pbXBvcnQgeyBSb3dTZWxlY3Rpb25UeXBlIH0gZnJvbSAnLi4vLi4vLi4vc291cmNlL2NvcmUvYXBpL3Jvdy1zZWxlY3Rpb24nO1xuaW1wb3J0IHsgUm93U2VsZWN0aW9uVHlwZUFyY2hpdmUgfSBmcm9tICcuLi8uLi8uLi9zb3VyY2UvY29yZS9hcGkvZm9ybWF0aW9uL3R5cGUvcm93LXNlbGVjdGlvbi10eXBlLmFyY2hpdmUnO1xuaW1wb3J0IHsgR3JvdXAgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2FwaS9ncm91cC9ncm91cCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9hcGkvY29tcG9zaXRpb24uaWQnO1xuaW1wb3J0IHsgR3JvdXBDb2xsZWN0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9hcGkvZ3JvdXAvZ3JvdXAuY29sbGVjdGlvbic7XG5pbXBvcnQgeyBTdHlsZU1vZGlmaWVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9kb20vc3R5bGUvc3R5bGUtbW9kaWZpZXInO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktc3RydWN0dXJlLWhlYWRlcl0nLFxuXHR0ZW1wbGF0ZVVybDogJy4vc3RydWN0dXJlLWhlYWRlci5jb21wb25lbnQuaHRtbCcsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUhlYWRlckNvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcblxuXHRAVmlld0NoaWxkKFN0cnVjdHVyZUhlYWRlckNvbHVtbnNDb21wb25lbnQsIHsgcmVhZDogRWxlbWVudFJlZiwgc3RhdGljOiB0cnVlIH0pXG5cdGNvbnRhaW5lclJlZjogRWxlbWVudFJlZjtcblxuXHRAVmlld0NoaWxkKFN0cnVjdHVyZUhlYWRlckZpbHRlcnNDb21wb25lbnQsIHsgcmVhZDogRWxlbWVudFJlZiwgc3RhdGljOiB0cnVlIH0pXG5cdGZpbHRlcnNSZWY6IEVsZW1lbnRSZWY7XG5cblx0aGVhZGVyQ29sdW1uczogQXJyYXk8Q2VsbFRlbXBsYXRlV2l0aENvbnRleHQ+ID0gW107XG5cblx0ZmlsdGVyUm93RW5hYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdGNoZWNrYm94U2VsZWN0aW9uOiBib29sZWFuO1xuXG5cdGdyb3VwczogQXJyYXk8R3JvdXA+O1xuXG5cdHNob3dHcm91cHM6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHN0eWxlTW9kaWZpZXI6IFN0eWxlTW9kaWZpZXI7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZXZlbnRCdXM6IERvbWFpbkV2ZW50QnVzLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZpbHRlcldhcmVob3VzZTogRmlsdGVyV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZVdhcmVob3VzZTogU3RydWN0dXJlV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHJvd1NlbGVjdGlvblR5cGVBcmNoaXZlOiBSb3dTZWxlY3Rpb25UeXBlQXJjaGl2ZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVWZXJ0aWNhbEZvcm1hdGlvbldhcmVob3VzZTogVmVydGljYWxGb3JtYXRpb25XYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb25XYXJlaG91c2U6IENvbXBvc2l0aW9uV2FyZWhvdXNlKSB7XG5cdFx0c3VwZXIoY2hhbmdlRGV0ZWN0b3JSZWYsIGVsZW1lbnRSZWYpO1xuXHRcdHRoaXMuc3R5bGVNb2RpZmllciA9IG5ldyBTdHlsZU1vZGlmaWVyKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblxuXHRcdHRoaXMuaGVybWVzU3Vic2NyaWJlKFxuXHRcdFx0dGhpcy5yb3dTZWxlY3Rpb25UeXBlQXJjaGl2ZS5vbigpLFxuXHRcdFx0KHR5cGU6IFJvd1NlbGVjdGlvblR5cGUpID0+IHtcblx0XHRcdFx0dGhpcy5jaGVja2JveFNlbGVjdGlvbiA9IHR5cGUgPT09IFJvd1NlbGVjdGlvblR5cGUuQ0hFQ0tCT1g7XG5cdFx0XHR9XG5cdFx0KTtcblxuXHRcdHRoaXMuaGVybWVzU3Vic2NyaWJlKFxuXHRcdFx0dGhpcy5jb21wb3NpdGlvbldhcmVob3VzZS5vbkhlYWRlckNvbHVtbnModGhpcy5jb21wb3NpdGlvbklkKSxcblx0XHRcdChjb2x1bW5zOiBBcnJheTxDZWxsVGVtcGxhdGVXaXRoQ29udGV4dD4pID0+IHtcblx0XHRcdFx0dGhpcy5oZWFkZXJDb2x1bW5zID0gY29sdW1ucztcblx0XHRcdH1cblx0XHQpO1xuXG5cdFx0dGhpcy5oZXJtZXNTdWJzY3JpYmVXaXRob3V0UmVuZGVyKFxuXHRcdFx0dGhpcy5jb21wb3NpdGlvbldhcmVob3VzZS5vbkNvbnRhaW5lcldpZHRoKHRoaXMuY29tcG9zaXRpb25JZCksXG5cdFx0XHQod2lkdGg6IG51bWJlcikgPT4ge1xuXHRcdFx0XHR0aGlzLnN0eWxlTW9kaWZpZXIuZ2V0RWxlbWVudCh0aGlzLmNvbnRhaW5lclJlZi5uYXRpdmVFbGVtZW50KS5zZXRXaWR0aCh3aWR0aCk7XG5cdFx0XHR9XG5cdFx0KTtcblxuXHRcdHRoaXMuaGVybWVzU3Vic2NyaWJlKFxuXHRcdFx0dGhpcy5maWx0ZXJXYXJlaG91c2Uub25GaWx0ZXJpbmdFbmFibGVkKHRoaXMuc3RydWN0dXJlSWQpLFxuXHRcdFx0KGVuYWJsZWQ6IGJvb2xlYW4pID0+IHtcblx0XHRcdFx0dGhpcy5maWx0ZXJSb3dFbmFibGVkID0gZW5hYmxlZDtcblx0XHRcdH1cblx0XHQpO1xuXG5cdFx0dGhpcy5oZXJtZXNTdWJzY3JpYmUoXG5cdFx0XHR0aGlzLmNvbXBvc2l0aW9uV2FyZWhvdXNlLm9uR3JvdXBzKHRoaXMuY29tcG9zaXRpb25JZCksXG5cdFx0XHQoY29sbGVjdGlvbjogR3JvdXBDb2xsZWN0aW9uKSA9PiB7XG5cdFx0XHRcdHRoaXMuc2hvd0dyb3VwcyA9IGNvbGxlY3Rpb24uaXNWaXNpYmxlKCk7XG5cdFx0XHRcdHRoaXMuZ3JvdXBzID0gY29sbGVjdGlvbi5nZXRHcm91cHMoKTtcblx0XHRcdH1cblx0XHQpO1xuXHR9XG5cblx0bmdBZnRlclZpZXdJbml0KCkge1xuXHRcdHN1cGVyLm5nQWZ0ZXJWaWV3SW5pdCgpO1xuXG5cdFx0dGhpcy5oZXJtZXNTdWJzY3JpYmVXaXRob3V0UmVuZGVyKFxuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVWZXJ0aWNhbEZvcm1hdGlvbldhcmVob3VzZS5vblJvd0hlaWdodCh0aGlzLnN0cnVjdHVyZUlkKSxcblx0XHRcdChyb3dIZWlnaHQ6IG51bWJlcikgPT4ge1xuXG5cdFx0XHRcdGNvbnN0IGhlYWRlckhlaWdodCA9ICsocm93SGVpZ2h0KSArIDI7XG5cblx0XHRcdFx0aWYgKHRoaXMuZmlsdGVyc1JlZikge1xuXHRcdFx0XHRcdHRoaXMuc3R5bGVNb2RpZmllci5nZXRFbGVtZW50KHRoaXMuZmlsdGVyc1JlZi5uYXRpdmVFbGVtZW50KS5zZXRIZWlnaHQoaGVhZGVySGVpZ2h0KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdCk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktc3RydWN0dXJlLWhlYWRlcic7XG5cdH1cblxufVxuIl19