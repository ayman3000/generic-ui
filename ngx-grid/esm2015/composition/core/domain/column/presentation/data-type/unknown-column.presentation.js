import { ColumnPresentation } from '../column.presentation';
import { ColumnAlign } from '../../column-align';
import { CellView } from '../../cell-view';
export class UnknownColumnPresentation extends ColumnPresentation {
    constructor() {
        super();
    }
    static getInstance() {
        if (!UnknownColumnPresentation.instance) {
            UnknownColumnPresentation.instance = new UnknownColumnPresentation();
        }
        return UnknownColumnPresentation.instance;
    }
    getPossibleViews() {
        return [
            CellView.TEXT
        ];
    }
    getDefaultView() {
        return CellView.TEXT;
    }
    getDefaultAlign() {
        return ColumnAlign.LEFT;
    }
}
UnknownColumnPresentation.instance = null;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5rbm93bi1jb2x1bW4ucHJlc2VudGF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9jb21wb3NpdGlvbi9jb3JlL2RvbWFpbi9jb2x1bW4vcHJlc2VudGF0aW9uL2RhdGEtdHlwZS91bmtub3duLWNvbHVtbi5wcmVzZW50YXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUczQyxNQUFNLE9BQU8seUJBQTBCLFNBQVEsa0JBQWtCO0lBSWhFO1FBQ0MsS0FBSyxFQUFFLENBQUM7SUFDVCxDQUFDO0lBRUQsTUFBTSxDQUFDLFdBQVc7UUFDakIsSUFBSSxDQUFDLHlCQUF5QixDQUFDLFFBQVEsRUFBRTtZQUN4Qyx5QkFBeUIsQ0FBQyxRQUFRLEdBQUcsSUFBSSx5QkFBeUIsRUFBRSxDQUFDO1NBQ3JFO1FBQ0QsT0FBTyx5QkFBeUIsQ0FBQyxRQUFRLENBQUM7SUFDM0MsQ0FBQztJQUVELGdCQUFnQjtRQUNmLE9BQU87WUFDTixRQUFRLENBQUMsSUFBSTtTQUNiLENBQUM7SUFDSCxDQUFDO0lBRUQsY0FBYztRQUNiLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQztJQUN0QixDQUFDO0lBRUQsZUFBZTtRQUNkLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQztJQUN6QixDQUFDOztBQXpCYyxrQ0FBUSxHQUE4QixJQUFJLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2x1bW5QcmVzZW50YXRpb24gfSBmcm9tICcuLi9jb2x1bW4ucHJlc2VudGF0aW9uJztcbmltcG9ydCB7IENvbHVtbkFsaWduIH0gZnJvbSAnLi4vLi4vY29sdW1uLWFsaWduJztcbmltcG9ydCB7IENlbGxWaWV3IH0gZnJvbSAnLi4vLi4vY2VsbC12aWV3JztcblxuXG5leHBvcnQgY2xhc3MgVW5rbm93bkNvbHVtblByZXNlbnRhdGlvbiBleHRlbmRzIENvbHVtblByZXNlbnRhdGlvbiB7XG5cblx0cHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IFVua25vd25Db2x1bW5QcmVzZW50YXRpb24gPSBudWxsO1xuXG5cdHByaXZhdGUgY29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBVbmtub3duQ29sdW1uUHJlc2VudGF0aW9uIHtcblx0XHRpZiAoIVVua25vd25Db2x1bW5QcmVzZW50YXRpb24uaW5zdGFuY2UpIHtcblx0XHRcdFVua25vd25Db2x1bW5QcmVzZW50YXRpb24uaW5zdGFuY2UgPSBuZXcgVW5rbm93bkNvbHVtblByZXNlbnRhdGlvbigpO1xuXHRcdH1cblx0XHRyZXR1cm4gVW5rbm93bkNvbHVtblByZXNlbnRhdGlvbi5pbnN0YW5jZTtcblx0fVxuXG5cdGdldFBvc3NpYmxlVmlld3MoKTogQXJyYXk8Q2VsbFZpZXc+IHtcblx0XHRyZXR1cm4gW1xuXHRcdFx0Q2VsbFZpZXcuVEVYVFxuXHRcdF07XG5cdH1cblxuXHRnZXREZWZhdWx0VmlldygpOiBDZWxsVmlldyB7XG5cdFx0cmV0dXJuIENlbGxWaWV3LlRFWFQ7XG5cdH1cblxuXHRnZXREZWZhdWx0QWxpZ24oKTogQ29sdW1uQWxpZ24ge1xuXHRcdHJldHVybiBDb2x1bW5BbGlnbi5MRUZUO1xuXHR9XG59XG4iXX0=