import { AggregateRoot } from '../../tactical/aggregate/aggregate-root';
import { Command } from '../command';
import { AggregateId } from '../../tactical/aggregate/aggregate-id';
import { CommandType } from './command-type';
export interface CommandHandler<A extends AggregateRoot<AggregateId>, C extends Command<AggregateId>> {
    forCommand(): CommandType<C>;
    handleAggregate(aggregate: A, command: C): void;
    publishDomainEvents(aggregate: A, command: C): void;
}
