import { Injectable } from '@angular/core';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../../../core/domain/structure-aggregate.repository';
import { ToggleSortCommand } from './toggle-sort.command';
import { SortToggledEvent } from './sort-toggled.event';
export class ToggleSortCommandHandler {
    constructor(structureAggregateRepository, domainEventPublisher) {
        this.structureAggregateRepository = structureAggregateRepository;
        this.domainEventPublisher = domainEventPublisher;
    }
    forCommand() {
        return ToggleSortCommand;
    }
    handle(structure, command) {
        const aggregateId = command.getAggregateId(), compositionId = command.getCompositionId(), fieldId = command.getFieldId();
        const sorters = structure.toggleSort(fieldId);
        this.publishSortEvent(aggregateId, compositionId, fieldId, sorters);
    }
    publish(aggregate, command) {
    }
    publishSortEvent(aggregateId, compositionId, fieldId, sorters) {
        const directions = sorters.map((sorter) => {
            return {
                direction: sorter.hasDirection(),
                fieldId: sorter.getField().getId()
            };
        });
        this.domainEventPublisher.publish(new SortToggledEvent(aggregateId, compositionId, directions));
    }
}
ToggleSortCommandHandler.decorators = [
    { type: Injectable }
];
ToggleSortCommandHandler.ctorParameters = () => [
    { type: StructureAggregateRepository },
    { type: DomainEventPublisher }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLXNvcnQuY29tbWFuZC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9zdHJ1Y3R1cmUvc29ydGluZy9jb3JlL2RvbWFpbi90b2dnbGUvdG9nZ2xlLXNvcnQuY29tbWFuZC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUE0QyxvQkFBb0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXBHLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ3RHLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRzFELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBTXhELE1BQU0sT0FBTyx3QkFBd0I7SUFFcEMsWUFBNkIsNEJBQTBELEVBQzVFLG9CQUEwQztRQUR4QixpQ0FBNEIsR0FBNUIsNEJBQTRCLENBQThCO1FBQzVFLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7SUFDckQsQ0FBQztJQUVELFVBQVU7UUFDVCxPQUFPLGlCQUFpQixDQUFDO0lBQzFCLENBQUM7SUFFRCxNQUFNLENBQUMsU0FBNkIsRUFBRSxPQUEwQjtRQUUvRCxNQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsY0FBYyxFQUFFLEVBQzNDLGFBQWEsR0FBRyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsRUFDMUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUVoQyxNQUFNLE9BQU8sR0FBRyxTQUFTLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTlDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsYUFBYSxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBRUQsT0FBTyxDQUFDLFNBQTZCLEVBQUUsT0FBMEI7SUFDakUsQ0FBQztJQUVPLGdCQUFnQixDQUFDLFdBQXdCLEVBQUUsYUFBNEIsRUFBRSxPQUFnQixFQUFFLE9BQXNCO1FBRXhILE1BQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFjLEVBQUUsRUFBRTtZQUNqRCxPQUFPO2dCQUNOLFNBQVMsRUFBRSxNQUFNLENBQUMsWUFBWSxFQUFFO2dCQUNoQyxPQUFPLEVBQUUsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssRUFBRTthQUNsQyxDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLElBQUksZ0JBQWdCLENBQUMsV0FBVyxFQUFFLGFBQWEsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQ2pHLENBQUM7OztZQW5DRCxVQUFVOzs7WUFURiw0QkFBNEI7WUFGYyxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFnZ3JlZ2F0ZUlkLCBDb21tYW5kSGFuZGxlciwgQ29tbWFuZFR5cGUsIERvbWFpbkV2ZW50UHVibGlzaGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS1hZ2dyZWdhdGUucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBUb2dnbGVTb3J0Q29tbWFuZCB9IGZyb20gJy4vdG9nZ2xlLXNvcnQuY29tbWFuZCc7XG5pbXBvcnQgeyBGaWVsZElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vZmllbGQvY29yZS9kb21haW4vZmllbGQvZmllbGQuaWQnO1xuaW1wb3J0IHsgU29ydGVyIH0gZnJvbSAnLi4vc29ydGVyJztcbmltcG9ydCB7IFNvcnRUb2dnbGVkRXZlbnQgfSBmcm9tICcuL3NvcnQtdG9nZ2xlZC5ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuYWdncmVnYXRlJztcbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2FwaS9jb21wb3NpdGlvbi5pZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRvZ2dsZVNvcnRDb21tYW5kSGFuZGxlciBpbXBsZW1lbnRzIENvbW1hbmRIYW5kbGVyPFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgVG9nZ2xlU29ydENvbW1hbmQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnk6IFN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnksXG5cdFx0XHRcdHByaXZhdGUgZG9tYWluRXZlbnRQdWJsaXNoZXI6IERvbWFpbkV2ZW50UHVibGlzaGVyKSB7XG5cdH1cblxuXHRmb3JDb21tYW5kKCk6IENvbW1hbmRUeXBlPFRvZ2dsZVNvcnRDb21tYW5kPiB7XG5cdFx0cmV0dXJuIFRvZ2dsZVNvcnRDb21tYW5kO1xuXHR9XG5cblx0aGFuZGxlKHN0cnVjdHVyZTogU3RydWN0dXJlQWdncmVnYXRlLCBjb21tYW5kOiBUb2dnbGVTb3J0Q29tbWFuZCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgYWdncmVnYXRlSWQgPSBjb21tYW5kLmdldEFnZ3JlZ2F0ZUlkKCksXG5cdFx0XHRjb21wb3NpdGlvbklkID0gY29tbWFuZC5nZXRDb21wb3NpdGlvbklkKCksXG5cdFx0XHRmaWVsZElkID0gY29tbWFuZC5nZXRGaWVsZElkKCk7XG5cblx0XHRjb25zdCBzb3J0ZXJzID0gc3RydWN0dXJlLnRvZ2dsZVNvcnQoZmllbGRJZCk7XG5cblx0XHR0aGlzLnB1Ymxpc2hTb3J0RXZlbnQoYWdncmVnYXRlSWQsIGNvbXBvc2l0aW9uSWQsIGZpZWxkSWQsIHNvcnRlcnMpO1xuXHR9XG5cblx0cHVibGlzaChhZ2dyZWdhdGU6IFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgY29tbWFuZDogVG9nZ2xlU29ydENvbW1hbmQpOiB2b2lkIHtcblx0fVxuXG5cdHByaXZhdGUgcHVibGlzaFNvcnRFdmVudChhZ2dyZWdhdGVJZDogQWdncmVnYXRlSWQsIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQsIGZpZWxkSWQ6IEZpZWxkSWQsIHNvcnRlcnM6IEFycmF5PFNvcnRlcj4pOiB2b2lkIHtcblxuXHRcdGNvbnN0IGRpcmVjdGlvbnMgPSBzb3J0ZXJzLm1hcCgoc29ydGVyOiBTb3J0ZXIpID0+IHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGRpcmVjdGlvbjogc29ydGVyLmhhc0RpcmVjdGlvbigpLFxuXHRcdFx0XHRmaWVsZElkOiBzb3J0ZXIuZ2V0RmllbGQoKS5nZXRJZCgpXG5cdFx0XHR9O1xuXHRcdH0pO1xuXG5cdFx0dGhpcy5kb21haW5FdmVudFB1Ymxpc2hlci5wdWJsaXNoKG5ldyBTb3J0VG9nZ2xlZEV2ZW50KGFnZ3JlZ2F0ZUlkLCBjb21wb3NpdGlvbklkLCBkaXJlY3Rpb25zKSk7XG5cdH1cblxufVxuIl19