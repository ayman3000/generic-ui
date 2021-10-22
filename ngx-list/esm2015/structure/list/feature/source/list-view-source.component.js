/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ViewEncapsulation } from '@angular/core';
import { SourceWarehouse } from '../../../source/core/api/source.warehouse';
import { SmartComponent } from '../../../../common/cdk/component/smart-component';
import { StructureId } from '../../../core/api/structure.id';
import { ListViewTemplateArchive } from './template/list-view-template.archive';
export class ListViewSourceComponent extends SmartComponent {
    /**
     * @param {?} changeDetectorRef
     * @param {?} elementRef
     * @param {?} structureId
     * @param {?} structureSourceWarehouse
     * @param {?} containerTemplateArchive
     */
    constructor(changeDetectorRef, elementRef, structureId, structureSourceWarehouse, containerTemplateArchive) {
        super(changeDetectorRef, elementRef);
        this.changeDetectorRef = changeDetectorRef;
        this.structureId = structureId;
        this.structureSourceWarehouse = structureSourceWarehouse;
        this.containerTemplateArchive = containerTemplateArchive;
        this.source = [];
        this.addClassToHost('gui-block');
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.hermesSubscribe(this.structureSourceWarehouse.onEntities(this.structureId), (/**
         * @param {?} items
         * @return {?}
         */
        (items) => {
            this.source = items.map((/**
             * @param {?} i
             * @return {?}
             */
            i => i.getSourceItem()));
        }));
        this.hermesSubscribe(this.containerTemplateArchive.on(), (/**
         * @param {?} template
         * @return {?}
         */
        (template) => {
            this.template = template;
        }));
    }
    /**
     * @protected
     * @return {?}
     */
    getSelectorName() {
        return 'gui-list-view-source';
    }
}
ListViewSourceComponent.decorators = [
    { type: Component, args: [{
                selector: 'div[gui-list-view-source]',
                template: "<div *ngFor=\"let element of source\"\n\t [item]=\"element\"\n\t [template]=\"template\"\n\t gui-list-view-item>\n</div>\n\n<div [items]=\"source\" gui-empty-source>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
ListViewSourceComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: StructureId },
    { type: SourceWarehouse },
    { type: ListViewTemplateArchive }
];
if (false) {
    /** @type {?} */
    ListViewSourceComponent.prototype.source;
    /** @type {?} */
    ListViewSourceComponent.prototype.template;
    /**
     * @type {?}
     * @private
     */
    ListViewSourceComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    ListViewSourceComponent.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    ListViewSourceComponent.prototype.structureSourceWarehouse;
    /**
     * @type {?}
     * @private
     */
    ListViewSourceComponent.prototype.containerTemplateArchive;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LXNvdXJjZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9saXN0L2ZlYXR1cmUvc291cmNlL2xpc3Qtdmlldy1zb3VyY2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBcUIsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEksT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUVsRixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFN0QsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFRaEYsTUFBTSxPQUFPLHVCQUF3QixTQUFRLGNBQWM7Ozs7Ozs7O0lBTTFELFlBQTZCLGlCQUFvQyxFQUM5RCxVQUFzQixFQUNMLFdBQXdCLEVBQ3hCLHdCQUF5QyxFQUN6Qyx3QkFBaUQ7UUFDcEUsS0FBSyxDQUFDLGlCQUFpQixFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBTFQsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUU3QyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4Qiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQWlCO1FBQ3pDLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBeUI7UUFSckUsV0FBTSxHQUFlLEVBQUUsQ0FBQztRQVV2QixJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Ozs7SUFFRCxRQUFRO1FBRVAsSUFBSSxDQUFDLGVBQWUsQ0FDbkIsSUFBSSxDQUFDLHdCQUF3QixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDOzs7O1FBQzFELENBQUMsS0FBd0IsRUFBRSxFQUFFO1lBQzVCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLEdBQUc7Ozs7WUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxhQUFhLEVBQUUsRUFBQyxDQUFDO1FBQ2pELENBQUMsRUFDRCxDQUFDO1FBRUYsSUFBSSxDQUFDLGVBQWUsQ0FDbkIsSUFBSSxDQUFDLHdCQUF3QixDQUFDLEVBQUUsRUFBRTs7OztRQUNsQyxDQUFDLFFBQTBCLEVBQUUsRUFBRTtZQUM5QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUMxQixDQUFDLEVBQ0QsQ0FBQztJQUNILENBQUM7Ozs7O0lBRVMsZUFBZTtRQUN4QixPQUFPLHNCQUFzQixDQUFDO0lBQy9CLENBQUM7OztZQXhDRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsMkxBQWdEO2dCQUNoRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDL0M7Ozs7WUFiaUMsaUJBQWlCO1lBQWEsVUFBVTtZQUlqRSxXQUFXO1lBSFgsZUFBZTtZQUtmLHVCQUF1Qjs7OztJQVUvQix5Q0FBd0I7O0lBRXhCLDJDQUEyQjs7Ozs7SUFFZixvREFBcUQ7Ozs7O0lBRTlELDhDQUF5Qzs7Ozs7SUFDekMsMkRBQTBEOzs7OztJQUMxRCwyREFBa0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25EZXN0cm95LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTb3VyY2VXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi9zb3VyY2UvY29yZS9hcGkvc291cmNlLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L3NtYXJ0LWNvbXBvbmVudCc7XG5pbXBvcnQgeyBJdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vc291cmNlL2NvcmUvZG9tYWluL2NvcmUvaXRlbS9pdGVtLmVudGl0eSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBMaXN0Vmlld1RlbXBsYXRlIH0gZnJvbSAnLi90ZW1wbGF0ZS9saXN0LXZpZXctdGVtcGxhdGUnO1xuaW1wb3J0IHsgTGlzdFZpZXdUZW1wbGF0ZUFyY2hpdmUgfSBmcm9tICcuL3RlbXBsYXRlL2xpc3Qtdmlldy10ZW1wbGF0ZS5hcmNoaXZlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZGl2W2d1aS1saXN0LXZpZXctc291cmNlXScsXG5cdHRlbXBsYXRlVXJsOiAnLi9saXN0LXZpZXctc291cmNlLmNvbXBvbmVudC5odG1sJyxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdTb3VyY2VDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuXHRzb3VyY2U6IEFycmF5PGFueT4gPSBbXTtcblxuXHR0ZW1wbGF0ZTogTGlzdFZpZXdUZW1wbGF0ZTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0ZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlU291cmNlV2FyZWhvdXNlOiBTb3VyY2VXYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29udGFpbmVyVGVtcGxhdGVBcmNoaXZlOiBMaXN0Vmlld1RlbXBsYXRlQXJjaGl2ZSkge1xuXHRcdHN1cGVyKGNoYW5nZURldGVjdG9yUmVmLCBlbGVtZW50UmVmKTtcblx0XHR0aGlzLmFkZENsYXNzVG9Ib3N0KCdndWktYmxvY2snKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXG5cdFx0dGhpcy5oZXJtZXNTdWJzY3JpYmUoXG5cdFx0XHR0aGlzLnN0cnVjdHVyZVNvdXJjZVdhcmVob3VzZS5vbkVudGl0aWVzKHRoaXMuc3RydWN0dXJlSWQpLFxuXHRcdFx0KGl0ZW1zOiBBcnJheTxJdGVtRW50aXR5PikgPT4ge1xuXHRcdFx0XHR0aGlzLnNvdXJjZSA9IGl0ZW1zLm1hcChpID0+IGkuZ2V0U291cmNlSXRlbSgpKTtcblx0XHRcdH1cblx0XHQpO1xuXG5cdFx0dGhpcy5oZXJtZXNTdWJzY3JpYmUoXG5cdFx0XHR0aGlzLmNvbnRhaW5lclRlbXBsYXRlQXJjaGl2ZS5vbigpLFxuXHRcdFx0KHRlbXBsYXRlOiBMaXN0Vmlld1RlbXBsYXRlKSA9PiB7XG5cdFx0XHRcdHRoaXMudGVtcGxhdGUgPSB0ZW1wbGF0ZTtcblx0XHRcdH1cblx0XHQpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLWxpc3Qtdmlldy1zb3VyY2UnO1xuXHR9XG59XG4iXX0=