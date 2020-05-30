/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { inMemoryCompositionCommandProviders, inMemoryCompositionProviders, inMemoryCompositionReadModelProviders } from '../infrastructure/in-memory/in-memory.composition.providers';
import { CompositionDispatcher } from '../domain/composition.dispatcher';
import { ColumnEntityFactory } from '../domain/column/column-entity.factory';
import { CompositionEventConverter } from '../domain/composition.event-converter';
import { ColumnFieldFactory } from '../domain/column/field/colum-field.factory';
import { CompositionEventRepository } from './composition.event-repository';
import { CompositionWarehouse } from './composition.warehouse';
import { CompositionCommandDispatcher } from './composition.command-dispatcher';
import { CompositionReadModelRootConverter } from './read/composition.read-model-root-converter';
import { EditTemplateRepository } from './read/edit/edit-template.repository';
import { EditTemplateFactory } from './read/edit/edit-template.factory';
import { ViewTemplateFactory } from './read/view/view-template.factory';
import { ViewTemplateRepository } from './read/view/view-template.repository';
import { ColumnDefinitionFactory } from './read/definition/column-definition.factory';
import { ColumnPresentationConverter } from '../domain/column/presentation/column.presentation.converter';
/** @type {?} */
var commandProviders = tslib_1.__spread(inMemoryCompositionCommandProviders, [
    CompositionDispatcher,
    ColumnEntityFactory,
    ColumnPresentationConverter,
    CompositionEventConverter,
    ColumnFieldFactory
]);
/** @type {?} */
var readProviders = tslib_1.__spread(inMemoryCompositionReadModelProviders, [
    ColumnDefinitionFactory,
    ViewTemplateRepository,
    ViewTemplateFactory,
    EditTemplateFactory,
    EditTemplateRepository
]);
/** @type {?} */
export var compositionProviders = tslib_1.__spread(inMemoryCompositionProviders, commandProviders, readProviders, [
    CompositionReadModelRootConverter,
    CompositionCommandDispatcher,
    CompositionWarehouse,
    CompositionEventRepository
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24ucHJvdmlkZXJzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vZG9tYWluLWFwaS9jb21wb3NpdGlvbi5wcm92aWRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ04sbUNBQW1DLEVBQ25DLDRCQUE0QixFQUM1QixxQ0FBcUMsRUFDckMsTUFBTSw2REFBNkQsQ0FBQztBQUNyRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUM3RSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNsRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNoRixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM1RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNoRixPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNqRyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUN0RixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSw2REFBNkQsQ0FBQzs7SUFHcEcsZ0JBQWdCLG9CQUNsQixtQ0FBbUM7SUFDdEMscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0IseUJBQXlCO0lBQ3pCLGtCQUFrQjtFQUNsQjs7SUFFSyxhQUFhLG9CQUNmLHFDQUFxQztJQUN4Qyx1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsc0JBQXNCO0VBQ3RCOztBQUVELE1BQU0sS0FBTyxvQkFBb0Isb0JBQzdCLDRCQUE0QixFQUM1QixnQkFBZ0IsRUFDaEIsYUFBYTtJQUVoQixpQ0FBaUM7SUFFakMsNEJBQTRCO0lBQzVCLG9CQUFvQjtJQUNwQiwwQkFBMEI7RUFDMUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRpbk1lbW9yeUNvbXBvc2l0aW9uQ29tbWFuZFByb3ZpZGVycyxcblx0aW5NZW1vcnlDb21wb3NpdGlvblByb3ZpZGVycyxcblx0aW5NZW1vcnlDb21wb3NpdGlvblJlYWRNb2RlbFByb3ZpZGVyc1xufSBmcm9tICcuLi9pbmZyYXN0cnVjdHVyZS9pbi1tZW1vcnkvaW4tbWVtb3J5LmNvbXBvc2l0aW9uLnByb3ZpZGVycyc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkRpc3BhdGNoZXIgfSBmcm9tICcuLi9kb21haW4vY29tcG9zaXRpb24uZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBDb2x1bW5FbnRpdHlGYWN0b3J5IH0gZnJvbSAnLi4vZG9tYWluL2NvbHVtbi9jb2x1bW4tZW50aXR5LmZhY3RvcnknO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25FdmVudENvbnZlcnRlciB9IGZyb20gJy4uL2RvbWFpbi9jb21wb3NpdGlvbi5ldmVudC1jb252ZXJ0ZXInO1xuaW1wb3J0IHsgQ29sdW1uRmllbGRGYWN0b3J5IH0gZnJvbSAnLi4vZG9tYWluL2NvbHVtbi9maWVsZC9jb2x1bS1maWVsZC5mYWN0b3J5JztcbmltcG9ydCB7IENvbXBvc2l0aW9uRXZlbnRSZXBvc2l0b3J5IH0gZnJvbSAnLi9jb21wb3NpdGlvbi5ldmVudC1yZXBvc2l0b3J5JztcbmltcG9ydCB7IENvbXBvc2l0aW9uV2FyZWhvdXNlIH0gZnJvbSAnLi9jb21wb3NpdGlvbi53YXJlaG91c2UnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4vY29tcG9zaXRpb24uY29tbWFuZC1kaXNwYXRjaGVyJztcbmltcG9ydCB7IENvbXBvc2l0aW9uUmVhZE1vZGVsUm9vdENvbnZlcnRlciB9IGZyb20gJy4vcmVhZC9jb21wb3NpdGlvbi5yZWFkLW1vZGVsLXJvb3QtY29udmVydGVyJztcbmltcG9ydCB7IEVkaXRUZW1wbGF0ZVJlcG9zaXRvcnkgfSBmcm9tICcuL3JlYWQvZWRpdC9lZGl0LXRlbXBsYXRlLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgRWRpdFRlbXBsYXRlRmFjdG9yeSB9IGZyb20gJy4vcmVhZC9lZGl0L2VkaXQtdGVtcGxhdGUuZmFjdG9yeSc7XG5pbXBvcnQgeyBWaWV3VGVtcGxhdGVGYWN0b3J5IH0gZnJvbSAnLi9yZWFkL3ZpZXcvdmlldy10ZW1wbGF0ZS5mYWN0b3J5JztcbmltcG9ydCB7IFZpZXdUZW1wbGF0ZVJlcG9zaXRvcnkgfSBmcm9tICcuL3JlYWQvdmlldy92aWV3LXRlbXBsYXRlLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgQ29sdW1uRGVmaW5pdGlvbkZhY3RvcnkgfSBmcm9tICcuL3JlYWQvZGVmaW5pdGlvbi9jb2x1bW4tZGVmaW5pdGlvbi5mYWN0b3J5JztcbmltcG9ydCB7IENvbHVtblByZXNlbnRhdGlvbkNvbnZlcnRlciB9IGZyb20gJy4uL2RvbWFpbi9jb2x1bW4vcHJlc2VudGF0aW9uL2NvbHVtbi5wcmVzZW50YXRpb24uY29udmVydGVyJztcblxuXG5jb25zdCBjb21tYW5kUHJvdmlkZXJzID0gW1xuXHQuLi5pbk1lbW9yeUNvbXBvc2l0aW9uQ29tbWFuZFByb3ZpZGVycyxcblx0Q29tcG9zaXRpb25EaXNwYXRjaGVyLFxuXHRDb2x1bW5FbnRpdHlGYWN0b3J5LFxuXHRDb2x1bW5QcmVzZW50YXRpb25Db252ZXJ0ZXIsXG5cdENvbXBvc2l0aW9uRXZlbnRDb252ZXJ0ZXIsXG5cdENvbHVtbkZpZWxkRmFjdG9yeVxuXTtcblxuY29uc3QgcmVhZFByb3ZpZGVycyA9IFtcblx0Li4uaW5NZW1vcnlDb21wb3NpdGlvblJlYWRNb2RlbFByb3ZpZGVycyxcblx0Q29sdW1uRGVmaW5pdGlvbkZhY3RvcnksXG5cdFZpZXdUZW1wbGF0ZVJlcG9zaXRvcnksXG5cdFZpZXdUZW1wbGF0ZUZhY3RvcnksXG5cdEVkaXRUZW1wbGF0ZUZhY3RvcnksXG5cdEVkaXRUZW1wbGF0ZVJlcG9zaXRvcnlcbl07XG5cbmV4cG9ydCBjb25zdCBjb21wb3NpdGlvblByb3ZpZGVycyA9IFtcblx0Li4uaW5NZW1vcnlDb21wb3NpdGlvblByb3ZpZGVycyxcblx0Li4uY29tbWFuZFByb3ZpZGVycyxcblx0Li4ucmVhZFByb3ZpZGVycyxcblxuXHRDb21wb3NpdGlvblJlYWRNb2RlbFJvb3RDb252ZXJ0ZXIsXG5cblx0Q29tcG9zaXRpb25Db21tYW5kRGlzcGF0Y2hlcixcblx0Q29tcG9zaXRpb25XYXJlaG91c2UsXG5cdENvbXBvc2l0aW9uRXZlbnRSZXBvc2l0b3J5XG5dO1xuIl19