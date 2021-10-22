/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { OriginSetEvent } from './origin/set-origin/origin-set.event';
import { StructureSourceItemEditedEvent } from './origin/edit/structure.source-item-edited.event';
import { StructureSummariesChangedEvent } from '../../../summaries/core/domain/structure.summaries-changed.event';
import { StructurePreparedEntitiesSetEvent } from './prepared/structure.prepared-entities-set.event';
export class SourceDomainEventPublisher {
    /**
     * @param {?} domainEventPublisher
     */
    constructor(domainEventPublisher) {
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @param {?} events
     * @return {?}
     */
    publish(events) {
        events.forEach((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            this.publishEvent(event);
        }));
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    publishEvent(event) {
        if (event.getType() === 'StructureOriginChangedAggregateEvent') {
            /** @type {?} */
            const structureOriginChangedAggregateEvent = ((/** @type {?} */ (event)));
            /** @type {?} */
            const domainEvent = new OriginSetEvent(structureOriginChangedAggregateEvent.getAggregateId(), structureOriginChangedAggregateEvent.getOrigin());
            this.domainEventPublisher.publish(domainEvent);
        }
        if (event.getType() === 'StructureSourceItemEditedAggregateEvent') {
            /** @type {?} */
            const structureSourceItemEditedAggregateEvent = ((/** @type {?} */ (event)));
            /** @type {?} */
            const domainEvent = new StructureSourceItemEditedEvent(structureSourceItemEditedAggregateEvent.getAggregateId(), structureSourceItemEditedAggregateEvent.getBeforeItem(), structureSourceItemEditedAggregateEvent.getAfterItem());
            this.domainEventPublisher.publish(domainEvent);
        }
        if (event.getType() === 'StructureSummariesChangedAggregateEvent') {
            /** @type {?} */
            const structureSummariesChangedAggregateEvent = ((/** @type {?} */ (event)));
            /** @type {?} */
            const domainEvent = new StructureSummariesChangedEvent(structureSummariesChangedAggregateEvent.getAggregateId(), structureSummariesChangedAggregateEvent.getSummaries());
            this.domainEventPublisher.publish(domainEvent);
        }
        if (event.getType() === 'StructurePreparedEntitiesSetAggregateEvent') {
            /** @type {?} */
            const structurePreparedEntitiesSetAggregateEvent = ((/** @type {?} */ (event)));
            /** @type {?} */
            const domainEvent = new StructurePreparedEntitiesSetEvent(structurePreparedEntitiesSetAggregateEvent.getAggregateId(), structurePreparedEntitiesSetAggregateEvent.getPreparedItems());
            this.domainEventPublisher.publish(domainEvent);
        }
        if (event.getType() === 'UniqueFilterCalculatedAggregateEvent') {
            /** @type {?} */
            const uniqueFilterCalculatedAggregateEvent = ((/** @type {?} */ (event)));
            /** @type {?} */
            const domainEvent = uniqueFilterCalculatedAggregateEvent.toDomainEvent();
            this.domainEventPublisher.publish(domainEvent);
        }
    }
}
SourceDomainEventPublisher.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SourceDomainEventPublisher.ctorParameters = () => [
    { type: DomainEventPublisher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SourceDomainEventPublisher.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLmRvbWFpbi1ldmVudC5wdWJsaXNoZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3VyY2UvY29yZS9kb21haW4vc291cmNlLmRvbWFpbi1ldmVudC5wdWJsaXNoZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFrQixvQkFBb0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRzFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUV0RSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUlsRyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxrRUFBa0UsQ0FBQztBQUVsSCxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQU1yRyxNQUFNLE9BQU8sMEJBQTBCOzs7O0lBRXRDLFlBQW9CLG9CQUEwQztRQUExQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO0lBQzlELENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLE1BQWtEO1FBRXpELE1BQU0sQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUN4QixJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFCLENBQUMsRUFBQyxDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRU8sWUFBWSxDQUFDLEtBQWtDO1FBRXRELElBQUksS0FBSyxDQUFDLE9BQU8sRUFBRSxLQUFLLHNDQUFzQyxFQUFFOztrQkFFekQsb0NBQW9DLEdBQUcsQ0FBQyxtQkFBQSxLQUFLLEVBQXdDLENBQUM7O2tCQUV0RixXQUFXLEdBQUcsSUFBSSxjQUFjLENBQUMsb0NBQW9DLENBQUMsY0FBYyxFQUFFLEVBQUUsb0NBQW9DLENBQUMsU0FBUyxFQUFFLENBQUM7WUFFL0ksSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUMvQztRQUVELElBQUksS0FBSyxDQUFDLE9BQU8sRUFBRSxLQUFLLHlDQUF5QyxFQUFFOztrQkFFNUQsdUNBQXVDLEdBQUcsQ0FBQyxtQkFBQSxLQUFLLEVBQTJDLENBQUM7O2tCQUU1RixXQUFXLEdBQUcsSUFBSSw4QkFBOEIsQ0FDckQsdUNBQXVDLENBQUMsY0FBYyxFQUFFLEVBQ3hELHVDQUF1QyxDQUFDLGFBQWEsRUFBRSxFQUN2RCx1Q0FBdUMsQ0FBQyxZQUFZLEVBQUUsQ0FDdEQ7WUFFRCxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQy9DO1FBRUQsSUFBSSxLQUFLLENBQUMsT0FBTyxFQUFFLEtBQUsseUNBQXlDLEVBQUU7O2tCQUU1RCx1Q0FBdUMsR0FBRyxDQUFDLG1CQUFBLEtBQUssRUFBMkMsQ0FBQzs7a0JBRTVGLFdBQVcsR0FBRyxJQUFJLDhCQUE4QixDQUNyRCx1Q0FBdUMsQ0FBQyxjQUFjLEVBQUUsRUFDeEQsdUNBQXVDLENBQUMsWUFBWSxFQUFFLENBQ3REO1lBRUQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUUvQztRQUVELElBQUksS0FBSyxDQUFDLE9BQU8sRUFBRSxLQUFLLDRDQUE0QyxFQUFFOztrQkFFL0QsMENBQTBDLEdBQUcsQ0FBQyxtQkFBQSxLQUFLLEVBQThDLENBQUM7O2tCQUVsRyxXQUFXLEdBQUcsSUFBSSxpQ0FBaUMsQ0FDeEQsMENBQTBDLENBQUMsY0FBYyxFQUFFLEVBQzNELDBDQUEwQyxDQUFDLGdCQUFnQixFQUFFLENBQzdEO1lBRUQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUMvQztRQUVELElBQUksS0FBSyxDQUFDLE9BQU8sRUFBRSxLQUFLLHNDQUFzQyxFQUFFOztrQkFFekQsb0NBQW9DLEdBQUcsQ0FBQyxtQkFBQSxLQUFLLEVBQXdDLENBQUM7O2tCQUV0RixXQUFXLEdBQUcsb0NBQW9DLENBQUMsYUFBYSxFQUFFO1lBRXhFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDL0M7SUFDRixDQUFDOzs7WUF0RUQsVUFBVTs7OztZQWhCYyxvQkFBb0I7Ozs7Ozs7SUFtQmhDLDBEQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWdncmVnYXRlRXZlbnQsIERvbWFpbkV2ZW50UHVibGlzaGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlT3JpZ2luQ2hhbmdlZEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi9vcmlnaW4vc3RydWN0dXJlLm9yaWdpbi1jaGFuZ2VkLmFnZ3JlZ2F0ZS1ldmVudCc7XG5pbXBvcnQgeyBPcmlnaW5TZXRFdmVudCB9IGZyb20gJy4vb3JpZ2luL3NldC1vcmlnaW4vb3JpZ2luLXNldC5ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTb3VyY2VJdGVtRWRpdGVkQWdncmVnYXRlRXZlbnQgfSBmcm9tICcuL29yaWdpbi9lZGl0L3N0cnVjdHVyZS5zb3VyY2UtaXRlbS1lZGl0ZWQuYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZVNvdXJjZUl0ZW1FZGl0ZWRFdmVudCB9IGZyb20gJy4vb3JpZ2luL2VkaXQvc3RydWN0dXJlLnNvdXJjZS1pdGVtLWVkaXRlZC5ldmVudCc7XG5pbXBvcnQge1xuXHRTdHJ1Y3R1cmVTdW1tYXJpZXNDaGFuZ2VkQWdncmVnYXRlRXZlbnRcbn0gZnJvbSAnLi4vLi4vLi4vc3VtbWFyaWVzL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5zdW1tYXJpZXMtY2hhbmdlZC5hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlU3VtbWFyaWVzQ2hhbmdlZEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vc3VtbWFyaWVzL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5zdW1tYXJpZXMtY2hhbmdlZC5ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVQcmVwYXJlZEVudGl0aWVzU2V0QWdncmVnYXRlRXZlbnQgfSBmcm9tICcuL3ByZXBhcmVkL3N0cnVjdHVyZS5wcmVwYXJlZC1lbnRpdGllcy1zZXQuYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZVByZXBhcmVkRW50aXRpZXNTZXRFdmVudCB9IGZyb20gJy4vcHJlcGFyZWQvc3RydWN0dXJlLnByZXBhcmVkLWVudGl0aWVzLXNldC5ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBVbmlxdWVGaWx0ZXJDYWxjdWxhdGVkQWdncmVnYXRlRXZlbnQgfSBmcm9tICcuLi8uLi8uLi9maWx0ZXIvY29yZS9kb21haW4vdW5pcXVlL2NhbGN1bGF0ZS91bmlxdWUtZmlsdGVyLWNhbGN1bGF0ZWQuYWdncmVnYXRlLWV2ZW50JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU291cmNlRG9tYWluRXZlbnRQdWJsaXNoZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZG9tYWluRXZlbnRQdWJsaXNoZXI6IERvbWFpbkV2ZW50UHVibGlzaGVyKSB7XG5cdH1cblxuXHRwdWJsaXNoKGV2ZW50czogUmVhZG9ubHlBcnJheTxBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4+KTogdm9pZCB7XG5cblx0XHRldmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IHtcblx0XHRcdHRoaXMucHVibGlzaEV2ZW50KGV2ZW50KTtcblx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgcHVibGlzaEV2ZW50KGV2ZW50OiBBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4pOiB2b2lkIHtcblxuXHRcdGlmIChldmVudC5nZXRUeXBlKCkgPT09ICdTdHJ1Y3R1cmVPcmlnaW5DaGFuZ2VkQWdncmVnYXRlRXZlbnQnKSB7XG5cblx0XHRcdGNvbnN0IHN0cnVjdHVyZU9yaWdpbkNoYW5nZWRBZ2dyZWdhdGVFdmVudCA9IChldmVudCBhcyBTdHJ1Y3R1cmVPcmlnaW5DaGFuZ2VkQWdncmVnYXRlRXZlbnQpO1xuXG5cdFx0XHRjb25zdCBkb21haW5FdmVudCA9IG5ldyBPcmlnaW5TZXRFdmVudChzdHJ1Y3R1cmVPcmlnaW5DaGFuZ2VkQWdncmVnYXRlRXZlbnQuZ2V0QWdncmVnYXRlSWQoKSwgc3RydWN0dXJlT3JpZ2luQ2hhbmdlZEFnZ3JlZ2F0ZUV2ZW50LmdldE9yaWdpbigpKTtcblxuXHRcdFx0dGhpcy5kb21haW5FdmVudFB1Ymxpc2hlci5wdWJsaXNoKGRvbWFpbkV2ZW50KTtcblx0XHR9XG5cblx0XHRpZiAoZXZlbnQuZ2V0VHlwZSgpID09PSAnU3RydWN0dXJlU291cmNlSXRlbUVkaXRlZEFnZ3JlZ2F0ZUV2ZW50Jykge1xuXG5cdFx0XHRjb25zdCBzdHJ1Y3R1cmVTb3VyY2VJdGVtRWRpdGVkQWdncmVnYXRlRXZlbnQgPSAoZXZlbnQgYXMgU3RydWN0dXJlU291cmNlSXRlbUVkaXRlZEFnZ3JlZ2F0ZUV2ZW50KTtcblxuXHRcdFx0Y29uc3QgZG9tYWluRXZlbnQgPSBuZXcgU3RydWN0dXJlU291cmNlSXRlbUVkaXRlZEV2ZW50KFxuXHRcdFx0XHRzdHJ1Y3R1cmVTb3VyY2VJdGVtRWRpdGVkQWdncmVnYXRlRXZlbnQuZ2V0QWdncmVnYXRlSWQoKSxcblx0XHRcdFx0c3RydWN0dXJlU291cmNlSXRlbUVkaXRlZEFnZ3JlZ2F0ZUV2ZW50LmdldEJlZm9yZUl0ZW0oKSxcblx0XHRcdFx0c3RydWN0dXJlU291cmNlSXRlbUVkaXRlZEFnZ3JlZ2F0ZUV2ZW50LmdldEFmdGVySXRlbSgpXG5cdFx0XHQpO1xuXG5cdFx0XHR0aGlzLmRvbWFpbkV2ZW50UHVibGlzaGVyLnB1Ymxpc2goZG9tYWluRXZlbnQpO1xuXHRcdH1cblxuXHRcdGlmIChldmVudC5nZXRUeXBlKCkgPT09ICdTdHJ1Y3R1cmVTdW1tYXJpZXNDaGFuZ2VkQWdncmVnYXRlRXZlbnQnKSB7XG5cblx0XHRcdGNvbnN0IHN0cnVjdHVyZVN1bW1hcmllc0NoYW5nZWRBZ2dyZWdhdGVFdmVudCA9IChldmVudCBhcyBTdHJ1Y3R1cmVTdW1tYXJpZXNDaGFuZ2VkQWdncmVnYXRlRXZlbnQpO1xuXG5cdFx0XHRjb25zdCBkb21haW5FdmVudCA9IG5ldyBTdHJ1Y3R1cmVTdW1tYXJpZXNDaGFuZ2VkRXZlbnQoXG5cdFx0XHRcdHN0cnVjdHVyZVN1bW1hcmllc0NoYW5nZWRBZ2dyZWdhdGVFdmVudC5nZXRBZ2dyZWdhdGVJZCgpLFxuXHRcdFx0XHRzdHJ1Y3R1cmVTdW1tYXJpZXNDaGFuZ2VkQWdncmVnYXRlRXZlbnQuZ2V0U3VtbWFyaWVzKClcblx0XHRcdCk7XG5cblx0XHRcdHRoaXMuZG9tYWluRXZlbnRQdWJsaXNoZXIucHVibGlzaChkb21haW5FdmVudCk7XG5cblx0XHR9XG5cblx0XHRpZiAoZXZlbnQuZ2V0VHlwZSgpID09PSAnU3RydWN0dXJlUHJlcGFyZWRFbnRpdGllc1NldEFnZ3JlZ2F0ZUV2ZW50Jykge1xuXG5cdFx0XHRjb25zdCBzdHJ1Y3R1cmVQcmVwYXJlZEVudGl0aWVzU2V0QWdncmVnYXRlRXZlbnQgPSAoZXZlbnQgYXMgU3RydWN0dXJlUHJlcGFyZWRFbnRpdGllc1NldEFnZ3JlZ2F0ZUV2ZW50KTtcblxuXHRcdFx0Y29uc3QgZG9tYWluRXZlbnQgPSBuZXcgU3RydWN0dXJlUHJlcGFyZWRFbnRpdGllc1NldEV2ZW50KFxuXHRcdFx0XHRzdHJ1Y3R1cmVQcmVwYXJlZEVudGl0aWVzU2V0QWdncmVnYXRlRXZlbnQuZ2V0QWdncmVnYXRlSWQoKSxcblx0XHRcdFx0c3RydWN0dXJlUHJlcGFyZWRFbnRpdGllc1NldEFnZ3JlZ2F0ZUV2ZW50LmdldFByZXBhcmVkSXRlbXMoKVxuXHRcdFx0KTtcblxuXHRcdFx0dGhpcy5kb21haW5FdmVudFB1Ymxpc2hlci5wdWJsaXNoKGRvbWFpbkV2ZW50KTtcblx0XHR9XG5cblx0XHRpZiAoZXZlbnQuZ2V0VHlwZSgpID09PSAnVW5pcXVlRmlsdGVyQ2FsY3VsYXRlZEFnZ3JlZ2F0ZUV2ZW50Jykge1xuXG5cdFx0XHRjb25zdCB1bmlxdWVGaWx0ZXJDYWxjdWxhdGVkQWdncmVnYXRlRXZlbnQgPSAoZXZlbnQgYXMgVW5pcXVlRmlsdGVyQ2FsY3VsYXRlZEFnZ3JlZ2F0ZUV2ZW50KTtcblxuXHRcdFx0Y29uc3QgZG9tYWluRXZlbnQgPSB1bmlxdWVGaWx0ZXJDYWxjdWxhdGVkQWdncmVnYXRlRXZlbnQudG9Eb21haW5FdmVudCgpO1xuXG5cdFx0XHR0aGlzLmRvbWFpbkV2ZW50UHVibGlzaGVyLnB1Ymxpc2goZG9tYWluRXZlbnQpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=