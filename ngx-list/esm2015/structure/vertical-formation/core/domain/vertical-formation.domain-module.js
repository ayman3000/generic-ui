import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomainModule, HermesModule } from '@generic-ui/hermes';
import { structureKey } from '../../../core/api/structre.key';
import { VerticalFormationFactory } from './vertical-formation.factory';
import { SetScrollPositionCommandHandler } from './scroll-position/set-scroll-position.command-handler';
import { SetVerticalScrollEnabledCommandHandler } from './set-enabled/set-vertical-scroll-enabled.command-handler';
import { SetRowHeightBasedOnThemeCommandHandler } from './set-row-height-theme/set-row-height-based-on-theme.command-handler';
import { SetRowHeightCommandHandler } from './set-row-height/set-row-height.command-handler';
import { StructureSetHeightCommandHandler } from './container/set-height/structure-set-height.command-handler';
import { ScrollBarPositionSetEventHandler } from '../domain-read/scroll-bar/scroll-bar-position-set.event-handler';
import { SetScrollBarPositionCommandHandler } from './scroll-bar/set-scroll-bar-position.command-handler';
import { VerticalFormationDispatcher } from './vertical-formation.dispatcher';
export class VerticalFormationDomainModule extends DomainModule {
    constructor() {
        super();
    }
    static commandHandlers() {
        return [
            HermesModule.registerCommandHandler(SetScrollPositionCommandHandler, structureKey),
            HermesModule.registerCommandHandler(SetVerticalScrollEnabledCommandHandler, structureKey),
            HermesModule.registerCommandHandler(SetRowHeightBasedOnThemeCommandHandler, structureKey),
            HermesModule.registerCommandHandler(SetRowHeightCommandHandler, structureKey),
            HermesModule.registerCommandHandler(StructureSetHeightCommandHandler, structureKey),
            HermesModule.registerCommandHandler(SetScrollBarPositionCommandHandler, structureKey)
        ];
    }
    static domainEventHandlers() {
        return [
            HermesModule.registerDomainEventHandler(ScrollBarPositionSetEventHandler)
        ];
    }
}
VerticalFormationDomainModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                providers: [
                    VerticalFormationFactory,
                    VerticalFormationDispatcher
                ],
                declarations: [],
                exports: []
            },] }
];
VerticalFormationDomainModule.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGljYWwtZm9ybWF0aW9uLmRvbWFpbi1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS92ZXJ0aWNhbC1mb3JtYXRpb24vY29yZS9kb21haW4vdmVydGljYWwtZm9ybWF0aW9uLmRvbWFpbi1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVoRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDOUQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDeEUsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDeEcsT0FBTyxFQUFFLHNDQUFzQyxFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFDbkgsT0FBTyxFQUFFLHNDQUFzQyxFQUFFLE1BQU0sc0VBQXNFLENBQUM7QUFDOUgsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDN0YsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFDL0csT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0saUVBQWlFLENBQUM7QUFDbkgsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDMUcsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFjOUUsTUFBTSxPQUFPLDZCQUE4QixTQUFRLFlBQVk7SUFFOUQ7UUFDQyxLQUFLLEVBQUUsQ0FBQztJQUNULENBQUM7SUFFRCxNQUFNLENBQUMsZUFBZTtRQUNyQixPQUFPO1lBQ04sWUFBWSxDQUFDLHNCQUFzQixDQUFDLCtCQUErQixFQUFFLFlBQVksQ0FBQztZQUNsRixZQUFZLENBQUMsc0JBQXNCLENBQUMsc0NBQXNDLEVBQUUsWUFBWSxDQUFDO1lBQ3pGLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyxzQ0FBc0MsRUFBRSxZQUFZLENBQUM7WUFDekYsWUFBWSxDQUFDLHNCQUFzQixDQUFDLDBCQUEwQixFQUFFLFlBQVksQ0FBQztZQUM3RSxZQUFZLENBQUMsc0JBQXNCLENBQUMsZ0NBQWdDLEVBQUUsWUFBWSxDQUFDO1lBQ25GLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyxrQ0FBa0MsRUFBRSxZQUFZLENBQUM7U0FDckYsQ0FBQztJQUNILENBQUM7SUFFRCxNQUFNLENBQUMsbUJBQW1CO1FBQ3pCLE9BQU87WUFDTixZQUFZLENBQUMsMEJBQTBCLENBQUMsZ0NBQWdDLENBQUM7U0FDekUsQ0FBQztJQUNILENBQUM7OztZQWhDRCxRQUFRLFNBQUM7Z0JBQ1QsT0FBTyxFQUFFO29CQUNSLFlBQVk7aUJBQ1o7Z0JBQ0QsU0FBUyxFQUFFO29CQUNWLHdCQUF3QjtvQkFDeEIsMkJBQTJCO2lCQUMzQjtnQkFDRCxZQUFZLEVBQUUsRUFBRTtnQkFDaEIsT0FBTyxFQUFFLEVBQUU7YUFDWCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgRG9tYWluTW9kdWxlLCBIZXJtZXNNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBzdHJ1Y3R1cmVLZXkgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3RyZS5rZXknO1xuaW1wb3J0IHsgVmVydGljYWxGb3JtYXRpb25GYWN0b3J5IH0gZnJvbSAnLi92ZXJ0aWNhbC1mb3JtYXRpb24uZmFjdG9yeSc7XG5pbXBvcnQgeyBTZXRTY3JvbGxQb3NpdGlvbkNvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi9zY3JvbGwtcG9zaXRpb24vc2V0LXNjcm9sbC1wb3NpdGlvbi5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgU2V0VmVydGljYWxTY3JvbGxFbmFibGVkQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuL3NldC1lbmFibGVkL3NldC12ZXJ0aWNhbC1zY3JvbGwtZW5hYmxlZC5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgU2V0Um93SGVpZ2h0QmFzZWRPblRoZW1lQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuL3NldC1yb3ctaGVpZ2h0LXRoZW1lL3NldC1yb3ctaGVpZ2h0LWJhc2VkLW9uLXRoZW1lLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBTZXRSb3dIZWlnaHRDb21tYW5kSGFuZGxlciB9IGZyb20gJy4vc2V0LXJvdy1oZWlnaHQvc2V0LXJvdy1oZWlnaHQuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZVNldEhlaWdodENvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi9jb250YWluZXIvc2V0LWhlaWdodC9zdHJ1Y3R1cmUtc2V0LWhlaWdodC5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgU2Nyb2xsQmFyUG9zaXRpb25TZXRFdmVudEhhbmRsZXIgfSBmcm9tICcuLi9kb21haW4tcmVhZC9zY3JvbGwtYmFyL3Njcm9sbC1iYXItcG9zaXRpb24tc2V0LmV2ZW50LWhhbmRsZXInO1xuaW1wb3J0IHsgU2V0U2Nyb2xsQmFyUG9zaXRpb25Db21tYW5kSGFuZGxlciB9IGZyb20gJy4vc2Nyb2xsLWJhci9zZXQtc2Nyb2xsLWJhci1wb3NpdGlvbi5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgVmVydGljYWxGb3JtYXRpb25EaXNwYXRjaGVyIH0gZnJvbSAnLi92ZXJ0aWNhbC1mb3JtYXRpb24uZGlzcGF0Y2hlcic7XG5cblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZVxuXHRdLFxuXHRwcm92aWRlcnM6IFtcblx0XHRWZXJ0aWNhbEZvcm1hdGlvbkZhY3RvcnksXG5cdFx0VmVydGljYWxGb3JtYXRpb25EaXNwYXRjaGVyXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW10sXG5cdGV4cG9ydHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFZlcnRpY2FsRm9ybWF0aW9uRG9tYWluTW9kdWxlIGV4dGVuZHMgRG9tYWluTW9kdWxlIHtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0c3RhdGljIGNvbW1hbmRIYW5kbGVycygpOiBBcnJheTxQcm92aWRlcj4ge1xuXHRcdHJldHVybiBbXG5cdFx0XHRIZXJtZXNNb2R1bGUucmVnaXN0ZXJDb21tYW5kSGFuZGxlcihTZXRTY3JvbGxQb3NpdGlvbkNvbW1hbmRIYW5kbGVyLCBzdHJ1Y3R1cmVLZXkpLFxuXHRcdFx0SGVybWVzTW9kdWxlLnJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoU2V0VmVydGljYWxTY3JvbGxFbmFibGVkQ29tbWFuZEhhbmRsZXIsIHN0cnVjdHVyZUtleSksXG5cdFx0XHRIZXJtZXNNb2R1bGUucmVnaXN0ZXJDb21tYW5kSGFuZGxlcihTZXRSb3dIZWlnaHRCYXNlZE9uVGhlbWVDb21tYW5kSGFuZGxlciwgc3RydWN0dXJlS2V5KSxcblx0XHRcdEhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKFNldFJvd0hlaWdodENvbW1hbmRIYW5kbGVyLCBzdHJ1Y3R1cmVLZXkpLFxuXHRcdFx0SGVybWVzTW9kdWxlLnJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoU3RydWN0dXJlU2V0SGVpZ2h0Q29tbWFuZEhhbmRsZXIsIHN0cnVjdHVyZUtleSksXG5cdFx0XHRIZXJtZXNNb2R1bGUucmVnaXN0ZXJDb21tYW5kSGFuZGxlcihTZXRTY3JvbGxCYXJQb3NpdGlvbkNvbW1hbmRIYW5kbGVyLCBzdHJ1Y3R1cmVLZXkpXG5cdFx0XTtcblx0fVxuXG5cdHN0YXRpYyBkb21haW5FdmVudEhhbmRsZXJzKCk6IEFycmF5PFByb3ZpZGVyPiB7XG5cdFx0cmV0dXJuIFtcblx0XHRcdEhlcm1lc01vZHVsZS5yZWdpc3RlckRvbWFpbkV2ZW50SGFuZGxlcihTY3JvbGxCYXJQb3NpdGlvblNldEV2ZW50SGFuZGxlcilcblx0XHRdO1xuXHR9XG5cbn1cbiJdfQ==