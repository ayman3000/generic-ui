import { RandomStringGenerator } from '@generic-ui/hermes';
import { FieldId } from './field.id';
export class FieldEntityIdGenerator {
    generateId() {
        const id = RandomStringGenerator.generate();
        return new FieldId(id);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtZW50aXR5LWlkLmdlbmVyYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvc3RydWN0dXJlL2ZpZWxkL2NvcmUvZG9tYWluL2ZpZWxkL2ZpZWxkLWVudGl0eS1pZC5nZW5lcmF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFM0QsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFlBQVksQ0FBQztBQUVyQyxNQUFNLE9BQU8sc0JBQXNCO0lBRWxDLFVBQVU7UUFFVCxNQUFNLEVBQUUsR0FBRyxxQkFBcUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM1QyxPQUFPLElBQUksT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7Q0FFRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJhbmRvbVN0cmluZ0dlbmVyYXRvciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuL2ZpZWxkLmlkJztcblxuZXhwb3J0IGNsYXNzIEZpZWxkRW50aXR5SWRHZW5lcmF0b3Ige1xuXG5cdGdlbmVyYXRlSWQoKTogRmllbGRJZCB7XG5cblx0XHRjb25zdCBpZCA9IFJhbmRvbVN0cmluZ0dlbmVyYXRvci5nZW5lcmF0ZSgpO1xuXHRcdHJldHVybiBuZXcgRmllbGRJZChpZCk7XG5cdH1cblxufVxuIl19