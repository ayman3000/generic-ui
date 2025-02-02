import { AggregateRoot } from '@generic-ui/hermes';
import { SchemaTheme } from '../api/theme/schema-theme';
import { SchemaRowColoring } from '../api/row-coloring/schema-row-coloring';
import { SchemaThemeSetAggregateEvent } from './theme/schema-theme-set.aggregate-event';
import { RowColoringSetAggregateEvent } from './row-coloring/row-coloring-set.aggregate-event';
import { SchemaVerticalGridSetAggregateEvent } from './grid/vertical/schema-vertical-grid-set.aggregate-event';
import { SchemaHorizontalGridSetAggregateEvent } from './grid/horizontal/schema-horizontal-grid-set.aggregate-event';
import { SchemaCreatedAggregateEvent } from './create/schema-created.aggregate-event';
export class SchemaAggregate extends AggregateRoot {
    constructor(id) {
        super(id, 'SchemaAggregate');
        this.setTheme(SchemaAggregate.DEFAULT_THEME);
        this.setHorizontalGrid(SchemaAggregate.DEFAULT_HORIZONTAL_GRID);
        this.setVerticalGrid(SchemaAggregate.DEFAULT_VERTICAL_GRID);
        this.setRowColoring(SchemaAggregate.DEFAULT_ROW_COLORING);
    }
    createEvent() {
        return SchemaCreatedAggregateEvent;
    }
    changeTheme(theme) {
        this.setTheme(theme);
        if (theme === SchemaTheme.MATERIAL) {
            this.setRowColoring(SchemaRowColoring.NONE);
            this.setVerticalGrid(false);
        }
        if (theme === SchemaTheme.LIGHT) {
            this.setRowColoring(SchemaRowColoring.NONE);
            this.setVerticalGrid(false);
        }
        if (theme === SchemaTheme.DARK) {
            this.setRowColoring(SchemaRowColoring.NONE);
            this.setVerticalGrid(false);
        }
        if (theme === SchemaTheme.GENERIC) {
            this.setRowColoring(SchemaRowColoring.ODD);
        }
    }
    setRowColoring(coloring) {
        this.rowColoring = coloring;
        this.addEvent(new RowColoringSetAggregateEvent(this.getId(), this.rowColoring));
    }
    setVerticalGrid(enabled) {
        this.verticalGrid = enabled;
        this.addEvent(new SchemaVerticalGridSetAggregateEvent(this.getId(), this.verticalGrid));
    }
    setHorizontalGrid(enabled) {
        this.horizontalGrid = enabled;
        this.addEvent(new SchemaHorizontalGridSetAggregateEvent(this.getId(), this.horizontalGrid));
    }
    setTheme(theme) {
        this.theme = theme;
        this.addEvent(new SchemaThemeSetAggregateEvent(this.getId(), this.theme));
    }
}
SchemaAggregate.DEFAULT_THEME = SchemaTheme.GENERIC;
SchemaAggregate.DEFAULT_ROW_COLORING = SchemaRowColoring.ODD;
SchemaAggregate.DEFAULT_VERTICAL_GRID = true;
SchemaAggregate.DEFAULT_HORIZONTAL_GRID = true;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmFnZ3JlZ2F0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvc2NoZW1hL2NvcmUvZG9tYWluL3NjaGVtYS5hZ2dyZWdhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFzQyxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUd2RixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDNUUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDeEYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDL0YsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sMERBQTBELENBQUM7QUFDL0csT0FBTyxFQUFFLHFDQUFxQyxFQUFFLE1BQU0sOERBQThELENBQUM7QUFDckgsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFHdEYsTUFBTSxPQUFPLGVBQWdCLFNBQVEsYUFBdUI7SUFrQjNELFlBQVksRUFBWTtRQUN2QixLQUFLLENBQUMsRUFBRSxFQUFFLGlCQUFpQixDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQsV0FBVztRQUNWLE9BQU8sMkJBQTJCLENBQUM7SUFDcEMsQ0FBQztJQUVELFdBQVcsQ0FBQyxLQUFrQjtRQUM3QixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXJCLElBQUksS0FBSyxLQUFLLFdBQVcsQ0FBQyxRQUFRLEVBQUU7WUFDbkMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM1QyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzVCO1FBRUQsSUFBSSxLQUFLLEtBQUssV0FBVyxDQUFDLEtBQUssRUFBRTtZQUNoQyxJQUFJLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzVDLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDNUI7UUFFRCxJQUFJLEtBQUssS0FBSyxXQUFXLENBQUMsSUFBSSxFQUFFO1lBQy9CLElBQUksQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDNUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM1QjtRQUVELElBQUksS0FBSyxLQUFLLFdBQVcsQ0FBQyxPQUFPLEVBQUU7WUFDbEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUMzQztJQUNGLENBQUM7SUFFRCxjQUFjLENBQUMsUUFBMkI7UUFDekMsSUFBSSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUM7UUFDNUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLDRCQUE0QixDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUNqRixDQUFDO0lBRUQsZUFBZSxDQUFDLE9BQWdCO1FBQy9CLElBQUksQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDO1FBQzVCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxtQ0FBbUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDekYsQ0FBQztJQUVELGlCQUFpQixDQUFDLE9BQWdCO1FBQ2pDLElBQUksQ0FBQyxjQUFjLEdBQUcsT0FBTyxDQUFDO1FBQzlCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxxQ0FBcUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFDN0YsQ0FBQztJQUVPLFFBQVEsQ0FBQyxLQUFrQjtRQUNsQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksNEJBQTRCLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzNFLENBQUM7O0FBckVlLDZCQUFhLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQztBQUVwQyxvQ0FBb0IsR0FBRyxpQkFBaUIsQ0FBQyxHQUFHLENBQUM7QUFFN0MscUNBQXFCLEdBQUcsSUFBSSxDQUFDO0FBRTdCLHVDQUF1QixHQUFHLElBQUksQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUV2ZW50LCBBZ2dyZWdhdGVFdmVudFR5cGUsIEFnZ3JlZ2F0ZVJvb3QgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTY2hlbWFJZCB9IGZyb20gJy4vc2NoZW1hLmlkJztcbmltcG9ydCB7IFNjaGVtYVRoZW1lIH0gZnJvbSAnLi4vYXBpL3RoZW1lL3NjaGVtYS10aGVtZSc7XG5pbXBvcnQgeyBTY2hlbWFSb3dDb2xvcmluZyB9IGZyb20gJy4uL2FwaS9yb3ctY29sb3Jpbmcvc2NoZW1hLXJvdy1jb2xvcmluZyc7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZVNldEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi90aGVtZS9zY2hlbWEtdGhlbWUtc2V0LmFnZ3JlZ2F0ZS1ldmVudCc7XG5pbXBvcnQgeyBSb3dDb2xvcmluZ1NldEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi9yb3ctY29sb3Jpbmcvcm93LWNvbG9yaW5nLXNldC5hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgU2NoZW1hVmVydGljYWxHcmlkU2V0QWdncmVnYXRlRXZlbnQgfSBmcm9tICcuL2dyaWQvdmVydGljYWwvc2NoZW1hLXZlcnRpY2FsLWdyaWQtc2V0LmFnZ3JlZ2F0ZS1ldmVudCc7XG5pbXBvcnQgeyBTY2hlbWFIb3Jpem9udGFsR3JpZFNldEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi9ncmlkL2hvcml6b250YWwvc2NoZW1hLWhvcml6b250YWwtZ3JpZC1zZXQuYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IFNjaGVtYUNyZWF0ZWRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4vY3JlYXRlL3NjaGVtYS1jcmVhdGVkLmFnZ3JlZ2F0ZS1ldmVudCc7XG5cblxuZXhwb3J0IGNsYXNzIFNjaGVtYUFnZ3JlZ2F0ZSBleHRlbmRzIEFnZ3JlZ2F0ZVJvb3Q8U2NoZW1hSWQ+IHtcblxuXHRzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9USEVNRSA9IFNjaGVtYVRoZW1lLkdFTkVSSUM7XG5cblx0c3RhdGljIHJlYWRvbmx5IERFRkFVTFRfUk9XX0NPTE9SSU5HID0gU2NoZW1hUm93Q29sb3JpbmcuT0REO1xuXG5cdHN0YXRpYyByZWFkb25seSBERUZBVUxUX1ZFUlRJQ0FMX0dSSUQgPSB0cnVlO1xuXG5cdHN0YXRpYyByZWFkb25seSBERUZBVUxUX0hPUklaT05UQUxfR1JJRCA9IHRydWU7XG5cblx0cHJpdmF0ZSBob3Jpem9udGFsR3JpZDogYm9vbGVhbjtcblxuXHRwcml2YXRlIHZlcnRpY2FsR3JpZDogYm9vbGVhbjtcblxuXHRwcml2YXRlIHRoZW1lOiBTY2hlbWFUaGVtZTtcblxuXHRwcml2YXRlIHJvd0NvbG9yaW5nOiBTY2hlbWFSb3dDb2xvcmluZztcblxuXHRjb25zdHJ1Y3RvcihpZDogU2NoZW1hSWQpIHtcblx0XHRzdXBlcihpZCwgJ1NjaGVtYUFnZ3JlZ2F0ZScpO1xuXHRcdHRoaXMuc2V0VGhlbWUoU2NoZW1hQWdncmVnYXRlLkRFRkFVTFRfVEhFTUUpO1xuXHRcdHRoaXMuc2V0SG9yaXpvbnRhbEdyaWQoU2NoZW1hQWdncmVnYXRlLkRFRkFVTFRfSE9SSVpPTlRBTF9HUklEKTtcblx0XHR0aGlzLnNldFZlcnRpY2FsR3JpZChTY2hlbWFBZ2dyZWdhdGUuREVGQVVMVF9WRVJUSUNBTF9HUklEKTtcblx0XHR0aGlzLnNldFJvd0NvbG9yaW5nKFNjaGVtYUFnZ3JlZ2F0ZS5ERUZBVUxUX1JPV19DT0xPUklORyk7XG5cdH1cblxuXHRjcmVhdGVFdmVudCgpOiBBZ2dyZWdhdGVFdmVudFR5cGU8QWdncmVnYXRlRXZlbnQ8U2NoZW1hSWQ+PiB7XG5cdFx0cmV0dXJuIFNjaGVtYUNyZWF0ZWRBZ2dyZWdhdGVFdmVudDtcblx0fVxuXG5cdGNoYW5nZVRoZW1lKHRoZW1lOiBTY2hlbWFUaGVtZSk6IHZvaWQge1xuXHRcdHRoaXMuc2V0VGhlbWUodGhlbWUpO1xuXG5cdFx0aWYgKHRoZW1lID09PSBTY2hlbWFUaGVtZS5NQVRFUklBTCkge1xuXHRcdFx0dGhpcy5zZXRSb3dDb2xvcmluZyhTY2hlbWFSb3dDb2xvcmluZy5OT05FKTtcblx0XHRcdHRoaXMuc2V0VmVydGljYWxHcmlkKGZhbHNlKTtcblx0XHR9XG5cblx0XHRpZiAodGhlbWUgPT09IFNjaGVtYVRoZW1lLkxJR0hUKSB7XG5cdFx0XHR0aGlzLnNldFJvd0NvbG9yaW5nKFNjaGVtYVJvd0NvbG9yaW5nLk5PTkUpO1xuXHRcdFx0dGhpcy5zZXRWZXJ0aWNhbEdyaWQoZmFsc2UpO1xuXHRcdH1cblxuXHRcdGlmICh0aGVtZSA9PT0gU2NoZW1hVGhlbWUuREFSSykge1xuXHRcdFx0dGhpcy5zZXRSb3dDb2xvcmluZyhTY2hlbWFSb3dDb2xvcmluZy5OT05FKTtcblx0XHRcdHRoaXMuc2V0VmVydGljYWxHcmlkKGZhbHNlKTtcblx0XHR9XG5cblx0XHRpZiAodGhlbWUgPT09IFNjaGVtYVRoZW1lLkdFTkVSSUMpIHtcblx0XHRcdHRoaXMuc2V0Um93Q29sb3JpbmcoU2NoZW1hUm93Q29sb3JpbmcuT0REKTtcblx0XHR9XG5cdH1cblxuXHRzZXRSb3dDb2xvcmluZyhjb2xvcmluZzogU2NoZW1hUm93Q29sb3JpbmcpOiB2b2lkIHtcblx0XHR0aGlzLnJvd0NvbG9yaW5nID0gY29sb3Jpbmc7XG5cdFx0dGhpcy5hZGRFdmVudChuZXcgUm93Q29sb3JpbmdTZXRBZ2dyZWdhdGVFdmVudCh0aGlzLmdldElkKCksIHRoaXMucm93Q29sb3JpbmcpKTtcblx0fVxuXG5cdHNldFZlcnRpY2FsR3JpZChlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy52ZXJ0aWNhbEdyaWQgPSBlbmFibGVkO1xuXHRcdHRoaXMuYWRkRXZlbnQobmV3IFNjaGVtYVZlcnRpY2FsR3JpZFNldEFnZ3JlZ2F0ZUV2ZW50KHRoaXMuZ2V0SWQoKSwgdGhpcy52ZXJ0aWNhbEdyaWQpKTtcblx0fVxuXG5cdHNldEhvcml6b250YWxHcmlkKGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLmhvcml6b250YWxHcmlkID0gZW5hYmxlZDtcblx0XHR0aGlzLmFkZEV2ZW50KG5ldyBTY2hlbWFIb3Jpem9udGFsR3JpZFNldEFnZ3JlZ2F0ZUV2ZW50KHRoaXMuZ2V0SWQoKSwgdGhpcy5ob3Jpem9udGFsR3JpZCkpO1xuXHR9XG5cblx0cHJpdmF0ZSBzZXRUaGVtZSh0aGVtZTogU2NoZW1hVGhlbWUpOiB2b2lkIHtcblx0XHR0aGlzLnRoZW1lID0gdGhlbWU7XG5cdFx0dGhpcy5hZGRFdmVudChuZXcgU2NoZW1hVGhlbWVTZXRBZ2dyZWdhdGVFdmVudCh0aGlzLmdldElkKCksIHRoaXMudGhlbWUpKTtcblx0fVxufVxuIl19