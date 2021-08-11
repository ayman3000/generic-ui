import { OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Direction } from '../../../../common/icons/arrow-icon/direction';
import { FabricReactive } from '../../../../common/fabric-reactive';
import { FabricDatePickerService } from '../../fabric-date-picker.service';
import { FabricDatePickerComposition } from '../../models/fabric-date-picker-composition';
export declare class FabricTimePickerComponent extends FabricReactive implements OnChanges, OnInit, OnDestroy {
    private readonly formBuilder;
    private readonly datePickerService;
    selectedDate: Date;
    datePickerComposition: FabricDatePickerComposition;
    steps: number;
    form: FormGroup;
    Direction: typeof Direction;
    FabricDatePickerComposition: typeof FabricDatePickerComposition;
    constructor(formBuilder: FormBuilder, datePickerService: FabricDatePickerService);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    changeTimeItem(formControlName: string, steps: number): void;
    changeSelectedDateTime(): void;
    isActive(activeComposition: FabricDatePickerComposition, checkedComposition: FabricDatePickerComposition): boolean;
    isMeridian(): boolean;
    isOnlyTimePicker(): boolean;
    private changeSelectedDate;
    private controlFormItemValue;
    private setTimeFromSelectedDate;
}
