import { Optional } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../../domain/structure-aggregate.repository';
import { StructureAggregate } from '../../../domain/structure.aggregate';
import { InMemoryStructureAggregateStore } from './in-memory.structure.aggregate-store';
import { StructureId } from '../../../api/structure.id';
export declare class InMemoryStructureAggregateRepository extends StructureAggregateRepository {
    private inMemoryStructureAggregateStore;
    constructor(inMemoryStructureAggregateStore: InMemoryStructureAggregateStore);
    findById(aggregateId: StructureId): Optional<StructureAggregate>;
    save(aggregate: StructureAggregate): void;
}
