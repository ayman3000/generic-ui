/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { RowSelectToggleType } from './row-select-toggle-type';
import { RowSelectionMode } from '../../../api/row-selection';
var FormationManager = /** @class */ (function () {
    function FormationManager(selectedRows) {
        this.enabled = true;
        this.mode = RowSelectionMode.SINGLE;
        this.selectedRows = selectedRows;
    }
    /**
     * @return {?}
     */
    FormationManager.prototype.isAllSelected = /**
     * @return {?}
     */
    function () {
        return this.allSelected;
    };
    /**
     * @return {?}
     */
    FormationManager.prototype.isAllUnselected = /**
     * @return {?}
     */
    function () {
        return this.allUnselected;
    };
    /**
     * @param {?} enabled
     * @return {?}
     */
    FormationManager.prototype.setSelection = /**
     * @param {?} enabled
     * @return {?}
     */
    function (enabled) {
        this.enabled = enabled;
    };
    /**
     * @param {?} mode
     * @return {?}
     */
    FormationManager.prototype.setMode = /**
     * @param {?} mode
     * @return {?}
     */
    function (mode) {
        this.mode = mode;
    };
    /**
     * @return {?}
     */
    FormationManager.prototype.getSelectedRows = /**
     * @return {?}
     */
    function () {
        return Array.from(this.selectedRows);
    };
    /**
     * @param {?} allItemIds
     * @return {?}
     */
    FormationManager.prototype.selectAll = /**
     * @param {?} allItemIds
     * @return {?}
     */
    function (allItemIds) {
        this.selectedRows = new Set(allItemIds);
        this.allSelected = true;
        this.allUnselected = false;
    };
    /**
     * @return {?}
     */
    FormationManager.prototype.unselectAll = /**
     * @return {?}
     */
    function () {
        this.selectedRows.clear();
        this.allSelected = false;
        this.allUnselected = true;
    };
    /**
     * @param {?} itemId
     * @param {?} type
     * @param {?} allItemIds
     * @return {?}
     */
    FormationManager.prototype.toggleRow = /**
     * @param {?} itemId
     * @param {?} type
     * @param {?} allItemIds
     * @return {?}
     */
    function (itemId, type, allItemIds) {
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
    };
    /**
     * @param {?} allItemIds
     * @return {?}
     */
    FormationManager.prototype.calculateAllSelected = /**
     * @param {?} allItemIds
     * @return {?}
     */
    function (allItemIds) {
        if (allItemIds.length !== this.selectedRows.size) {
            this.allSelected = false;
        }
        else {
            /** @type {?} */
            var rows = Array.from(this.selectedRows);
            /** @type {?} */
            var equal = true;
            rows.sort();
            allItemIds.sort();
            for (var i = 0; i < rows.length; i += 1) {
                if (rows[i] !== allItemIds[i]) {
                    equal = false;
                    break;
                }
            }
            this.allSelected = equal;
        }
    };
    /**
     * @return {?}
     */
    FormationManager.prototype.calculateAllUnselected = /**
     * @return {?}
     */
    function () {
        this.allUnselected = this.selectedRows.size === 0;
    };
    /**
     * @param {?} itemId
     * @return {?}
     */
    FormationManager.prototype.unselectRow = /**
     * @param {?} itemId
     * @return {?}
     */
    function (itemId) {
        if (this.selectedRows.has(itemId)) {
            this.selectedRows.delete(itemId);
        }
    };
    return FormationManager;
}());
export { FormationManager };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FormationManager.prototype.enabled;
    /**
     * @type {?}
     * @private
     */
    FormationManager.prototype.mode;
    /**
     * @type {?}
     * @private
     */
    FormationManager.prototype.selectedRows;
    /**
     * @type {?}
     * @private
     */
    FormationManager.prototype.allSelected;
    /**
     * @type {?}
     * @private
     */
    FormationManager.prototype.allUnselected;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0aW9uLW1hbmFnZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3VyY2UvY29yZS9kb21haW4vZm9ybWF0aW9uL2NvcmUvZm9ybWF0aW9uLW1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRTlEO0lBWUMsMEJBQVksWUFBeUI7UUFWN0IsWUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixTQUFJLEdBQXFCLGdCQUFnQixDQUFDLE1BQU0sQ0FBQztRQVN4RCxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztJQUNsQyxDQUFDOzs7O0lBRUQsd0NBQWE7OztJQUFiO1FBQ0MsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFRCwwQ0FBZTs7O0lBQWY7UUFDQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFFRCx1Q0FBWTs7OztJQUFaLFVBQWEsT0FBZ0I7UUFDNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFRCxrQ0FBTzs7OztJQUFQLFVBQVEsSUFBc0I7UUFDN0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDbEIsQ0FBQzs7OztJQUVELDBDQUFlOzs7SUFBZjtRQUNDLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7Ozs7SUFFRCxvQ0FBUzs7OztJQUFULFVBQVUsVUFBeUI7UUFDbEMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLEdBQUcsQ0FBUyxVQUFVLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsV0FBVyxH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Q0FBQyxFQUFFO1lBQ2xDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2pDO0lBQ0YsQ0FBQztJQUNGLHVCQUFDO0FBQUQsQ0FBQyxBQTNIRCxJQTJIQzs7Ozs7OztJQXpIQSxtQ0FBZ0M7Ozs7O0lBRWhDLGdDQUF5RDs7Ozs7SUFFekQsd0NBQWtDOzs7OztJQUVsQyx1Q0FBNkI7Ozs7O0lBRTdCLHlDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvd1NlbGVjdFRvZ2dsZVR5cGUgfSBmcm9tICcuL3Jvdy1zZWxlY3QtdG9nZ2xlLXR5cGUnO1xuaW1wb3J0IHsgUm93U2VsZWN0aW9uTW9kZSB9IGZyb20gJy4uLy4uLy4uL2FwaS9yb3ctc2VsZWN0aW9uJztcblxuZXhwb3J0IGNsYXNzIEZvcm1hdGlvbk1hbmFnZXIge1xuXG5cdHByaXZhdGUgZW5hYmxlZDogYm9vbGVhbiA9IHRydWU7XG5cblx0cHJpdmF0ZSBtb2RlOiBSb3dTZWxlY3Rpb25Nb2RlID0gUm93U2VsZWN0aW9uTW9kZS5TSU5HTEU7XG5cblx0cHJpdmF0ZSBzZWxlY3RlZFJvd3M6IFNldDxzdHJpbmc+O1xuXG5cdHByaXZhdGUgYWxsU2VsZWN0ZWQ6IGJvb2xlYW47XG5cblx0cHJpdmF0ZSBhbGxVbnNlbGVjdGVkOiBib29sZWFuO1xuXG5cdGNvbnN0cnVjdG9yKHNlbGVjdGVkUm93czogU2V0PHN0cmluZz4pIHtcblx0XHR0aGlzLnNlbGVjdGVkUm93cyA9IHNlbGVjdGVkUm93cztcblx0fVxuXG5cdGlzQWxsU2VsZWN0ZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuYWxsU2VsZWN0ZWQ7XG5cdH1cblxuXHRpc0FsbFVuc2VsZWN0ZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuYWxsVW5zZWxlY3RlZDtcblx0fVxuXG5cdHNldFNlbGVjdGlvbihlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy5lbmFibGVkID0gZW5hYmxlZDtcblx0fVxuXG5cdHNldE1vZGUobW9kZTogUm93U2VsZWN0aW9uTW9kZSk6IHZvaWQge1xuXHRcdHRoaXMubW9kZSA9IG1vZGU7XG5cdH1cblxuXHRnZXRTZWxlY3RlZFJvd3MoKTogQXJyYXk8c3RyaW5nPiB7XG5cdFx0cmV0dXJuIEFycmF5LmZyb20odGhpcy5zZWxlY3RlZFJvd3MpO1xuXHR9XG5cblx0c2VsZWN0QWxsKGFsbEl0ZW1JZHM6IEFycmF5PHN0cmluZz4pOiB2b2lkIHtcblx0XHR0aGlzLnNlbGVjdGVkUm93cyA9IG5ldyBTZXQ8c3RyaW5nPihhbGxJdGVtSWRzKTtcblx0XHR0aGlzLmFsbFNlbGVjdGVkID0gdHJ1ZTtcblx0XHR0aGlzLmFsbFVuc2VsZWN0ZWQgPSBmYWxzZTtcblx0fVxuXG5cdHVuc2VsZWN0QWxsKCk6IHZvaWQge1xuXHRcdHRoaXMuc2VsZWN0ZWRSb3dzLmNsZWFyKCk7XG5cdFx0dGhpcy5hbGxTZWxlY3RlZCA9IGZhbHNlO1xuXHRcdHRoaXMuYWxsVW5zZWxlY3RlZCA9IHRydWU7XG5cdH1cblxuXHR0b2dnbGVSb3coaXRlbUlkOiBzdHJpbmcsIHR5cGU6IFJvd1NlbGVjdFRvZ2dsZVR5cGUsIGFsbEl0ZW1JZHM6IEFycmF5PHN0cmluZz4pOiB2b2lkIHtcblxuXHRcdGlmICghdGhpcy5lbmFibGVkKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKHR5cGUgPT09IFJvd1NlbGVjdFRvZ2dsZVR5cGUuQUREICYmIHRoaXMubW9kZSA9PT0gUm93U2VsZWN0aW9uTW9kZS5TSU5HTEUpIHtcblx0XHRcdHR5cGUgPSBSb3dTZWxlY3RUb2dnbGVUeXBlLk5PTkU7XG5cdFx0fVxuXG5cdFx0c3dpdGNoICh0eXBlKSB7XG5cdFx0XHRjYXNlIFJvd1NlbGVjdFRvZ2dsZVR5cGUuTk9ORTpcblxuXHRcdFx0XHRpZiAodGhpcy5zZWxlY3RlZFJvd3MuaGFzKGl0ZW1JZCkpIHtcblx0XHRcdFx0XHR0aGlzLnNlbGVjdGVkUm93cy5kZWxldGUoaXRlbUlkKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLnNlbGVjdGVkUm93cy5jbGVhcigpO1xuXHRcdFx0XHRcdHRoaXMuc2VsZWN0ZWRSb3dzLmFkZChpdGVtSWQpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgUm93U2VsZWN0VG9nZ2xlVHlwZS5BREQ6XG5cblx0XHRcdFx0aWYgKHRoaXMuc2VsZWN0ZWRSb3dzLmhhcyhpdGVtSWQpKSB7XG5cdFx0XHRcdFx0dGhpcy5zZWxlY3RlZFJvd3MuZGVsZXRlKGl0ZW1JZCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5zZWxlY3RlZFJvd3MuYWRkKGl0ZW1JZCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBSb3dTZWxlY3RUb2dnbGVUeXBlLlJBTkdFOlxuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cblx0XHR0aGlzLmNhbGN1bGF0ZUFsbFNlbGVjdGVkKGFsbEl0ZW1JZHMpO1xuXHRcdHRoaXMuY2FsY3VsYXRlQWxsVW5zZWxlY3RlZCgpO1xuXHR9XG5cblx0Y2FsY3VsYXRlQWxsU2VsZWN0ZWQoYWxsSXRlbUlkczogQXJyYXk8c3RyaW5nPik6IHZvaWQge1xuXHRcdGlmIChhbGxJdGVtSWRzLmxlbmd0aCAhPT0gdGhpcy5zZWxlY3RlZFJvd3Muc2l6ZSkge1xuXHRcdFx0dGhpcy5hbGxTZWxlY3RlZCA9IGZhbHNlO1xuXHRcdH0gZWxzZSB7XG5cblx0XHRcdGNvbnN0IHJvd3MgPSBBcnJheS5mcm9tKHRoaXMuc2VsZWN0ZWRSb3dzKTtcblx0XHRcdGxldCBlcXVhbCA9IHRydWU7XG5cblx0XHRcdHJvd3Muc29ydCgpO1xuXHRcdFx0YWxsSXRlbUlkcy5zb3J0KCk7XG5cblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgcm93cy5sZW5ndGg7IGkgKz0gMSkge1xuXHRcdFx0XHRpZiAocm93c1tpXSAhPT0gYWxsSXRlbUlkc1tpXSkge1xuXHRcdFx0XHRcdGVxdWFsID0gZmFsc2U7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0dGhpcy5hbGxTZWxlY3RlZCA9IGVxdWFsO1xuXHRcdH1cblx0fVxuXG5cdGNhbGN1bGF0ZUFsbFVuc2VsZWN0ZWQoKTogdm9pZCB7XG5cdFx0dGhpcy5hbGxVbnNlbGVjdGVkID0gdGhpcy5zZWxlY3RlZFJvd3Muc2l6ZSA9PT0gMDtcblx0fVxuXG5cdHVuc2VsZWN0Um93KGl0ZW1JZDogc3RyaW5nKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuc2VsZWN0ZWRSb3dzLmhhcyhpdGVtSWQpKSB7XG5cdFx0XHR0aGlzLnNlbGVjdGVkUm93cy5kZWxldGUoaXRlbUlkKTtcblx0XHR9XG5cdH1cbn1cbiJdfQ==