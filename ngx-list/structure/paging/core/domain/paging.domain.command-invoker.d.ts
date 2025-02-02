import { PagingDispatcher } from './paging.dispatcher';
import { StructureId } from '../../../core/api/structure.id';
import { PagingConfig } from '../api/config/paging-config';
import { PagingCommandInvoker } from '../api/paging.command-invoker';
export declare class PagingDomainCommandInvoker extends PagingCommandInvoker {
    private readonly pagingDispatcher;
    constructor(pagingDispatcher: PagingDispatcher);
    enable(structureId: StructureId): void;
    disable(structureId: StructureId): void;
    setPaging(paging: PagingConfig, structureId: StructureId): void;
    changePageSize(pageSize: number, structureId: StructureId): void;
    nextPage(structureId: StructureId): void;
    prevPage(structureId: StructureId): void;
    goToPage(pageNumber: number, currentPage: number, structureId: StructureId): void;
    changePagerTop(enabled: boolean, structureId: StructureId): void;
    changePagerBottom(enabled: boolean, structureId: StructureId): void;
}
