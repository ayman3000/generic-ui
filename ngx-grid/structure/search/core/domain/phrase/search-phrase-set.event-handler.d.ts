import { DomainEventHandler, DomainEventType } from '@generic-ui/hermes';
import { SearchPhraseArchive } from './search-phrase.archive';
import { SearchPhraseSetDomainEvent } from './set-phrase/search-phrase-set.domain-event';
import { StructureId } from '../../../../core/api/structure.id';
export declare class SearchPhraseSetEventHandler implements DomainEventHandler<StructureId, SearchPhraseSetDomainEvent> {
    private readonly searchPhraseRepository;
    constructor(searchPhraseRepository: SearchPhraseArchive);
    forEvent(): DomainEventType<SearchPhraseSetDomainEvent>;
    handle(event: SearchPhraseSetDomainEvent): void;
}
