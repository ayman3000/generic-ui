/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ViewEncapsulation } from '@angular/core';
import { SourceWarehouse } from '../../../source/core/api/source.warehouse';
import { SmartComponent } from '../../../../common/cdk/component/smart-component';
import { StructureId } from '../../../core/api/structure.id';
import { ListViewCardTemplateArchive } from './template/list-view.card-template.archive';
var ListViewContainerCardComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ListViewContainerCardComponent, _super);
    function ListViewContainerCardComponent(changeDetectorRef, elementRef, structureId, structureSourceWarehouse, listCardTemplateArchive) {
        var _this = _super.call(this, changeDetectorRef, elementRef) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.structureId = structureId;
        _this.structureSourceWarehouse = structureSourceWarehouse;
        _this.listCardTemplateArchive = listCardTemplateArchive;
        _this.items = [];
        _this.addClassToHost('gui-flex');
        _this.addClassToHost('gui-flex-wrap');
        _this.addClassToHost('gui-m-0');
        _this.addClassToHost('gui-p-0');
        _this.addClassToHost('gui-rounded');
        return _this;
    }
    /**
     * @return {?}
     */
    ListViewContainerCardComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.hermesSubscribe(this.structureSourceWarehouse.onEntities(this.structureId), (/**
         * @param {?} items
         * @return {?}
         */
        function (items) {
            _this.items = items.map((/**
             * @param {?} i
             * @return {?}
             */
            function (i) { return i.getSourceItem(); }));
        }));
        this.hermesSubscribe(this.listCardTemplateArchive.on(), (/**
         * @param {?} template
         * @return {?}
         */
        function (template) {
            _this.cardTemplate = template;
            _this.changeDetectorRef.detectChanges();
        }));
    };
    /**
     * @protected
     * @return {?}
     */
    ListViewContainerCardComponent.prototype.getSelectorName = /**
     * @protected
     * @return {?}
     */
    function () {
        return 'gui-list-container-card';
    };
    ListViewContainerCardComponent.decorators = [
        { type: Component, args: [{
                    selector: 'div[gui-list-container-card]',
                    template: "<div *ngFor=\"let element of items\" [item]=\"element\"\n\t [template]=\"cardTemplate\"\n\t gui-list-card-item>\n</div>\n\n<div [items]=\"items\" gui-empty-source>\n</div>\n",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    ListViewContainerCardComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: StructureId },
        { type: SourceWarehouse },
        { type: ListViewCardTemplateArchive }
    ]; };
    return ListViewContainerCardComponent;
}(SmartComponent));
export { ListViewContainerCardComponent };
if (false) {
    /** @type {?} */
    ListViewContainerCardComponent.prototype.items;
    /** @type {?} */
    ListViewContainerCardComponent.prototype.cardTemplate;
    /**
     * @type {?}
     * @private
     */
    ListViewContainerCardComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    ListViewContainerCardComponent.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    ListViewContainerCardComponent.prototype.structureSourceWarehouse;
    /**
     * @type {?}
     * @private
     */
    ListViewContainerCardComponent.prototype.listCardTemplateArchive;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmNvbnRhaW5lci1jYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2xpc3QvZmVhdHVyZS9jYXJkL2xpc3Qtdmlldy5jb250YWluZXItY2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBcUIsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFeEksT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUVsRixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFN0QsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFJekY7SUFNb0QsMERBQWM7SUFNakUsd0NBQTZCLGlCQUFvQyxFQUM5RCxVQUFzQixFQUNMLFdBQXdCLEVBQ3hCLHdCQUF5QyxFQUN6Qyx1QkFBb0Q7UUFKeEUsWUFLQyxrQkFBTSxpQkFBaUIsRUFBRSxVQUFVLENBQUMsU0FRcEM7UUFiNEIsdUJBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUU3QyxpQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4Qiw4QkFBd0IsR0FBeEIsd0JBQXdCLENBQWlCO1FBQ3pDLDZCQUF1QixHQUF2Qix1QkFBdUIsQ0FBNkI7UUFSeEUsV0FBSyxHQUFlLEVBQUUsQ0FBQztRQVd0QixLQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2hDLEtBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDckMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMvQixLQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQy9CLEtBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUM7O0lBRXBDLENBQUM7Ozs7SUFFRCxpREFBUTs7O0lBQVI7UUFBQSxpQkFnQkM7UUFkQSxJQUFJLENBQUMsZUFBZSxDQUNuQixJQUFJLENBQUMsd0JBQXdCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7Ozs7UUFDMUQsVUFBQyxLQUF3QjtZQUN4QixLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxHQUFHOzs7O1lBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsYUFBYSxFQUFFLEVBQWpCLENBQWlCLEVBQUMsQ0FBQztRQUNoRCxDQUFDLEVBQ0QsQ0FBQztRQUVGLElBQUksQ0FBQyxlQUFlLENBQ25CLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLEVBQUU7Ozs7UUFDakMsVUFBQyxRQUE4QjtZQUM5QixLQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQztZQUM3QixLQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEMsQ0FBQyxFQUNELENBQUM7SUFDSCxDQUFDOzs7OztJQUVTLHdEQUFlOzs7O0lBQXpCO1FBQ0MsT0FBTyx5QkFBeUIsQ0FBQztJQUNsQyxDQUFDOztnQkEvQ0QsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSw4QkFBOEI7b0JBQ3hDLHlMQUF3RDtvQkFDeEQsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUMvQzs7OztnQkFoQmlDLGlCQUFpQjtnQkFBYSxVQUFVO2dCQUtqRSxXQUFXO2dCQUhYLGVBQWU7Z0JBS2YsMkJBQTJCOztJQXFEcEMscUNBQUM7Q0FBQSxBQWpERCxDQU1vRCxjQUFjLEdBMkNqRTtTQTNDWSw4QkFBOEI7OztJQUUxQywrQ0FBdUI7O0lBRXZCLHNEQUFtQzs7Ozs7SUFFdkIsMkRBQXFEOzs7OztJQUU5RCxxREFBeUM7Ozs7O0lBQ3pDLGtFQUEwRDs7Ozs7SUFDMUQsaUVBQXFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uRGVzdHJveSwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTb3VyY2VXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi9zb3VyY2UvY29yZS9hcGkvc291cmNlLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L3NtYXJ0LWNvbXBvbmVudCc7XG5pbXBvcnQgeyBJdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vc291cmNlL2NvcmUvZG9tYWluL2NvcmUvaXRlbS9pdGVtLmVudGl0eSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBMaXN0Vmlld0NhcmRUZW1wbGF0ZSB9IGZyb20gJy4vdGVtcGxhdGUvbGlzdC12aWV3LmNhcmQtdGVtcGxhdGUnO1xuaW1wb3J0IHsgTGlzdFZpZXdDYXJkVGVtcGxhdGVBcmNoaXZlIH0gZnJvbSAnLi90ZW1wbGF0ZS9saXN0LXZpZXcuY2FyZC10ZW1wbGF0ZS5hcmNoaXZlJztcbmltcG9ydCB7IFN0cmVhbUNsb3NlciB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvcmVhY3RpdmUvc3RyZWFtLWNsb3Nlcic7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZGl2W2d1aS1saXN0LWNvbnRhaW5lci1jYXJkXScsXG5cdHRlbXBsYXRlVXJsOiAnLi9saXN0LXZpZXcuY29udGFpbmVyLWNhcmQuY29tcG9uZW50Lmh0bWwnLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBMaXN0Vmlld0NvbnRhaW5lckNhcmRDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0aXRlbXM6IEFycmF5PGFueT4gPSBbXTtcblxuXHRjYXJkVGVtcGxhdGU6IExpc3RWaWV3Q2FyZFRlbXBsYXRlO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVTb3VyY2VXYXJlaG91c2U6IFNvdXJjZVdhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBsaXN0Q2FyZFRlbXBsYXRlQXJjaGl2ZTogTGlzdFZpZXdDYXJkVGVtcGxhdGVBcmNoaXZlKSB7XG5cdFx0c3VwZXIoY2hhbmdlRGV0ZWN0b3JSZWYsIGVsZW1lbnRSZWYpO1xuXG5cdFx0dGhpcy5hZGRDbGFzc1RvSG9zdCgnZ3VpLWZsZXgnKTtcblx0XHR0aGlzLmFkZENsYXNzVG9Ib3N0KCdndWktZmxleC13cmFwJyk7XG5cdFx0dGhpcy5hZGRDbGFzc1RvSG9zdCgnZ3VpLW0tMCcpO1xuXHRcdHRoaXMuYWRkQ2xhc3NUb0hvc3QoJ2d1aS1wLTAnKTtcblx0XHR0aGlzLmFkZENsYXNzVG9Ib3N0KCdndWktcm91bmRlZCcpO1xuXG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblxuXHRcdHRoaXMuaGVybWVzU3Vic2NyaWJlKFxuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVTb3VyY2VXYXJlaG91c2Uub25FbnRpdGllcyh0aGlzLnN0cnVjdHVyZUlkKSxcblx0XHRcdChpdGVtczogQXJyYXk8SXRlbUVudGl0eT4pID0+IHtcblx0XHRcdFx0dGhpcy5pdGVtcyA9IGl0ZW1zLm1hcChpID0+IGkuZ2V0U291cmNlSXRlbSgpKTtcblx0XHRcdH1cblx0XHQpO1xuXG5cdFx0dGhpcy5oZXJtZXNTdWJzY3JpYmUoXG5cdFx0XHR0aGlzLmxpc3RDYXJkVGVtcGxhdGVBcmNoaXZlLm9uKCksXG5cdFx0XHQodGVtcGxhdGU6IExpc3RWaWV3Q2FyZFRlbXBsYXRlKSA9PiB7XG5cdFx0XHRcdHRoaXMuY2FyZFRlbXBsYXRlID0gdGVtcGxhdGU7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fVxuXHRcdCk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktbGlzdC1jb250YWluZXItY2FyZCc7XG5cdH1cblxufVxuIl19