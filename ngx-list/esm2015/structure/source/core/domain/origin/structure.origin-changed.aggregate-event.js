import { OriginSetEvent } from './set-origin/origin-set.event';
import { StructureAggregateEvent } from '../../../../core/domain/structure.aggregate-event';
export class StructureOriginChangedAggregateEvent extends StructureAggregateEvent {
    constructor(aggregateId, origin) {
        super(aggregateId, 'StructureOriginChangedAggregateEvent');
        this.origin = origin;
    }
    toDomainEvent() {
        return new OriginSetEvent(this.getAggregateId(), this.origin);
    }
    getOrigin() {
        return this.origin;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLm9yaWdpbi1jaGFuZ2VkLmFnZ3JlZ2F0ZS1ldmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvc3RydWN0dXJlL3NvdXJjZS9jb3JlL2RvbWFpbi9vcmlnaW4vc3RydWN0dXJlLm9yaWdpbi1jaGFuZ2VkLmFnZ3JlZ2F0ZS1ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDL0QsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFHNUYsTUFBTSxPQUFPLG9DQUFxQyxTQUFRLHVCQUF1QjtJQUVoRixZQUFZLFdBQXdCLEVBQ2hCLE1BQStCO1FBQ2xELEtBQUssQ0FBQyxXQUFXLEVBQUUsc0NBQXNDLENBQUMsQ0FBQztRQUR4QyxXQUFNLEdBQU4sTUFBTSxDQUF5QjtJQUVuRCxDQUFDO0lBRUQsYUFBYTtRQUNaLE9BQU8sSUFBSSxjQUFjLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRUQsU0FBUztRQUNSLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNwQixDQUFDO0NBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVJZCwgRG9tYWluRXZlbnQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi9vcmlnaW4taXRlbS1lbnRpdHknO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgT3JpZ2luU2V0RXZlbnQgfSBmcm9tICcuL3NldC1vcmlnaW4vb3JpZ2luLXNldC5ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5hZ2dyZWdhdGUtZXZlbnQnO1xuXG5cbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVPcmlnaW5DaGFuZ2VkQWdncmVnYXRlRXZlbnQgZXh0ZW5kcyBTdHJ1Y3R1cmVBZ2dyZWdhdGVFdmVudCB7XG5cblx0Y29uc3RydWN0b3IoYWdncmVnYXRlSWQ6IEFnZ3JlZ2F0ZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IG9yaWdpbjogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4pIHtcblx0XHRzdXBlcihhZ2dyZWdhdGVJZCwgJ1N0cnVjdHVyZU9yaWdpbkNoYW5nZWRBZ2dyZWdhdGVFdmVudCcpO1xuXHR9XG5cblx0dG9Eb21haW5FdmVudCgpOiBEb21haW5FdmVudDxTdHJ1Y3R1cmVJZD4ge1xuXHRcdHJldHVybiBuZXcgT3JpZ2luU2V0RXZlbnQodGhpcy5nZXRBZ2dyZWdhdGVJZCgpLCB0aGlzLm9yaWdpbik7XG5cdH1cblxuXHRnZXRPcmlnaW4oKTogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4ge1xuXHRcdHJldHVybiB0aGlzLm9yaWdpbjtcblx0fVxufVxuIl19