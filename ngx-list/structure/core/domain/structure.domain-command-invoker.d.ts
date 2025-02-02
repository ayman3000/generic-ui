import { CommandDispatcher } from '@generic-ui/hermes';
import { FilterCommandInvoker } from '../../filter/core/api/filter.command-invoker';
import { SourceDispatcher } from '../../source/core/domain/source.dispatcher';
import { StructureId } from '../api/structure.id';
import { FilterConfig } from '../../filter/core/api/config/filter.config';
import { QuickFiltersConfig } from '../../filter/core/api/quick-filter/quick-filters.config';
import { StructureCommandInvoker } from '../api/structure.command-invoker';
import { SchemaTheme } from '../../../schema/core/api/theme/schema-theme';
import { CellEditConfig } from '../../grid/core/api/edit/cell-edit.config';
import { StructureCellEditArchive } from '../../grid/feature/edit/structure.cell-edit.archive';
import { VerticalFormationCommandInvoker } from '../../vertical-formation/core/api/vertical-formation.command-invoker';
export declare class StructureDomainCommandInvoker extends StructureCommandInvoker {
    private readonly commandDispatcher;
    private readonly structureFilterCommandService;
    private readonly sourceDispatcher;
    private readonly verticalFormationCommandInvoker;
    private readonly structureCellEditArchive;
    constructor(commandDispatcher: CommandDispatcher, structureFilterCommandService: FilterCommandInvoker, sourceDispatcher: SourceDispatcher, verticalFormationCommandInvoker: VerticalFormationCommandInvoker, structureCellEditArchive: StructureCellEditArchive);
    create(structureId: StructureId): void;
    enableVirtualScroll(structureId: StructureId): void;
    disableVirtualScroll(structureId: StructureId): void;
    scrollToTop(structureId: StructureId): void;
    scrollToBottom(structureId: StructureId): void;
    scrollToIndex(index: number, structureId: StructureId): void;
    setScrollPosition(position: number, structureId: StructureId): void;
    setOrigin(items: Array<any>, structureId: StructureId): void;
    setFilterConfig(config: FilterConfig, structureId: StructureId): void;
    setQuickFiltersConfig(config: QuickFiltersConfig, structureId: StructureId): void;
    setRowHeight(rowHeight: number, structureId: StructureId): void;
    setContainerHeight(height: number, structureId: StructureId): void;
    setRowHeightBasedOnTheme(theme: SchemaTheme, structureId: StructureId): void;
    setCellEdit(cellEdit: CellEditConfig, structureId: StructureId): void;
}
