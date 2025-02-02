import { ReactiveService } from '../../../common/reactive.service';
import { hermesFilter } from '../../../common/stream/operator/hermes.filter';
export class EventRepository extends ReactiveService {
    constructor(domainEventBus) {
        super();
        this.domainEventBus = domainEventBus;
    }
    onEvent(aggregateId, eventType) {
        return this.domainEventBus
            .ofEvents([
            eventType
        ])
            .pipe(hermesFilter((event) => event.getAggregateId().toString() === aggregateId.toString()));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQucmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktaGVybWVzL3NyYy9jb3JlL2FwaS9ldmVudC9ldmVudC5yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNuRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFHN0UsTUFBTSxPQUFnQixlQUFrRSxTQUFRLGVBQWU7SUFFOUcsWUFBdUMsY0FBOEI7UUFDcEUsS0FBSyxFQUFFLENBQUM7UUFEOEIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0lBRXJFLENBQUM7SUFFUyxPQUFPLENBQUMsV0FBYyxFQUFFLFNBQStCO1FBRWhFLE9BQU8sSUFBSSxDQUFDLGNBQWM7YUFDcEIsUUFBUSxDQUFDO1lBQ1IsU0FBZ0I7U0FDaEIsQ0FDRDthQUNBLElBQUksQ0FDSixZQUFZLENBQUMsQ0FBQyxLQUErQixFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUMsUUFBUSxFQUFFLEtBQUssV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQy9HLENBQUM7SUFDUixDQUFDO0NBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnLi4vLi4vZG9tYWluL3RhY3RpY2FsL2FnZ3JlZ2F0ZS9hZ2dyZWdhdGUtaWQnO1xuaW1wb3J0IHsgRG9tYWluRXZlbnQgfSBmcm9tICcuLi8uLi9kb21haW4vZXZlbnQvZG9tYWluLWV2ZW50JztcbmltcG9ydCB7IFJlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4uL3JlYWQvcmVhZC1tb2RlbC1yb290LWlkJztcbmltcG9ydCB7IERvbWFpbkV2ZW50QnVzIH0gZnJvbSAnLi4vLi4vZG9tYWluL2V2ZW50L2RvbWFpbi1ldmVudC5idXMnO1xuaW1wb3J0IHsgUmVhY3RpdmVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3JlYWN0aXZlLnNlcnZpY2UnO1xuaW1wb3J0IHsgaGVybWVzRmlsdGVyIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3N0cmVhbS9vcGVyYXRvci9oZXJtZXMuZmlsdGVyJztcbmltcG9ydCB7IEhlcm1lc09ic2VydmFibGUgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc3RyZWFtL29ic2VydmFibGUvaGVybWVzLm9ic2VydmFibGUnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRXZlbnRSZXBvc2l0b3J5PFIgZXh0ZW5kcyBSZWFkTW9kZWxSb290SWQsIEkgZXh0ZW5kcyBBZ2dyZWdhdGVJZD4gZXh0ZW5kcyBSZWFjdGl2ZVNlcnZpY2Uge1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGRvbWFpbkV2ZW50QnVzOiBEb21haW5FdmVudEJ1cykge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgb25FdmVudChhZ2dyZWdhdGVJZDogUiwgZXZlbnRUeXBlOiBUeXBlPERvbWFpbkV2ZW50PEk+Pik6IEhlcm1lc09ic2VydmFibGU8RG9tYWluRXZlbnQ8YW55Pj4ge1xuXG5cdFx0cmV0dXJuIHRoaXMuZG9tYWluRXZlbnRCdXNcblx0XHRcdFx0ICAgLm9mRXZlbnRzKFtcblx0XHRcdFx0XHRcdCAgIGV2ZW50VHlwZSBhcyBhbnlcblx0XHRcdFx0XHQgICBdXG5cdFx0XHRcdCAgIClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgaGVybWVzRmlsdGVyKChldmVudDogRG9tYWluRXZlbnQ8QWdncmVnYXRlSWQ+KSA9PiBldmVudC5nZXRBZ2dyZWdhdGVJZCgpLnRvU3RyaW5nKCkgPT09IGFnZ3JlZ2F0ZUlkLnRvU3RyaW5nKCkpXG5cdFx0XHRcdCAgICk7XG5cdH1cbn1cbiJdfQ==