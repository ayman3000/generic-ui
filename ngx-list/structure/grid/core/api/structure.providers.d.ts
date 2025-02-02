import { Provider } from '@angular/core';
import { StructureCommandInvoker } from '../../../core/api/structure.command-invoker';
import { StructureReadModelRootConverter } from './read/structure.read-model-root-converter';
import { StructureAggregateFactory } from '../../../core/domain/structure.aggregate-factory';
import { StructureWarehouse } from './structure.warehouse';
import { StructureDomainCommandInvoker } from '../../../core/domain/structure.domain-command-invoker';
import { StructureInitialValuesReadyArchive } from '../../../core/api/structure.initial-values-ready.archive';
export declare const structureCommandHandlers: Array<Provider>;
export declare const structureDomainEventHandlers: Provider[][];
export declare const structureProviders: (typeof StructureInitialValuesReadyArchive | typeof StructureWarehouse | typeof StructureReadModelRootConverter | typeof import("../../../../generic-ui-ngx-list").ɵhp[] | typeof StructureAggregateFactory | (typeof import("../../../../generic-ui-ngx-list").ɵho | {
    provide: typeof import("../../../../generic-ui-ngx-list").ɵbe;
    useClass: typeof import("../../../../generic-ui-ngx-list").ɵhn;
})[][] | (typeof import("../../../../generic-ui-ngx-list").ɵlk | {
    provide: typeof import("./read/structure.read-model-repository").StructureReadModelRepository;
    useClass: typeof import("../../../../generic-ui-ngx-list").ɵtx;
})[][] | {
    provide: typeof StructureCommandInvoker;
    useClass: typeof StructureDomainCommandInvoker;
})[];
