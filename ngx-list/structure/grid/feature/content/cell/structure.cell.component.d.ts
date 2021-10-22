import { AfterViewInit, ChangeDetectorRef, ElementRef } from '@angular/core';
import { SmartComponent } from '../../../../../common/cdk/component/smart-component';
import { CellTemplateWithAccessor } from '../../../../../composition/core/domain-read/definition/cell-template-with-accessor';
import { StructureCellEditArchive } from '../../edit/structure.cell-edit.archive';
import { StructureCellEditStore } from '../../edit/structure.cell-edit.store';
import { SourceCommandInvoker } from '../../../../source/core/api/source.command-invoker';
import { ChangedValueEmitter } from '../../../../../composition/core/domain-read/edit/changed-value.emitter';
import { ItemEntity } from '../../../../source/core/domain/core/item/item.entity';
import { StructureCellEditCloseAllService } from '../../edit/structure.cell-edit-close-all.service';
import { StructureId } from '../../../../core/api/structure.id';
import { CompositionWarehouse } from '../../../../../composition/core/api/composition.warehouse';
import { CompositionId } from '../../../../../composition/core/api/composition.id';
export declare class StructureCellComponent extends SmartComponent implements AfterViewInit {
    private readonly changeDetectorRef;
    private readonly elementRef;
    private readonly structureId;
    private readonly compositionId;
    private readonly structureCellEditArchive;
    private readonly structureCellEditStore;
    private readonly cellEditCloseAllService;
    private readonly sourceCommandService;
    private readonly compositionWarehouse;
    entity: ItemEntity;
    cell: CellTemplateWithAccessor;
    editMode: boolean;
    cellEditingEnabled: boolean;
    searchPhrase: string;
    inEditMode: boolean;
    editContext: any;
    valueChanges$: ChangedValueEmitter<any>;
    status$: ChangedValueEmitter<any>;
    actualValue: any;
    isHighlighted: boolean;
    constructor(changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef, structureId: StructureId, compositionId: CompositionId, structureCellEditArchive: StructureCellEditArchive, structureCellEditStore: StructureCellEditStore, cellEditCloseAllService: StructureCellEditCloseAllService, sourceCommandService: SourceCommandInvoker, compositionWarehouse: CompositionWarehouse);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    isCellEditingEnabled(): boolean;
    enterEditMode(forceCheck?: boolean): void;
    exitEditMode(): void;
    submitChangesAndExit(): void;
    private observeFieldStatus;
    private observeValueChanges;
    private publishEditState;
    private publishEditEnter;
    private publishEditCancel;
    private publishEditSubmit;
    protected getSelectorName(): string;
}
