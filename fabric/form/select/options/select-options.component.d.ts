import { AfterViewInit, ChangeDetectorRef, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { GuiSelectOption } from '../select-option';
import { SelectOptionsGeometryService } from './select-options-geometry.service';
import { FabricSelectedOptionsRepository } from '../selected-option.repository';
import { FabricThemedComponent } from '../../../common/modal/fabric-themed-component';
import { FabricModalThemeService } from '../../../themes/fabric-modal-theme.service';
export declare class FabricSelectOptionsComponent extends FabricThemedComponent implements OnInit, AfterViewInit, OnDestroy {
    private readonly selectOptionsGeometryService;
    private readonly selectService;
    private readonly changeDetectorRef;
    optionListRef: ElementRef;
    options: Array<GuiSelectOption>;
    optionsContainerLeftAttribute: number;
    optionsContainerTopAttribute: number;
    width: number;
    selectedOption: GuiSelectOption;
    canOpenUpward: boolean;
    constructor(selectOptionsGeometryService: SelectOptionsGeometryService, selectService: FabricSelectedOptionsRepository, changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef, renderer: Renderer2, themeService: FabricModalThemeService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    getElementRef(): ElementRef;
    detectChanges(): void;
    selectOption(option: GuiSelectOption): void;
    isOptionSelected(option: GuiSelectOption): boolean;
    getOptionValue(option: GuiSelectOption): number | string;
    initOpenAnimation(): void;
}
