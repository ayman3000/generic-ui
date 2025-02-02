import { HermesObservable } from '@generic-ui/hermes';
import { SummariesEnabledArchive } from './enabled/summaries-enabled-archive.service';
import { StructureId } from '../../../core/api/structure.id';
import { SummariesWarehouse } from '../api/summaries.warehouse';
import { StructureSummariesConfigArchive } from './config/structure.summaries-config.archive';
export declare class SummariesDomainWarehouse extends SummariesWarehouse {
    private readonly summariesEnabledArchive;
    private readonly structureSummariesArchive;
    constructor(summariesEnabledArchive: SummariesEnabledArchive, structureSummariesArchive: StructureSummariesConfigArchive);
    onEnabled(structureId: StructureId): HermesObservable<boolean>;
    onTopEnabled(structureId: StructureId): HermesObservable<boolean>;
    onBottomEnabled(structureId: StructureId): HermesObservable<boolean>;
}
