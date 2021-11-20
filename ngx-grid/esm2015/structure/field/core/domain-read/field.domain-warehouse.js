import { Injectable } from '@angular/core';
import { FieldArchive } from './field.archive';
import { FieldWarehouse } from '../api/field.warehouse';
export class FieldDomainWarehouse extends FieldWarehouse {
    constructor(fieldReadModelArchive) {
        super();
        this.fieldReadModelArchive = fieldReadModelArchive;
    }
    onFields(structureId) {
        return this.fieldReadModelArchive.on(structureId);
    }
    findFields(structureId) {
        return this.fieldReadModelArchive.find(structureId);
    }
}
FieldDomainWarehouse.decorators = [
    { type: Injectable }
];
FieldDomainWarehouse.ctorParameters = () => [
    { type: FieldArchive }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuZG9tYWluLXdhcmVob3VzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvc3RydWN0dXJlL2ZpZWxkL2NvcmUvZG9tYWluLXJlYWQvZmllbGQuZG9tYWluLXdhcmVob3VzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUcvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFHeEQsTUFBTSxPQUFPLG9CQUFxQixTQUFRLGNBQWM7SUFFdkQsWUFBNkIscUJBQW1DO1FBQy9ELEtBQUssRUFBRSxDQUFDO1FBRG9CLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBYztJQUVoRSxDQUFDO0lBRUQsUUFBUSxDQUFDLFdBQXdCO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQsVUFBVSxDQUFDLFdBQXdCO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNyRCxDQUFDOzs7WUFiRCxVQUFVOzs7WUFMRixZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBIZXJtZXNPYnNlcnZhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IEZpZWxkQXJjaGl2ZSB9IGZyb20gJy4vZmllbGQuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBGaWVsZE1vZGVsIH0gZnJvbSAnLi4vYXBpL2ZpZWxkLm1vZGVsJztcbmltcG9ydCB7IEZpZWxkV2FyZWhvdXNlIH0gZnJvbSAnLi4vYXBpL2ZpZWxkLndhcmVob3VzZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGaWVsZERvbWFpbldhcmVob3VzZSBleHRlbmRzIEZpZWxkV2FyZWhvdXNlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGZpZWxkUmVhZE1vZGVsQXJjaGl2ZTogRmllbGRBcmNoaXZlKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG9uRmllbGRzKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IEhlcm1lc09ic2VydmFibGU8UmVhZG9ubHlBcnJheTxGaWVsZE1vZGVsPj4ge1xuXHRcdHJldHVybiB0aGlzLmZpZWxkUmVhZE1vZGVsQXJjaGl2ZS5vbihzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRmaW5kRmllbGRzKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IE9wdGlvbmFsPFJlYWRvbmx5QXJyYXk8RmllbGRNb2RlbD4+IHtcblx0XHRyZXR1cm4gdGhpcy5maWVsZFJlYWRNb2RlbEFyY2hpdmUuZmluZChzdHJ1Y3R1cmVJZCk7XG5cdH1cblxufVxuIl19