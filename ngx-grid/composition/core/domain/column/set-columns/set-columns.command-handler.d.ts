import { CommandHandler, CommandType, DomainEventPublisher } from '@generic-ui/hermes';
import { CompositionAggregateRepository } from '../../composition.aggregate-repository';
import { CompositionEventConverter } from '../../composition.event-converter';
import { CompositionAggregate } from '../../composition.aggregate';
import { SetColumnsCommand } from './set-columns.command';
export declare class SetColumnsCommandHandler implements CommandHandler<CompositionAggregate, SetColumnsCommand> {
    private readonly compositionAggregateRepository;
    private readonly domainEventPublisher;
    private readonly compositionEventConverter;
    constructor(compositionAggregateRepository: CompositionAggregateRepository, domainEventPublisher: DomainEventPublisher, compositionEventConverter: CompositionEventConverter);
    forCommand(): CommandType<SetColumnsCommand>;
    handle(aggregate: CompositionAggregate, command: SetColumnsCommand): void;
    publish(aggregate: CompositionAggregate, command: SetColumnsCommand): void;
    private publishEvents;
}
