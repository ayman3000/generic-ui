import { StructureDomainEvent } from '../../../core/domain/structure.domain-event';
export class SelectedRowChangedEvent extends StructureDomainEvent {
    constructor(structureId, selectedRows, allSelected, allUnselected) {
        super(structureId, { selectedRows, allSelected, allUnselected }, 'SelectedRowChangedEvent');
        this.selectedRows = selectedRows;
        this.allSelected = allSelected;
        this.allUnselected = allUnselected;
    }
    getSelectedRows() {
        return this.selectedRows;
    }
    isAllSelected() {
        return this.allSelected;
    }
    isAllUnselected() {
        return this.allUnselected;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0ZWQtcm93LWNoYW5nZWQuZXZlbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS9mb3JtYXRpb24vY29yZS9kb21haW4vc2VsZWN0ZWQtcm93LWNoYW5nZWQuZXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFFbkYsTUFBTSxPQUFPLHVCQUF3QixTQUFRLG9CQUFvQjtJQUVoRSxZQUFZLFdBQXdCLEVBQ2hCLFlBQTJCLEVBQzNCLFdBQW9CLEVBQ3BCLGFBQXNCO1FBQ3pDLEtBQUssQ0FBQyxXQUFXLEVBQUUsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRSxFQUFFLHlCQUF5QixDQUFDLENBQUM7UUFIekUsaUJBQVksR0FBWixZQUFZLENBQWU7UUFDM0IsZ0JBQVcsR0FBWCxXQUFXLENBQVM7UUFDcEIsa0JBQWEsR0FBYixhQUFhLENBQVM7SUFFMUMsQ0FBQztJQUVELGVBQWU7UUFDZCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDMUIsQ0FBQztJQUVELGFBQWE7UUFDWixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDekIsQ0FBQztJQUVELGVBQWU7UUFDZCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDM0IsQ0FBQztDQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlRG9tYWluRXZlbnQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuZG9tYWluLWV2ZW50JztcblxuZXhwb3J0IGNsYXNzIFNlbGVjdGVkUm93Q2hhbmdlZEV2ZW50IGV4dGVuZHMgU3RydWN0dXJlRG9tYWluRXZlbnQge1xuXG5cdGNvbnN0cnVjdG9yKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzZWxlY3RlZFJvd3M6IEFycmF5PHN0cmluZz4sXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgYWxsU2VsZWN0ZWQ6IGJvb2xlYW4sXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgYWxsVW5zZWxlY3RlZDogYm9vbGVhbikge1xuXHRcdHN1cGVyKHN0cnVjdHVyZUlkLCB7IHNlbGVjdGVkUm93cywgYWxsU2VsZWN0ZWQsIGFsbFVuc2VsZWN0ZWQgfSwgJ1NlbGVjdGVkUm93Q2hhbmdlZEV2ZW50Jyk7XG5cdH1cblxuXHRnZXRTZWxlY3RlZFJvd3MoKTogQXJyYXk8c3RyaW5nPiB7XG5cdFx0cmV0dXJuIHRoaXMuc2VsZWN0ZWRSb3dzO1xuXHR9XG5cblx0aXNBbGxTZWxlY3RlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5hbGxTZWxlY3RlZDtcblx0fVxuXG5cdGlzQWxsVW5zZWxlY3RlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5hbGxVbnNlbGVjdGVkO1xuXHR9XG59XG4iXX0=