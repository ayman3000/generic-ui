import { Injectable } from '@angular/core';
import { hermesMap, hermesSwitchMap } from '@generic-ui/hermes';
import { SummariesEnabledArchive } from './enabled/summaries-enabled-archive.service';
import { SummariesWarehouse } from '../api/summaries.warehouse';
import { StructureSummariesConfigArchive } from './config/structure.summaries-config.archive';
export class SummariesDomainWarehouse extends SummariesWarehouse {
    constructor(summariesEnabledArchive, structureSummariesArchive) {
        super();
        this.summariesEnabledArchive = summariesEnabledArchive;
        this.structureSummariesArchive = structureSummariesArchive;
    }
    onEnabled(structureId) {
        return this.summariesEnabledArchive.on(structureId);
    }
    onTopEnabled(structureId) {
        return this.onEnabled(structureId)
            .pipe(hermesSwitchMap((enabled) => {
            return this.structureSummariesArchive
                .on(structureId)
                .pipe(hermesMap((config) => enabled && config.isTopEnabled()));
        }));
    }
    onBottomEnabled(structureId) {
        return this.onEnabled(structureId)
            .pipe(hermesSwitchMap((enabled) => {
            return this.structureSummariesArchive
                .on(structureId)
                .pipe(hermesMap((config) => enabled && config.isBottomEnabled()));
        }));
    }
}
SummariesDomainWarehouse.decorators = [
    { type: Injectable }
];
SummariesDomainWarehouse.ctorParameters = () => [
    { type: SummariesEnabledArchive },
    { type: StructureSummariesConfigArchive }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyaWVzLmRvbWFpbi13YXJlaG91c2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS9zdW1tYXJpZXMvY29yZS9kb21haW4tcmVhZC9zdW1tYXJpZXMuZG9tYWluLXdhcmVob3VzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxTQUFTLEVBQW9CLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWxGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBRXRGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBSzlGLE1BQU0sT0FBTyx3QkFBeUIsU0FBUSxrQkFBa0I7SUFFL0QsWUFBNkIsdUJBQWdELEVBQ3pELHlCQUEwRDtRQUM3RSxLQUFLLEVBQUUsQ0FBQztRQUZvQiw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO1FBQ3pELDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBaUM7SUFFOUUsQ0FBQztJQUVELFNBQVMsQ0FBQyxXQUF3QjtRQUNqQyxPQUFPLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVELFlBQVksQ0FBQyxXQUF3QjtRQUNwQyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDO2FBQzVCLElBQUksQ0FDSixlQUFlLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUMzQixPQUFPLElBQUksQ0FBQyx5QkFBeUI7aUJBQ2xDLEVBQUUsQ0FBQyxXQUFXLENBQUM7aUJBQ2YsSUFBSSxDQUNKLFNBQVMsQ0FBQyxDQUFDLE1BQXFDLEVBQUUsRUFBRSxDQUFDLE9BQU8sSUFBSSxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FDdEYsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUNGLENBQUM7SUFDUixDQUFDO0lBRUQsZUFBZSxDQUFDLFdBQXdCO1FBQ3ZDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUM7YUFDNUIsSUFBSSxDQUNKLGVBQWUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQzNCLE9BQU8sSUFBSSxDQUFDLHlCQUF5QjtpQkFDbEMsRUFBRSxDQUFDLFdBQVcsQ0FBQztpQkFDZixJQUFJLENBQ0osU0FBUyxDQUFDLENBQUMsTUFBcUMsRUFBRSxFQUFFLENBQUMsT0FBTyxJQUFJLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUN6RixDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQ0YsQ0FBQztJQUVSLENBQUM7OztZQXJDRCxVQUFVOzs7WUFQRix1QkFBdUI7WUFHdkIsK0JBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBoZXJtZXNNYXAsIEhlcm1lc09ic2VydmFibGUsIGhlcm1lc1N3aXRjaE1hcCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN1bW1hcmllc0VuYWJsZWRBcmNoaXZlIH0gZnJvbSAnLi9lbmFibGVkL3N1bW1hcmllcy1lbmFibGVkLWFyY2hpdmUuc2VydmljZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTdW1tYXJpZXNXYXJlaG91c2UgfSBmcm9tICcuLi9hcGkvc3VtbWFyaWVzLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTdW1tYXJpZXNDb25maWdBcmNoaXZlIH0gZnJvbSAnLi9jb25maWcvc3RydWN0dXJlLnN1bW1hcmllcy1jb25maWcuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTdW1tYXJpZXNQYW5lbENvbmZpZyB9IGZyb20gJy4uL2RvbWFpbi9jb25maWcvc3RydWN0dXJlLnN1bW1hcmllcy1wYW5lbC5jb25maWcnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdW1tYXJpZXNEb21haW5XYXJlaG91c2UgZXh0ZW5kcyBTdW1tYXJpZXNXYXJlaG91c2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc3VtbWFyaWVzRW5hYmxlZEFyY2hpdmU6IFN1bW1hcmllc0VuYWJsZWRBcmNoaXZlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZVN1bW1hcmllc0FyY2hpdmU6IFN0cnVjdHVyZVN1bW1hcmllc0NvbmZpZ0FyY2hpdmUpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0b25FbmFibGVkKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IEhlcm1lc09ic2VydmFibGU8Ym9vbGVhbj4ge1xuXHRcdHJldHVybiB0aGlzLnN1bW1hcmllc0VuYWJsZWRBcmNoaXZlLm9uKHN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdG9uVG9wRW5hYmxlZChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBIZXJtZXNPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblx0XHRyZXR1cm4gdGhpcy5vbkVuYWJsZWQoc3RydWN0dXJlSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGhlcm1lc1N3aXRjaE1hcCgoZW5hYmxlZCkgPT4ge1xuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIHRoaXMuc3RydWN0dXJlU3VtbWFyaWVzQXJjaGl2ZVxuXHRcdFx0XHRcdFx0XHRcdFx0ICAub24oc3RydWN0dXJlSWQpXG5cdFx0XHRcdFx0XHRcdFx0XHQgIC5waXBlKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgIGhlcm1lc01hcCgoY29uZmlnOiBTdHJ1Y3R1cmVTdW1tYXJpZXNQYW5lbENvbmZpZykgPT4gZW5hYmxlZCAmJiBjb25maWcuaXNUb3BFbmFibGVkKCkpXG5cdFx0XHRcdFx0XHRcdFx0XHQgICk7XG5cdFx0XHRcdFx0ICAgfSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdG9uQm90dG9tRW5hYmxlZChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBIZXJtZXNPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblx0XHRyZXR1cm4gdGhpcy5vbkVuYWJsZWQoc3RydWN0dXJlSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGhlcm1lc1N3aXRjaE1hcCgoZW5hYmxlZCkgPT4ge1xuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIHRoaXMuc3RydWN0dXJlU3VtbWFyaWVzQXJjaGl2ZVxuXHRcdFx0XHRcdFx0XHRcdFx0ICAub24oc3RydWN0dXJlSWQpXG5cdFx0XHRcdFx0XHRcdFx0XHQgIC5waXBlKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgIGhlcm1lc01hcCgoY29uZmlnOiBTdHJ1Y3R1cmVTdW1tYXJpZXNQYW5lbENvbmZpZykgPT4gZW5hYmxlZCAmJiBjb25maWcuaXNCb3R0b21FbmFibGVkKCkpXG5cdFx0XHRcdFx0XHRcdFx0XHQgICk7XG5cdFx0XHRcdFx0ICAgfSlcblx0XHRcdFx0ICAgKTtcblxuXHR9XG5cbn1cbiJdfQ==