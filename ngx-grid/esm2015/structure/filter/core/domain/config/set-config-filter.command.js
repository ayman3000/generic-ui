import { StructureCommand } from '../../../../core/domain/structure.command';
export class SetConfigFilterCommand extends StructureCommand {
    constructor(structureId, filterConfig) {
        super(structureId, 'SetConfigFilterCommand');
        this.filterConfig = filterConfig;
    }
    getConfig() {
        return this.filterConfig;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LWNvbmZpZy1maWx0ZXIuY29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvc3RydWN0dXJlL2ZpbHRlci9jb3JlL2RvbWFpbi9jb25maWcvc2V0LWNvbmZpZy1maWx0ZXIuY29tbWFuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUU3RSxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsZ0JBQWdCO0lBRTNELFlBQVksV0FBd0IsRUFDaEIsWUFBMEI7UUFDN0MsS0FBSyxDQUFDLFdBQVcsRUFBRSx3QkFBd0IsQ0FBQyxDQUFDO1FBRDFCLGlCQUFZLEdBQVosWUFBWSxDQUFjO0lBRTlDLENBQUM7SUFFRCxTQUFTO1FBQ1IsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzFCLENBQUM7Q0FFRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IEZpbHRlckNvbmZpZyB9IGZyb20gJy4uLy4uL2FwaS9maWx0ZXIuY29uZmlnJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbW1hbmQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuY29tbWFuZCc7XG5cbmV4cG9ydCBjbGFzcyBTZXRDb25maWdGaWx0ZXJDb21tYW5kIGV4dGVuZHMgU3RydWN0dXJlQ29tbWFuZCB7XG5cblx0Y29uc3RydWN0b3Ioc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZpbHRlckNvbmZpZzogRmlsdGVyQ29uZmlnKSB7XG5cdFx0c3VwZXIoc3RydWN0dXJlSWQsICdTZXRDb25maWdGaWx0ZXJDb21tYW5kJyk7XG5cdH1cblxuXHRnZXRDb25maWcoKTogRmlsdGVyQ29uZmlnIHtcblx0XHRyZXR1cm4gdGhpcy5maWx0ZXJDb25maWc7XG5cdH1cblxufVxuIl19