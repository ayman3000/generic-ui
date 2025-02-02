import { StructureId } from '../../../core/api/structure.id';
import { HermesObservable, Warehouse } from '@generic-ui/hermes';
export declare abstract class VerticalFormationWarehouse implements Warehouse {
    protected constructor();
    abstract onVerticalScrollEnabled(structureId: StructureId): HermesObservable<boolean>;
    abstract onRowHeight(structureId: StructureId): HermesObservable<number>;
    abstract onContainerHeight(structureId: StructureId): HermesObservable<number>;
    abstract onTopMargin(structureId: StructureId): HermesObservable<number>;
    abstract onScrollBarPosition(structureId: StructureId): HermesObservable<number>;
}
