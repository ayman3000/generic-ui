import { ListViewCreatedEvent } from './list-view-created.event';
import { ListViewAggregateEvent } from '../list-view.aggregate-event';
export class ListViewCreatedAggregateEvent extends ListViewAggregateEvent {
    constructor(aggregateId) {
        super(aggregateId, 'ListViewCreatedAggregateEvent');
    }
    toDomainEvent() {
        return new ListViewCreatedEvent(this.getAggregateId());
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LWNyZWF0ZWQuYWdncmVnYXRlLWV2ZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9zdHJ1Y3R1cmUvbGlzdC9jb3JlL2RvbWFpbi9jcmVhdGUvbGlzdC12aWV3LWNyZWF0ZWQuYWdncmVnYXRlLWV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRWpFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRXRFLE1BQU0sT0FBTyw2QkFBOEIsU0FBUSxzQkFBc0I7SUFFeEUsWUFBWSxXQUF1QjtRQUNsQyxLQUFLLENBQUMsV0FBVyxFQUFFLCtCQUErQixDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVELGFBQWE7UUFDWixPQUFPLElBQUksb0JBQW9CLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7SUFDeEQsQ0FBQztDQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9tYWluRXZlbnQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBMaXN0Vmlld0NyZWF0ZWRFdmVudCB9IGZyb20gJy4vbGlzdC12aWV3LWNyZWF0ZWQuZXZlbnQnO1xuaW1wb3J0IHsgTGlzdFZpZXdJZCB9IGZyb20gJy4uL2xpc3Qtdmlldy5pZCc7XG5pbXBvcnQgeyBMaXN0Vmlld0FnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi4vbGlzdC12aWV3LmFnZ3JlZ2F0ZS1ldmVudCc7XG5cbmV4cG9ydCBjbGFzcyBMaXN0Vmlld0NyZWF0ZWRBZ2dyZWdhdGVFdmVudCBleHRlbmRzIExpc3RWaWV3QWdncmVnYXRlRXZlbnQge1xuXG5cdGNvbnN0cnVjdG9yKGFnZ3JlZ2F0ZUlkOiBMaXN0Vmlld0lkKSB7XG5cdFx0c3VwZXIoYWdncmVnYXRlSWQsICdMaXN0Vmlld0NyZWF0ZWRBZ2dyZWdhdGVFdmVudCcpO1xuXHR9XG5cblx0dG9Eb21haW5FdmVudCgpOiBEb21haW5FdmVudDxMaXN0Vmlld0lkPiB7XG5cdFx0cmV0dXJuIG5ldyBMaXN0Vmlld0NyZWF0ZWRFdmVudCh0aGlzLmdldEFnZ3JlZ2F0ZUlkKCkpO1xuXHR9XG59XG4iXX0=