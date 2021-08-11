/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, NgModule, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FabricModule } from '@generic-ui/fabric';
import { COMMAND_LOGGER_ENABLED, EVENT_LOGGER_ENABLED, HermesModule } from '@generic-ui/hermes';
import { fabricImports } from '../../feature/structure-fabric.imports';
import { PagingFeatureModule } from '../../../paging/feature/paging.feature-module';
import { StructureInfoPanelModule } from '../../feature/panel/info/structure.info-panel.module';
import { StructureComponent } from '../../feature/structure.component';
import { StructureHeaderComponent } from '../../feature/header/structure-header.component';
import { StructureHeaderColumnsComponent } from '../../feature/header/column/structure-header-columns.component';
import { StructureHeaderFiltersComponent } from '../../feature/header/filters/structure-header-filters.component';
import { StructureHeaderFilterComponent } from '../../feature/header/filters/structure.header-filter.component';
import { StructureContentComponent } from '../../feature/content/structure-content.component';
import { StructureRowComponent } from '../../feature/content/row/structure-row.component';
import { StructureCellComponent } from '../../feature/content/cell/structure.cell.component';
import { StructureContainerComponent } from '../../feature/content/structure-container.component';
import { StructureQuickFiltersComponent } from '../../feature/header/quick-filters/structure.quick-filters.component';
import { StructureBlueprintComponent } from '../../feature/blueprint/structure.blueprint.component';
import { StructureColumnConfigComponent } from '../../feature/header/menu/structure.column-config.component';
import { STRUCTURE_CSS_CLASS_NAME } from './structure-tokens';
import { StructureDefinition } from '../../feature/structure-definition';
import { SourceWarehouse } from '../../../source/core/api/source.warehouse';
import { StructureIdGenerator } from '../../feature/structure-id.generator';
import { structureCommandHandlers, structureDomainEventHandlers, structureProviders } from './structure.providers';
import { LoggerModule } from '../../../../common/cdk/logger/logger.module';
import { ItemEntityFactory } from '../../../source/core/domain/core/item/item.entity-factory';
import { StructureTopPanelModule } from '../../feature/panel/top/structure.top-panel.module';
import { StructureColumnMenuModule } from '../../feature/header/menu/structure.column-menu.module';
import { StructureSummariesPanelModule } from '../../feature/panel/summaries/structure.summaries-panel.module';
import { StructureColumnManagerModule } from '../../feature/column-manager/structure.column-manager.module';
import { StructureAggregateFactory } from '../../../core/domain/structure.aggregate-factory';
import { InMemoryStructureAggregateRepository } from '../../../core/infrastructure/in-memory/domain/in-memory.structure-aggregate.repository';
import { CreateStructureCommandHandler } from '../../../core/domain/create-structure/create-structure-command-handler.service';
import { StructureCellEditComponent } from '../../feature/content/cell/edit/structure.cell-edit.component';
import { StructureThemeConverter } from '../../feature/schema/structure.theme.converter';
import { StructureCellEditBooleanComponent } from '../../feature/content/cell/boolean/structure.cell-edit-boolean.component';
import { StructureRowDetailViewComponent } from '../../feature/row-detail/view/structure.row-detail-view.component';
import { StructureTitlePanelComponent } from '../../feature/panel/banner-panels/title-panel/structure.title-panel.component';
import { StructureFooterPanelComponent } from '../../feature/panel/banner-panels/footer-panel/structure.footer-panel.component';
import { PagingDomainModule } from '../../../paging/core/domain/paging.domain-module';
import { EmptySourceFeatureModule } from '../../../source/feature/empty/empty-source.feature-module';
import { SortingDomainModule } from '../../../sorting/core/domain/sorting.domain-module';
import { SortingFeatureModule } from '../../../sorting/feature/sorting.feature-module';
import { FieldFeatureModule } from '../../../field/feature/field.feature-module';
import { FieldDomainModule } from '../../../field/core/domain/field.domain-module';
import { SearchFeatureModule } from '../../../search/feature/search.feature-module';
import { SearchDomainModule } from '../../../search/core/domain/search.domain-module';
import { StructureThemeGateway } from '../../feature/gate/schema/structure-theme.gateway';
import { SchemaManagerModule } from '../../../../schema/feature/manager/schema-manager.module';
import { FilterDomainModule } from '../../../filter/core/domain/filter.domain-module';
import { SourceDomainModule } from '../../../source/core/domain/source.domain-module';
import { SelectAllComponent } from '../../feature/header/column/select-all/select-all.component';
import { structureKey } from '../../../core/api/structre.api';
import { SummariesDomainModule } from '../../../summaries/core/domain/summaries.domain-module';
import { SummariesFeatureModule } from '../../../summaries/feature/summaries.feature-module';
import { VerticalFormationFeatureModule } from '../../../vertical-formation/feature/vertical-formation.feature-module';
import { VerticalFormationDomainModule } from '../../../vertical-formation/core/domain/vertical-formation.domain-module';
import { SchemaFeatureModule } from '../../../../schema/feature/schema.feature-module';
import { CompositionFeatureModule } from '../../../../composition/feature/composition.feature-module';
import { TranslationFeatureModule } from '../../../../l10n/feature/translation.feature-module';
import { StructureHeaderGroupsComponent } from '../../feature/header/group/structure-header-groups.component';
import { structureGates } from '../../feature/gate/structure.gates';
import { FilterMenuFeatureModule } from '../../../filter/feature/menu/filter-menu.feature-module';
import { SourceFeatureModule } from '../../../source/feature/source.feature-module';
import { StructureSharedModule } from '../../../shared/structure-shared.module';
import { SanitizeModule } from '../../../../common/cdk/sanitize/sanitize.module';
/**
 * @return {?}
 */
