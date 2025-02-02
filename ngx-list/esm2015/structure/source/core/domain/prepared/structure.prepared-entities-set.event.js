import { StructureDomainEvent } from '../../../../core/domain/structure.domain-event';
export class StructurePreparedEntitiesSetEvent extends StructureDomainEvent {
    constructor(aggregateId, preparedItems) {
        super(aggregateId, preparedItems, 'StructurePreparedEntitiesSetEvent');
        this.preparedItems = preparedItems;
    }
    getPreparedItems() {
        return this.preparedItems;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnByZXBhcmVkLWVudGl0aWVzLXNldC5ldmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvc3RydWN0dXJlL3NvdXJjZS9jb3JlL2RvbWFpbi9wcmVwYXJlZC9zdHJ1Y3R1cmUucHJlcGFyZWQtZW50aXRpZXMtc2V0LmV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBRXRGLE1BQU0sT0FBTyxpQ0FBa0MsU0FBUSxvQkFBb0I7SUFFMUUsWUFBWSxXQUF3QixFQUNoQixhQUFzQztRQUN6RCxLQUFLLENBQUMsV0FBVyxFQUFFLGFBQWEsRUFBRSxtQ0FBbUMsQ0FBQyxDQUFDO1FBRHBELGtCQUFhLEdBQWIsYUFBYSxDQUF5QjtJQUUxRCxDQUFDO0lBRUQsZ0JBQWdCO1FBQ2YsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzNCLENBQUM7Q0FDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFN0cnVjdHVyZURvbWFpbkV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmRvbWFpbi1ldmVudCc7XG5cbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVQcmVwYXJlZEVudGl0aWVzU2V0RXZlbnQgZXh0ZW5kcyBTdHJ1Y3R1cmVEb21haW5FdmVudCB7XG5cblx0Y29uc3RydWN0b3IoYWdncmVnYXRlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHByZXBhcmVkSXRlbXM6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+KSB7XG5cdFx0c3VwZXIoYWdncmVnYXRlSWQsIHByZXBhcmVkSXRlbXMsICdTdHJ1Y3R1cmVQcmVwYXJlZEVudGl0aWVzU2V0RXZlbnQnKTtcblx0fVxuXG5cdGdldFByZXBhcmVkSXRlbXMoKTogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4ge1xuXHRcdHJldHVybiB0aGlzLnByZXBhcmVkSXRlbXM7XG5cdH1cbn1cbiJdfQ==