import { Injectable } from '@angular/core';
import { FilterTypeArchive } from './filter-type.archive';
import { FilterTypeCollectionModel } from '../../api/type/filter-type-collection.model';
import { FilterTypesInitedEvent } from '../../domain/type/init/filter-types-inited.event';
export class FilterTypeConfigFilterSetEventHandler {
    constructor(filterTypeArchive) {
        this.filterTypeArchive = filterTypeArchive;
    }
    forEvent() {
        return FilterTypesInitedEvent;
    }
    handle(filterTypesInitedEvent) {
        if (filterTypesInitedEvent.ofMessageType('FilterTypesInitedEvent')) {
            const map = filterTypesInitedEvent.getMap();
            this.filterTypeArchive.next(filterTypesInitedEvent.getAggregateId(), new FilterTypeCollectionModel(map));
        }
    }
}
FilterTypeConfigFilterSetEventHandler.decorators = [
    { type: Injectable }
];
FilterTypeConfigFilterSetEventHandler.ctorParameters = () => [
    { type: FilterTypeArchive }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLXR5cGUuY29uZmlnLWZpbHRlci1zZXQuZXZlbnQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvc3RydWN0dXJlL2ZpbHRlci9jb3JlL2RvbWFpbi1yZWFkL3R5cGUvZmlsdGVyLXR5cGUuY29uZmlnLWZpbHRlci1zZXQuZXZlbnQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSzNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBSzFGLE1BQU0sT0FBTyxxQ0FBcUM7SUFFakQsWUFBNkIsaUJBQW9DO1FBQXBDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7SUFDakUsQ0FBQztJQUVELFFBQVE7UUFDUCxPQUFPLHNCQUFzQixDQUFDO0lBQy9CLENBQUM7SUFFRCxNQUFNLENBQUMsc0JBQThDO1FBRXBELElBQUksc0JBQXNCLENBQUMsYUFBYSxDQUFDLHdCQUF3QixDQUFDLEVBQUU7WUFFbkUsTUFBTSxHQUFHLEdBQXdDLHNCQUFzQixDQUFDLE1BQU0sRUFBRSxDQUFDO1lBRWpGLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsY0FBYyxFQUFFLEVBQUUsSUFBSSx5QkFBeUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3pHO0lBQ0YsQ0FBQzs7O1lBbEJELFVBQVU7OztZQU5GLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnRIYW5kbGVyLCBEb21haW5FdmVudFR5cGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBGaWx0ZXJUeXBlQXJjaGl2ZSB9IGZyb20gJy4vZmlsdGVyLXR5cGUuYXJjaGl2ZSc7XG5pbXBvcnQgeyBGaWx0ZXJUeXBlQ29sbGVjdGlvbk1vZGVsIH0gZnJvbSAnLi4vLi4vYXBpL3R5cGUvZmlsdGVyLXR5cGUtY29sbGVjdGlvbi5tb2RlbCc7XG5pbXBvcnQgeyBGaWx0ZXJUeXBlc0luaXRlZEV2ZW50IH0gZnJvbSAnLi4vLi4vZG9tYWluL3R5cGUvaW5pdC9maWx0ZXItdHlwZXMtaW5pdGVkLmV2ZW50JztcbmltcG9ydCB7IEZpbHRlclR5cGVNb2RlbCB9IGZyb20gJy4uLy4uL2FwaS90eXBlL2ZpbHRlci10eXBlLm1vZGVsJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmlsdGVyVHlwZUNvbmZpZ0ZpbHRlclNldEV2ZW50SGFuZGxlciBpbXBsZW1lbnRzIERvbWFpbkV2ZW50SGFuZGxlcjxTdHJ1Y3R1cmVJZCwgRmlsdGVyVHlwZXNJbml0ZWRFdmVudD4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZmlsdGVyVHlwZUFyY2hpdmU6IEZpbHRlclR5cGVBcmNoaXZlKSB7XG5cdH1cblxuXHRmb3JFdmVudCgpOiBEb21haW5FdmVudFR5cGU8RmlsdGVyVHlwZXNJbml0ZWRFdmVudD4ge1xuXHRcdHJldHVybiBGaWx0ZXJUeXBlc0luaXRlZEV2ZW50O1xuXHR9XG5cblx0aGFuZGxlKGZpbHRlclR5cGVzSW5pdGVkRXZlbnQ6IEZpbHRlclR5cGVzSW5pdGVkRXZlbnQpOiB2b2lkIHtcblxuXHRcdGlmIChmaWx0ZXJUeXBlc0luaXRlZEV2ZW50Lm9mTWVzc2FnZVR5cGUoJ0ZpbHRlclR5cGVzSW5pdGVkRXZlbnQnKSkge1xuXG5cdFx0XHRjb25zdCBtYXA6IE1hcDxzdHJpbmcsIEFycmF5PEZpbHRlclR5cGVNb2RlbD4+ID0gZmlsdGVyVHlwZXNJbml0ZWRFdmVudC5nZXRNYXAoKTtcblxuXHRcdFx0dGhpcy5maWx0ZXJUeXBlQXJjaGl2ZS5uZXh0KGZpbHRlclR5cGVzSW5pdGVkRXZlbnQuZ2V0QWdncmVnYXRlSWQoKSwgbmV3IEZpbHRlclR5cGVDb2xsZWN0aW9uTW9kZWwobWFwKSk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==