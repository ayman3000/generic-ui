import { ChangeDetectorRef, ElementRef, EventEmitter } from '@angular/core';
import { GuiComponent } from './gui-component';
import { HermesObservable } from '@generic-ui/hermes';
export declare abstract class SmartComponent extends GuiComponent {
    protected readonly detector: ChangeDetectorRef;
    private viewInDom;
    private readonly unsubscribe$;
    protected constructor(detector: ChangeDetectorRef, elementRef: ElementRef);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    reRender(): void;
    isViewInDom(): boolean;
    subscribe<T>(stream$: HermesObservable<T>, callback: (value: T) => void): void;
    subscribeWithoutRender<T>(stream$: HermesObservable<T>, callback: (value: T) => void): void;
    subscribeAndEmit<V>(stream$: HermesObservable<V>, emitter: EventEmitter<V>, mapper?: (value: V) => any): void;
    protected unsubscribe(): void;
    protected takeUntil(): any;
}
