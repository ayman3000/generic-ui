import { StructureDomainEvent } from '../../../../core/domain/structure.domain-event';
export class SelectionModeSetEvent extends StructureDomainEvent {
    constructor(aggregateId, mode) {
        super(aggregateId, mode, 'SelectionModeSetEvent');
        this.mode = mode;
    }
    getMode() {
        return this.mode;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0aW9uLW1vZGUtc2V0LmV2ZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9zdHJ1Y3R1cmUvZm9ybWF0aW9uL2NvcmUvZG9tYWluL21vZGUvc2VsZWN0aW9uLW1vZGUtc2V0LmV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBRXRGLE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxvQkFBb0I7SUFFOUQsWUFBWSxXQUF3QixFQUNoQixJQUFzQjtRQUN6QyxLQUFLLENBQUMsV0FBVyxFQUFFLElBQUksRUFBRSx1QkFBdUIsQ0FBQyxDQUFDO1FBRC9CLFNBQUksR0FBSixJQUFJLENBQWtCO0lBRTFDLENBQUM7SUFFRCxPQUFPO1FBQ04sT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2xCLENBQUM7Q0FFRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFJvd1NlbGVjdGlvbk1vZGUgfSBmcm9tICcuLi8uLi9hcGkvcm93LXNlbGVjdGVkL3Jvdy1zZWxlY3Rpb24nO1xuaW1wb3J0IHsgU3RydWN0dXJlRG9tYWluRXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuZG9tYWluLWV2ZW50JztcblxuZXhwb3J0IGNsYXNzIFNlbGVjdGlvbk1vZGVTZXRFdmVudCBleHRlbmRzIFN0cnVjdHVyZURvbWFpbkV2ZW50IHtcblxuXHRjb25zdHJ1Y3RvcihhZ2dyZWdhdGVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgbW9kZTogUm93U2VsZWN0aW9uTW9kZSkge1xuXHRcdHN1cGVyKGFnZ3JlZ2F0ZUlkLCBtb2RlLCAnU2VsZWN0aW9uTW9kZVNldEV2ZW50Jyk7XG5cdH1cblxuXHRnZXRNb2RlKCk6IFJvd1NlbGVjdGlvbk1vZGUge1xuXHRcdHJldHVybiB0aGlzLm1vZGU7XG5cdH1cblxufVxuIl19