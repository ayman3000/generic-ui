import { ElementRef } from '@angular/core';
import { StructureId } from '../../core/api/structure.id';
import { StructureIdGenerator } from '../../grid/feature/structure-id.generator';
import { StructureCommandDispatcher } from '../../core/api/structure.command-dispatcher';
import { SourceCommandInvoker } from '../../source/core/api/source.command-invoker';
import { PagingCommandInvoker } from '../../paging/core/api/paging.command-invoker';
import { ListViewTemplateArchive } from './source/template/list-view-template.archive';
import { ListViewCardTemplateArchive } from './card/template/list-view.card-template.archive';
import { ListViewReadModelRootId } from '../core/api/read/list-view.read-model-root-id';
import { ListViewCommandInvoker } from '../core/api/list-view.command-invoker';
import { FilterContainerRef } from '../../filter/core/api/config/filter-container-ref';
import { TranslationService } from '../../../l10n/core/api/translation.service';
/** @internal */
export declare function listViewIdFactory(generator: StructureIdGenerator): ListViewReadModelRootId;
export declare class ListViewComponent implements FilterContainerRef {
    readonly structureId: StructureId;
    readonly listViewReadModelRootId: ListViewReadModelRootId;
    private readonly elementRef;
    private readonly translationService;
    constructor(structureId: StructureId, listViewReadModelRootId: ListViewReadModelRootId, elementRef: ElementRef, sourceCommandService: SourceCommandInvoker, containerTemplateArchive: ListViewTemplateArchive, listCardTemplateArchive: ListViewCardTemplateArchive, structureCommandService: StructureCommandDispatcher, structurePagingCommandDispatcher: PagingCommandInvoker, listViewCommandDispatcher: ListViewCommandInvoker, translationService: TranslationService);
    getElementRef(): ElementRef;
}
