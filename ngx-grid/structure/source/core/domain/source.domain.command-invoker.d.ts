import { SourceDispatcher } from '../domain/source.dispatcher';
import { StructureId } from '../../../core/api/structure.id';
import { StructureEditSourceItemParams } from '../domain/origin/edit/structure.edit-source-item.params';
import { FieldWarehouse } from '../../../field/core/api/field.warehouse';
import { OriginId } from '../domain/origin/origin-id';
import { CommandDispatcher } from '@generic-ui/hermes';
import { SourceWarehouse } from '../api/source.warehouse';
import { SelectedRow } from '../../../formation/core/api/row-selected/selected-row';
import { SourceCommandInvoker } from '../api/source.command-invoker';
export declare class SourceDomainCommandInvoker extends SourceCommandInvoker {
    private readonly commandDispatcher;
    private readonly sourceDispatcher;
    private readonly fieldWarehouse;
    private readonly sourceReadModelService;
    constructor(commandDispatcher: CommandDispatcher, sourceDispatcher: SourceDispatcher, fieldWarehouse: FieldWarehouse, sourceReadModelService: SourceWarehouse);
    setOrigin(items: Array<any>, structureId: StructureId): void;
    setLoading(enabled: boolean, structureId: StructureId): void;
    editItem(params: StructureEditSourceItemParams, structureId: StructureId): void;
    editItemByIndex(itemIndex: number, fieldIndex: number, value: any, structureId: StructureId): void;
    deleteRow(row: SelectedRow, structureId: StructureId): void;
    deleteRows(rows: Array<SelectedRow>, structureId: StructureId): void;
    deleteItemByIndex(index: number, structureId: StructureId): void;
    deleteItemById(itemId: OriginId, structureId: StructureId): void;
    deleteManyItemsByIndex(indexes: Array<number>, structureId: StructureId): void;
    deleteManyItemsByItemIds(itemIds: Array<OriginId>, structureId: StructureId): void;
}
