import { ChangeDetectorRef, ElementRef } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/component/smart-component';
import { ChangedValueEmitter } from './changed-value.emitter';
import { EditEventType } from './state/edit.event-type';
export declare abstract class EditCommunicationComponent<T> extends SmartComponent {
    value: T;
    valueChanges: ChangedValueEmitter<T>;
    status: ChangedValueEmitter<EditEventType>;
    focus: boolean;
    parent: ElementRef;
    protected readonly ENTER_KEY_CODE = 13;
    protected readonly ESC_KEY_CODE = 27;
    protected constructor(changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef);
    submit(): void;
    cancel(): void;
    private emitStatus;
}
