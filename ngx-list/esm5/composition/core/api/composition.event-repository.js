/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { DomainEventBus, EventRepository } from '@generic-ui/hermes';
/**
 * @abstract
 */
var CompositionEventRepository = /** @class */ (function (_super) {
    tslib_1.__extends(CompositionEventRepository, _super);
    function CompositionEventRepository(domainEventBus) {
        return _super.call(this, domainEventBus) || this;
    }
    CompositionEventRepository.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CompositionEventRepository.ctorParameters = function () { return [
        { type: DomainEventBus }
    ]; };
    return CompositionEventRepository;
}(EventRepository));
export { CompositionEventRepository };
if (false) {
    /**
     * @abstract
     * @param {?=} compositionId
     * @return {?}
     */
    CompositionEventRepository.prototype.onColumnsChanged = function (compositionId) { };
    /**
     * @abstract
     * @param {?=} compositionId
     * @return {?}
     */
    CompositionEventRepository.prototype.onContainerWidthChanged = function (compositionId) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uZXZlbnQtcmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsiY29tcG9zaXRpb24vY29yZS9hcGkvY29tcG9zaXRpb24uZXZlbnQtcmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQW9CLE1BQU0sb0JBQW9CLENBQUM7Ozs7QUFPdkY7SUFDeUQsc0RBQTBEO0lBRWxILG9DQUFzQixjQUE4QjtlQUNuRCxrQkFBTSxjQUFjLENBQUM7SUFDdEIsQ0FBQzs7Z0JBTEQsVUFBVTs7OztnQkFQRixjQUFjOztJQWtCdkIsaUNBQUM7Q0FBQSxBQVhELENBQ3lELGVBQWUsR0FVdkU7U0FWcUIsMEJBQTBCOzs7Ozs7O0lBTS9DLHFGQUFvSDs7Ozs7O0lBRXBILDRGQUF1RyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnRCdXMsIEV2ZW50UmVwb3NpdG9yeSwgSGVybWVzT2JzZXJ2YWJsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuL2NvbXBvc2l0aW9uLmlkJztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29sdW1uc1NldEV2ZW50IH0gZnJvbSAnLi4vZG9tYWluL2NvbHVtbi9zZXQtY29sdW1ucy9jb21wb3NpdGlvbi5jb2x1bW5zLXNldC5ldmVudCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvblJlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4vY29tcG9zaXRpb24ucmVhZC1tb2RlbC1yb290LWlkJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ29tcG9zaXRpb25FdmVudFJlcG9zaXRvcnkgZXh0ZW5kcyBFdmVudFJlcG9zaXRvcnk8Q29tcG9zaXRpb25SZWFkTW9kZWxSb290SWQsIENvbXBvc2l0aW9uSWQ+IHtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IoZG9tYWluRXZlbnRCdXM6IERvbWFpbkV2ZW50QnVzKSB7XG5cdFx0c3VwZXIoZG9tYWluRXZlbnRCdXMpO1xuXHR9XG5cblx0YWJzdHJhY3Qgb25Db2x1bW5zQ2hhbmdlZChjb21wb3NpdGlvbklkPzogQ29tcG9zaXRpb25SZWFkTW9kZWxSb290SWQpOiBIZXJtZXNPYnNlcnZhYmxlPENvbXBvc2l0aW9uQ29sdW1uc1NldEV2ZW50PjtcblxuXHRhYnN0cmFjdCBvbkNvbnRhaW5lcldpZHRoQ2hhbmdlZChjb21wb3NpdGlvbklkPzogQ29tcG9zaXRpb25SZWFkTW9kZWxSb290SWQpOiBIZXJtZXNPYnNlcnZhYmxlPG51bWJlcj47XG5cbn1cbiJdfQ==