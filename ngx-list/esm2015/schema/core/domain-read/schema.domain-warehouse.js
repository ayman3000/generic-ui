import { SchemaCssClassesRepository } from './css-classes/schema.css-classes.repository';
import { SchemaThemeRepository } from './theme/schema.theme.repository';
import { SchemaHorizontalGridRepository } from './horizontal-grid/schema.horizontal-grid.repository';
import { SchemaRowColoringRepository } from './row-coloring/schema.row-coloring.repository';
import { SchemaVerticalGridRepository } from './vertical-grid/schema.vertical-grid.repository';
import { SchemaWarehouse } from '../api/schema.warehouse';
import { Injectable } from '@angular/core';
import { singleFromObservable } from '@generic-ui/hermes';
export class SchemaDomainWarehouse extends SchemaWarehouse {
    constructor(schemaCssClassesRepository, schemaThemeRepository, schemaHorizontalGridRepository, schemaRowColoringRepository, schemaVerticalGridRepository) {
        super();
        this.schemaCssClassesRepository = schemaCssClassesRepository;
        this.schemaThemeRepository = schemaThemeRepository;
        this.schemaHorizontalGridRepository = schemaHorizontalGridRepository;
        this.schemaRowColoringRepository = schemaRowColoringRepository;
        this.schemaVerticalGridRepository = schemaVerticalGridRepository;
    }
    onTheme(schemaId) {
        return this.schemaThemeRepository
            .on(schemaId.toAggregateId());
    }
    onceTheme(schemaId) {
        return singleFromObservable(this.onTheme(schemaId));
    }
    onHorizontalGrid(schemaId) {
        return this.schemaHorizontalGridRepository
            .on(schemaId.toAggregateId());
    }
    onVerticalGrid(schemaId) {
        return this.schemaVerticalGridRepository
            .on(schemaId.toAggregateId());
    }
    onRowColoring(schemaId) {
        return this.schemaRowColoringRepository
            .on(schemaId.toAggregateId());
    }
    onCssClasses(schemaId) {
        return this.schemaCssClassesRepository
            .on(schemaId.toAggregateId());
    }
}
SchemaDomainWarehouse.decorators = [
    { type: Injectable }
];
SchemaDomainWarehouse.ctorParameters = () => [
    { type: SchemaCssClassesRepository },
    { type: SchemaThemeRepository },
    { type: SchemaHorizontalGridRepository },
    { type: SchemaRowColoringRepository },
    { type: SchemaVerticalGridRepository }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmRvbWFpbi13YXJlaG91c2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3NjaGVtYS9jb3JlL2RvbWFpbi1yZWFkL3NjaGVtYS5kb21haW4td2FyZWhvdXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ3JHLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQzVGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBSy9GLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBa0Msb0JBQW9CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUkxRixNQUFNLE9BQU8scUJBQXNCLFNBQVEsZUFBZTtJQUV6RCxZQUE2QiwwQkFBc0QsRUFDL0QscUJBQTRDLEVBQzVDLDhCQUE4RCxFQUM5RCwyQkFBd0QsRUFDeEQsNEJBQTBEO1FBQzdFLEtBQUssRUFBRSxDQUFDO1FBTG9CLCtCQUEwQixHQUExQiwwQkFBMEIsQ0FBNEI7UUFDL0QsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUM1QyxtQ0FBOEIsR0FBOUIsOEJBQThCLENBQWdDO1FBQzlELGdDQUEyQixHQUEzQiwyQkFBMkIsQ0FBNkI7UUFDeEQsaUNBQTRCLEdBQTVCLDRCQUE0QixDQUE4QjtJQUU5RSxDQUFDO0lBRUQsT0FBTyxDQUFDLFFBQStCO1FBQ3RDLE9BQU8sSUFBSSxDQUFDLHFCQUFxQjthQUMzQixFQUFFLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELFNBQVMsQ0FBQyxRQUErQjtRQUN4QyxPQUFPLG9CQUFvQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsZ0JBQWdCLENBQUMsUUFBK0I7UUFDL0MsT0FBTyxJQUFJLENBQUMsOEJBQThCO2FBQ3BDLEVBQUUsQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsY0FBYyxDQUFDLFFBQStCO1FBQzdDLE9BQU8sSUFBSSxDQUFDLDRCQUE0QjthQUNsQyxFQUFFLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELGFBQWEsQ0FBQyxRQUErQjtRQUM1QyxPQUFPLElBQUksQ0FBQywyQkFBMkI7YUFDakMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCxZQUFZLENBQUMsUUFBK0I7UUFDM0MsT0FBTyxJQUFJLENBQUMsMEJBQTBCO2FBQ2hDLEVBQUUsQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztJQUNwQyxDQUFDOzs7WUF0Q0QsVUFBVTs7O1lBZEYsMEJBQTBCO1lBQzFCLHFCQUFxQjtZQUNyQiw4QkFBOEI7WUFDOUIsMkJBQTJCO1lBQzNCLDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNjaGVtYUNzc0NsYXNzZXNSZXBvc2l0b3J5IH0gZnJvbSAnLi9jc3MtY2xhc3Nlcy9zY2hlbWEuY3NzLWNsYXNzZXMucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZVJlcG9zaXRvcnkgfSBmcm9tICcuL3RoZW1lL3NjaGVtYS50aGVtZS5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNjaGVtYUhvcml6b250YWxHcmlkUmVwb3NpdG9yeSB9IGZyb20gJy4vaG9yaXpvbnRhbC1ncmlkL3NjaGVtYS5ob3Jpem9udGFsLWdyaWQucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTY2hlbWFSb3dDb2xvcmluZ1JlcG9zaXRvcnkgfSBmcm9tICcuL3Jvdy1jb2xvcmluZy9zY2hlbWEucm93LWNvbG9yaW5nLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU2NoZW1hVmVydGljYWxHcmlkUmVwb3NpdG9yeSB9IGZyb20gJy4vdmVydGljYWwtZ3JpZC9zY2hlbWEudmVydGljYWwtZ3JpZC5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4uL2FwaS9zY2hlbWEucmVhZC1tb2RlbC1yb290LWlkJztcbmltcG9ydCB7IFNjaGVtYVRoZW1lIH0gZnJvbSAnLi4vYXBpL3RoZW1lL3NjaGVtYS10aGVtZSc7XG5pbXBvcnQgeyBTY2hlbWFSb3dDb2xvcmluZyB9IGZyb20gJy4uL2FwaS9yb3ctY29sb3Jpbmcvc2NoZW1hLXJvdy1jb2xvcmluZyc7XG5pbXBvcnQgeyBTY2hlbWFDc3NDbGFzcyB9IGZyb20gJy4uL2FwaS9jc3MtY2xhc3Nlcy9zY2hlbWEtY3NzLWNsYXNzJztcbmltcG9ydCB7IFNjaGVtYVdhcmVob3VzZSB9IGZyb20gJy4uL2FwaS9zY2hlbWEud2FyZWhvdXNlJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEhlcm1lc09ic2VydmFibGUsIEhlcm1lc1NpbmdsZSwgc2luZ2xlRnJvbU9ic2VydmFibGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTY2hlbWFEb21haW5XYXJlaG91c2UgZXh0ZW5kcyBTY2hlbWFXYXJlaG91c2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc2NoZW1hQ3NzQ2xhc3Nlc1JlcG9zaXRvcnk6IFNjaGVtYUNzc0NsYXNzZXNSZXBvc2l0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNjaGVtYVRoZW1lUmVwb3NpdG9yeTogU2NoZW1hVGhlbWVSZXBvc2l0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNjaGVtYUhvcml6b250YWxHcmlkUmVwb3NpdG9yeTogU2NoZW1hSG9yaXpvbnRhbEdyaWRSZXBvc2l0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNjaGVtYVJvd0NvbG9yaW5nUmVwb3NpdG9yeTogU2NoZW1hUm93Q29sb3JpbmdSZXBvc2l0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNjaGVtYVZlcnRpY2FsR3JpZFJlcG9zaXRvcnk6IFNjaGVtYVZlcnRpY2FsR3JpZFJlcG9zaXRvcnkpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0b25UaGVtZShzY2hlbWFJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkKTogSGVybWVzT2JzZXJ2YWJsZTxTY2hlbWFUaGVtZT4ge1xuXHRcdHJldHVybiB0aGlzLnNjaGVtYVRoZW1lUmVwb3NpdG9yeVxuXHRcdFx0XHQgICAub24oc2NoZW1hSWQudG9BZ2dyZWdhdGVJZCgpKTtcblx0fVxuXG5cdG9uY2VUaGVtZShzY2hlbWFJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkKTogSGVybWVzU2luZ2xlPFNjaGVtYVRoZW1lPiB7XG5cdFx0cmV0dXJuIHNpbmdsZUZyb21PYnNlcnZhYmxlKHRoaXMub25UaGVtZShzY2hlbWFJZCkpO1xuXHR9XG5cblx0b25Ib3Jpem9udGFsR3JpZChzY2hlbWFJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkKTogSGVybWVzT2JzZXJ2YWJsZTxib29sZWFuPiB7XG5cdFx0cmV0dXJuIHRoaXMuc2NoZW1hSG9yaXpvbnRhbEdyaWRSZXBvc2l0b3J5XG5cdFx0XHRcdCAgIC5vbihzY2hlbWFJZC50b0FnZ3JlZ2F0ZUlkKCkpO1xuXHR9XG5cblx0b25WZXJ0aWNhbEdyaWQoc2NoZW1hSWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCk6IEhlcm1lc09ic2VydmFibGU8Ym9vbGVhbj4ge1xuXHRcdHJldHVybiB0aGlzLnNjaGVtYVZlcnRpY2FsR3JpZFJlcG9zaXRvcnlcblx0XHRcdFx0ICAgLm9uKHNjaGVtYUlkLnRvQWdncmVnYXRlSWQoKSk7XG5cdH1cblxuXHRvblJvd0NvbG9yaW5nKHNjaGVtYUlkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQpOiBIZXJtZXNPYnNlcnZhYmxlPFNjaGVtYVJvd0NvbG9yaW5nPiB7XG5cdFx0cmV0dXJuIHRoaXMuc2NoZW1hUm93Q29sb3JpbmdSZXBvc2l0b3J5XG5cdFx0XHRcdCAgIC5vbihzY2hlbWFJZC50b0FnZ3JlZ2F0ZUlkKCkpO1xuXHR9XG5cblx0b25Dc3NDbGFzc2VzKHNjaGVtYUlkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQpOiBIZXJtZXNPYnNlcnZhYmxlPFNjaGVtYUNzc0NsYXNzPiB7XG5cdFx0cmV0dXJuIHRoaXMuc2NoZW1hQ3NzQ2xhc3Nlc1JlcG9zaXRvcnlcblx0XHRcdFx0ICAgLm9uKHNjaGVtYUlkLnRvQWdncmVnYXRlSWQoKSk7XG5cdH1cblxufVxuIl19