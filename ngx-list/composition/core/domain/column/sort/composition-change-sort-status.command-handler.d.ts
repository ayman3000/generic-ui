import { CommandHandler, CommandType, DomainEventPublisher } from '@generic-ui/hermes';
import { CompositionChangeSortStatusCommand } from './composition-change-sort-status.command';
import { CompositionAggregate } from '../../composition.aggregate';
export declare class CompositionChangeSortStatusCommandHandler implements CommandHandler<CompositionAggregate, CompositionChangeSortStatusCommand> {
    private readonly domainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    forCommand(): CommandType<CompositionChangeSortStatusCommand>;
    handle(composition: CompositionAggregate, command: CompositionChangeSortStatusCommand): void;
    publish(composition: CompositionAggregate, command: CompositionChangeSortStatusCommand): void;
}
