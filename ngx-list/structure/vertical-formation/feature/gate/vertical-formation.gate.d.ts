import { Gate } from '../../../../common/cdk/component/gate';
import { NgChanges } from '../../../../common/cdk/component/ng-changes';
import { StructureCommandInvoker } from '../../../core/api/structure.command-invoker';
import { OnChanges } from '@angular/core';
import { StructureId } from '../../../core/api/structure.id';
export declare class VerticalFormationGate extends Gate implements OnChanges {
    private readonly structureId;
    private readonly structureCommandInvoker;
    virtualScroll: boolean;
    constructor(structureId: StructureId, structureCommandInvoker: StructureCommandInvoker);
    ngOnChanges(changes: NgChanges<VerticalFormationGate>): void;
}
