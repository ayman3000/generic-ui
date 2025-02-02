import { CommandHandler, CommandType, DomainEventPublisher } from '@generic-ui/hermes';
import { SetSortingCommand } from './set-sorting.command';
import { StructureAggregate } from '../../../../core/domain/structure.aggregate';
export declare class SetSortingCommandHandler implements CommandHandler<StructureAggregate, SetSortingCommand> {
    private domainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    forCommand(): CommandType<SetSortingCommand>;
    handle(aggregate: StructureAggregate, command: SetSortingCommand): void;
    publish(aggregate: StructureAggregate, command: SetSortingCommand): void;
}
