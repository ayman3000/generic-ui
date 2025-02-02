import { CommandHandler, CommandType, DomainEventPublisher } from '@generic-ui/hermes';
import { ChangePagesizeCommand } from './change-pagesize.command';
import { StructureAggregate } from '../../../../core/domain/structure.aggregate';
export declare class ChangePagesizeCommandHandler implements CommandHandler<StructureAggregate, ChangePagesizeCommand> {
    protected domainEventPublisher: DomainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    forCommand(): CommandType<ChangePagesizeCommand>;
    handle(structureAggregate: StructureAggregate, command: ChangePagesizeCommand): void;
    publish(aggregate: StructureAggregate, command: ChangePagesizeCommand): void;
    private publishAggregateEvents;
    private publishAggregateEvent;
}
