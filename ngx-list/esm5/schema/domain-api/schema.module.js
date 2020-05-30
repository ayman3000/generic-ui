/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HermesModule } from '@generic-ui/hermes';
import { SchemaAggregateFactory } from '../domain/schema.aggregate-factory';
import { CreateSchemaCommandHandler } from '../domain/create/create-schema.command-handler';
import { SetSchemaThemeCommandHandler } from '../domain/theme/set-schema-theme.command-handler';
import { SchemaDispatcher } from '../domain/schema.dispatcher';
import { SchemaAggregateRepository } from '../domain/schema.aggregate-repository';
import { InMemorySchemaAggregateRepository } from '../infrastructure/in-memory/in-memory.schema.aggregate-repository';
import { InMemorySchemaAggregateStore } from '../infrastructure/in-memory/in-memory.schema.aggregate-store';
import { InMemorySchemaStore } from '../infrastructure/in-memory/in-memory.schema.store';
import { SchemaCommandDispatcher } from './schema.command-dispatcher';
import { SchemaWarehouse } from './schema.warehouse';
import { SetRowColoringCommandHandler } from '../domain/coloring/set-row-coloring.command-handler';
import { SetSchemaHorizontalGridCommandHandler } from '../domain/grid/horizontal/set-schema-horizontal-grid.command-handler';
import { SetSchemaVerticalGridCommandHandler } from '../domain/grid/vertical/set-schema-vertical-grid.command-handler';
import { SchemaCssClassesEventHandler } from './css-classes/schema-css-classes.event-handler';
import { SchemaThemeSetEventHandler } from './theme/schema-theme-set.event-handler';
import { SchemaCssClassesRepository } from './css-classes/schema.css-classes.repository';
import { SchemaThemeRepository } from './theme/schema.theme.repository';
import { SchemaEventRepository } from './schema.event-repository';
import { SchemaHorizontalGridSetEventHandler } from './horizontal-grid/schema.horizontal-grid-set.event-handler';
import { SchemaRowColoringSetEventHandler } from './row-coloring/schema.row-coloring-set.event-handler';
import { SchemaHorizontalGridRepository } from './horizontal-grid/schema.horizontal-grid.repository';
import { SchemaRowColoringRepository } from './row-coloring/schema.row-coloring.repository';
import { SchemaVerticalGridRepository } from './vertical-grid/schema.vertical-grid.repository';
/** @type {?} */
export var schemaKey = 'SchemaAggregate';
var SchemaModule = /** @class */ (function () {
    function SchemaModule() {
    }
    SchemaModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        HermesModule.defineAggregate(schemaKey, SchemaAggregateFactory, InMemorySchemaAggregateRepository, CreateSchemaCommandHandler, tslib_1.__spread(HermesModule.registerCommandHandler(SetSchemaThemeCommandHandler, schemaKey), HermesModule.registerCommandHandler(SetRowColoringCommandHandler, schemaKey), HermesModule.registerCommandHandler(SetSchemaHorizontalGridCommandHandler, schemaKey), HermesModule.registerCommandHandler(SetSchemaVerticalGridCommandHandler, schemaKey)), tslib_1.__spread(HermesModule.registerDomainEventHandler(SchemaThemeSetEventHandler), HermesModule.registerDomainEventHandler(SchemaHorizontalGridSetEventHandler), HermesModule.registerDomainEventHandler(SchemaRowColoringSetEventHandler), HermesModule.registerDomainEventHandler(SchemaThemeSetEventHandler), HermesModule.registerMultiDomainEventHandler(SchemaCssClassesEventHandler)))
                    ],
                    declarations: [],
                    providers: [
                        SchemaDispatcher,
                        {
                            provide: SchemaAggregateRepository,
                            useClass: InMemorySchemaAggregateRepository
                        },
                        InMemorySchemaAggregateStore,
                        InMemorySchemaStore,
                        SchemaCommandDispatcher,
                        SchemaWarehouse,
                        SchemaEventRepository,
                        SchemaCssClassesRepository,
                        SchemaThemeRepository,
                        SchemaHorizontalGridRepository,
                        SchemaRowColoringRepository,
                        SchemaVerticalGridRepository,
                    ]
                },] }
    ];
    return SchemaModule;
}());
export { SchemaModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic2NoZW1hL2RvbWFpbi1hcGkvc2NoZW1hLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUU1RSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUM1RixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUNoRyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUVsRixPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSxtRUFBbUUsQ0FBQztBQUN0SCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQUM1RyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUV6RixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDbkcsT0FBTyxFQUFFLHFDQUFxQyxFQUFFLE1BQU0sc0VBQXNFLENBQUM7QUFDN0gsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sa0VBQWtFLENBQUM7QUFDdkgsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDOUYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDcEYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDekYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDeEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEUsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sNERBQTRELENBQUM7QUFDakgsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDeEcsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDckcsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDNUYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0saURBQWlELENBQUM7O0FBRS9GLE1BQU0sS0FBTyxTQUFTLEdBQUcsaUJBQWlCO0FBRTFDO0lBQUE7SUFnREEsQ0FBQzs7Z0JBaERBLFFBQVEsU0FBQztvQkFDVCxPQUFPLEVBQUU7d0JBQ1IsWUFBWTt3QkFFWixZQUFZLENBQUMsZUFBZSxDQUMzQixTQUFTLEVBQ1Qsc0JBQXNCLEVBQ3RCLGlDQUFpQyxFQUNqQywwQkFBMEIsbUJBRXRCLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyw0QkFBNEIsRUFBRSxTQUFTLENBQUMsRUFDNUUsWUFBWSxDQUFDLHNCQUFzQixDQUFDLDRCQUE0QixFQUFFLFNBQVMsQ0FBQyxFQUM1RSxZQUFZLENBQUMsc0JBQXNCLENBQUMscUNBQXFDLEVBQUUsU0FBUyxDQUFDLEVBQ3JGLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyxtQ0FBbUMsRUFBRSxTQUFTLENBQUMsb0JBR25GLFlBQVksQ0FBQywwQkFBMEIsQ0FBQywwQkFBMEIsQ0FBQyxFQUNuRSxZQUFZLENBQUMsMEJBQTBCLENBQUMsbUNBQW1DLENBQUMsRUFDNUUsWUFBWSxDQUFDLDBCQUEwQixDQUFDLGdDQUFnQyxDQUFDLEVBQ3pFLFlBQVksQ0FBQywwQkFBMEIsQ0FBQywwQkFBMEIsQ0FBQyxFQUNuRSxZQUFZLENBQUMsK0JBQStCLENBQUMsNEJBQTRCLENBQUMsRUFFOUU7cUJBRUQ7b0JBQ0QsWUFBWSxFQUFFLEVBQUU7b0JBQ2hCLFNBQVMsRUFBRTt3QkFDVixnQkFBZ0I7d0JBQ2hCOzRCQUNDLE9BQU8sRUFBRSx5QkFBeUI7NEJBQ2xDLFFBQVEsRUFBRSxpQ0FBaUM7eUJBQzNDO3dCQUNELDRCQUE0Qjt3QkFDNUIsbUJBQW1CO3dCQUVuQix1QkFBdUI7d0JBQ3ZCLGVBQWU7d0JBQ2YscUJBQXFCO3dCQUVyQiwwQkFBMEI7d0JBQzFCLHFCQUFxQjt3QkFDckIsOEJBQThCO3dCQUM5QiwyQkFBMkI7d0JBQzNCLDRCQUE0QjtxQkFFNUI7aUJBQ0Q7O0lBRUQsbUJBQUM7Q0FBQSxBQWhERCxJQWdEQztTQURZLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgSGVybWVzTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU2NoZW1hQWdncmVnYXRlRmFjdG9yeSB9IGZyb20gJy4uL2RvbWFpbi9zY2hlbWEuYWdncmVnYXRlLWZhY3RvcnknO1xuXG5pbXBvcnQgeyBDcmVhdGVTY2hlbWFDb21tYW5kSGFuZGxlciB9IGZyb20gJy4uL2RvbWFpbi9jcmVhdGUvY3JlYXRlLXNjaGVtYS5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgU2V0U2NoZW1hVGhlbWVDb21tYW5kSGFuZGxlciB9IGZyb20gJy4uL2RvbWFpbi90aGVtZS9zZXQtc2NoZW1hLXRoZW1lLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBTY2hlbWFEaXNwYXRjaGVyIH0gZnJvbSAnLi4vZG9tYWluL3NjaGVtYS5kaXNwYXRjaGVyJztcbmltcG9ydCB7IFNjaGVtYUFnZ3JlZ2F0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi9kb21haW4vc2NoZW1hLmFnZ3JlZ2F0ZS1yZXBvc2l0b3J5JztcblxuaW1wb3J0IHsgSW5NZW1vcnlTY2hlbWFBZ2dyZWdhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vaW5mcmFzdHJ1Y3R1cmUvaW4tbWVtb3J5L2luLW1lbW9yeS5zY2hlbWEuYWdncmVnYXRlLXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgSW5NZW1vcnlTY2hlbWFBZ2dyZWdhdGVTdG9yZSB9IGZyb20gJy4uL2luZnJhc3RydWN0dXJlL2luLW1lbW9yeS9pbi1tZW1vcnkuc2NoZW1hLmFnZ3JlZ2F0ZS1zdG9yZSc7XG5pbXBvcnQgeyBJbk1lbW9yeVNjaGVtYVN0b3JlIH0gZnJvbSAnLi4vaW5mcmFzdHJ1Y3R1cmUvaW4tbWVtb3J5L2luLW1lbW9yeS5zY2hlbWEuc3RvcmUnO1xuXG5pbXBvcnQgeyBTY2hlbWFDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4vc2NoZW1hLmNvbW1hbmQtZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBTY2hlbWFXYXJlaG91c2UgfSBmcm9tICcuL3NjaGVtYS53YXJlaG91c2UnO1xuaW1wb3J0IHsgU2V0Um93Q29sb3JpbmdDb21tYW5kSGFuZGxlciB9IGZyb20gJy4uL2RvbWFpbi9jb2xvcmluZy9zZXQtcm93LWNvbG9yaW5nLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBTZXRTY2hlbWFIb3Jpem9udGFsR3JpZENvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi4vZG9tYWluL2dyaWQvaG9yaXpvbnRhbC9zZXQtc2NoZW1hLWhvcml6b250YWwtZ3JpZC5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgU2V0U2NoZW1hVmVydGljYWxHcmlkQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuLi9kb21haW4vZ3JpZC92ZXJ0aWNhbC9zZXQtc2NoZW1hLXZlcnRpY2FsLWdyaWQuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IFNjaGVtYUNzc0NsYXNzZXNFdmVudEhhbmRsZXIgfSBmcm9tICcuL2Nzcy1jbGFzc2VzL3NjaGVtYS1jc3MtY2xhc3Nlcy5ldmVudC1oYW5kbGVyJztcbmltcG9ydCB7IFNjaGVtYVRoZW1lU2V0RXZlbnRIYW5kbGVyIH0gZnJvbSAnLi90aGVtZS9zY2hlbWEtdGhlbWUtc2V0LmV2ZW50LWhhbmRsZXInO1xuaW1wb3J0IHsgU2NoZW1hQ3NzQ2xhc3Nlc1JlcG9zaXRvcnkgfSBmcm9tICcuL2Nzcy1jbGFzc2VzL3NjaGVtYS5jc3MtY2xhc3Nlcy5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNjaGVtYVRoZW1lUmVwb3NpdG9yeSB9IGZyb20gJy4vdGhlbWUvc2NoZW1hLnRoZW1lLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU2NoZW1hRXZlbnRSZXBvc2l0b3J5IH0gZnJvbSAnLi9zY2hlbWEuZXZlbnQtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTY2hlbWFIb3Jpem9udGFsR3JpZFNldEV2ZW50SGFuZGxlciB9IGZyb20gJy4vaG9yaXpvbnRhbC1ncmlkL3NjaGVtYS5ob3Jpem9udGFsLWdyaWQtc2V0LmV2ZW50LWhhbmRsZXInO1xuaW1wb3J0IHsgU2NoZW1hUm93Q29sb3JpbmdTZXRFdmVudEhhbmRsZXIgfSBmcm9tICcuL3Jvdy1jb2xvcmluZy9zY2hlbWEucm93LWNvbG9yaW5nLXNldC5ldmVudC1oYW5kbGVyJztcbmltcG9ydCB7IFNjaGVtYUhvcml6b250YWxHcmlkUmVwb3NpdG9yeSB9IGZyb20gJy4vaG9yaXpvbnRhbC1ncmlkL3NjaGVtYS5ob3Jpem9udGFsLWdyaWQucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTY2hlbWFSb3dDb2xvcmluZ1JlcG9zaXRvcnkgfSBmcm9tICcuL3Jvdy1jb2xvcmluZy9zY2hlbWEucm93LWNvbG9yaW5nLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU2NoZW1hVmVydGljYWxHcmlkUmVwb3NpdG9yeSB9IGZyb20gJy4vdmVydGljYWwtZ3JpZC9zY2hlbWEudmVydGljYWwtZ3JpZC5yZXBvc2l0b3J5JztcblxuZXhwb3J0IGNvbnN0IHNjaGVtYUtleSA9ICdTY2hlbWFBZ2dyZWdhdGUnO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXG5cdFx0SGVybWVzTW9kdWxlLmRlZmluZUFnZ3JlZ2F0ZShcblx0XHRcdHNjaGVtYUtleSxcblx0XHRcdFNjaGVtYUFnZ3JlZ2F0ZUZhY3RvcnksXG5cdFx0XHRJbk1lbW9yeVNjaGVtYUFnZ3JlZ2F0ZVJlcG9zaXRvcnksXG5cdFx0XHRDcmVhdGVTY2hlbWFDb21tYW5kSGFuZGxlcixcblx0XHRcdFtcblx0XHRcdFx0Li4uSGVybWVzTW9kdWxlLnJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoU2V0U2NoZW1hVGhlbWVDb21tYW5kSGFuZGxlciwgc2NoZW1hS2V5KSxcblx0XHRcdFx0Li4uSGVybWVzTW9kdWxlLnJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoU2V0Um93Q29sb3JpbmdDb21tYW5kSGFuZGxlciwgc2NoZW1hS2V5KSxcblx0XHRcdFx0Li4uSGVybWVzTW9kdWxlLnJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoU2V0U2NoZW1hSG9yaXpvbnRhbEdyaWRDb21tYW5kSGFuZGxlciwgc2NoZW1hS2V5KSxcblx0XHRcdFx0Li4uSGVybWVzTW9kdWxlLnJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoU2V0U2NoZW1hVmVydGljYWxHcmlkQ29tbWFuZEhhbmRsZXIsIHNjaGVtYUtleSlcblx0XHRcdF0sXG5cdFx0XHRbXG5cdFx0XHRcdC4uLkhlcm1lc01vZHVsZS5yZWdpc3RlckRvbWFpbkV2ZW50SGFuZGxlcihTY2hlbWFUaGVtZVNldEV2ZW50SGFuZGxlciksXG5cdFx0XHRcdC4uLkhlcm1lc01vZHVsZS5yZWdpc3RlckRvbWFpbkV2ZW50SGFuZGxlcihTY2hlbWFIb3Jpem9udGFsR3JpZFNldEV2ZW50SGFuZGxlciksXG5cdFx0XHRcdC4uLkhlcm1lc01vZHVsZS5yZWdpc3RlckRvbWFpbkV2ZW50SGFuZGxlcihTY2hlbWFSb3dDb2xvcmluZ1NldEV2ZW50SGFuZGxlciksXG5cdFx0XHRcdC4uLkhlcm1lc01vZHVsZS5yZWdpc3RlckRvbWFpbkV2ZW50SGFuZGxlcihTY2hlbWFUaGVtZVNldEV2ZW50SGFuZGxlciksXG5cdFx0XHRcdC4uLkhlcm1lc01vZHVsZS5yZWdpc3Rlck11bHRpRG9tYWluRXZlbnRIYW5kbGVyKFNjaGVtYUNzc0NsYXNzZXNFdmVudEhhbmRsZXIpXG5cdFx0XHRdXG5cdFx0KVxuXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW10sXG5cdHByb3ZpZGVyczogW1xuXHRcdFNjaGVtYURpc3BhdGNoZXIsXG5cdFx0e1xuXHRcdFx0cHJvdmlkZTogU2NoZW1hQWdncmVnYXRlUmVwb3NpdG9yeSxcblx0XHRcdHVzZUNsYXNzOiBJbk1lbW9yeVNjaGVtYUFnZ3JlZ2F0ZVJlcG9zaXRvcnlcblx0XHR9LFxuXHRcdEluTWVtb3J5U2NoZW1hQWdncmVnYXRlU3RvcmUsXG5cdFx0SW5NZW1vcnlTY2hlbWFTdG9yZSxcblxuXHRcdFNjaGVtYUNvbW1hbmREaXNwYXRjaGVyLFxuXHRcdFNjaGVtYVdhcmVob3VzZSxcblx0XHRTY2hlbWFFdmVudFJlcG9zaXRvcnksXG5cblx0XHRTY2hlbWFDc3NDbGFzc2VzUmVwb3NpdG9yeSxcblx0XHRTY2hlbWFUaGVtZVJlcG9zaXRvcnksXG5cdFx0U2NoZW1hSG9yaXpvbnRhbEdyaWRSZXBvc2l0b3J5LFxuXHRcdFNjaGVtYVJvd0NvbG9yaW5nUmVwb3NpdG9yeSxcblx0XHRTY2hlbWFWZXJ0aWNhbEdyaWRSZXBvc2l0b3J5LFxuXG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgU2NoZW1hTW9kdWxlIHtcbn1cbiJdfQ==