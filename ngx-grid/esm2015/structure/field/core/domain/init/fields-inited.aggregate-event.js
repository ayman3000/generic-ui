import { FieldsInitedEvent } from './fields-inited.event';
import { StructureAggregateEvent } from '../../../../core/domain/structure.aggregate-event';
export class FieldsInitedAggregateEvent extends StructureAggregateEvent {
    constructor(structureId, fieldConfigs, // TODO merge
    fields) {
        super(structureId, 'FieldsInitedAggregateEvent');
        this.fieldConfigs = fieldConfigs;
        this.fields = fields;
    }
    toDomainEvent() {
        return new FieldsInitedEvent(this.getAggregateId(), this.fieldConfigs, this.fields);
    }
    getFieldConfigs() {
        return this.fieldConfigs;
    }
    getFields() {
        return this.fields;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGRzLWluaXRlZC5hZ2dyZWdhdGUtZXZlbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL3N0cnVjdHVyZS9maWVsZC9jb3JlL2RvbWFpbi9pbml0L2ZpZWxkcy1pbml0ZWQuYWdncmVnYXRlLWV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRTFELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBRzVGLE1BQU0sT0FBTywwQkFBMkIsU0FBUSx1QkFBdUI7SUFFdEUsWUFBWSxXQUF3QixFQUNoQixZQUFnQyxFQUFFLGFBQWE7SUFDL0MsTUFBMEI7UUFDN0MsS0FBSyxDQUFDLFdBQVcsRUFBRSw0QkFBNEIsQ0FBQyxDQUFDO1FBRjlCLGlCQUFZLEdBQVosWUFBWSxDQUFvQjtRQUNoQyxXQUFNLEdBQU4sTUFBTSxDQUFvQjtJQUU5QyxDQUFDO0lBRUQsYUFBYTtRQUVaLE9BQU8sSUFBSSxpQkFBaUIsQ0FDM0IsSUFBSSxDQUFDLGNBQWMsRUFBRSxFQUNyQixJQUFJLENBQUMsWUFBWSxFQUNqQixJQUFJLENBQUMsTUFBTSxDQUNYLENBQUM7SUFDSCxDQUFDO0lBRUQsZUFBZTtRQUNkLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMxQixDQUFDO0lBRUQsU0FBUztRQUNSLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNwQixDQUFDO0NBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb21haW5FdmVudCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IEZpZWxkRW50aXR5IH0gZnJvbSAnLi4vZmllbGQvZmllbGQuZW50aXR5JztcbmltcG9ydCB7IEZpZWxkc0luaXRlZEV2ZW50IH0gZnJvbSAnLi9maWVsZHMtaW5pdGVkLmV2ZW50JztcbmltcG9ydCB7IEZpZWxkQ29uZmlnIH0gZnJvbSAnLi4vLi4vYXBpL2ZpZWxkLmNvbmZpZyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5hZ2dyZWdhdGUtZXZlbnQnO1xuXG5cbmV4cG9ydCBjbGFzcyBGaWVsZHNJbml0ZWRBZ2dyZWdhdGVFdmVudCBleHRlbmRzIFN0cnVjdHVyZUFnZ3JlZ2F0ZUV2ZW50IHtcblxuXHRjb25zdHJ1Y3RvcihzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZmllbGRDb25maWdzOiBBcnJheTxGaWVsZENvbmZpZz4sIC8vIFRPRE8gbWVyZ2Vcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmaWVsZHM6IEFycmF5PEZpZWxkRW50aXR5Pikge1xuXHRcdHN1cGVyKHN0cnVjdHVyZUlkLCAnRmllbGRzSW5pdGVkQWdncmVnYXRlRXZlbnQnKTtcblx0fVxuXG5cdHRvRG9tYWluRXZlbnQoKTogRG9tYWluRXZlbnQ8U3RydWN0dXJlSWQ+IHtcblxuXHRcdHJldHVybiBuZXcgRmllbGRzSW5pdGVkRXZlbnQoXG5cdFx0XHR0aGlzLmdldEFnZ3JlZ2F0ZUlkKCksXG5cdFx0XHR0aGlzLmZpZWxkQ29uZmlncyxcblx0XHRcdHRoaXMuZmllbGRzXG5cdFx0KTtcblx0fVxuXG5cdGdldEZpZWxkQ29uZmlncygpOiBBcnJheTxGaWVsZENvbmZpZz4ge1xuXHRcdHJldHVybiB0aGlzLmZpZWxkQ29uZmlncztcblx0fVxuXG5cdGdldEZpZWxkcygpOiBBcnJheTxGaWVsZEVudGl0eT4ge1xuXHRcdHJldHVybiB0aGlzLmZpZWxkcztcblx0fVxufVxuIl19