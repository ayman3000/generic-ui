import { StructureId } from '../../../core/api/structure.id';
import { StructureEditSourceItemParams } from '../domain/origin/edit/structure.edit-source-item.params';
import { SelectedRow } from '../../../formation/core/api/row-selected/selected-row';
import { OriginId } from '../domain/origin/origin-id';
import { CommandInvoker } from '@generic-ui/hermes';
export declare abstract class SourceCommandInvoker implements CommandInvoker {
    protected constructor();
    abstract setOrigin(items: Array<any>, structureId: StructureId): void;
    abstract setLoading(enabled: boolean, structureId: StructureId): void;
    abstract editItem(params: StructureEditSourceItemParams, structureId: StructureId): void;
    abstract editItemByIndex(itemIndex: number, fieldIndex: number, value: any, structureId: StructureId): void;
    abstract deleteRow(row: SelectedRow, structureId: StructureId): void;
    abstract deleteRows(rows: Array<SelectedRow>, structureId: StructureId): void;
    abstract deleteItemByIndex(index: number, structureId: StructureId): void;
    abstract deleteItemById(itemId: OriginId, structureId: StructureId): void;
    abstract deleteManyItemsByIndex(indexes: Array<number>, structureId: StructureId): void;
    abstract deleteManyItemsByItemIds(itemIds: Array<OriginId>, structureId: StructureId): void;
}
