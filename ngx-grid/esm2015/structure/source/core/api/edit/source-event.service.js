import { Injectable } from '@angular/core';
import { DomainEventBus, hermesFilter, hermesMap } from '@generic-ui/hermes';
import { EditedItemModel } from './edited-item.model';
import { StructureSourceItemEditedEvent } from '../../domain/origin/edit/structure.source-item-edited.event';
export class SourceEventService {
    constructor(domainEventBus) {
        this.domainEventBus = domainEventBus;
    }
    onSourceEdited(structureId) {
        return this.domainEventBus
            .ofEvents([
            StructureSourceItemEditedEvent
        ])
            .pipe(hermesFilter((event) => event.getAggregateId().toString() === structureId.toString()), hermesMap((event) => {
            const afterItem = event.getAfterItem().getSourceItem(), beforeItem = event.getBeforeItem().getSourceItem();
            return new EditedItemModel(afterItem, beforeItem);
        }));
    }
}
SourceEventService.decorators = [
    { type: Injectable }
];
SourceEventService.ctorParameters = () => [
    { type: DomainEventBus }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLWV2ZW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL3N0cnVjdHVyZS9zb3VyY2UvY29yZS9hcGkvZWRpdC9zb3VyY2UtZXZlbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBZSxjQUFjLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBb0IsTUFBTSxvQkFBb0IsQ0FBQztBQUc1RyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFJN0csTUFBTSxPQUFPLGtCQUFrQjtJQUU5QixZQUE2QixjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7SUFDM0QsQ0FBQztJQUVELGNBQWMsQ0FBQyxXQUF3QjtRQUV0QyxPQUFPLElBQUksQ0FBQyxjQUFjO2FBQ3BCLFFBQVEsQ0FBQztZQUNSLDhCQUFxQztTQUNyQyxDQUNEO2FBQ0EsSUFBSSxDQUNKLFlBQVksQ0FBQyxDQUFDLEtBQStCLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQyxRQUFRLEVBQUUsS0FBSyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUMsRUFDL0csU0FBUyxDQUFDLENBQUMsS0FBcUMsRUFBRSxFQUFFO1lBRW5ELE1BQU0sU0FBUyxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQyxhQUFhLEVBQUUsRUFDckQsVUFBVSxHQUFHLEtBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUVwRCxPQUFPLElBQUksZUFBZSxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUNuRCxDQUFDLENBQUMsQ0FDRixDQUFDO0lBQ1IsQ0FBQzs7O1lBdkJELFVBQVU7OztZQVBXLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50LCBEb21haW5FdmVudEJ1cywgaGVybWVzRmlsdGVyLCBoZXJtZXNNYXAsIEhlcm1lc09ic2VydmFibGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBFZGl0ZWRJdGVtTW9kZWwgfSBmcm9tICcuL2VkaXRlZC1pdGVtLm1vZGVsJztcbmltcG9ydCB7IFN0cnVjdHVyZVNvdXJjZUl0ZW1FZGl0ZWRFdmVudCB9IGZyb20gJy4uLy4uL2RvbWFpbi9vcmlnaW4vZWRpdC9zdHJ1Y3R1cmUuc291cmNlLWl0ZW0tZWRpdGVkLmV2ZW50JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU291cmNlRXZlbnRTZXJ2aWNlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGRvbWFpbkV2ZW50QnVzOiBEb21haW5FdmVudEJ1cykge1xuXHR9XG5cblx0b25Tb3VyY2VFZGl0ZWQoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogSGVybWVzT2JzZXJ2YWJsZTxFZGl0ZWRJdGVtTW9kZWw+IHtcblxuXHRcdHJldHVybiB0aGlzLmRvbWFpbkV2ZW50QnVzXG5cdFx0XHRcdCAgIC5vZkV2ZW50cyhbXG5cdFx0XHRcdFx0XHQgICBTdHJ1Y3R1cmVTb3VyY2VJdGVtRWRpdGVkRXZlbnQgYXMgYW55XG5cdFx0XHRcdFx0ICAgXVxuXHRcdFx0XHQgICApXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGhlcm1lc0ZpbHRlcigoZXZlbnQ6IERvbWFpbkV2ZW50PFN0cnVjdHVyZUlkPikgPT4gZXZlbnQuZ2V0QWdncmVnYXRlSWQoKS50b1N0cmluZygpID09PSBzdHJ1Y3R1cmVJZC50b1N0cmluZygpKSxcblx0XHRcdFx0XHQgICBoZXJtZXNNYXAoKGV2ZW50OiBTdHJ1Y3R1cmVTb3VyY2VJdGVtRWRpdGVkRXZlbnQpID0+IHtcblxuXHRcdFx0XHRcdFx0ICAgY29uc3QgYWZ0ZXJJdGVtID0gZXZlbnQuZ2V0QWZ0ZXJJdGVtKCkuZ2V0U291cmNlSXRlbSgpLFxuXHRcdFx0XHRcdFx0XHQgICBiZWZvcmVJdGVtID0gZXZlbnQuZ2V0QmVmb3JlSXRlbSgpLmdldFNvdXJjZUl0ZW0oKTtcblxuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIG5ldyBFZGl0ZWRJdGVtTW9kZWwoYWZ0ZXJJdGVtLCBiZWZvcmVJdGVtKTtcblx0XHRcdFx0XHQgICB9KVxuXHRcdFx0XHQgICApO1xuXHR9XG59XG4iXX0=