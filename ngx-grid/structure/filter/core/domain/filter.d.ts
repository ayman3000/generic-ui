import { FilterId } from '../api/filter.id';
import { FieldId } from '../../../field/core/domain/field/field.id';
import { FilterTypeId } from './type/filter-type.id';
import { Entity } from '@generic-ui/hermes';
export declare class Filter extends Entity<FilterId> {
    private readonly filterId;
    private readonly fieldId;
    private readonly filterTypeId;
    private readonly filterValue;
    constructor(filterId: FilterId, fieldId: FieldId, filterTypeId: FilterTypeId, filterValue: any);
    getFilterId(): FilterId;
    getFilterTypeId(): FilterTypeId;
    getFieldId(): FieldId;
    getFilterValue(): any;
}
