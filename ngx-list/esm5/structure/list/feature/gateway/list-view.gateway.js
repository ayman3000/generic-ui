/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Input } from '@angular/core';
/**
 * @abstract
 */
var ListViewGateway = /** @class */ (function () {
    function ListViewGateway(structureId, sourceCommandService) {
        this.structureId = structureId;
        this.sourceCommandService = sourceCommandService;
    }
    /**
     * @param {?} simpleChanges
     * @return {?}
     */
    ListViewGateway.prototype.ngOnChanges = /**
     * @param {?} simpleChanges
     * @return {?}
     */
    function (simpleChanges) {
        /**
         * Setting source should be last step
         */
        if (simpleChanges.items) {
            this.sourceCommandService.setOrigin(this.items, this.structureId);
        }
    };
    ListViewGateway.propDecorators = {
        items: [{ type: Input }]
    };
    return ListViewGateway;
}());
export { ListViewGateway };
if (false) {
    /** @type {?} */
    ListViewGateway.prototype.items;
    /** @type {?} */
    ListViewGateway.prototype.structureId;
    /**
     * @type {?}
     * @protected
     */
    ListViewGateway.prototype.sourceCommandService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmdhdGV3YXkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9saXN0L2ZlYXR1cmUvZ2F0ZXdheS9saXN0LXZpZXcuZ2F0ZXdheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLEtBQUssRUFBNEIsTUFBTSxlQUFlLENBQUM7Ozs7QUFNaEU7SUFLQyx5QkFDaUIsV0FBd0IsRUFDckIsb0JBQTZDO1FBRGhELGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3JCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBeUI7SUFFakUsQ0FBQzs7Ozs7SUFFRCxxQ0FBVzs7OztJQUFYLFVBQVksYUFBNEI7UUFFdkM7O1dBRUc7UUFDSCxJQUFJLGFBQWEsQ0FBQyxLQUFLLEVBQUU7WUFDeEIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUNsRTtJQUNGLENBQUM7O3dCQWpCQSxLQUFLOztJQWtCUCxzQkFBQztDQUFBLEFBcEJELElBb0JDO1NBcEJxQixlQUFlOzs7SUFFcEMsZ0NBQ2tCOztJQUdqQixzQ0FBd0M7Ozs7O0lBQ3hDLCtDQUFnRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU291cmNlQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvc3RydWN0dXJlL2RvbWFpbi1hcGkvc291cmNlL3NvdXJjZS5jb21tYW5kLWRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuXG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBMaXN0Vmlld0dhdGV3YXkgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG5cdEBJbnB1dCgpXG5cdGl0ZW1zOiBBcnJheTxhbnk+O1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihcblx0XHRwdWJsaWMgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdHByb3RlY3RlZCByZWFkb25seSBzb3VyY2VDb21tYW5kU2VydmljZTogU291cmNlQ29tbWFuZERpc3BhdGNoZXJcblx0KSB7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhzaW1wbGVDaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG5cblx0XHQvKipcblx0XHQgKiBTZXR0aW5nIHNvdXJjZSBzaG91bGQgYmUgbGFzdCBzdGVwXG5cdFx0ICovXG5cdFx0aWYgKHNpbXBsZUNoYW5nZXMuaXRlbXMpIHtcblx0XHRcdHRoaXMuc291cmNlQ29tbWFuZFNlcnZpY2Uuc2V0T3JpZ2luKHRoaXMuaXRlbXMsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHRcdH1cblx0fVxufVxuIl19