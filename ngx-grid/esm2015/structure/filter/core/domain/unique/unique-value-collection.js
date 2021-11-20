import { UniqueValue } from './unique-value';
import { UniqueValueIdGenerator } from './unique-value.id-generator';
export class UniqueValueCollection {
    constructor(values, field) {
        this.values = [];
        for (const value of values) {
            this.values.push(new UniqueValue(UniqueValueIdGenerator.generate(), value, field.getDisplayValue(value), true));
        }
        this.calculateAllSelected();
        this.calculateAllDisabled();
    }
    getAll() {
        return this.values;
    }
    isAllSelected() {
        return this.allSelected;
    }
    isAllDisabled() {
        return this.allDisabled;
    }
    getNotSelected() {
        return this.values.filter((uv) => uv.isDisabled());
    }
    selectAll() {
        this.values.forEach((uv) => {
            uv.select();
        });
        this.allSelected = true;
        this.allDisabled = false;
    }
    select(uniqueValueId) {
        this.values
            .filter((uv) => uv.getId().equals(uniqueValueId))
            .forEach((uv) => {
            uv.select();
        });
        this.calculateAllSelected();
        this.calculateAllDisabled();
    }
    unselectAll() {
        this.values.forEach((uv) => {
            uv.unselect();
        });
        this.allSelected = false;
        this.allDisabled = true;
    }
    unselect(uniqueValueId) {
        this.values
            .filter((uv) => uv.getId().equals(uniqueValueId))
            .forEach((uv) => {
            uv.unselect();
        });
        this.calculateAllSelected();
        this.calculateAllDisabled();
    }
    calculateAllSelected() {
        this.allSelected = !this.values.some((f) => f.isDisabled());
    }
    calculateAllDisabled() {
        this.allDisabled = !this.values.some((f) => f.isEnabled());
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pcXVlLXZhbHVlLWNvbGxlY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL3N0cnVjdHVyZS9maWx0ZXIvY29yZS9kb21haW4vdW5pcXVlL3VuaXF1ZS12YWx1ZS1jb2xsZWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUlyRSxNQUFNLE9BQU8scUJBQXFCO0lBUWpDLFlBQVksTUFBa0IsRUFDM0IsS0FBa0I7UUFQSixXQUFNLEdBQXVCLEVBQUUsQ0FBQztRQVNoRCxLQUFLLE1BQU0sS0FBSyxJQUFJLE1BQU0sRUFBRTtZQUUzQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FDZixJQUFJLFdBQVcsQ0FDZCxzQkFBc0IsQ0FBQyxRQUFRLEVBQUUsRUFDakMsS0FBSyxFQUNMLEtBQUssQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLEVBQzVCLElBQUksQ0FDSixDQUNELENBQUM7U0FDRjtRQUVELElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCxNQUFNO1FBQ0wsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxhQUFhO1FBQ1osT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3pCLENBQUM7SUFFRCxhQUFhO1FBQ1osT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3pCLENBQUM7SUFFRCxjQUFjO1FBQ2IsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQWUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVELFNBQVM7UUFDUixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQWUsRUFBRSxFQUFFO1lBQ3ZDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNiLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQztJQUVELE1BQU0sQ0FBQyxhQUE0QjtRQUVsQyxJQUFJLENBQUMsTUFBTTthQUNULE1BQU0sQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQzthQUNoRCxPQUFPLENBQUMsQ0FBQyxFQUFlLEVBQUUsRUFBRTtZQUM1QixFQUFFLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDYixDQUFDLENBQUMsQ0FBQztRQUVKLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCxXQUFXO1FBQ1YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFlLEVBQUUsRUFBRTtZQUN2QyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDZixDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxRQUFRLENBQUMsYUFBNEI7UUFFcEMsSUFBSSxDQUFDLE1BQU07YUFDVCxNQUFNLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7YUFDaEQsT0FBTyxDQUFDLENBQUMsRUFBZSxFQUFFLEVBQUU7WUFDNUIsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2YsQ0FBQyxDQUFDLENBQUM7UUFFSixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRU8sb0JBQW9CO1FBQzNCLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQWMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUVPLG9CQUFvQjtRQUMzQixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFjLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7Q0FFRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVuaXF1ZVZhbHVlIH0gZnJvbSAnLi91bmlxdWUtdmFsdWUnO1xuaW1wb3J0IHsgVW5pcXVlVmFsdWVJZEdlbmVyYXRvciB9IGZyb20gJy4vdW5pcXVlLXZhbHVlLmlkLWdlbmVyYXRvcic7XG5pbXBvcnQgeyBVbmlxdWVWYWx1ZUlkIH0gZnJvbSAnLi91bmlxdWUtdmFsdWUtaWQnO1xuaW1wb3J0IHsgRmllbGRFbnRpdHkgfSBmcm9tICcuLi8uLi8uLi8uLi9maWVsZC9jb3JlL2RvbWFpbi9maWVsZC9maWVsZC5lbnRpdHknO1xuXG5leHBvcnQgY2xhc3MgVW5pcXVlVmFsdWVDb2xsZWN0aW9uIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHZhbHVlczogQXJyYXk8VW5pcXVlVmFsdWU+ID0gW107XG5cblx0cHJpdmF0ZSBhbGxTZWxlY3RlZDogYm9vbGVhbjtcblxuXHRwcml2YXRlIGFsbERpc2FibGVkOiBib29sZWFuO1xuXG5cdGNvbnN0cnVjdG9yKHZhbHVlczogQXJyYXk8YW55Pixcblx0XHRcdFx0ZmllbGQ6IEZpZWxkRW50aXR5KSB7XG5cblx0XHRmb3IgKGNvbnN0IHZhbHVlIG9mIHZhbHVlcykge1xuXG5cdFx0XHR0aGlzLnZhbHVlcy5wdXNoKFxuXHRcdFx0XHRuZXcgVW5pcXVlVmFsdWUoXG5cdFx0XHRcdFx0VW5pcXVlVmFsdWVJZEdlbmVyYXRvci5nZW5lcmF0ZSgpLFxuXHRcdFx0XHRcdHZhbHVlLFxuXHRcdFx0XHRcdGZpZWxkLmdldERpc3BsYXlWYWx1ZSh2YWx1ZSksXG5cdFx0XHRcdFx0dHJ1ZVxuXHRcdFx0XHQpXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdHRoaXMuY2FsY3VsYXRlQWxsU2VsZWN0ZWQoKTtcblx0XHR0aGlzLmNhbGN1bGF0ZUFsbERpc2FibGVkKCk7XG5cdH1cblxuXHRnZXRBbGwoKTogQXJyYXk8VW5pcXVlVmFsdWU+IHtcblx0XHRyZXR1cm4gdGhpcy52YWx1ZXM7XG5cdH1cblxuXHRpc0FsbFNlbGVjdGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmFsbFNlbGVjdGVkO1xuXHR9XG5cblx0aXNBbGxEaXNhYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5hbGxEaXNhYmxlZDtcblx0fVxuXG5cdGdldE5vdFNlbGVjdGVkKCk6IEFycmF5PFVuaXF1ZVZhbHVlPiB7XG5cdFx0cmV0dXJuIHRoaXMudmFsdWVzLmZpbHRlcigodXY6IFVuaXF1ZVZhbHVlKSA9PiB1di5pc0Rpc2FibGVkKCkpO1xuXHR9XG5cblx0c2VsZWN0QWxsKCk6IHZvaWQge1xuXHRcdHRoaXMudmFsdWVzLmZvckVhY2goKHV2OiBVbmlxdWVWYWx1ZSkgPT4ge1xuXHRcdFx0dXYuc2VsZWN0KCk7XG5cdFx0fSk7XG5cdFx0dGhpcy5hbGxTZWxlY3RlZCA9IHRydWU7XG5cdFx0dGhpcy5hbGxEaXNhYmxlZCA9IGZhbHNlO1xuXHR9XG5cblx0c2VsZWN0KHVuaXF1ZVZhbHVlSWQ6IFVuaXF1ZVZhbHVlSWQpOiB2b2lkIHtcblxuXHRcdHRoaXMudmFsdWVzXG5cdFx0XHQuZmlsdGVyKCh1dikgPT4gdXYuZ2V0SWQoKS5lcXVhbHModW5pcXVlVmFsdWVJZCkpXG5cdFx0XHQuZm9yRWFjaCgodXY6IFVuaXF1ZVZhbHVlKSA9PiB7XG5cdFx0XHRcdHV2LnNlbGVjdCgpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLmNhbGN1bGF0ZUFsbFNlbGVjdGVkKCk7XG5cdFx0dGhpcy5jYWxjdWxhdGVBbGxEaXNhYmxlZCgpO1xuXHR9XG5cblx0dW5zZWxlY3RBbGwoKTogdm9pZCB7XG5cdFx0dGhpcy52YWx1ZXMuZm9yRWFjaCgodXY6IFVuaXF1ZVZhbHVlKSA9PiB7XG5cdFx0XHR1di51bnNlbGVjdCgpO1xuXHRcdH0pO1xuXHRcdHRoaXMuYWxsU2VsZWN0ZWQgPSBmYWxzZTtcblx0XHR0aGlzLmFsbERpc2FibGVkID0gdHJ1ZTtcblx0fVxuXG5cdHVuc2VsZWN0KHVuaXF1ZVZhbHVlSWQ6IFVuaXF1ZVZhbHVlSWQpOiB2b2lkIHtcblxuXHRcdHRoaXMudmFsdWVzXG5cdFx0XHQuZmlsdGVyKCh1dikgPT4gdXYuZ2V0SWQoKS5lcXVhbHModW5pcXVlVmFsdWVJZCkpXG5cdFx0XHQuZm9yRWFjaCgodXY6IFVuaXF1ZVZhbHVlKSA9PiB7XG5cdFx0XHRcdHV2LnVuc2VsZWN0KCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuY2FsY3VsYXRlQWxsU2VsZWN0ZWQoKTtcblx0XHR0aGlzLmNhbGN1bGF0ZUFsbERpc2FibGVkKCk7XG5cdH1cblxuXHRwcml2YXRlIGNhbGN1bGF0ZUFsbFNlbGVjdGVkKCk6IHZvaWQge1xuXHRcdHRoaXMuYWxsU2VsZWN0ZWQgPSAhdGhpcy52YWx1ZXMuc29tZSgoZjogVW5pcXVlVmFsdWUpID0+IGYuaXNEaXNhYmxlZCgpKTtcblx0fVxuXG5cdHByaXZhdGUgY2FsY3VsYXRlQWxsRGlzYWJsZWQoKTogdm9pZCB7XG5cdFx0dGhpcy5hbGxEaXNhYmxlZCA9ICF0aGlzLnZhbHVlcy5zb21lKChmOiBVbmlxdWVWYWx1ZSkgPT4gZi5pc0VuYWJsZWQoKSk7XG5cdH1cblxufVxuIl19