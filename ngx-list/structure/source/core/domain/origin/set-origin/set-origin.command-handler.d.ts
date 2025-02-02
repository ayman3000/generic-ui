import { CommandHandler, CommandType } from '@generic-ui/hermes';
import { SourceDomainEventPublisher } from '../../source.domain-event.publisher';
import { StructureAggregate } from '../../../../../core/domain/structure.aggregate';
import { SetOriginCommand } from './set-origin.command';
export declare class SetOriginCommandHandler implements CommandHandler<StructureAggregate, SetOriginCommand> {
    private structureSourceDomainEventPublisher;
    constructor(structureSourceDomainEventPublisher: SourceDomainEventPublisher);
    forCommand(): CommandType<SetOriginCommand>;
    handle(structure: StructureAggregate, command: SetOriginCommand): void;
    publish(aggregate: StructureAggregate, command: SetOriginCommand): void;
}
