import { AfterViewInit, ChangeDetectorRef, ComponentFactoryResolver, ElementRef, Injector, OnDestroy, OnInit, Renderer2, Type, ViewContainerRef } from '@angular/core';
import { FabricInlineDialogService } from './fabric-inline-dialog.service';
import { InlineDialogGeometryService } from './fabric-inline-dialog-geometry.service';
import { Theme } from '../../themes/theme';
import { FabricNestedDialogComponent } from '../common/fabric.nested-dialog.component';
import { FabricThemedComponent } from '../../common/modal/fabric-themed-component';
import { FabricModalThemeService } from '../../themes/fabric-modal-theme.service';
export declare class FabricInlineDialogComponent extends FabricThemedComponent implements OnInit, AfterViewInit, OnDestroy {
    private readonly componentFactoryResolver;
    private readonly changeDetectorRef;
    private readonly inlineDialogService;
    private readonly elRef;
    private readonly inlineDialogGeometryService;
    container: ViewContainerRef;
    customClass: string;
    inlineDialogNestedComponent: Type<FabricNestedDialogComponent>;
    inlineDialogNestedInjector: Injector;
    dialogTopAttribute: number;
    dialogLeftAttribute: number;
    visible: boolean;
    width: string;
    constructor(componentFactoryResolver: ComponentFactoryResolver, changeDetectorRef: ChangeDetectorRef, inlineDialogService: FabricInlineDialogService, elRef: ElementRef, inlineDialogGeometryService: InlineDialogGeometryService, renderer: Renderer2, themeService: FabricModalThemeService, theme: Theme);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    clickOutside(event: any): void;
    private isContainerClicked;
    private createNestedComponent;
}
