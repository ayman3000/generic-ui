import { StructureCommand } from '../../../../core/domain/structure.command';
export class SetScrollBarPositionCommand extends StructureCommand {
    constructor(structureId, position) {
        super(structureId, 'SetScrollBarPositionCommand');
        this.position = position;
    }
    getPosition() {
        return this.position;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LXNjcm9sbC1iYXItcG9zaXRpb24uY29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvc3RydWN0dXJlL3ZlcnRpY2FsLWZvcm1hdGlvbi9jb3JlL2RvbWFpbi9zY3JvbGwtYmFyL3NldC1zY3JvbGwtYmFyLXBvc2l0aW9uLmNvbW1hbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFHN0UsTUFBTSxPQUFPLDJCQUE0QixTQUFRLGdCQUFnQjtJQUVoRSxZQUFZLFdBQXdCLEVBQ2hCLFFBQWdCO1FBQ25DLEtBQUssQ0FBQyxXQUFXLEVBQUUsNkJBQTZCLENBQUMsQ0FBQztRQUQvQixhQUFRLEdBQVIsUUFBUSxDQUFRO0lBRXBDLENBQUM7SUFFRCxXQUFXO1FBQ1YsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3RCLENBQUM7Q0FFRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbW1hbmQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuY29tbWFuZCc7XG5cblxuZXhwb3J0IGNsYXNzIFNldFNjcm9sbEJhclBvc2l0aW9uQ29tbWFuZCBleHRlbmRzIFN0cnVjdHVyZUNvbW1hbmQge1xuXG5cdGNvbnN0cnVjdG9yKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBwb3NpdGlvbjogbnVtYmVyKSB7XG5cdFx0c3VwZXIoc3RydWN0dXJlSWQsICdTZXRTY3JvbGxCYXJQb3NpdGlvbkNvbW1hbmQnKTtcblx0fVxuXG5cdGdldFBvc2l0aW9uKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMucG9zaXRpb247XG5cdH1cblxufVxuIl19