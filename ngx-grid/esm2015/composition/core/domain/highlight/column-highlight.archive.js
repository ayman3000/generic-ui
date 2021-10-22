/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { AggregateArchive } from '@generic-ui/hermes';
import { ColumnHighlightManager } from './column-highlight.manager';
import { Injectable } from '@angular/core';
import { Override } from '../../../../common/cdk/decorators';
export class ColumnHighlightArchive extends AggregateArchive {
    constructor() {
        super(new ColumnHighlightManager());
    }
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    toggle(key, value) {
        this.get(key)
            .ifPresent((/**
         * @param {?} manager
         * @return {?}
         */
        (manager) => {
            manager.toggle(value);
            this.next(key, manager);
        }));
    }
    /**
     * @protected
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    equals(a, b) {
        return false;
    }
    /**
     * @protected
     * @param {?} defaultValue
     * @return {?}
     */
    createDefaultValue(defaultValue) {
        return new ColumnHighlightManager();
    }
}
ColumnHighlightArchive.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ColumnHighlightArchive.ctorParameters = () => [];
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [ColumnHighlightManager, ColumnHighlightManager]),
    tslib_1.__metadata("design:returntype", Boolean)
], ColumnHighlightArchive.prototype, "equals", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [ColumnHighlightManager]),
    tslib_1.__metadata("design:returntype", ColumnHighlightManager)
], ColumnHighlightArchive.prototype, "createDefaultValue", null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLWhpZ2hsaWdodC5hcmNoaXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJjb21wb3NpdGlvbi9jb3JlL2RvbWFpbi9oaWdobGlnaHQvY29sdW1uLWhpZ2hsaWdodC5hcmNoaXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdEQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFLN0QsTUFBTSxPQUFPLHNCQUF1QixTQUFRLGdCQUF3QztJQUVuRjtRQUNDLEtBQUssQ0FBQyxJQUFJLHNCQUFzQixFQUFFLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7Ozs7SUFFRCxNQUFNLENBQUMsR0FBa0IsRUFBRSxLQUFlO1FBQ3pDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO2FBQ1gsU0FBUzs7OztRQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDdEIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN6QixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7Ozs7SUFHUyxNQUFNLENBQUMsQ0FBeUIsRUFBRSxDQUF5QjtRQUNwRSxPQUFPLEtBQUssQ0FBQztJQUNkLENBQUM7Ozs7OztJQUdTLGtCQUFrQixDQUFDLFlBQW9DO1FBQ2hFLE9BQU8sSUFBSSxzQkFBc0IsRUFBRSxDQUFDO0lBQ3JDLENBQUM7OztZQXZCRCxVQUFVOzs7O0FBZ0JWO0lBREMsUUFBUTs7NkNBQ1csc0JBQXNCLEVBQUssc0JBQXNCOztvREFFcEU7QUFHRDtJQURDLFFBQVE7OzZDQUNrQyxzQkFBc0I7NENBQUcsc0JBQXNCO2dFQUV6RiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUFyY2hpdmUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgQ29sdW1uSGlnaGxpZ2h0TWFuYWdlciB9IGZyb20gJy4vY29sdW1uLWhpZ2hsaWdodC5tYW5hZ2VyJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE92ZXJyaWRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9kZWNvcmF0b3JzJztcbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi8uLi9hcGkvY29tcG9zaXRpb24uaWQnO1xuaW1wb3J0IHsgQ29sdW1uSWQgfSBmcm9tICcuLi8uLi9hcGkvY29sdW1uL2NvbHVtbi5pZCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb2x1bW5IaWdobGlnaHRBcmNoaXZlIGV4dGVuZHMgQWdncmVnYXRlQXJjaGl2ZTxDb2x1bW5IaWdobGlnaHRNYW5hZ2VyPiB7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIobmV3IENvbHVtbkhpZ2hsaWdodE1hbmFnZXIoKSk7XG5cdH1cblxuXHR0b2dnbGUoa2V5OiBDb21wb3NpdGlvbklkLCB2YWx1ZTogQ29sdW1uSWQpIHtcblx0XHR0aGlzLmdldChrZXkpXG5cdFx0XHQuaWZQcmVzZW50KChtYW5hZ2VyKSA9PiB7XG5cdFx0XHRcdG1hbmFnZXIudG9nZ2xlKHZhbHVlKTtcblx0XHRcdFx0dGhpcy5uZXh0KGtleSwgbWFuYWdlcik7XG5cdFx0XHR9KTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRwcm90ZWN0ZWQgZXF1YWxzKGE6IENvbHVtbkhpZ2hsaWdodE1hbmFnZXIsIGI6IENvbHVtbkhpZ2hsaWdodE1hbmFnZXIpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0cHJvdGVjdGVkIGNyZWF0ZURlZmF1bHRWYWx1ZShkZWZhdWx0VmFsdWU6IENvbHVtbkhpZ2hsaWdodE1hbmFnZXIpOiBDb2x1bW5IaWdobGlnaHRNYW5hZ2VyIHtcblx0XHRyZXR1cm4gbmV3IENvbHVtbkhpZ2hsaWdodE1hbmFnZXIoKTtcblx0fVxuXG59XG4iXX0=