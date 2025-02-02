import { StructureId } from '../../../core/api/structure.id';
import { SummariesCommandInvoker } from '../api/summaries.command-invoker';
import { SummariesConfig } from '../api/summaries-config';
import { StructureSummariesPanelConfigConverter } from '../domain-read/config/structure.summaries-panel.config-converter';
import { StructureSummariesConfigArchive } from '../domain-read/config/structure.summaries-config.archive';
import { SummariesDispatcher } from './summaries.dispatcher';
export declare class SummariesDomainCommandInvoker extends SummariesCommandInvoker {
    private readonly summariesDispatcher;
    private readonly configConverter;
    private readonly structureSummariesConfigArchive;
    constructor(summariesDispatcher: SummariesDispatcher, configConverter: StructureSummariesPanelConfigConverter, structureSummariesConfigArchive: StructureSummariesConfigArchive);
    setSummariesEnabled(enabled: boolean, structureId: StructureId): void;
    setConfig(config: SummariesConfig, structureId: StructureId): void;
}
