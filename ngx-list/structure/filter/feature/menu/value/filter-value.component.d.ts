import { ChangeDetectorRef, ElementRef, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SmartComponent } from '../../../../../common/cdk/component/smart-component';
export declare class FilterValueComponent extends SmartComponent {
    private readonly formBuilder;
    private static readonly FORM_FILTER_VALUE;
    formRef: ElementRef;
    valueChanged: EventEmitter<any>;
    filterForm: FormGroup;
    constructor(detector: ChangeDetectorRef, elementRef: ElementRef, formBuilder: FormBuilder);
    ngOnInit(): void;
    protected getSelectorName(): string;
}
