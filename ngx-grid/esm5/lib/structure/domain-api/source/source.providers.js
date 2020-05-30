/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { HermesModule } from '@generic-ui/hermes';
import { SourceDispatcher } from '../../domain/source/source.dispatcher';
import { SourceManagerFactory } from '../../domain/source/source.manager-factory';
import { SetOriginCommandHandler } from '../../domain/source/origin/set-origin/set-origin.command-handler';
import { StructureEditSourceItemCommandHandler } from '../../domain/source/origin/edit/structure.edit-source-item.command-handler';
import { StructureSourceDomainEventPublisher } from '../../domain/source/structure.source.domain-event.publisher';
import { StructureOriginChangedEventHandler } from './origin/structure.origin-changed.event-handler';
import { SourceConverter } from './source.converter';
import { SourceCommandDispatcher } from './source.command-dispatcher';
import { StructureSourceWarehouse } from './structure-source.warehouse';
import { SourceEventService } from './event/source-event.service';
import { StructureSourceOriginRepository } from './origin/structure.source-origin.repository';
import { SourceSetLoadingCommandHandler } from '../../domain/source/loading/source-set-loading.command-handler';
import { StructurePreparedItemsRepository } from './prepared/structure.prepared-items.repository';
import { StructurePreparedItemsEventHandler } from './prepared/structure.prepared-items.event-handler';
/** @type {?} */
var commandProviders = [
    SourceDispatcher,
    SourceManagerFactory,
    StructureSourceDomainEventPublisher
];
/** @type {?} */
var readProviders = [
    StructureSourceOriginRepository,
    StructurePreparedItemsRepository
];
/** @type {?} */
export var sourceCommandHandlers = tslib_1.__spread(HermesModule.registerCommandHandler(SourceSetLoadingCommandHandler, 'StructureAggregate'), HermesModule.registerCommandHandler(SetOriginCommandHandler, 'StructureAggregate'), HermesModule.registerCommandHandler(StructureEditSourceItemCommandHandler, 'StructureAggregate'));
/** @type {?} */
export var sourceDomainEventHandlers = tslib_1.__spread(HermesModule.registerDomainEventHandler(StructureOriginChangedEventHandler), HermesModule.registerDomainEventHandler(StructurePreparedItemsEventHandler));
/** @type {?} */
export var sourceProviders = tslib_1.__spread(commandProviders, readProviders, [
    SourceConverter,
    SourceCommandDispatcher,
    StructureSourceWarehouse,
    SourceEventService
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLnByb3ZpZGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4tYXBpL3NvdXJjZS9zb3VyY2UucHJvdmlkZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGtFQUFrRSxDQUFDO0FBQzNHLE9BQU8sRUFBRSxxQ0FBcUMsRUFBRSxNQUFNLDRFQUE0RSxDQUFDO0FBQ25JLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLDZEQUE2RCxDQUFDO0FBQ2xILE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQ3JHLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUM5RixPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxnRUFBZ0UsQ0FBQztBQUNoSCxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUNsRyxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSxtREFBbUQsQ0FBQzs7SUFHakcsZ0JBQWdCLEdBQUc7SUFDeEIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixtQ0FBbUM7Q0FDbkM7O0lBRUssYUFBYSxHQUFHO0lBQ3JCLCtCQUErQjtJQUMvQixnQ0FBZ0M7Q0FDaEM7O0FBRUQsTUFBTSxLQUFPLHFCQUFxQixvQkFDOUIsWUFBWSxDQUFDLHNCQUFzQixDQUFDLDhCQUE4QixFQUFFLG9CQUFvQixDQUFDLEVBQ3pGLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyx1QkFBdUIsRUFBRSxvQkFBb0IsQ0FBQyxFQUNsRixZQUFZLENBQUMsc0JBQXNCLENBQUMscUNBQXFDLEVBQUUsb0JBQW9CLENBQUMsQ0FDbkc7O0FBRUQsTUFBTSxLQUFPLHlCQUF5QixvQkFDbEMsWUFBWSxDQUFDLDBCQUEwQixDQUFDLGtDQUFrQyxDQUFDLEVBQzNFLFlBQVksQ0FBQywwQkFBMEIsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUM5RTs7QUFFRCxNQUFNLEtBQU8sZUFBZSxvQkFDeEIsZ0JBQWdCLEVBQ2hCLGFBQWE7SUFFaEIsZUFBZTtJQUVmLHVCQUF1QjtJQUN2Qix3QkFBd0I7SUFDeEIsa0JBQWtCO0VBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSGVybWVzTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IFNvdXJjZURpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi9kb21haW4vc291cmNlL3NvdXJjZS5kaXNwYXRjaGVyJztcbmltcG9ydCB7IFNvdXJjZU1hbmFnZXJGYWN0b3J5IH0gZnJvbSAnLi4vLi4vZG9tYWluL3NvdXJjZS9zb3VyY2UubWFuYWdlci1mYWN0b3J5JztcbmltcG9ydCB7IFNldE9yaWdpbkNvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi4vLi4vZG9tYWluL3NvdXJjZS9vcmlnaW4vc2V0LW9yaWdpbi9zZXQtb3JpZ2luLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVFZGl0U291cmNlSXRlbUNvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi4vLi4vZG9tYWluL3NvdXJjZS9vcmlnaW4vZWRpdC9zdHJ1Y3R1cmUuZWRpdC1zb3VyY2UtaXRlbS5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlU291cmNlRG9tYWluRXZlbnRQdWJsaXNoZXIgfSBmcm9tICcuLi8uLi9kb21haW4vc291cmNlL3N0cnVjdHVyZS5zb3VyY2UuZG9tYWluLWV2ZW50LnB1Ymxpc2hlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVPcmlnaW5DaGFuZ2VkRXZlbnRIYW5kbGVyIH0gZnJvbSAnLi9vcmlnaW4vc3RydWN0dXJlLm9yaWdpbi1jaGFuZ2VkLmV2ZW50LWhhbmRsZXInO1xuaW1wb3J0IHsgU291cmNlQ29udmVydGVyIH0gZnJvbSAnLi9zb3VyY2UuY29udmVydGVyJztcbmltcG9ydCB7IFNvdXJjZUNvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi9zb3VyY2UuY29tbWFuZC1kaXNwYXRjaGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZVNvdXJjZVdhcmVob3VzZSB9IGZyb20gJy4vc3RydWN0dXJlLXNvdXJjZS53YXJlaG91c2UnO1xuaW1wb3J0IHsgU291cmNlRXZlbnRTZXJ2aWNlIH0gZnJvbSAnLi9ldmVudC9zb3VyY2UtZXZlbnQuc2VydmljZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTb3VyY2VPcmlnaW5SZXBvc2l0b3J5IH0gZnJvbSAnLi9vcmlnaW4vc3RydWN0dXJlLnNvdXJjZS1vcmlnaW4ucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTb3VyY2VTZXRMb2FkaW5nQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuLi8uLi9kb21haW4vc291cmNlL2xvYWRpbmcvc291cmNlLXNldC1sb2FkaW5nLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVQcmVwYXJlZEl0ZW1zUmVwb3NpdG9yeSB9IGZyb20gJy4vcHJlcGFyZWQvc3RydWN0dXJlLnByZXBhcmVkLWl0ZW1zLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlUHJlcGFyZWRJdGVtc0V2ZW50SGFuZGxlciB9IGZyb20gJy4vcHJlcGFyZWQvc3RydWN0dXJlLnByZXBhcmVkLWl0ZW1zLmV2ZW50LWhhbmRsZXInO1xuXG5cbmNvbnN0IGNvbW1hbmRQcm92aWRlcnMgPSBbXG5cdFNvdXJjZURpc3BhdGNoZXIsXG5cdFNvdXJjZU1hbmFnZXJGYWN0b3J5LFxuXHRTdHJ1Y3R1cmVTb3VyY2VEb21haW5FdmVudFB1Ymxpc2hlclxuXTtcblxuY29uc3QgcmVhZFByb3ZpZGVycyA9IFtcblx0U3RydWN0dXJlU291cmNlT3JpZ2luUmVwb3NpdG9yeSxcblx0U3RydWN0dXJlUHJlcGFyZWRJdGVtc1JlcG9zaXRvcnlcbl07XG5cbmV4cG9ydCBjb25zdCBzb3VyY2VDb21tYW5kSGFuZGxlcnMgPSBbXG5cdC4uLkhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKFNvdXJjZVNldExvYWRpbmdDb21tYW5kSGFuZGxlciwgJ1N0cnVjdHVyZUFnZ3JlZ2F0ZScpLFxuXHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJDb21tYW5kSGFuZGxlcihTZXRPcmlnaW5Db21tYW5kSGFuZGxlciwgJ1N0cnVjdHVyZUFnZ3JlZ2F0ZScpLFxuXHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJDb21tYW5kSGFuZGxlcihTdHJ1Y3R1cmVFZGl0U291cmNlSXRlbUNvbW1hbmRIYW5kbGVyLCAnU3RydWN0dXJlQWdncmVnYXRlJylcbl07XG5cbmV4cG9ydCBjb25zdCBzb3VyY2VEb21haW5FdmVudEhhbmRsZXJzID0gW1xuXHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJEb21haW5FdmVudEhhbmRsZXIoU3RydWN0dXJlT3JpZ2luQ2hhbmdlZEV2ZW50SGFuZGxlciksXG5cdC4uLkhlcm1lc01vZHVsZS5yZWdpc3RlckRvbWFpbkV2ZW50SGFuZGxlcihTdHJ1Y3R1cmVQcmVwYXJlZEl0ZW1zRXZlbnRIYW5kbGVyKVxuXTtcblxuZXhwb3J0IGNvbnN0IHNvdXJjZVByb3ZpZGVycyA9IFtcblx0Li4uY29tbWFuZFByb3ZpZGVycyxcblx0Li4ucmVhZFByb3ZpZGVycyxcblxuXHRTb3VyY2VDb252ZXJ0ZXIsXG5cblx0U291cmNlQ29tbWFuZERpc3BhdGNoZXIsXG5cdFN0cnVjdHVyZVNvdXJjZVdhcmVob3VzZSxcblx0U291cmNlRXZlbnRTZXJ2aWNlXG5dO1xuIl19