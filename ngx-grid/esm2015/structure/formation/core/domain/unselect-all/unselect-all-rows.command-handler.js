import { Injectable } from '@angular/core';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../../../core/domain/structure-aggregate.repository';
import { UnselectAllRowsCommand } from './unselect-all-rows.command';
export class UnselectAllRowsCommandHandler {
    constructor(structureAggregateRepository, domainEventPublisher) {
        this.structureAggregateRepository = structureAggregateRepository;
        this.domainEventPublisher = domainEventPublisher;
    }
    forCommand() {
        return UnselectAllRowsCommand;
    }
    handle(aggregate, command) {
        aggregate.unselectAll();
    }
    publish(aggregate, command) {
        this.domainEventPublisher.publishFromAggregate(aggregate);
    }
}
UnselectAllRowsCommandHandler.decorators = [
    { type: Injectable }
];
UnselectAllRowsCommandHandler.ctorParameters = () => [
    { type: StructureAggregateRepository },
    { type: DomainEventPublisher }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5zZWxlY3QtYWxsLXJvd3MuY29tbWFuZC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9zdHJ1Y3R1cmUvZm9ybWF0aW9uL2NvcmUvZG9tYWluL3Vuc2VsZWN0LWFsbC91bnNlbGVjdC1hbGwtcm93cy5jb21tYW5kLWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQStCLG9CQUFvQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFdkYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDdEcsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFLckUsTUFBTSxPQUFPLDZCQUE2QjtJQUV6QyxZQUFvQiw0QkFBMEQsRUFDbkUsb0JBQTBDO1FBRGpDLGlDQUE0QixHQUE1Qiw0QkFBNEIsQ0FBOEI7UUFDbkUseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtJQUNyRCxDQUFDO0lBRUQsVUFBVTtRQUNULE9BQU8sc0JBQXNCLENBQUM7SUFDL0IsQ0FBQztJQUVELE1BQU0sQ0FBQyxTQUE2QixFQUFFLE9BQStCO1FBQ3BFLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsT0FBTyxDQUFDLFNBQTZCLEVBQUUsT0FBK0I7UUFDckUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzNELENBQUM7OztZQWpCRCxVQUFVOzs7WUFMRiw0QkFBNEI7WUFGQyxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1hbmRIYW5kbGVyLCBDb21tYW5kVHlwZSwgRG9tYWluRXZlbnRQdWJsaXNoZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLWFnZ3JlZ2F0ZS5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFVuc2VsZWN0QWxsUm93c0NvbW1hbmQgfSBmcm9tICcuL3Vuc2VsZWN0LWFsbC1yb3dzLmNvbW1hbmQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmFnZ3JlZ2F0ZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVuc2VsZWN0QWxsUm93c0NvbW1hbmRIYW5kbGVyIGltcGxlbWVudHMgQ29tbWFuZEhhbmRsZXI8U3RydWN0dXJlQWdncmVnYXRlLCBVbnNlbGVjdEFsbFJvd3NDb21tYW5kPiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5OiBTdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5LFxuXHRcdFx0XHRwcml2YXRlIGRvbWFpbkV2ZW50UHVibGlzaGVyOiBEb21haW5FdmVudFB1Ymxpc2hlcikge1xuXHR9XG5cblx0Zm9yQ29tbWFuZCgpOiBDb21tYW5kVHlwZTxVbnNlbGVjdEFsbFJvd3NDb21tYW5kPiB7XG5cdFx0cmV0dXJuIFVuc2VsZWN0QWxsUm93c0NvbW1hbmQ7XG5cdH1cblxuXHRoYW5kbGUoYWdncmVnYXRlOiBTdHJ1Y3R1cmVBZ2dyZWdhdGUsIGNvbW1hbmQ6IFVuc2VsZWN0QWxsUm93c0NvbW1hbmQpOiB2b2lkIHtcblx0XHRhZ2dyZWdhdGUudW5zZWxlY3RBbGwoKTtcblx0fVxuXG5cdHB1Ymxpc2goYWdncmVnYXRlOiBTdHJ1Y3R1cmVBZ2dyZWdhdGUsIGNvbW1hbmQ6IFVuc2VsZWN0QWxsUm93c0NvbW1hbmQpOiB2b2lkIHtcblx0XHR0aGlzLmRvbWFpbkV2ZW50UHVibGlzaGVyLnB1Ymxpc2hGcm9tQWdncmVnYXRlKGFnZ3JlZ2F0ZSk7XG5cdH1cblxufVxuIl19