import { Injectable } from '@angular/core';
import { SortingCommandInvoker } from '../api/sorting.command-invoker';
import { SortingDispatcher } from './sorting.dispatcher';
export class SortingDomainCommandInvoker extends SortingCommandInvoker {
    constructor(sortingDispatcher) {
        super();
        this.sortingDispatcher = sortingDispatcher;
    }
    setSortingConfig(config, structureId) {
        this.sortingDispatcher.setSortingConfig(config, structureId);
    }
    toggleSort(fieldId, compositionId, structureId) {
        this.sortingDispatcher.toggleSort(fieldId, compositionId, structureId);
    }
    setSortOrder(fieldId, sortOrder, compositionId, structureId) {
        this.sortingDispatcher.setSortOrder(fieldId, sortOrder, compositionId, structureId);
    }
}
SortingDomainCommandInvoker.decorators = [
    { type: Injectable }
];
SortingDomainCommandInvoker.ctorParameters = () => [
    { type: SortingDispatcher }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGluZy5kb21haW4tY29tbWFuZC1pbnZva2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9zdHJ1Y3R1cmUvc29ydGluZy9jb3JlL2RvbWFpbi9zb3J0aW5nLmRvbWFpbi1jb21tYW5kLWludm9rZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU8zQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUd6RCxNQUFNLE9BQU8sMkJBQTRCLFNBQVEscUJBQXFCO0lBRXJFLFlBQTZCLGlCQUFvQztRQUNoRSxLQUFLLEVBQUUsQ0FBQztRQURvQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO0lBRWpFLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxNQUFxQixFQUFFLFdBQXdCO1FBQy9ELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVELFVBQVUsQ0FBQyxPQUFnQixFQUFFLGFBQTRCLEVBQUUsV0FBd0I7UUFDbEYsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsYUFBYSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFRCxZQUFZLENBQUMsT0FBZ0IsRUFBRSxTQUFvQixFQUFFLGFBQTRCLEVBQUUsV0FBd0I7UUFDMUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUNyRixDQUFDOzs7WUFqQkQsVUFBVTs7O1lBRkYsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTb3J0aW5nQ29uZmlnIH0gZnJvbSAnLi4vYXBpL3NvcnRpbmctY29uZmlnJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuLi8uLi8uLi9maWVsZC9jb3JlL2RvbWFpbi9maWVsZC9maWVsZC5pZCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9hcGkvY29tcG9zaXRpb24uaWQnO1xuaW1wb3J0IHsgU29ydE9yZGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9kb21haW4vY29sdW1uL3NvcnQvc29ydC1vcmRlcic7XG5pbXBvcnQgeyBTb3J0aW5nQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi9hcGkvc29ydGluZy5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgU29ydGluZ0Rpc3BhdGNoZXIgfSBmcm9tICcuL3NvcnRpbmcuZGlzcGF0Y2hlcic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTb3J0aW5nRG9tYWluQ29tbWFuZEludm9rZXIgZXh0ZW5kcyBTb3J0aW5nQ29tbWFuZEludm9rZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc29ydGluZ0Rpc3BhdGNoZXI6IFNvcnRpbmdEaXNwYXRjaGVyKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdHNldFNvcnRpbmdDb25maWcoY29uZmlnOiBTb3J0aW5nQ29uZmlnLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLnNvcnRpbmdEaXNwYXRjaGVyLnNldFNvcnRpbmdDb25maWcoY29uZmlnLCBzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHR0b2dnbGVTb3J0KGZpZWxkSWQ6IEZpZWxkSWQsIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMuc29ydGluZ0Rpc3BhdGNoZXIudG9nZ2xlU29ydChmaWVsZElkLCBjb21wb3NpdGlvbklkLCBzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRzZXRTb3J0T3JkZXIoZmllbGRJZDogRmllbGRJZCwgc29ydE9yZGVyOiBTb3J0T3JkZXIsIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMuc29ydGluZ0Rpc3BhdGNoZXIuc2V0U29ydE9yZGVyKGZpZWxkSWQsIHNvcnRPcmRlciwgY29tcG9zaXRpb25JZCwgc3RydWN0dXJlSWQpO1xuXHR9XG5cbn1cbiJdfQ==