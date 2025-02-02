import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { PureComponent } from '../../../../../common/cdk/component/pure-component';
import { ifChanged } from '../../../../../common/cdk/component/check.input';
export class BarViewComponent extends PureComponent {
    constructor(elementRef) {
        super(elementRef);
        this.showPercentage = false;
    }
    ngOnChanges(changes) {
        ifChanged(changes.value, () => {
            this.width = this.value > 100 ? 100 : this.value;
        });
    }
    getSelectorName() {
        return 'gui-bar-view';
    }
}
BarViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-bar-view[value]',
                template: `
		<div class="gui-percentage-bar">
			<div class="gui-percentage" [style.width.%]="width">
			</div>
			<gui-percentage-view *ngIf="showPercentage"
								 [value]="value">
			</gui-percentage-view>
		</div>
	`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            },] }
];
BarViewComponent.ctorParameters = () => [
    { type: ElementRef }
];
BarViewComponent.propDecorators = {
    value: [{ type: Input }],
    showPercentage: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFyLXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9jb21wb3NpdGlvbi9jb3JlL2RvbWFpbi1yZWFkL3ZpZXcvYmFyL2Jhci12aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQWEsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEgsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBRW5GLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQWdCNUUsTUFBTSxPQUFPLGdCQUFpQixTQUFRLGFBQWE7SUFVbEQsWUFBWSxVQUFzQjtRQUNqQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7UUFMbkIsbUJBQWMsR0FBWSxLQUFLLENBQUM7SUFNaEMsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFvQztRQUUvQyxTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUU7WUFDN0IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ2xELENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVTLGVBQWU7UUFDeEIsT0FBTyxjQUFjLENBQUM7SUFDdkIsQ0FBQzs7O1lBckNELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixRQUFRLEVBQUU7Ozs7Ozs7O0VBUVQ7Z0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3JDOzs7WUFsQjRDLFVBQVU7OztvQkFxQnJELEtBQUs7NkJBR0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkNoYW5nZXMsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvcHVyZS1jb21wb25lbnQnO1xuaW1wb3J0IHsgTmdDaGFuZ2VzIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvbmctY2hhbmdlcyc7XG5pbXBvcnQgeyBpZkNoYW5nZWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9jaGVjay5pbnB1dCc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1iYXItdmlld1t2YWx1ZV0nLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxkaXYgY2xhc3M9XCJndWktcGVyY2VudGFnZS1iYXJcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJndWktcGVyY2VudGFnZVwiIFtzdHlsZS53aWR0aC4lXT1cIndpZHRoXCI+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxndWktcGVyY2VudGFnZS12aWV3ICpuZ0lmPVwic2hvd1BlcmNlbnRhZ2VcIlxuXHRcdFx0XHRcdFx0XHRcdCBbdmFsdWVdPVwidmFsdWVcIj5cblx0XHRcdDwvZ3VpLXBlcmNlbnRhZ2Utdmlldz5cblx0XHQ8L2Rpdj5cblx0YCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgQmFyVmlld0NvbXBvbmVudCBleHRlbmRzIFB1cmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG5cdEBJbnB1dCgpXG5cdHZhbHVlOiBudW1iZXI7XG5cblx0QElucHV0KClcblx0c2hvd1BlcmNlbnRhZ2U6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHR3aWR0aDogbnVtYmVyO1xuXG5cdGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcblx0XHRzdXBlcihlbGVtZW50UmVmKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IE5nQ2hhbmdlczxCYXJWaWV3Q29tcG9uZW50Pikge1xuXG5cdFx0aWZDaGFuZ2VkKGNoYW5nZXMudmFsdWUsICgpID0+IHtcblx0XHRcdHRoaXMud2lkdGggPSB0aGlzLnZhbHVlID4gMTAwID8gMTAwIDogdGhpcy52YWx1ZTtcblx0XHR9KTtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1iYXItdmlldyc7XG5cdH1cblxufVxuIl19