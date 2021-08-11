import { ChangeDetectorRef, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { SmartComponent } from '../../../common/cdk/component/smart-component';
import { StructureWarehouse } from '../../grid/core/api/structure.warehouse';
import { SearchPlaceholderArchive } from '../core/api/placeholder/search-placeholder.archive';
import { StructureId } from '../../core/api/structure.id';
import { StructureVerticalFormationWarehouse } from '../../vertical-formation/core/api/structure-vertical-formation.warehouse';
import { SearchCommandInvoker } from '../core/api/search.command-invoker';
import { SearchWarehouse } from '../core/api/search.warehouse';
export declare class SearchComponent extends SmartComponent implements OnInit {
    private readonly formBuilder;
    private readonly changeDetectorRef;
    private readonly structureId;
    private readonly searchCommandDispatcher;
    private readonly structureWarehouse;
    private readonly searchWarehouse;
    private readonly verticalFormationWarehouse;
    private readonly structureSearchPlaceholderArchive;
    private static readonly FORM_SEARCH_NAME;
    formRef: ElementRef;
    searchForm: FormGroup;
    placeholder: string;
    searchingEnabled: boolean;
    searchInputSubscription: Subscription;
    constructor(formBuilder: FormBuilder, changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef, structureId: StructureId, searchCommandDispatcher: SearchCommandInvoker, structureWarehouse: StructureWarehouse, searchWarehouse: SearchWarehouse, verticalFormationWarehouse: StructureVerticalFormationWarehouse, structureSearchPlaceholderArchive: SearchPlaceholderArchive);
    ngOnInit(): void;
    clear(): void;
    private observeChanges;
    private stopObserveChanges;
    protected getSelectorName(): string;
}
