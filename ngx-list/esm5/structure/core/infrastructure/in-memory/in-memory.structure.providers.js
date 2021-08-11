/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InMemoryStructureAggregateStore } from './domain/in-memory.structure.aggregate-store';
import { InMemoryStructureAggregateRepository } from './domain/in-memory.structure-aggregate.repository';
import { StructureAggregateRepository } from '../../domain/structure-aggregate.repository';
import { InMemoryStructureReadStore } from './api/in-memory-structure.read-store';
import { StructureReadModelRepository } from '../../../grid/core/api/read/structure.read-model-repository';
import { InMemoryStructureRepository } from './api/in-memory.structure.repository';
import { InMemoryStructureStore } from './in-memory.structure.store';
/** @type {?} */
export var inMemoryStructureCommandProviders = [
    InMemoryStructureAggregateStore,
    {
        provide: StructureAggregateRepository,
        useClass: InMemoryStructureAggregateRepository
    }
];
/** @type {?} */
export var inMemoryStructureReadProviders = [
    InMemoryStructureReadStore,
    {
        provide: StructureReadModelRepository,
        useClass: InMemoryStructureRepository
    }
];
/** @type {?} */
export var inMemoryStructureProviders = [
    InMemoryStructureStore
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LnN0cnVjdHVyZS5wcm92aWRlcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9jb3JlL2luZnJhc3RydWN0dXJlL2luLW1lbW9yeS9pbi1tZW1vcnkuc3RydWN0dXJlLnByb3ZpZGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFFL0YsT0FBTyxFQUFFLG9DQUFvQyxFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDekcsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDM0YsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDbEYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFDM0csT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDbkYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7O0FBRXJFLE1BQU0sS0FBTyxpQ0FBaUMsR0FBRztJQUNoRCwrQkFBK0I7SUFDL0I7UUFDQyxPQUFPLEVBQUUsNEJBQTRCO1FBQ3JDLFFBQVEsRUFBRSxvQ0FBb0M7S0FDOUM7Q0FDRDs7QUFFRCxNQUFNLEtBQU8sOEJBQThCLEdBQUc7SUFDN0MsMEJBQTBCO0lBQzFCO1FBQ0MsT0FBTyxFQUFFLDRCQUE0QjtRQUNyQyxRQUFRLEVBQUUsMkJBQTJCO0tBQ3JDO0NBQ0Q7O0FBRUQsTUFBTSxLQUFPLDBCQUEwQixHQUFHO0lBQ3pDLHNCQUFzQjtDQUN0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluTWVtb3J5U3RydWN0dXJlQWdncmVnYXRlU3RvcmUgfSBmcm9tICcuL2RvbWFpbi9pbi1tZW1vcnkuc3RydWN0dXJlLmFnZ3JlZ2F0ZS1zdG9yZSc7XG5cbmltcG9ydCB7IEluTWVtb3J5U3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeSB9IGZyb20gJy4vZG9tYWluL2luLW1lbW9yeS5zdHJ1Y3R1cmUtYWdncmVnYXRlLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUtYWdncmVnYXRlLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgSW5NZW1vcnlTdHJ1Y3R1cmVSZWFkU3RvcmUgfSBmcm9tICcuL2FwaS9pbi1tZW1vcnktc3RydWN0dXJlLnJlYWQtc3RvcmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlUmVhZE1vZGVsUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uL2dyaWQvY29yZS9hcGkvcmVhZC9zdHJ1Y3R1cmUucmVhZC1tb2RlbC1yZXBvc2l0b3J5JztcbmltcG9ydCB7IEluTWVtb3J5U3RydWN0dXJlUmVwb3NpdG9yeSB9IGZyb20gJy4vYXBpL2luLW1lbW9yeS5zdHJ1Y3R1cmUucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBJbk1lbW9yeVN0cnVjdHVyZVN0b3JlIH0gZnJvbSAnLi9pbi1tZW1vcnkuc3RydWN0dXJlLnN0b3JlJztcblxuZXhwb3J0IGNvbnN0IGluTWVtb3J5U3RydWN0dXJlQ29tbWFuZFByb3ZpZGVycyA9IFtcblx0SW5NZW1vcnlTdHJ1Y3R1cmVBZ2dyZWdhdGVTdG9yZSxcblx0e1xuXHRcdHByb3ZpZGU6IFN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnksXG5cdFx0dXNlQ2xhc3M6IEluTWVtb3J5U3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeVxuXHR9XG5dO1xuXG5leHBvcnQgY29uc3QgaW5NZW1vcnlTdHJ1Y3R1cmVSZWFkUHJvdmlkZXJzID0gW1xuXHRJbk1lbW9yeVN0cnVjdHVyZVJlYWRTdG9yZSxcblx0e1xuXHRcdHByb3ZpZGU6IFN0cnVjdHVyZVJlYWRNb2RlbFJlcG9zaXRvcnksXG5cdFx0dXNlQ2xhc3M6IEluTWVtb3J5U3RydWN0dXJlUmVwb3NpdG9yeVxuXHR9XG5dO1xuXG5leHBvcnQgY29uc3QgaW5NZW1vcnlTdHJ1Y3R1cmVQcm92aWRlcnMgPSBbXG5cdEluTWVtb3J5U3RydWN0dXJlU3RvcmVcbl07XG4iXX0=