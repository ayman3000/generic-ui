import { VerticalFormationRepository } from './vertical-formation.repository';
import { VerticalFormationScrollBarPositionArchive } from './scroll-bar/vertical-formation.scroll-bar-position.archive';
import { Injectable } from '@angular/core';
import { VerticalFormationWarehouse } from '../api/vertical-formation.warehouse';
export class VerticalFormationDomainWarehouse extends VerticalFormationWarehouse {
    constructor(verticalFormationRepository, positionRepository) {
        super();
        this.verticalFormationRepository = verticalFormationRepository;
        this.positionRepository = positionRepository;
    }
    onVerticalScrollEnabled(structureId) {
        return this.verticalFormationRepository.onVerticalScrollEnabled(structureId);
    }
    onRowHeight(structureId) {
        return this.verticalFormationRepository.onRowHeight(structureId);
    }
    onContainerHeight(structureId) {
        return this.verticalFormationRepository.onContainerHeight(structureId);
    }
    onTopMargin(structureId) {
        return this.verticalFormationRepository.onTopMargin(structureId);
    }
    onScrollBarPosition(structureId) {
        return this.positionRepository.on(structureId);
    }
}
VerticalFormationDomainWarehouse.decorators = [
    { type: Injectable }
];
VerticalFormationDomainWarehouse.ctorParameters = () => [
    { type: VerticalFormationRepository },
    { type: VerticalFormationScrollBarPositionArchive }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGljYWwtZm9ybWF0aW9uLmRvbWFpbi13YXJlaG91c2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL3N0cnVjdHVyZS92ZXJ0aWNhbC1mb3JtYXRpb24vY29yZS9kb21haW4tcmVhZC92ZXJ0aWNhbC1mb3JtYXRpb24uZG9tYWluLXdhcmVob3VzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUseUNBQXlDLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUd4SCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBSWpGLE1BQU0sT0FBTyxnQ0FBaUMsU0FBUSwwQkFBMEI7SUFFL0UsWUFBNkIsMkJBQXdELEVBQ2pFLGtCQUE2RDtRQUNoRixLQUFLLEVBQUUsQ0FBQztRQUZvQixnQ0FBMkIsR0FBM0IsMkJBQTJCLENBQTZCO1FBQ2pFLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBMkM7SUFFakYsQ0FBQztJQUVELHVCQUF1QixDQUFDLFdBQXdCO1FBQy9DLE9BQU8sSUFBSSxDQUFDLDJCQUEyQixDQUFDLHVCQUF1QixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzlFLENBQUM7SUFFRCxXQUFXLENBQUMsV0FBd0I7UUFDbkMsT0FBTyxJQUFJLENBQUMsMkJBQTJCLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxXQUF3QjtRQUN6QyxPQUFPLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBRUQsV0FBVyxDQUFDLFdBQXdCO1FBQ25DLE9BQU8sSUFBSSxDQUFDLDJCQUEyQixDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRUQsbUJBQW1CLENBQUMsV0FBd0I7UUFDM0MsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2hELENBQUM7OztZQTFCRCxVQUFVOzs7WUFSRiwyQkFBMkI7WUFDM0IseUNBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmVydGljYWxGb3JtYXRpb25SZXBvc2l0b3J5IH0gZnJvbSAnLi92ZXJ0aWNhbC1mb3JtYXRpb24ucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBWZXJ0aWNhbEZvcm1hdGlvblNjcm9sbEJhclBvc2l0aW9uQXJjaGl2ZSB9IGZyb20gJy4vc2Nyb2xsLWJhci92ZXJ0aWNhbC1mb3JtYXRpb24uc2Nyb2xsLWJhci1wb3NpdGlvbi5hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IEhlcm1lc09ic2VydmFibGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVmVydGljYWxGb3JtYXRpb25XYXJlaG91c2UgfSBmcm9tICcuLi9hcGkvdmVydGljYWwtZm9ybWF0aW9uLndhcmVob3VzZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFZlcnRpY2FsRm9ybWF0aW9uRG9tYWluV2FyZWhvdXNlIGV4dGVuZHMgVmVydGljYWxGb3JtYXRpb25XYXJlaG91c2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgdmVydGljYWxGb3JtYXRpb25SZXBvc2l0b3J5OiBWZXJ0aWNhbEZvcm1hdGlvblJlcG9zaXRvcnksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgcG9zaXRpb25SZXBvc2l0b3J5OiBWZXJ0aWNhbEZvcm1hdGlvblNjcm9sbEJhclBvc2l0aW9uQXJjaGl2ZSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRvblZlcnRpY2FsU2Nyb2xsRW5hYmxlZChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBIZXJtZXNPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblx0XHRyZXR1cm4gdGhpcy52ZXJ0aWNhbEZvcm1hdGlvblJlcG9zaXRvcnkub25WZXJ0aWNhbFNjcm9sbEVuYWJsZWQoc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0b25Sb3dIZWlnaHQoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogSGVybWVzT2JzZXJ2YWJsZTxudW1iZXI+IHtcblx0XHRyZXR1cm4gdGhpcy52ZXJ0aWNhbEZvcm1hdGlvblJlcG9zaXRvcnkub25Sb3dIZWlnaHQoc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0b25Db250YWluZXJIZWlnaHQoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogSGVybWVzT2JzZXJ2YWJsZTxudW1iZXI+IHtcblx0XHRyZXR1cm4gdGhpcy52ZXJ0aWNhbEZvcm1hdGlvblJlcG9zaXRvcnkub25Db250YWluZXJIZWlnaHQoc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0b25Ub3BNYXJnaW4oc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogSGVybWVzT2JzZXJ2YWJsZTxudW1iZXI+IHtcblx0XHRyZXR1cm4gdGhpcy52ZXJ0aWNhbEZvcm1hdGlvblJlcG9zaXRvcnkub25Ub3BNYXJnaW4oc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0b25TY3JvbGxCYXJQb3NpdGlvbihzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBIZXJtZXNPYnNlcnZhYmxlPG51bWJlcj4ge1xuXHRcdHJldHVybiB0aGlzLnBvc2l0aW9uUmVwb3NpdG9yeS5vbihzdHJ1Y3R1cmVJZCk7XG5cdH1cblxufVxuIl19