import { ChangeDetectorRef, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SmartComponent } from '../../../common/cdk/component/smart-component';
import { StructureWarehouse } from '../../grid/core/api/structure.warehouse';
import { StructureId } from '../../core/api/structure.id';
import { SearchCommandInvoker } from '../core/api/search.command-invoker';
import { SearchWarehouse } from '../core/api/search.warehouse';
import { HermesSubscription } from '@generic-ui/hermes';
export declare class SearchComponent extends SmartComponent implements OnInit {
    private readonly formBuilder;
    private readonly changeDetectorRef;
    private readonly structureId;
    private readonly searchCommandDispatcher;
    private readonly structureWarehouse;
    private readonly searchWarehouse;
    private static readonly FORM_SEARCH_NAME;
    formRef: ElementRef;
    searchForm: FormGroup;
    placeholder: string;
    searchingEnabled: boolean;
    searchInputSubscription: HermesSubscription;
    constructor(formBuilder: FormBuilder, changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef, structureId: StructureId, searchCommandDispatcher: SearchCommandInvoker, structureWarehouse: StructureWarehouse, searchWarehouse: SearchWarehouse);
    ngOnInit(): void;
    clear(): void;
    protected getSelectorName(): string;
    private observeChanges;
    private stopObserveChanges;
}
