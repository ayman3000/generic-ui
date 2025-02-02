import { Injectable } from '@angular/core';
import { EventDrivenRepository } from '@generic-ui/hermes';
import { SchemaThemeSetEvent } from '../../domain/theme/schema-theme-set.event';
export class SchemaThemeRepository extends EventDrivenRepository {
    constructor() {
        super();
    }
    forEvent() {
        return SchemaThemeSetEvent;
    }
}
SchemaThemeRepository.decorators = [
    { type: Injectable }
];
SchemaThemeRepository.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLnRoZW1lLnJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL3NjaGVtYS9jb3JlL2RvbWFpbi1yZWFkL3RoZW1lL3NjaGVtYS50aGVtZS5yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFtQixxQkFBcUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRzVFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBR2hGLE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxxQkFBaUU7SUFFM0c7UUFDQyxLQUFLLEVBQUUsQ0FBQztJQUNULENBQUM7SUFFRCxRQUFRO1FBQ1AsT0FBTyxtQkFBbUIsQ0FBQztJQUM1QixDQUFDOzs7WUFURCxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudFR5cGUsIEV2ZW50RHJpdmVuUmVwb3NpdG9yeSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZSB9IGZyb20gJy4uLy4uL2FwaS90aGVtZS9zY2hlbWEtdGhlbWUnO1xuaW1wb3J0IHsgU2NoZW1hSWQgfSBmcm9tICcuLi8uLi9kb21haW4vc2NoZW1hLmlkJztcbmltcG9ydCB7IFNjaGVtYVRoZW1lU2V0RXZlbnQgfSBmcm9tICcuLi8uLi9kb21haW4vdGhlbWUvc2NoZW1hLXRoZW1lLXNldC5ldmVudCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTY2hlbWFUaGVtZVJlcG9zaXRvcnkgZXh0ZW5kcyBFdmVudERyaXZlblJlcG9zaXRvcnk8U2NoZW1hSWQsIFNjaGVtYVRoZW1lU2V0RXZlbnQsIFNjaGVtYVRoZW1lPiB7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGZvckV2ZW50KCk6IERvbWFpbkV2ZW50VHlwZTxTY2hlbWFUaGVtZVNldEV2ZW50PiB7XG5cdFx0cmV0dXJuIFNjaGVtYVRoZW1lU2V0RXZlbnQ7XG5cdH1cblxufVxuIl19