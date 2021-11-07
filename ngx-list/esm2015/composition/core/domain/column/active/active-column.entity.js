import { ColumnEntity } from '../column.entity';
export class ActiveColumnEntity extends ColumnEntity {
    constructor(columnId, columnField, header, align, view, config, presentation) {
        super(columnId, columnField, config, true, presentation, header, align, view, undefined);
    }
    static fromEntity(entity) {
        return new ActiveColumnEntity(entity.getId(), entity.getField(), entity.getHeader(), entity.getAlign(), entity.getView(), entity.getColumnConfig(), entity.getPresentation());
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWNvbHVtbi5lbnRpdHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2NvbXBvc2l0aW9uL2NvcmUvZG9tYWluL2NvbHVtbi9hY3RpdmUvYWN0aXZlLWNvbHVtbi5lbnRpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0EsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBSWhELE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxZQUFZO0lBRW5ELFlBQW9CLFFBQWtCLEVBQ2pDLFdBQXdCLEVBQ3hCLE1BQStCLEVBQy9CLEtBQWtCLEVBQ2xCLElBQWdCLEVBQ2hCLE1BQW9CLEVBQ3BCLFlBQWdDO1FBQ3BDLEtBQUssQ0FDSixRQUFRLEVBQ1IsV0FBVyxFQUNYLE1BQU0sRUFDTixJQUFJLEVBQ0osWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBQ0wsSUFBSSxFQUNKLFNBQVMsQ0FDVCxDQUFDO0lBQ0gsQ0FBQztJQUVELE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBb0I7UUFDckMsT0FBTyxJQUFJLGtCQUFrQixDQUM1QixNQUFNLENBQUMsS0FBSyxFQUFFLEVBQ2QsTUFBTSxDQUFDLFFBQVEsRUFBRSxFQUNqQixNQUFNLENBQUMsU0FBUyxFQUFFLEVBQ2xCLE1BQU0sQ0FBQyxRQUFRLEVBQUUsRUFDakIsTUFBTSxDQUFDLE9BQU8sRUFBRSxFQUNoQixNQUFNLENBQUMsZUFBZSxFQUFFLEVBQ3hCLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FDeEIsQ0FBQztJQUNILENBQUM7Q0FFRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbHVtbkZpZWxkIH0gZnJvbSAnLi4vZmllbGQvY29sdW1uLWZpZWxkJztcbmltcG9ydCB7IENvbHVtbklkIH0gZnJvbSAnLi4vLi4vLi4vYXBpL2NvbHVtbi9jb2x1bW4uaWQnO1xuaW1wb3J0IHsgQ29sdW1uQ29uZmlnLCBIZWFkZXJUZW1wbGF0ZSB9IGZyb20gJy4uLy4uLy4uL2FwaS9jb2x1bW4vY29sdW1uLmNvbmZpZyc7XG5pbXBvcnQgeyBWaWV3RW50aXR5IH0gZnJvbSAnLi4vdmlldy5lbnRpdHknO1xuaW1wb3J0IHsgQ29sdW1uQWxpZ24gfSBmcm9tICcuLi9jb2x1bW4tYWxpZ24nO1xuaW1wb3J0IHsgQ29sdW1uRW50aXR5IH0gZnJvbSAnLi4vY29sdW1uLmVudGl0eSc7XG5pbXBvcnQgeyBDb2x1bW5QcmVzZW50YXRpb24gfSBmcm9tICcuLi9wcmVzZW50YXRpb24vY29sdW1uLnByZXNlbnRhdGlvbic7XG5cblxuZXhwb3J0IGNsYXNzIEFjdGl2ZUNvbHVtbkVudGl0eSBleHRlbmRzIENvbHVtbkVudGl0eSB7XG5cblx0cHJpdmF0ZSBjb25zdHJ1Y3Rvcihjb2x1bW5JZDogQ29sdW1uSWQsXG5cdFx0XHRcdFx0XHRjb2x1bW5GaWVsZDogQ29sdW1uRmllbGQsXG5cdFx0XHRcdFx0XHRoZWFkZXI6IHN0cmluZyB8IEhlYWRlclRlbXBsYXRlLFxuXHRcdFx0XHRcdFx0YWxpZ246IENvbHVtbkFsaWduLFxuXHRcdFx0XHRcdFx0dmlldzogVmlld0VudGl0eSxcblx0XHRcdFx0XHRcdGNvbmZpZzogQ29sdW1uQ29uZmlnLFxuXHRcdFx0XHRcdFx0cHJlc2VudGF0aW9uOiBDb2x1bW5QcmVzZW50YXRpb24pIHtcblx0XHRzdXBlcihcblx0XHRcdGNvbHVtbklkLFxuXHRcdFx0Y29sdW1uRmllbGQsXG5cdFx0XHRjb25maWcsXG5cdFx0XHR0cnVlLFxuXHRcdFx0cHJlc2VudGF0aW9uLFxuXHRcdFx0aGVhZGVyLFxuXHRcdFx0YWxpZ24sXG5cdFx0XHR2aWV3LFxuXHRcdFx0dW5kZWZpbmVkXG5cdFx0KTtcblx0fVxuXG5cdHN0YXRpYyBmcm9tRW50aXR5KGVudGl0eTogQ29sdW1uRW50aXR5KTogQWN0aXZlQ29sdW1uRW50aXR5IHtcblx0XHRyZXR1cm4gbmV3IEFjdGl2ZUNvbHVtbkVudGl0eShcblx0XHRcdGVudGl0eS5nZXRJZCgpLFxuXHRcdFx0ZW50aXR5LmdldEZpZWxkKCksXG5cdFx0XHRlbnRpdHkuZ2V0SGVhZGVyKCksXG5cdFx0XHRlbnRpdHkuZ2V0QWxpZ24oKSxcblx0XHRcdGVudGl0eS5nZXRWaWV3KCksXG5cdFx0XHRlbnRpdHkuZ2V0Q29sdW1uQ29uZmlnKCksXG5cdFx0XHRlbnRpdHkuZ2V0UHJlc2VudGF0aW9uKClcblx0XHQpO1xuXHR9XG5cbn1cbiJdfQ==