export function createStructureDefinition() {
    return new StructureDefinition.DefaultBuilder().build();
}
/** @type {?} */
const imports = [
    CommonModule,
    ReactiveFormsModule,
    TranslationFeatureModule,
    HermesModule,
    HermesModule.defineAggregate(structureKey, StructureAggregateFactory, InMemoryStructureAggregateRepository, CreateStructureCommandHandler, [
        ...PagingDomainModule.commandHandlers(),
        ...SortingDomainModule.commandHandlers(),
        ...FieldDomainModule.commandHandlers(),
        ...SearchDomainModule.commandHandlers(),
        ...FilterDomainModule.commandHandlers(),
        ...SourceDomainModule.commandHandlers(),
        ...SummariesDomainModule.commandHandlers(),
        ...VerticalFormationDomainModule.commandHandlers(),
        ...structureCommandHandlers
    ], [
        ...structureDomainEventHandlers,
        ...SearchDomainModule.domainEventHandlers(),
        ...FilterDomainModule.domainEventHandlers(),
        ...SourceDomainModule.domainEventHandlers(),
        ...SummariesDomainModule.domainEventHandlers(),
        ...FieldDomainModule.domainEventHandlers(),
        ...VerticalFormationDomainModule.domainEventHandlers()
    ]),
    // .withConfig({
    // 	loggers: false
    // }),
    ...fabricImports,
    PagingFeatureModule,
    SortingFeatureModule,
    FieldFeatureModule,
    SearchFeatureModule,
    FilterMenuFeatureModule,
    SourceFeatureModule,
    SummariesFeatureModule,
    VerticalFormationFeatureModule,
    SchemaFeatureModule,
    StructureSharedModule,
    StructureInfoPanelModule,
    StructureSummariesPanelModule,
    StructureTopPanelModule,
    StructureColumnMenuModule,
    StructureColumnManagerModule,
    SchemaManagerModule,
    EmptySourceFeatureModule,
    CompositionFeatureModule,
    LoggerModule,
    SanitizeModule
];
/** @type {?} */
const declarations = [
    StructureComponent,
    StructureHeaderComponent,
    StructureHeaderColumnsComponent,
    StructureHeaderGroupsComponent,
    StructureHeaderFiltersComponent,
    StructureHeaderFilterComponent,
    SelectAllComponent,
    StructureContentComponent,
    StructureRowComponent,
    StructureCellComponent,
    StructureCellEditComponent,
    StructureCellEditBooleanComponent,
    StructureContainerComponent,
    StructureQuickFiltersComponent,
    StructureBlueprintComponent,
    StructureRowDetailViewComponent,
    StructureTitlePanelComponent,
    StructureFooterPanelComponent,
    StructureThemeGateway,
    ...structureGates
];
/** @type {?} */
const entryComponents = [
    StructureColumnConfigComponent,
    StructureRowDetailViewComponent
];
/** @type {?} */
const providers = [
    {
        provide: STRUCTURE_CSS_CLASS_NAME,
        useValue: 'structure'
    },
    {
        provide: StructureDefinition,
        useFactory: createStructureDefinition
    },
    ItemEntityFactory,
    StructureThemeConverter,
    SourceWarehouse,
    StructureIdGenerator,
    ...structureProviders
];
/** @type {?} */
const exportDeclarations = [
    FabricModule,
    StructureComponent,
    StructureThemeGateway,
    StructureHeaderComponent,
    StructureContentComponent,
    StructureRowComponent,
    StructureContainerComponent,
    ...fabricImports,
    PagingFeatureModule,
    ...structureGates
];
export class StructureModule {
    /**
     * @param {?} platformId
     */
    constructor(platformId) {
        this.platformId = platformId;
        if (isPlatformBrowser(this.platformId)) {
            window[StructureModule.HERMES_API].loggers = false;
        }
    }
    /**
     * @param {?=} structureConfig
     * @return {?}
     */
    static withConfig(structureConfig = {
        cssClassName: '',
        hermesModuleConfig: { loggers: false }
    }) {
        return {
            ngModule: StructureModule,
            providers: [
                {
                    provide: STRUCTURE_CSS_CLASS_NAME,
                    useValue: structureConfig.cssClassName
                },
                { provide: COMMAND_LOGGER_ENABLED, useValue: structureConfig.hermesModuleConfig.loggers },
                { provide: EVENT_LOGGER_ENABLED, useValue: structureConfig.hermesModuleConfig.loggers },
                ...providers
            ]
        };
    }
}
StructureModule.HERMES_API = 'hermesApi';
StructureModule.exportDeclarations = [...exportDeclarations];
StructureModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    imports
                ],
                declarations,
                exports: exportDeclarations,
                entryComponents
            },] }
];
/** @nocollapse */
StructureModule.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureModule.HERMES_API;
    /** @type {?} */
    StructureModule.exportDeclarations;
    /**
     * @type {?}
     * @private
     */
    StructureModule.prototype.platformId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2dyaWQvY29yZS9hcGkvc3RydWN0dXJlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBdUIsUUFBUSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRixPQUFPLEVBQUUsWUFBWSxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWxELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxvQkFBb0IsRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVoRyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDdkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDcEYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDaEcsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdkUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDM0YsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sZ0VBQWdFLENBQUM7QUFDakgsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0saUVBQWlFLENBQUM7QUFDbEgsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sZ0VBQWdFLENBQUM7QUFDaEgsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDOUYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDMUYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDN0YsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDbEcsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sc0VBQXNFLENBQUM7QUFDdEgsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDcEcsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFDN0csT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDOUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDekUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSw0QkFBNEIsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRW5ILE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUM5RixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUM3RixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUNuRyxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxnRUFBZ0UsQ0FBQztBQUMvRyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQUM1RyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUM3RixPQUFPLEVBQUUsb0NBQW9DLEVBQUUsTUFBTSx3RkFBd0YsQ0FBQztBQUM5SSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxnRkFBZ0YsQ0FBQztBQUMvSCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUMzRyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUN6RixPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSwwRUFBMEUsQ0FBQztBQUM3SCxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxtRUFBbUUsQ0FBQztBQUNwSCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSwrRUFBK0UsQ0FBQztBQUM3SCxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxpRkFBaUYsQ0FBQztBQUNoSSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUN0RixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUNyRyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUN6RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUN2RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNqRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUNuRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUNwRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUN0RixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUMxRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUMvRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUN0RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUN0RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUNqRyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDOUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDL0YsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDN0YsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sdUVBQXVFLENBQUM7QUFDdkgsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sMEVBQTBFLENBQUM7QUFDekgsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDdkYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNERBQTRELENBQUM7QUFDdEcsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDL0YsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sOERBQThELENBQUM7QUFDOUcsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpREFBaUQsQ0FBQzs7OztBQUdqRixNQUFNLFVBQVUseUJBQXlCO0lBQ3hDLE9BQU8sSUFBSSxtQkFBbUIsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUN6RCxDQUFDOztNQUVLLE9BQU8sR0FBRztJQUNmLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsd0JBQXdCO0lBQ3hCLFlBQVk7SUFDWixZQUFZLENBQUMsZUFBZSxDQUMzQixZQUFZLEVBQ1oseUJBQXlCLEVBQ3pCLG9DQUFvQyxFQUNwQyw2QkFBNkIsRUFDN0I7UUFDQyxHQUFHLGtCQUFrQixDQUFDLGVBQWUsRUFBRTtRQUN2QyxHQUFHLG1CQUFtQixDQUFDLGVBQWUsRUFBRTtRQUN4QyxHQUFHLGlCQUFpQixDQUFDLGVBQWUsRUFBRTtRQUN0QyxHQUFHLGtCQUFrQixDQUFDLGVBQWUsRUFBRTtRQUN2QyxHQUFHLGtCQUFrQixDQUFDLGVBQWUsRUFBRTtRQUN2QyxHQUFHLGtCQUFrQixDQUFDLGVBQWUsRUFBRTtRQUN2QyxHQUFHLHFCQUFxQixDQUFDLGVBQWUsRUFBRTtRQUMxQyxHQUFHLDZCQUE2QixDQUFDLGVBQWUsRUFBRTtRQUNsRCxHQUFHLHdCQUF3QjtLQUMzQixFQUFFO1FBQ0YsR0FBRyw0QkFBNEI7UUFDL0IsR0FBRyxrQkFBa0IsQ0FBQyxtQkFBbUIsRUFBRTtRQUMzQyxHQUFHLGtCQUFrQixDQUFDLG1CQUFtQixFQUFFO1FBQzNDLEdBQUcsa0JBQWtCLENBQUMsbUJBQW1CLEVBQUU7UUFDM0MsR0FBRyxxQkFBcUIsQ0FBQyxtQkFBbUIsRUFBRTtRQUM5QyxHQUFHLGlCQUFpQixDQUFDLG1CQUFtQixFQUFFO1FBQzFDLEdBQUcsNkJBQTZCLENBQUMsbUJBQW1CLEVBQUU7S0FDdEQsQ0FDRDtJQUNELGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLEdBQUcsYUFBYTtJQUVoQixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsOEJBQThCO0lBRTlCLG1CQUFtQjtJQUVuQixxQkFBcUI7SUFFckIsd0JBQXdCO0lBQ3hCLDZCQUE2QjtJQUM3Qix1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLDRCQUE0QjtJQUM1QixtQkFBbUI7SUFFbkIsd0JBQXdCO0lBRXhCLHdCQUF3QjtJQUV4QixZQUFZO0lBQ1osY0FBYztDQUNkOztNQUVLLFlBQVksR0FBRztJQUNwQixrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLCtCQUErQjtJQUMvQiw4QkFBOEI7SUFDOUIsK0JBQStCO0lBQy9CLDhCQUE4QjtJQUM5QixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsMEJBQTBCO0lBQzFCLGlDQUFpQztJQUNqQywyQkFBMkI7SUFDM0IsOEJBQThCO0lBQzlCLDJCQUEyQjtJQUMzQiwrQkFBK0I7SUFDL0IsNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUM3QixxQkFBcUI7SUFFckIsR0FBRyxjQUFjO0NBQ2pCOztNQUVLLGVBQWUsR0FBRztJQUN2Qiw4QkFBOEI7SUFDOUIsK0JBQStCO0NBQy9COztNQUVLLFNBQVMsR0FBRztJQUNqQjtRQUNDLE9BQU8sRUFBRSx3QkFBd0I7UUFDakMsUUFBUSxFQUFFLFdBQVc7S0FDckI7SUFDRDtRQUNDLE9BQU8sRUFBRSxtQkFBbUI7UUFDNUIsVUFBVSxFQUFFLHlCQUF5QjtLQUNyQztJQUNELGlCQUFpQjtJQUNqQix1QkFBdUI7SUFFdkIsZUFBZTtJQUVmLG9CQUFvQjtJQUVwQixHQUFHLGtCQUFrQjtDQUVyQjs7TUFFSyxrQkFBa0IsR0FBRztJQUMxQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQix3QkFBd0I7SUFDeEIseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQiwyQkFBMkI7SUFFM0IsR0FBRyxhQUFhO0lBQ2hCLG1CQUFtQjtJQUNuQixHQUFHLGNBQWM7Q0FDakI7QUFVRCxNQUFNLE9BQU8sZUFBZTs7OztJQXdCM0IsWUFBeUMsVUFBZTtRQUFmLGVBQVUsR0FBVixVQUFVLENBQUs7UUFDdkQsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDdkMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1NBQ25EO0lBQ0YsQ0FBQzs7Ozs7SUF0QkQsTUFBTSxDQUFDLFVBQVUsQ0FBQyxrQkFBeUM7UUFDMUQsWUFBWSxFQUFFLEVBQUU7UUFDaEIsa0JBQWtCLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFO0tBQ3RDO1FBQ0EsT0FBTztZQUNOLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFNBQVMsRUFBRTtnQkFDVjtvQkFDQyxPQUFPLEVBQUUsd0JBQXdCO29CQUNqQyxRQUFRLEVBQUUsZUFBZSxDQUFDLFlBQVk7aUJBQ3RDO2dCQUNELEVBQUUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLFFBQVEsRUFBRSxlQUFlLENBQUMsa0JBQWtCLENBQUMsT0FBTyxFQUFFO2dCQUN6RixFQUFFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxRQUFRLEVBQUUsZUFBZSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sRUFBRTtnQkFDdkYsR0FBRyxTQUFTO2FBQ1o7U0FDRCxDQUFDO0lBQ0gsQ0FBQzs7QUFwQnVCLDBCQUFVLEdBQUcsV0FBVyxDQUFDO0FBRTFDLGtDQUFrQixHQUFHLENBQUMsR0FBRyxrQkFBa0IsQ0FBQyxDQUFDOztZQVpwRCxRQUFRLFNBQUM7Z0JBQ1QsT0FBTyxFQUFFO29CQUNSLE9BQU87aUJBQ1A7Z0JBQ0QsWUFBWTtnQkFDWixPQUFPLEVBQUUsa0JBQWtCO2dCQUMzQixlQUFlO2FBQ2Y7Ozs7NENBeUJhLE1BQU0sU0FBQyxXQUFXOzs7Ozs7O0lBdEIvQiwyQkFBaUQ7O0lBRWpELG1DQUFvRDs7Ozs7SUFvQnhDLHFDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUsIGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IEZhYnJpY01vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2ZhYnJpYyc7XG5cbmltcG9ydCB7IENPTU1BTkRfTE9HR0VSX0VOQUJMRUQsIEVWRU5UX0xPR0dFUl9FTkFCTEVELCBIZXJtZXNNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBmYWJyaWNJbXBvcnRzIH0gZnJvbSAnLi4vLi4vZmVhdHVyZS9zdHJ1Y3R1cmUtZmFicmljLmltcG9ydHMnO1xuaW1wb3J0IHsgUGFnaW5nRmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3BhZ2luZy9mZWF0dXJlL3BhZ2luZy5mZWF0dXJlLW1vZHVsZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJbmZvUGFuZWxNb2R1bGUgfSBmcm9tICcuLi8uLi9mZWF0dXJlL3BhbmVsL2luZm8vc3RydWN0dXJlLmluZm8tcGFuZWwubW9kdWxlJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZlYXR1cmUvc3RydWN0dXJlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuLi8uLi9mZWF0dXJlL2hlYWRlci9zdHJ1Y3R1cmUtaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVIZWFkZXJDb2x1bW5zQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmVhdHVyZS9oZWFkZXIvY29sdW1uL3N0cnVjdHVyZS1oZWFkZXItY29sdW1ucy5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSGVhZGVyRmlsdGVyc0NvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZlYXR1cmUvaGVhZGVyL2ZpbHRlcnMvc3RydWN0dXJlLWhlYWRlci1maWx0ZXJzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVIZWFkZXJGaWx0ZXJDb21wb25lbnQgfSBmcm9tICcuLi8uLi9mZWF0dXJlL2hlYWRlci9maWx0ZXJzL3N0cnVjdHVyZS5oZWFkZXItZmlsdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb250ZW50Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmVhdHVyZS9jb250ZW50L3N0cnVjdHVyZS1jb250ZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVSb3dDb21wb25lbnQgfSBmcm9tICcuLi8uLi9mZWF0dXJlL2NvbnRlbnQvcm93L3N0cnVjdHVyZS1yb3cuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUNlbGxDb21wb25lbnQgfSBmcm9tICcuLi8uLi9mZWF0dXJlL2NvbnRlbnQvY2VsbC9zdHJ1Y3R1cmUuY2VsbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmVhdHVyZS9jb250ZW50L3N0cnVjdHVyZS1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZVF1aWNrRmlsdGVyc0NvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZlYXR1cmUvaGVhZGVyL3F1aWNrLWZpbHRlcnMvc3RydWN0dXJlLnF1aWNrLWZpbHRlcnMuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUJsdWVwcmludENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZlYXR1cmUvYmx1ZXByaW50L3N0cnVjdHVyZS5ibHVlcHJpbnQuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbHVtbkNvbmZpZ0NvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZlYXR1cmUvaGVhZGVyL21lbnUvc3RydWN0dXJlLmNvbHVtbi1jb25maWcuY29tcG9uZW50JztcbmltcG9ydCB7IFNUUlVDVFVSRV9DU1NfQ0xBU1NfTkFNRSB9IGZyb20gJy4vc3RydWN0dXJlLXRva2Vucyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVEZWZpbml0aW9uIH0gZnJvbSAnLi4vLi4vZmVhdHVyZS9zdHJ1Y3R1cmUtZGVmaW5pdGlvbic7XG5pbXBvcnQgeyBTb3VyY2VXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi9zb3VyY2UvY29yZS9hcGkvc291cmNlLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZEdlbmVyYXRvciB9IGZyb20gJy4uLy4uL2ZlYXR1cmUvc3RydWN0dXJlLWlkLmdlbmVyYXRvcic7XG5pbXBvcnQgeyBzdHJ1Y3R1cmVDb21tYW5kSGFuZGxlcnMsIHN0cnVjdHVyZURvbWFpbkV2ZW50SGFuZGxlcnMsIHN0cnVjdHVyZVByb3ZpZGVycyB9IGZyb20gJy4vc3RydWN0dXJlLnByb3ZpZGVycyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVNb2R1bGVDb25maWcgfSBmcm9tICcuLi8uLi9mZWF0dXJlL3N0cnVjdHVyZS1tb2R1bGUtY29uZmlnJztcbmltcG9ydCB7IExvZ2dlck1vZHVsZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvbG9nZ2VyL2xvZ2dlci5tb2R1bGUnO1xuaW1wb3J0IHsgSXRlbUVudGl0eUZhY3RvcnkgfSBmcm9tICcuLi8uLi8uLi9zb3VyY2UvY29yZS9kb21haW4vY29yZS9pdGVtL2l0ZW0uZW50aXR5LWZhY3RvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlVG9wUGFuZWxNb2R1bGUgfSBmcm9tICcuLi8uLi9mZWF0dXJlL3BhbmVsL3RvcC9zdHJ1Y3R1cmUudG9wLXBhbmVsLm1vZHVsZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb2x1bW5NZW51TW9kdWxlIH0gZnJvbSAnLi4vLi4vZmVhdHVyZS9oZWFkZXIvbWVudS9zdHJ1Y3R1cmUuY29sdW1uLW1lbnUubW9kdWxlJztcbmltcG9ydCB7IFN0cnVjdHVyZVN1bW1hcmllc1BhbmVsTW9kdWxlIH0gZnJvbSAnLi4vLi4vZmVhdHVyZS9wYW5lbC9zdW1tYXJpZXMvc3RydWN0dXJlLnN1bW1hcmllcy1wYW5lbC5tb2R1bGUnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29sdW1uTWFuYWdlck1vZHVsZSB9IGZyb20gJy4uLy4uL2ZlYXR1cmUvY29sdW1uLW1hbmFnZXIvc3RydWN0dXJlLmNvbHVtbi1tYW5hZ2VyLm1vZHVsZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGVGYWN0b3J5IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmFnZ3JlZ2F0ZS1mYWN0b3J5JztcbmltcG9ydCB7IEluTWVtb3J5U3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvaW5mcmFzdHJ1Y3R1cmUvaW4tbWVtb3J5L2RvbWFpbi9pbi1tZW1vcnkuc3RydWN0dXJlLWFnZ3JlZ2F0ZS5yZXBvc2l0b3J5JztcbmltcG9ydCB7IENyZWF0ZVN0cnVjdHVyZUNvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9kb21haW4vY3JlYXRlLXN0cnVjdHVyZS9jcmVhdGUtc3RydWN0dXJlLWNvbW1hbmQtaGFuZGxlci5zZXJ2aWNlJztcbmltcG9ydCB7IFN0cnVjdHVyZUNlbGxFZGl0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmVhdHVyZS9jb250ZW50L2NlbGwvZWRpdC9zdHJ1Y3R1cmUuY2VsbC1lZGl0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVUaGVtZUNvbnZlcnRlciB9IGZyb20gJy4uLy4uL2ZlYXR1cmUvc2NoZW1hL3N0cnVjdHVyZS50aGVtZS5jb252ZXJ0ZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlQ2VsbEVkaXRCb29sZWFuQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmVhdHVyZS9jb250ZW50L2NlbGwvYm9vbGVhbi9zdHJ1Y3R1cmUuY2VsbC1lZGl0LWJvb2xlYW4uY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZVJvd0RldGFpbFZpZXdDb21wb25lbnQgfSBmcm9tICcuLi8uLi9mZWF0dXJlL3Jvdy1kZXRhaWwvdmlldy9zdHJ1Y3R1cmUucm93LWRldGFpbC12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVUaXRsZVBhbmVsQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmVhdHVyZS9wYW5lbC9iYW5uZXItcGFuZWxzL3RpdGxlLXBhbmVsL3N0cnVjdHVyZS50aXRsZS1wYW5lbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlRm9vdGVyUGFuZWxDb21wb25lbnQgfSBmcm9tICcuLi8uLi9mZWF0dXJlL3BhbmVsL2Jhbm5lci1wYW5lbHMvZm9vdGVyLXBhbmVsL3N0cnVjdHVyZS5mb290ZXItcGFuZWwuY29tcG9uZW50JztcbmltcG9ydCB7IFBhZ2luZ0RvbWFpbk1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3BhZ2luZy9jb3JlL2RvbWFpbi9wYWdpbmcuZG9tYWluLW1vZHVsZSc7XG5pbXBvcnQgeyBFbXB0eVNvdXJjZUZlYXR1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9zb3VyY2UvZmVhdHVyZS9lbXB0eS9lbXB0eS1zb3VyY2UuZmVhdHVyZS1tb2R1bGUnO1xuaW1wb3J0IHsgU29ydGluZ0RvbWFpbk1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3NvcnRpbmcvY29yZS9kb21haW4vc29ydGluZy5kb21haW4tbW9kdWxlJztcbmltcG9ydCB7IFNvcnRpbmdGZWF0dXJlTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vc29ydGluZy9mZWF0dXJlL3NvcnRpbmcuZmVhdHVyZS1tb2R1bGUnO1xuaW1wb3J0IHsgRmllbGRGZWF0dXJlTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vZmllbGQvZmVhdHVyZS9maWVsZC5mZWF0dXJlLW1vZHVsZSc7XG5pbXBvcnQgeyBGaWVsZERvbWFpbk1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2ZpZWxkL2NvcmUvZG9tYWluL2ZpZWxkLmRvbWFpbi1tb2R1bGUnO1xuaW1wb3J0IHsgU2VhcmNoRmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3NlYXJjaC9mZWF0dXJlL3NlYXJjaC5mZWF0dXJlLW1vZHVsZSc7XG5pbXBvcnQgeyBTZWFyY2hEb21haW5Nb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9zZWFyY2gvY29yZS9kb21haW4vc2VhcmNoLmRvbWFpbi1tb2R1bGUnO1xuaW1wb3J0IHsgU3RydWN0dXJlVGhlbWVHYXRld2F5IH0gZnJvbSAnLi4vLi4vZmVhdHVyZS9nYXRlL3NjaGVtYS9zdHJ1Y3R1cmUtdGhlbWUuZ2F0ZXdheSc7XG5pbXBvcnQgeyBTY2hlbWFNYW5hZ2VyTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2NoZW1hL2ZlYXR1cmUvbWFuYWdlci9zY2hlbWEtbWFuYWdlci5tb2R1bGUnO1xuaW1wb3J0IHsgRmlsdGVyRG9tYWluTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vZmlsdGVyL2NvcmUvZG9tYWluL2ZpbHRlci5kb21haW4tbW9kdWxlJztcbmltcG9ydCB7IFNvdXJjZURvbWFpbk1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9jb3JlL2RvbWFpbi9zb3VyY2UuZG9tYWluLW1vZHVsZSc7XG5pbXBvcnQgeyBTZWxlY3RBbGxDb21wb25lbnQgfSBmcm9tICcuLi8uLi9mZWF0dXJlL2hlYWRlci9jb2x1bW4vc2VsZWN0LWFsbC9zZWxlY3QtYWxsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBzdHJ1Y3R1cmVLZXkgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3RyZS5hcGknO1xuaW1wb3J0IHsgU3VtbWFyaWVzRG9tYWluTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vc3VtbWFyaWVzL2NvcmUvZG9tYWluL3N1bW1hcmllcy5kb21haW4tbW9kdWxlJztcbmltcG9ydCB7IFN1bW1hcmllc0ZlYXR1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9zdW1tYXJpZXMvZmVhdHVyZS9zdW1tYXJpZXMuZmVhdHVyZS1tb2R1bGUnO1xuaW1wb3J0IHsgVmVydGljYWxGb3JtYXRpb25GZWF0dXJlTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vdmVydGljYWwtZm9ybWF0aW9uL2ZlYXR1cmUvdmVydGljYWwtZm9ybWF0aW9uLmZlYXR1cmUtbW9kdWxlJztcbmltcG9ydCB7IFZlcnRpY2FsRm9ybWF0aW9uRG9tYWluTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vdmVydGljYWwtZm9ybWF0aW9uL2NvcmUvZG9tYWluL3ZlcnRpY2FsLWZvcm1hdGlvbi5kb21haW4tbW9kdWxlJztcbmltcG9ydCB7IFNjaGVtYUZlYXR1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi8uLi9zY2hlbWEvZmVhdHVyZS9zY2hlbWEuZmVhdHVyZS1tb2R1bGUnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25GZWF0dXJlTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vZmVhdHVyZS9jb21wb3NpdGlvbi5mZWF0dXJlLW1vZHVsZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvbkZlYXR1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi8uLi9sMTBuL2ZlYXR1cmUvdHJhbnNsYXRpb24uZmVhdHVyZS1tb2R1bGUnO1xuaW1wb3J0IHsgU3RydWN0dXJlSGVhZGVyR3JvdXBzQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmVhdHVyZS9oZWFkZXIvZ3JvdXAvc3RydWN0dXJlLWhlYWRlci1ncm91cHMuY29tcG9uZW50JztcbmltcG9ydCB7IHN0cnVjdHVyZUdhdGVzIH0gZnJvbSAnLi4vLi4vZmVhdHVyZS9nYXRlL3N0cnVjdHVyZS5nYXRlcyc7XG5pbXBvcnQgeyBGaWx0ZXJNZW51RmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2ZpbHRlci9mZWF0dXJlL21lbnUvZmlsdGVyLW1lbnUuZmVhdHVyZS1tb2R1bGUnO1xuaW1wb3J0IHsgU291cmNlRmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9mZWF0dXJlL3NvdXJjZS5mZWF0dXJlLW1vZHVsZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvc3RydWN0dXJlLXNoYXJlZC5tb2R1bGUnO1xuaW1wb3J0IHsgU2FuaXRpemVNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL3Nhbml0aXplL3Nhbml0aXplLm1vZHVsZSc7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVN0cnVjdHVyZURlZmluaXRpb24oKSB7XG5cdHJldHVybiBuZXcgU3RydWN0dXJlRGVmaW5pdGlvbi5EZWZhdWx0QnVpbGRlcigpLmJ1aWxkKCk7XG59XG5cbmNvbnN0IGltcG9ydHMgPSBbXG5cdENvbW1vbk1vZHVsZSxcblx0UmVhY3RpdmVGb3Jtc01vZHVsZSxcblx0VHJhbnNsYXRpb25GZWF0dXJlTW9kdWxlLFxuXHRIZXJtZXNNb2R1bGUsXG5cdEhlcm1lc01vZHVsZS5kZWZpbmVBZ2dyZWdhdGUoXG5cdFx0c3RydWN0dXJlS2V5LFxuXHRcdFN0cnVjdHVyZUFnZ3JlZ2F0ZUZhY3RvcnksXG5cdFx0SW5NZW1vcnlTdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5LFxuXHRcdENyZWF0ZVN0cnVjdHVyZUNvbW1hbmRIYW5kbGVyLFxuXHRcdFtcblx0XHRcdC4uLlBhZ2luZ0RvbWFpbk1vZHVsZS5jb21tYW5kSGFuZGxlcnMoKSxcblx0XHRcdC4uLlNvcnRpbmdEb21haW5Nb2R1bGUuY29tbWFuZEhhbmRsZXJzKCksXG5cdFx0XHQuLi5GaWVsZERvbWFpbk1vZHVsZS5jb21tYW5kSGFuZGxlcnMoKSxcblx0XHRcdC4uLlNlYXJjaERvbWFpbk1vZHVsZS5jb21tYW5kSGFuZGxlcnMoKSxcblx0XHRcdC4uLkZpbHRlckRvbWFpbk1vZHVsZS5jb21tYW5kSGFuZGxlcnMoKSxcblx0XHRcdC4uLlNvdXJjZURvbWFpbk1vZHVsZS5jb21tYW5kSGFuZGxlcnMoKSxcblx0XHRcdC4uLlN1bW1hcmllc0RvbWFpbk1vZHVsZS5jb21tYW5kSGFuZGxlcnMoKSxcblx0XHRcdC4uLlZlcnRpY2FsRm9ybWF0aW9uRG9tYWluTW9kdWxlLmNvbW1hbmRIYW5kbGVycygpLFxuXHRcdFx0Li4uc3RydWN0dXJlQ29tbWFuZEhhbmRsZXJzXG5cdFx0XSwgW1xuXHRcdFx0Li4uc3RydWN0dXJlRG9tYWluRXZlbnRIYW5kbGVycyxcblx0XHRcdC4uLlNlYXJjaERvbWFpbk1vZHVsZS5kb21haW5FdmVudEhhbmRsZXJzKCksXG5cdFx0XHQuLi5GaWx0ZXJEb21haW5Nb2R1bGUuZG9tYWluRXZlbnRIYW5kbGVycygpLFxuXHRcdFx0Li4uU291cmNlRG9tYWluTW9kdWxlLmRvbWFpbkV2ZW50SGFuZGxlcnMoKSxcblx0XHRcdC4uLlN1bW1hcmllc0RvbWFpbk1vZHVsZS5kb21haW5FdmVudEhhbmRsZXJzKCksXG5cdFx0XHQuLi5GaWVsZERvbWFpbk1vZHVsZS5kb21haW5FdmVudEhhbmRsZXJzKCksXG5cdFx0XHQuLi5WZXJ0aWNhbEZvcm1hdGlvbkRvbWFpbk1vZHVsZS5kb21haW5FdmVudEhhbmRsZXJzKClcblx0XHRdXG5cdCksXG5cdC8vIC53aXRoQ29uZmlnKHtcblx0Ly8gXHRsb2dnZXJzOiBmYWxzZVxuXHQvLyB9KSxcblx0Li4uZmFicmljSW1wb3J0cyxcblxuXHRQYWdpbmdGZWF0dXJlTW9kdWxlLFxuXHRTb3J0aW5nRmVhdHVyZU1vZHVsZSxcblx0RmllbGRGZWF0dXJlTW9kdWxlLFxuXHRTZWFyY2hGZWF0dXJlTW9kdWxlLFxuXHRGaWx0ZXJNZW51RmVhdHVyZU1vZHVsZSxcblx0U291cmNlRmVhdHVyZU1vZHVsZSxcblx0U3VtbWFyaWVzRmVhdHVyZU1vZHVsZSxcblx0VmVydGljYWxGb3JtYXRpb25GZWF0dXJlTW9kdWxlLFxuXG5cdFNjaGVtYUZlYXR1cmVNb2R1bGUsXG5cblx0U3RydWN0dXJlU2hhcmVkTW9kdWxlLFxuXG5cdFN0cnVjdHVyZUluZm9QYW5lbE1vZHVsZSxcblx0U3RydWN0dXJlU3VtbWFyaWVzUGFuZWxNb2R1bGUsXG5cdFN0cnVjdHVyZVRvcFBhbmVsTW9kdWxlLFxuXHRTdHJ1Y3R1cmVDb2x1bW5NZW51TW9kdWxlLFxuXHRTdHJ1Y3R1cmVDb2x1bW5NYW5hZ2VyTW9kdWxlLFxuXHRTY2hlbWFNYW5hZ2VyTW9kdWxlLFxuXG5cdEVtcHR5U291cmNlRmVhdHVyZU1vZHVsZSxcblxuXHRDb21wb3NpdGlvbkZlYXR1cmVNb2R1bGUsXG5cblx0TG9nZ2VyTW9kdWxlLFxuXHRTYW5pdGl6ZU1vZHVsZVxuXTtcblxuY29uc3QgZGVjbGFyYXRpb25zID0gW1xuXHRTdHJ1Y3R1cmVDb21wb25lbnQsXG5cdFN0cnVjdHVyZUhlYWRlckNvbXBvbmVudCxcblx0U3RydWN0dXJlSGVhZGVyQ29sdW1uc0NvbXBvbmVudCxcblx0U3RydWN0dXJlSGVhZGVyR3JvdXBzQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVIZWFkZXJGaWx0ZXJzQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVIZWFkZXJGaWx0ZXJDb21wb25lbnQsXG5cdFNlbGVjdEFsbENvbXBvbmVudCxcblx0U3RydWN0dXJlQ29udGVudENvbXBvbmVudCxcblx0U3RydWN0dXJlUm93Q29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVDZWxsQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVDZWxsRWRpdENvbXBvbmVudCxcblx0U3RydWN0dXJlQ2VsbEVkaXRCb29sZWFuQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVDb250YWluZXJDb21wb25lbnQsXG5cdFN0cnVjdHVyZVF1aWNrRmlsdGVyc0NvbXBvbmVudCxcblx0U3RydWN0dXJlQmx1ZXByaW50Q29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVSb3dEZXRhaWxWaWV3Q29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVUaXRsZVBhbmVsQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVGb290ZXJQYW5lbENvbXBvbmVudCxcblx0U3RydWN0dXJlVGhlbWVHYXRld2F5LFxuXG5cdC4uLnN0cnVjdHVyZUdhdGVzXG5dO1xuXG5jb25zdCBlbnRyeUNvbXBvbmVudHMgPSBbXG5cdFN0cnVjdHVyZUNvbHVtbkNvbmZpZ0NvbXBvbmVudCxcblx0U3RydWN0dXJlUm93RGV0YWlsVmlld0NvbXBvbmVudFxuXTtcblxuY29uc3QgcHJvdmlkZXJzID0gW1xuXHR7XG5cdFx0cHJvdmlkZTogU1RSVUNUVVJFX0NTU19DTEFTU19OQU1FLFxuXHRcdHVzZVZhbHVlOiAnc3RydWN0dXJlJ1xuXHR9LFxuXHR7XG5cdFx0cHJvdmlkZTogU3RydWN0dXJlRGVmaW5pdGlvbixcblx0XHR1c2VGYWN0b3J5OiBjcmVhdGVTdHJ1Y3R1cmVEZWZpbml0aW9uXG5cdH0sXG5cdEl0ZW1FbnRpdHlGYWN0b3J5LFxuXHRTdHJ1Y3R1cmVUaGVtZUNvbnZlcnRlcixcblxuXHRTb3VyY2VXYXJlaG91c2UsXG5cblx0U3RydWN0dXJlSWRHZW5lcmF0b3IsXG5cblx0Li4uc3RydWN0dXJlUHJvdmlkZXJzXG5cbl07XG5cbmNvbnN0IGV4cG9ydERlY2xhcmF0aW9ucyA9IFtcblx0RmFicmljTW9kdWxlLFxuXHRTdHJ1Y3R1cmVDb21wb25lbnQsXG5cdFN0cnVjdHVyZVRoZW1lR2F0ZXdheSxcblx0U3RydWN0dXJlSGVhZGVyQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVDb250ZW50Q29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVSb3dDb21wb25lbnQsXG5cdFN0cnVjdHVyZUNvbnRhaW5lckNvbXBvbmVudCxcblxuXHQuLi5mYWJyaWNJbXBvcnRzLFxuXHRQYWdpbmdGZWF0dXJlTW9kdWxlLFxuXHQuLi5zdHJ1Y3R1cmVHYXRlc1xuXTtcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdGltcG9ydHNcblx0XSxcblx0ZGVjbGFyYXRpb25zLFxuXHRleHBvcnRzOiBleHBvcnREZWNsYXJhdGlvbnMsXG5cdGVudHJ5Q29tcG9uZW50c1xufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVNb2R1bGUge1xuXG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IEhFUk1FU19BUEkgPSAnaGVybWVzQXBpJztcblxuXHRzdGF0aWMgZXhwb3J0RGVjbGFyYXRpb25zID0gWy4uLmV4cG9ydERlY2xhcmF0aW9uc107XG5cblx0c3RhdGljIHdpdGhDb25maWcoc3RydWN0dXJlQ29uZmlnOiBTdHJ1Y3R1cmVNb2R1bGVDb25maWcgPSB7XG5cdFx0Y3NzQ2xhc3NOYW1lOiAnJyxcblx0XHRoZXJtZXNNb2R1bGVDb25maWc6IHsgbG9nZ2VyczogZmFsc2UgfVxuXHR9KTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdG5nTW9kdWxlOiBTdHJ1Y3R1cmVNb2R1bGUsXG5cdFx0XHRwcm92aWRlcnM6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHByb3ZpZGU6IFNUUlVDVFVSRV9DU1NfQ0xBU1NfTkFNRSxcblx0XHRcdFx0XHR1c2VWYWx1ZTogc3RydWN0dXJlQ29uZmlnLmNzc0NsYXNzTmFtZVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7IHByb3ZpZGU6IENPTU1BTkRfTE9HR0VSX0VOQUJMRUQsIHVzZVZhbHVlOiBzdHJ1Y3R1cmVDb25maWcuaGVybWVzTW9kdWxlQ29uZmlnLmxvZ2dlcnMgfSxcblx0XHRcdFx0eyBwcm92aWRlOiBFVkVOVF9MT0dHRVJfRU5BQkxFRCwgdXNlVmFsdWU6IHN0cnVjdHVyZUNvbmZpZy5oZXJtZXNNb2R1bGVDb25maWcubG9nZ2VycyB9LFxuXHRcdFx0XHQuLi5wcm92aWRlcnNcblx0XHRcdF1cblx0XHR9O1xuXHR9XG5cblx0Y29uc3RydWN0b3IoQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBhbnkpIHtcblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuXHRcdFx0d2luZG93W1N0cnVjdHVyZU1vZHVsZS5IRVJNRVNfQVBJXS5sb2dnZXJzID0gZmFsc2U7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==