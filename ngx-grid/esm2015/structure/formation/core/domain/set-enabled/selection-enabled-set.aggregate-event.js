import { SelectionEnabledSetEvent } from './selection-enabled-set.event';
import { StructureAggregateEvent } from '../../../../core/domain/structure.aggregate-event';
export class SelectionEnabledSetAggregateEvent extends StructureAggregateEvent {
    constructor(structureId, enabled) {
        super(structureId, 'SelectionEnabledSetAggregateEvent');
        this.enabled = enabled;
    }
    toDomainEvent() {
        return new SelectionEnabledSetEvent(this.getAggregateId(), this.enabled);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0aW9uLWVuYWJsZWQtc2V0LmFnZ3JlZ2F0ZS1ldmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvc3RydWN0dXJlL2Zvcm1hdGlvbi9jb3JlL2RvbWFpbi9zZXQtZW5hYmxlZC9zZWxlY3Rpb24tZW5hYmxlZC1zZXQuYWdncmVnYXRlLWV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBRTVGLE1BQU0sT0FBTyxpQ0FBa0MsU0FBUSx1QkFBdUI7SUFFN0UsWUFBWSxXQUF3QixFQUNoQixPQUFnQjtRQUNuQyxLQUFLLENBQUMsV0FBVyxFQUFFLG1DQUFtQyxDQUFDLENBQUM7UUFEckMsWUFBTyxHQUFQLE9BQU8sQ0FBUztJQUVwQyxDQUFDO0lBRUQsYUFBYTtRQUNaLE9BQU8sSUFBSSx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzFFLENBQUM7Q0FDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERvbWFpbkV2ZW50IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU2VsZWN0aW9uRW5hYmxlZFNldEV2ZW50IH0gZnJvbSAnLi9zZWxlY3Rpb24tZW5hYmxlZC1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlRXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuYWdncmVnYXRlLWV2ZW50JztcblxuZXhwb3J0IGNsYXNzIFNlbGVjdGlvbkVuYWJsZWRTZXRBZ2dyZWdhdGVFdmVudCBleHRlbmRzIFN0cnVjdHVyZUFnZ3JlZ2F0ZUV2ZW50IHtcblxuXHRjb25zdHJ1Y3RvcihzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZW5hYmxlZDogYm9vbGVhbikge1xuXHRcdHN1cGVyKHN0cnVjdHVyZUlkLCAnU2VsZWN0aW9uRW5hYmxlZFNldEFnZ3JlZ2F0ZUV2ZW50Jyk7XG5cdH1cblxuXHR0b0RvbWFpbkV2ZW50KCk6IERvbWFpbkV2ZW50PFN0cnVjdHVyZUlkPiB7XG5cdFx0cmV0dXJuIG5ldyBTZWxlY3Rpb25FbmFibGVkU2V0RXZlbnQodGhpcy5nZXRBZ2dyZWdhdGVJZCgpLCB0aGlzLmVuYWJsZWQpO1xuXHR9XG59XG4iXX0=