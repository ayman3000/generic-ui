import { Injectable } from '@angular/core';
import { InitFieldsCommand } from './init/init-fields.command';
import { CommandDispatcher } from '@generic-ui/hermes';
export class FieldDispatcher {
    constructor(commandDispatcher) {
        this.commandDispatcher = commandDispatcher;
    }
    initFields(fieldConfigs, structureId) {
        this.commandDispatcher.dispatch(new InitFieldsCommand(structureId, fieldConfigs));
    }
}
FieldDispatcher.decorators = [
    { type: Injectable }
];
FieldDispatcher.ctorParameters = () => [
    { type: CommandDispatcher }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuZGlzcGF0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvc3RydWN0dXJlL2ZpZWxkL2NvcmUvZG9tYWluL2ZpZWxkLmRpc3BhdGNoZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUl2RCxNQUFNLE9BQU8sZUFBZTtJQUUzQixZQUE2QixpQkFBb0M7UUFBcEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtJQUNqRSxDQUFDO0lBRUQsVUFBVSxDQUFDLFlBQWdDLEVBQUUsV0FBd0I7UUFDcEUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQ25GLENBQUM7OztZQVJELFVBQVU7OztZQUhGLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRmllbGRDb25maWcgfSBmcm9tICcuLi9hcGkvZmllbGQuY29uZmlnJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IEluaXRGaWVsZHNDb21tYW5kIH0gZnJvbSAnLi9pbml0L2luaXQtZmllbGRzLmNvbW1hbmQnO1xuaW1wb3J0IHsgQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGaWVsZERpc3BhdGNoZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY29tbWFuZERpc3BhdGNoZXI6IENvbW1hbmREaXNwYXRjaGVyKSB7XG5cdH1cblxuXHRpbml0RmllbGRzKGZpZWxkQ29uZmlnczogQXJyYXk8RmllbGRDb25maWc+LCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBJbml0RmllbGRzQ29tbWFuZChzdHJ1Y3R1cmVJZCwgZmllbGRDb25maWdzKSk7XG5cdH1cblxufVxuIl19