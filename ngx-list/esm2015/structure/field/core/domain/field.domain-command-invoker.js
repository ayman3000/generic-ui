import { Injectable } from '@angular/core';
import { DomainEventBus } from '@generic-ui/hermes';
import { FieldCommandInvoker } from '../api/field.command-invoker';
import { FieldDispatcher } from './field.dispatcher';
export class FieldDomainCommandInvoker extends FieldCommandInvoker {
    constructor(domainEventBus, fieldDispatcher) {
        super();
        this.domainEventBus = domainEventBus;
        this.fieldDispatcher = fieldDispatcher;
    }
    initFields(fieldConfigs, structureId) {
        this.fieldDispatcher.initFields(fieldConfigs, structureId);
    }
}
FieldDomainCommandInvoker.decorators = [
    { type: Injectable }
];
FieldDomainCommandInvoker.ctorParameters = () => [
    { type: DomainEventBus },
    { type: FieldDispatcher }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuZG9tYWluLWNvbW1hbmQtaW52b2tlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvc3RydWN0dXJlL2ZpZWxkL2NvcmUvZG9tYWluL2ZpZWxkLmRvbWFpbi1jb21tYW5kLWludm9rZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHcEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFbkUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBSXJELE1BQU0sT0FBTyx5QkFBMEIsU0FBUSxtQkFBbUI7SUFFakUsWUFBNkIsY0FBOEIsRUFDdkMsZUFBZ0M7UUFDbkQsS0FBSyxFQUFFLENBQUM7UUFGb0IsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQ3ZDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtJQUVwRCxDQUFDO0lBRUQsVUFBVSxDQUFDLFlBQWdDLEVBQUUsV0FBd0I7UUFDcEUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQzVELENBQUM7OztZQVZELFVBQVU7OztZQVJGLGNBQWM7WUFLZCxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudEJ1cyB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IEZpZWxkQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi9hcGkvZmllbGQuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IEZpZWxkQ29uZmlnIH0gZnJvbSAnLi4vYXBpL2ZpZWxkLmNvbmZpZyc7XG5pbXBvcnQgeyBGaWVsZERpc3BhdGNoZXIgfSBmcm9tICcuL2ZpZWxkLmRpc3BhdGNoZXInO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGaWVsZERvbWFpbkNvbW1hbmRJbnZva2VyIGV4dGVuZHMgRmllbGRDb21tYW5kSW52b2tlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBkb21haW5FdmVudEJ1czogRG9tYWluRXZlbnRCdXMsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZmllbGREaXNwYXRjaGVyOiBGaWVsZERpc3BhdGNoZXIpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0aW5pdEZpZWxkcyhmaWVsZENvbmZpZ3M6IEFycmF5PEZpZWxkQ29uZmlnPiwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5maWVsZERpc3BhdGNoZXIuaW5pdEZpZWxkcyhmaWVsZENvbmZpZ3MsIHN0cnVjdHVyZUlkKTtcblx0fVxuXG59XG4iXX0=