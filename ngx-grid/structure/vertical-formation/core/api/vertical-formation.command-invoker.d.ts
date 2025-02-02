import { StructureId } from '../../../core/api/structure.id';
export declare abstract class VerticalFormationCommandInvoker {
    protected constructor();
    abstract enableVirtualScroll(structureId: StructureId): void;
    abstract disableVirtualScroll(structureId: StructureId): void;
    abstract scrollToTop(structureId: StructureId): void;
    abstract scrollToBottom(structureId: StructureId): void;
    abstract scrollToIndex(index: number, structureId: StructureId): void;
    abstract setScrollPosition(position: number, structureId: StructureId): void;
}
