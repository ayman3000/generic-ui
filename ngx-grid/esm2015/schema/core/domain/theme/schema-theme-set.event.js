import { SchemaDomainEvent } from '../schema.domain-event';
export class SchemaThemeSetEvent extends SchemaDomainEvent {
    constructor(schemaId, theme) {
        super(schemaId, theme, 'SchemaThemeSetEvent');
        this.theme = theme;
    }
    getTheme() {
        return this.theme;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLXRoZW1lLXNldC5ldmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvc2NoZW1hL2NvcmUvZG9tYWluL3RoZW1lL3NjaGVtYS10aGVtZS1zZXQuZXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFM0QsTUFBTSxPQUFPLG1CQUFvQixTQUFRLGlCQUFpQjtJQUV6RCxZQUFZLFFBQWtCLEVBQ1YsS0FBa0I7UUFDckMsS0FBSyxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUscUJBQXFCLENBQUMsQ0FBQztRQUQzQixVQUFLLEdBQUwsS0FBSyxDQUFhO0lBRXRDLENBQUM7SUFFRCxRQUFRO1FBQ1AsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ25CLENBQUM7Q0FDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNjaGVtYUlkIH0gZnJvbSAnLi4vc2NoZW1hLmlkJztcbmltcG9ydCB7IFNjaGVtYVRoZW1lIH0gZnJvbSAnLi4vLi4vYXBpL3RoZW1lL3NjaGVtYS10aGVtZSc7XG5pbXBvcnQgeyBTY2hlbWFEb21haW5FdmVudCB9IGZyb20gJy4uL3NjaGVtYS5kb21haW4tZXZlbnQnO1xuXG5leHBvcnQgY2xhc3MgU2NoZW1hVGhlbWVTZXRFdmVudCBleHRlbmRzIFNjaGVtYURvbWFpbkV2ZW50IHtcblxuXHRjb25zdHJ1Y3RvcihzY2hlbWFJZDogU2NoZW1hSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgdGhlbWU6IFNjaGVtYVRoZW1lKSB7XG5cdFx0c3VwZXIoc2NoZW1hSWQsIHRoZW1lLCAnU2NoZW1hVGhlbWVTZXRFdmVudCcpO1xuXHR9XG5cblx0Z2V0VGhlbWUoKTogU2NoZW1hVGhlbWUge1xuXHRcdHJldHVybiB0aGlzLnRoZW1lO1xuXHR9XG59XG4iXX0=