import { CommandInvoker } from '@generic-ui/hermes';
import { FilterConfig } from './config/filter.config';
import { StructureId } from '../../../core/api/structure.id';
import { FieldId } from '../../../field/core/domain/field/field.id';
import { FilterTypeId } from '../domain/type/filter-type.id';
import { FilterId } from './filter.id';
import { UniqueValueId } from '../domain/unique/unique-value-id';
export declare abstract class FilterCommandInvoker implements CommandInvoker {
    protected constructor();
    abstract setConfig(config: FilterConfig, structureId: StructureId): void;
    abstract add(fieldId: FieldId, filterTypeId: FilterTypeId, value: any, structureId: StructureId): void;
    abstract removeAll(structureId: StructureId): void;
    abstract remove(filterId: FilterId, structureId: StructureId): void;
    abstract selectAllUniqueFilter(fieldId: FieldId, structureId: StructureId): void;
    abstract unselectAllUniqueFilter(fieldId: FieldId, structureId: StructureId): void;
    abstract selectUniqueFilter(fieldId: FieldId, uniqueValueId: UniqueValueId, structureId: StructureId): void;
    abstract unselectUniqueFilter(fieldId: FieldId, uniqueValueId: UniqueValueId, structureId: StructureId): void;
}
