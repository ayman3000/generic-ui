import { DomainEvent, DomainEventBus, HermesObservable, Optional } from '@generic-ui/hermes';
import { CompositionReadModelRootRepository } from '../../../domain-read/composition.read-model-root-repository';
import { CompositionReadModeRoot } from '../../../domain-read/composition.read-mode-root';
import { InMemoryCompositionReadStore } from './in-memory.composition.read-store';
import { CompositionId } from '../../../api/composition.id';
export declare class InMemoryCompositionRepository extends CompositionReadModelRootRepository {
    private inMemoryCompositionReadStore;
    private readonly compositionIdToComposition;
    private readonly composition$;
    constructor(domainEventBus: DomainEventBus, inMemoryCompositionReadStore: InMemoryCompositionReadStore);
    on(compositionId: CompositionId): HermesObservable<Readonly<CompositionReadModeRoot>>;
    find(compositionId: CompositionId): Optional<CompositionReadModeRoot>;
    protected forEvents(): Array<typeof DomainEvent>;
    protected subscribe(event: DomainEvent<CompositionId>): void;
}
