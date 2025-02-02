import { SummariesCalculator } from './calculation/summaries.calculator';
import { StructureId } from '../../../core/api/structure.id';
import { SummariesManager } from './summaries.manager';
export declare class SummariesManagerFactory {
    private readonly calculators;
    constructor(calculators: Array<SummariesCalculator<any, any>>);
    create(structureId: StructureId): SummariesManager;
}
