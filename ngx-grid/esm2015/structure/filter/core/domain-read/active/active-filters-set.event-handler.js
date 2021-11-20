import { Injectable } from '@angular/core';
import { ActiveFiltersSetEvent } from '../../domain/core/active-filters-set.event';
import { ActiveFilterArchive } from './active-filter.archive';
export class ActiveFiltersSetEventHandler {
    constructor(activeFilterRepository) {
        this.activeFilterRepository = activeFilterRepository;
    }
    forEvent() {
        return ActiveFiltersSetEvent;
    }
    handle(activeFiltersSetEvent) {
        if (activeFiltersSetEvent.ofMessageType('ActiveFiltersSetEvent')) {
            const activeFilters = activeFiltersSetEvent.getFilters();
            this.activeFilterRepository.next(activeFiltersSetEvent.getAggregateId(), activeFilters);
        }
    }
}
ActiveFiltersSetEventHandler.decorators = [
    { type: Injectable }
];
ActiveFiltersSetEventHandler.ctorParameters = () => [
    { type: ActiveFilterArchive }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWZpbHRlcnMtc2V0LmV2ZW50LWhhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL3N0cnVjdHVyZS9maWx0ZXIvY29yZS9kb21haW4tcmVhZC9hY3RpdmUvYWN0aXZlLWZpbHRlcnMtc2V0LmV2ZW50LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUszQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNuRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUk5RCxNQUFNLE9BQU8sNEJBQTRCO0lBRXhDLFlBQTZCLHNCQUEyQztRQUEzQywyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXFCO0lBQ3hFLENBQUM7SUFFRCxRQUFRO1FBQ1AsT0FBTyxxQkFBcUIsQ0FBQztJQUM5QixDQUFDO0lBRUQsTUFBTSxDQUFDLHFCQUE0QztRQUVsRCxJQUFJLHFCQUFxQixDQUFDLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFO1lBRWpFLE1BQU0sYUFBYSxHQUFxQyxxQkFBcUIsQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUUzRixJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGNBQWMsRUFBRSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1NBQ3hGO0lBQ0YsQ0FBQzs7O1lBbEJELFVBQVU7OztZQUhGLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnRIYW5kbGVyLCBEb21haW5FdmVudFR5cGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBBY3RpdmVGaWx0ZXJzU2V0RXZlbnQgfSBmcm9tICcuLi8uLi9kb21haW4vY29yZS9hY3RpdmUtZmlsdGVycy1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgQWN0aXZlRmlsdGVyQXJjaGl2ZSB9IGZyb20gJy4vYWN0aXZlLWZpbHRlci5hcmNoaXZlJztcbmltcG9ydCB7IEFjdGl2ZUZpbHRlck1vZGVsIH0gZnJvbSAnLi4vLi4vYXBpL2FjdGl2ZS9hY3RpdmUtZmlsdGVyLm1vZGVsJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFjdGl2ZUZpbHRlcnNTZXRFdmVudEhhbmRsZXIgaW1wbGVtZW50cyBEb21haW5FdmVudEhhbmRsZXI8U3RydWN0dXJlSWQsIEFjdGl2ZUZpbHRlcnNTZXRFdmVudD4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgYWN0aXZlRmlsdGVyUmVwb3NpdG9yeTogQWN0aXZlRmlsdGVyQXJjaGl2ZSkge1xuXHR9XG5cblx0Zm9yRXZlbnQoKTogRG9tYWluRXZlbnRUeXBlPEFjdGl2ZUZpbHRlcnNTZXRFdmVudD4ge1xuXHRcdHJldHVybiBBY3RpdmVGaWx0ZXJzU2V0RXZlbnQ7XG5cdH1cblxuXHRoYW5kbGUoYWN0aXZlRmlsdGVyc1NldEV2ZW50OiBBY3RpdmVGaWx0ZXJzU2V0RXZlbnQpOiB2b2lkIHtcblxuXHRcdGlmIChhY3RpdmVGaWx0ZXJzU2V0RXZlbnQub2ZNZXNzYWdlVHlwZSgnQWN0aXZlRmlsdGVyc1NldEV2ZW50JykpIHtcblxuXHRcdFx0Y29uc3QgYWN0aXZlRmlsdGVyczogUmVhZG9ubHlBcnJheTxBY3RpdmVGaWx0ZXJNb2RlbD4gPSBhY3RpdmVGaWx0ZXJzU2V0RXZlbnQuZ2V0RmlsdGVycygpO1xuXG5cdFx0XHR0aGlzLmFjdGl2ZUZpbHRlclJlcG9zaXRvcnkubmV4dChhY3RpdmVGaWx0ZXJzU2V0RXZlbnQuZ2V0QWdncmVnYXRlSWQoKSwgYWN0aXZlRmlsdGVycyk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==