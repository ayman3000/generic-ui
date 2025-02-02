import { Filter } from './filter';
import { OriginItemEntity } from '../../../source/core/domain/origin/origin-item-entity';
import { FilterSettings } from './filter.settings';
import { FieldEntity } from '../../../field/core/domain/field/field.entity';
import { FilterTypeId } from './type/filter-type.id';
import { FieldId } from '../../../field/core/domain/field/field.id';
import { FilterTypeModel } from '../api/type/filter-type.model';
import { ActiveFilterModel } from '../api/active/active-filter.model';
import { FilterId } from '../api/filter.id';
export declare class FilterManager {
    private readonly filterSettings;
    private readonly filters;
    private activeFilters;
    private filterTypeManager;
    constructor();
    getSettings(): FilterSettings;
    getAll(): Array<Filter>;
    getAllActiveFilters(fields: Map<string, FieldEntity>): ReadonlyArray<ActiveFilterModel>;
    getFilterTypes(): Map<string, Array<FilterTypeModel>>;
    assignFilterTypes(fields: Array<FieldEntity>): void;
    add(fieldId: FieldId, filterTypeId: FilterTypeId, value: any): void;
    filter(entities: Array<OriginItemEntity>, fields: Map<string, FieldEntity>): Array<OriginItemEntity>;
    removeAll(): void;
    remove(filterId: FilterId): void;
    private getFilterType;
}
