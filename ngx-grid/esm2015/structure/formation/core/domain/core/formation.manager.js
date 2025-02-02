import { RowSelectToggleType } from './row-select-toggle-type';
import { RowSelectionMode } from '../../api/row-selected/row-selection';
export class FormationManager {
    constructor(selectedRows) {
        this.enabled = true;
        this.mode = RowSelectionMode.SINGLE;
        this.selectedRows = selectedRows;
    }
    isAllSelected() {
        return this.allSelected;
    }
    isAllUnselected() {
        return this.allUnselected;
    }
    setSelection(enabled) {
        this.enabled = enabled;
    }
    setMode(mode) {
        this.mode = mode;
    }
    getSelectedRows() {
        return Array.from(this.selectedRows);
    }
    selectAll(allItemIds) {
        this.selectedRows = new Set(allItemIds);
        this.allSelected = true;
        this.allUnselected = false;
    }
    unselectAll() {
        this.selectedRows.clear();
        this.allSelected = false;
        this.allUnselected = true;
    }
    toggleRow(itemId, type, allItemIds) {
        if (!this.enabled) {
            return;
        }
        if (type === RowSelectToggleType.ADD && this.mode === RowSelectionMode.SINGLE) {
            type = RowSelectToggleType.NONE;
        }
        switch (type) {
            case RowSelectToggleType.NONE:
                if (this.selectedRows.has(itemId)) {
                    this.selectedRows.delete(itemId);
                }
                else {
                    this.selectedRows.clear();
                    this.selectedRows.add(itemId);
                }
                break;
            case RowSelectToggleType.ADD:
                if (this.selectedRows.has(itemId)) {
                    this.selectedRows.delete(itemId);
                }
                else {
                    this.selectedRows.add(itemId);
                }
                break;
            case RowSelectToggleType.RANGE:
                break;
            default:
                break;
        }
        this.calculateAllSelected(allItemIds);
        this.calculateAllUnselected();
    }
    calculateAllSelected(allItemIds) {
        if (allItemIds.length !== this.selectedRows.size) {
            this.allSelected = false;
        }
        else {
            const rows = Array.from(this.selectedRows);
            let equal = true;
            rows.sort();
            allItemIds.sort();
            for (let i = 0; i < rows.length; i += 1) {
                if (rows[i] !== allItemIds[i]) {
                    equal = false;
                    break;
                }
            }
            this.allSelected = equal;
        }
    }
    calculateAllUnselected() {
        this.allUnselected = this.selectedRows.size === 0;
    }
    unselectRow(itemId) {
        if (this.selectedRows.has(itemId)) {
            this.selectedRows.delete(itemId);
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0aW9uLm1hbmFnZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL3N0cnVjdHVyZS9mb3JtYXRpb24vY29yZS9kb21haW4vY29yZS9mb3JtYXRpb24ubWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUV4RSxNQUFNLE9BQU8sZ0JBQWdCO0lBWTVCLFlBQVksWUFBeUI7UUFWN0IsWUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixTQUFJLEdBQXFCLGdCQUFnQixDQUFDLE1BQU0sQ0FBQztRQVN4RCxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztJQUNsQyxDQUFDO0lBRUQsYUFBYTtRQUNaLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN6QixDQUFDO0lBRUQsZUFBZTtRQUNkLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUMzQixDQUFDO0lBRUQsWUFBWSxDQUFDLE9BQWdCO1FBQzVCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3hCLENBQUM7SUFFRCxPQUFPLENBQUMsSUFBc0I7UUFDN0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDbEIsQ0FBQztJQUVELGVBQWU7UUFDZCxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxTQUFTLENBQUMsVUFBeUI7UUFDbEMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLEdBQUcsQ0FBUyxVQUFVLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsYUFBYSxHQUFH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Y2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3dTZWxlY3RUb2dnbGVUeXBlIH0gZnJvbSAnLi9yb3ctc2VsZWN0LXRvZ2dsZS10eXBlJztcbmltcG9ydCB7IFJvd1NlbGVjdGlvbk1vZGUgfSBmcm9tICcuLi8uLi9hcGkvcm93LXNlbGVjdGVkL3Jvdy1zZWxlY3Rpb24nO1xuXG5leHBvcnQgY2xhc3MgRm9ybWF0aW9uTWFuYWdlciB7XG5cblx0cHJpdmF0ZSBlbmFibGVkOiBib29sZWFuID0gdHJ1ZTtcblxuXHRwcml2YXRlIG1vZGU6IFJvd1NlbGVjdGlvbk1vZGUgPSBSb3dTZWxlY3Rpb25Nb2RlLlNJTkdMRTtcblxuXHRwcml2YXRlIHNlbGVjdGVkUm93czogU2V0PHN0cmluZz47XG5cblx0cHJpdmF0ZSBhbGxTZWxlY3RlZDogYm9vbGVhbjtcblxuXHRwcml2YXRlIGFsbFVuc2VsZWN0ZWQ6IGJvb2xlYW47XG5cblx0Y29uc3RydWN0b3Ioc2VsZWN0ZWRSb3dzOiBTZXQ8c3RyaW5nPikge1xuXHRcdHRoaXMuc2VsZWN0ZWRSb3dzID0gc2VsZWN0ZWRSb3dzO1xuXHR9XG5cblx0aXNBbGxTZWxlY3RlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5hbGxTZWxlY3RlZDtcblx0fVxuXG5cdGlzQWxsVW5zZWxlY3RlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5hbGxVbnNlbGVjdGVkO1xuXHR9XG5cblx0c2V0U2VsZWN0aW9uKGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLmVuYWJsZWQgPSBlbmFibGVkO1xuXHR9XG5cblx0c2V0TW9kZShtb2RlOiBSb3dTZWxlY3Rpb25Nb2RlKTogdm9pZCB7XG5cdFx0dGhpcy5tb2RlID0gbW9kZTtcblx0fVxuXG5cdGdldFNlbGVjdGVkUm93cygpOiBBcnJheTxzdHJpbmc+IHtcblx0XHRyZXR1cm4gQXJyYXkuZnJvbSh0aGlzLnNlbGVjdGVkUm93cyk7XG5cdH1cblxuXHRzZWxlY3RBbGwoYWxsSXRlbUlkczogQXJyYXk8c3RyaW5nPik6IHZvaWQge1xuXHRcdHRoaXMuc2VsZWN0ZWRSb3dzID0gbmV3IFNldDxzdHJpbmc+KGFsbEl0ZW1JZHMpO1xuXHRcdHRoaXMuYWxsU2VsZWN0ZWQgPSB0cnVlO1xuXHRcdHRoaXMuYWxsVW5zZWxlY3RlZCA9IGZhbHNlO1xuXHR9XG5cblx0dW5zZWxlY3RBbGwoKTogdm9pZCB7XG5cdFx0dGhpcy5zZWxlY3RlZFJvd3MuY2xlYXIoKTtcblx0XHR0aGlzLmFsbFNlbGVjdGVkID0gZmFsc2U7XG5cdFx0dGhpcy5hbGxVbnNlbGVjdGVkID0gdHJ1ZTtcblx0fVxuXG5cdHRvZ2dsZVJvdyhpdGVtSWQ6IHN0cmluZywgdHlwZTogUm93U2VsZWN0VG9nZ2xlVHlwZSwgYWxsSXRlbUlkczogQXJyYXk8c3RyaW5nPik6IHZvaWQge1xuXG5cdFx0aWYgKCF0aGlzLmVuYWJsZWQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAodHlwZSA9PT0gUm93U2VsZWN0VG9nZ2xlVHlwZS5BREQgJiYgdGhpcy5tb2RlID09PSBSb3dTZWxlY3Rpb25Nb2RlLlNJTkdMRSkge1xuXHRcdFx0dHlwZSA9IFJvd1NlbGVjdFRvZ2dsZVR5cGUuTk9ORTtcblx0XHR9XG5cblx0XHRzd2l0Y2ggKHR5cGUpIHtcblx0XHRcdGNhc2UgUm93U2VsZWN0VG9nZ2xlVHlwZS5OT05FOlxuXG5cdFx0XHRcdGlmICh0aGlzLnNlbGVjdGVkUm93cy5oYXMoaXRlbUlkKSkge1xuXHRcdFx0XHRcdHRoaXMuc2VsZWN0ZWRSb3dzLmRlbGV0ZShpdGVtSWQpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuc2VsZWN0ZWRSb3dzLmNsZWFyKCk7XG5cdFx0XHRcdFx0dGhpcy5zZWxlY3RlZFJvd3MuYWRkKGl0ZW1JZCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBSb3dTZWxlY3RUb2dnbGVUeXBlLkFERDpcblxuXHRcdFx0XHRpZiAodGhpcy5zZWxlY3RlZFJvd3MuaGFzKGl0ZW1JZCkpIHtcblx0XHRcdFx0XHR0aGlzLnNlbGVjdGVkUm93cy5kZWxldGUoaXRlbUlkKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLnNlbGVjdGVkUm93cy5hZGQoaXRlbUlkKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIFJvd1NlbGVjdFRvZ2dsZVR5cGUuUkFOR0U6XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHRcdHRoaXMuY2FsY3VsYXRlQWxsU2VsZWN0ZWQoYWxsSXRlbUlkcyk7XG5cdFx0dGhpcy5jYWxjdWxhdGVBbGxVbnNlbGVjdGVkKCk7XG5cdH1cblxuXHRjYWxjdWxhdGVBbGxTZWxlY3RlZChhbGxJdGVtSWRzOiBBcnJheTxzdHJpbmc+KTogdm9pZCB7XG5cdFx0aWYgKGFsbEl0ZW1JZHMubGVuZ3RoICE9PSB0aGlzLnNlbGVjdGVkUm93cy5zaXplKSB7XG5cdFx0XHR0aGlzLmFsbFNlbGVjdGVkID0gZmFsc2U7XG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0Y29uc3Qgcm93cyA9IEFycmF5LmZyb20odGhpcy5zZWxlY3RlZFJvd3MpO1xuXHRcdFx0bGV0IGVxdWFsID0gdHJ1ZTtcblxuXHRcdFx0cm93cy5zb3J0KCk7XG5cdFx0XHRhbGxJdGVtSWRzLnNvcnQoKTtcblxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCByb3dzLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0XHRcdGlmIChyb3dzW2ldICE9PSBhbGxJdGVtSWRzW2ldKSB7XG5cdFx0XHRcdFx0ZXF1YWwgPSBmYWxzZTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLmFsbFNlbGVjdGVkID0gZXF1YWw7XG5cdFx0fVxuXHR9XG5cblx0Y2FsY3VsYXRlQWxsVW5zZWxlY3RlZCgpOiB2b2lkIHtcblx0XHR0aGlzLmFsbFVuc2VsZWN0ZWQgPSB0aGlzLnNlbGVjdGVkUm93cy5zaXplID09PSAwO1xuXHR9XG5cblx0dW5zZWxlY3RSb3coaXRlbUlkOiBzdHJpbmcpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5zZWxlY3RlZFJvd3MuaGFzKGl0ZW1JZCkpIHtcblx0XHRcdHRoaXMuc2VsZWN0ZWRSb3dzLmRlbGV0ZShpdGVtSWQpO1xuXHRcdH1cblx0fVxufVxuIl19