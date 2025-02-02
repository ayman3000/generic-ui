import { ListViewCommand } from '../list-view.command';
export class SetListViewModeCommand extends ListViewCommand {
    constructor(listViewId, mode) {
        super(listViewId, 'SetListViewModeCommand');
        this.mode = mode;
    }
    getMode() {
        return this.mode;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LWxpc3Qtdmlldy1tb2RlLmNvbW1hbmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS9saXN0L2NvcmUvZG9tYWluL21vZGUvc2V0LWxpc3Qtdmlldy1tb2RlLmNvbW1hbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBR3ZELE1BQU0sT0FBTyxzQkFBdUIsU0FBUSxlQUFlO0lBRTFELFlBQVksVUFBc0IsRUFDZCxJQUFrQjtRQUNyQyxLQUFLLENBQUMsVUFBVSxFQUFFLHdCQUF3QixDQUFDLENBQUM7UUFEekIsU0FBSSxHQUFKLElBQUksQ0FBYztJQUV0QyxDQUFDO0lBRUQsT0FBTztRQUNOLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNsQixDQUFDO0NBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaXN0Vmlld01vZGUgfSBmcm9tICcuL2xpc3Qtdmlldy1tb2RlJztcbmltcG9ydCB7IExpc3RWaWV3SWQgfSBmcm9tICcuLi9saXN0LXZpZXcuaWQnO1xuaW1wb3J0IHsgTGlzdFZpZXdDb21tYW5kIH0gZnJvbSAnLi4vbGlzdC12aWV3LmNvbW1hbmQnO1xuXG5cbmV4cG9ydCBjbGFzcyBTZXRMaXN0Vmlld01vZGVDb21tYW5kIGV4dGVuZHMgTGlzdFZpZXdDb21tYW5kIHtcblxuXHRjb25zdHJ1Y3RvcihsaXN0Vmlld0lkOiBMaXN0Vmlld0lkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IG1vZGU6IExpc3RWaWV3TW9kZSkge1xuXHRcdHN1cGVyKGxpc3RWaWV3SWQsICdTZXRMaXN0Vmlld01vZGVDb21tYW5kJyk7XG5cdH1cblxuXHRnZXRNb2RlKCk6IExpc3RWaWV3TW9kZSB7XG5cdFx0cmV0dXJuIHRoaXMubW9kZTtcblx0fVxuXG59XG4iXX0=