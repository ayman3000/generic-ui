import { CommandHandler, CommandType, DomainEventPublisher } from '@generic-ui/hermes';
import { SourceDomainEventPublisher } from '../../../../source/core/domain/source.domain-event.publisher';
import { StructureSetSummariesEnabledCommand } from './structure.set-summaries-enabled.command';
import { StructureAggregate } from '../../../../core/domain/structure.aggregate';
export declare class StructureSetSummariesEnabledCommandHandler implements CommandHandler<StructureAggregate, StructureSetSummariesEnabledCommand> {
    private readonly structureSourceDomainEventPublisher;
    private readonly domainEventPublisher;
    constructor(structureSourceDomainEventPublisher: SourceDomainEventPublisher, domainEventPublisher: DomainEventPublisher);
    forCommand(): CommandType<StructureSetSummariesEnabledCommand>;
    handle(structure: StructureAggregate, command: StructureSetSummariesEnabledCommand): void;
    publish(aggregate: StructureAggregate, command: StructureSetSummariesEnabledCommand): void;
}
