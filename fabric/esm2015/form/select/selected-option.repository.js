import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
export class FabricSelectedOptionsRepository {
    constructor() {
        this.selectedOption$ = new ReplaySubject(1);
    }
    onSelectedOption() {
        return this.selectedOption$.asObservable();
    }
    next(option) {
        this.selectedOption$.next(option);
    }
}
FabricSelectedOptionsRepository.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0ZWQtb3B0aW9uLnJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWZhYnJpYy9zcmMvZm9ybS9zZWxlY3Qvc2VsZWN0ZWQtb3B0aW9uLnJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBSWpELE1BQU0sT0FBTywrQkFBK0I7SUFENUM7UUFHa0Isb0JBQWUsR0FBRyxJQUFJLGFBQWEsQ0FBa0IsQ0FBQyxDQUFDLENBQUM7SUFVMUUsQ0FBQztJQVJBLGdCQUFnQjtRQUNmLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUM1QyxDQUFDO0lBRUQsSUFBSSxDQUFDLE1BQXVCO1FBQzNCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ25DLENBQUM7OztZQVhELFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBHdWlTZWxlY3RPcHRpb24gfSBmcm9tICcuL3NlbGVjdC1vcHRpb24nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmFicmljU2VsZWN0ZWRPcHRpb25zUmVwb3NpdG9yeSB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBzZWxlY3RlZE9wdGlvbiQgPSBuZXcgUmVwbGF5U3ViamVjdDxHdWlTZWxlY3RPcHRpb24+KDEpO1xuXG5cdG9uU2VsZWN0ZWRPcHRpb24oKTogT2JzZXJ2YWJsZTxHdWlTZWxlY3RPcHRpb24+IHtcblx0XHRyZXR1cm4gdGhpcy5zZWxlY3RlZE9wdGlvbiQuYXNPYnNlcnZhYmxlKCk7XG5cdH1cblxuXHRuZXh0KG9wdGlvbjogR3VpU2VsZWN0T3B0aW9uKTogdm9pZCB7XG5cdFx0dGhpcy5zZWxlY3RlZE9wdGlvbiQubmV4dChvcHRpb24pO1xuXHR9XG5cbn1cbiJdfQ==