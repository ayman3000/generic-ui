import { Component, TemplateRef, ViewChild } from '@angular/core';
import { CellView } from '../../domain/column/cell-view';
export class ViewTemplatesComponent {
    getTemplate(view) {
        switch (view) {
            case CellView.TEXT:
                return this.textTemplate;
            case CellView.NUMBER:
                return this.numberTemplate;
            case CellView.CHIP:
                return this.chipTemplate;
            case CellView.LINK:
                return this.linkTemplate;
            case CellView.IMAGE:
                return this.imageTemplate;
            case CellView.CHECKBOX:
                return this.checkboxTemplate;
            case CellView.BOLD:
                return this.boldTemplate;
            case CellView.ITALIC:
                return this.italicTemplate;
            case CellView.CUSTOM:
                return this.customTemplate;
            case CellView.FUNCTION:
                return this.functionTemplate;
            case CellView.HTML:
                return this.htmlTemplate;
            case CellView.DATE:
                return this.dateTemplate;
            case CellView.BAR:
                return this.barTemplate;
            case CellView.PERCENTAGE_BAR:
                return this.percentageBarTemplate;
            case CellView.PERCENTAGE:
                return this.percentageTemplate;
            default:
                return this.textTemplate;
        }
    }
}
ViewTemplatesComponent.decorators = [
    { type: Component, args: [{
                template: `

		<ng-template #text let-element="element">
			<gui-view-text [value]="element"></gui-view-text>
		</ng-template>

		<ng-template #number let-element="element">
			<span class="gui-cell-number">
				{{ element.value }}
			</span>
		</ng-template>

		<ng-template #chip let-element="element">
			<gui-chip>
				<gui-view-text [value]="element"></gui-view-text>
			</gui-chip>
		</ng-template>

		<ng-template #link let-element="element">
			<a gui-button link="true" href="{{ element.value }}">
				<gui-view-text [value]="element"></gui-view-text>
			</a>
		</ng-template>

		<ng-template #image let-element="element">
			<img src="{{ element.value }}"/>
		</ng-template>

		<ng-template #checkbox let-element="element">
			<span class="gui-cell-boolean">
				<gui-checkbox [checked]="!!element.value" [disabled]="true"></gui-checkbox>
			</span>
		</ng-template>

		<ng-template #bold let-element="element">
			<gui-view-text bold [value]="element"></gui-view-text>
		</ng-template>

		<ng-template #italic let-element="element">
			<gui-view-text italic [value]="element"></gui-view-text>
		</ng-template>

		<ng-template #custom let-element="element">
			{{ element.value }}
		</ng-template>

		<ng-template #function let-element="element">
			<gui-function-view [element]="element"></gui-function-view>
		</ng-template>

		<ng-template #html let-element="element">
			<gui-html-view [element]="element"></gui-html-view>
		</ng-template>

		<ng-template #date let-element="element">
			<span class="gui-view-text">{{ element.value | date: 'dd/MM/yyyy' }}</span>
		</ng-template>

		<ng-template #bar let-element="element">
			<gui-bar-view [value]="element.value" [showPercentage]="false"></gui-bar-view>
		</ng-template>

		<ng-template #percentageBar let-element="element">
			<gui-bar-view [value]="element.value" [showPercentage]="true"></gui-bar-view>
		</ng-template>

		<ng-template #percentage let-element="element">
			<gui-percentage-view [value]="element.value"></gui-percentage-view>
		</ng-template>

	`
            },] }
];
ViewTemplatesComponent.propDecorators = {
    textTemplate: [{ type: ViewChild, args: ['text', { read: TemplateRef, static: true },] }],
    numberTemplate: [{ type: ViewChild, args: ['number', { read: TemplateRef, static: true },] }],
    chipTemplate: [{ type: ViewChild, args: ['chip', { read: TemplateRef, static: true },] }],
    linkTemplate: [{ type: ViewChild, args: ['link', { read: TemplateRef, static: true },] }],
    imageTemplate: [{ type: ViewChild, args: ['image', { read: TemplateRef, static: true },] }],
    checkboxTemplate: [{ type: ViewChild, args: ['checkbox', { read: TemplateRef, static: true },] }],
    boldTemplate: [{ type: ViewChild, args: ['bold', { read: TemplateRef, static: true },] }],
    italicTemplate: [{ type: ViewChild, args: ['italic', { read: TemplateRef, static: true },] }],
    customTemplate: [{ type: ViewChild, args: ['custom', { read: TemplateRef, static: true },] }],
    functionTemplate: [{ type: ViewChild, args: ['function', { read: TemplateRef, static: true },] }],
    htmlTemplate: [{ type: ViewChild, args: ['html', { read: TemplateRef, static: true },] }],
    dateTemplate: [{ type: ViewChild, args: ['date', { read: TemplateRef, static: true },] }],
    barTemplate: [{ type: ViewChild, args: ['bar', { read: TemplateRef, static: true },] }],
    percentageBarTemplate: [{ type: ViewChild, args: ['percentageBar', { read: TemplateRef, static: true },] }],
    percentageTemplate: [{ type: ViewChild, args: ['percentage', { read: TemplateRef, static: true },] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy10ZW1wbGF0ZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9jb21wb3NpdGlvbi9jb3JlL2RvbWFpbi1yZWFkL3ZpZXcvdmlldy10ZW1wbGF0ZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVsRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUE2RXpELE1BQU0sT0FBTyxzQkFBc0I7SUErQ2xDLFdBQVcsQ0FBQyxJQUFjO1FBRXpCLFFBQVEsSUFBSSxFQUFFO1lBRWIsS0FBSyxRQUFRLENBQUMsSUFBSTtnQkFDakIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBRTFCLEtBQUssUUFBUSxDQUFDLE1BQU07Z0JBQ25CLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztZQUU1QixLQUFLLFFBQVEsQ0FBQyxJQUFJO2dCQUNqQixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7WUFFMUIsS0FBSyxRQUFRLENBQUMsSUFBSTtnQkFDakIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBRTFCLEtBQUssUUFBUSxDQUFDLEtBQUs7Z0JBQ2xCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztZQUUzQixLQUFLLFFBQVEsQ0FBQyxRQUFRO2dCQUNyQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztZQUU5QixLQUFLLFFBQVEsQ0FBQyxJQUFJO2dCQUNqQixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7WUFFMUIsS0FBSyxRQUFRLENBQUMsTUFBTTtnQkFDbkIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO1lBRTVCLEtBQUssUUFBUSxDQUFDLE1BQU07Z0JBQ25CLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztZQUU1QixLQUFLLFFBQVEsQ0FBQyxRQUFRO2dCQUNyQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztZQUU5QixLQUFLLFFBQVEsQ0FBQyxJQUFJO2dCQUNqQixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7WUFFMUIsS0FBSyxRQUFRLENBQUMsSUFBSTtnQkFDakIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBRTFCLEtBQUssUUFBUSxDQUFDLEdBQUc7Z0JBQ2hCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUV6QixLQUFLLFFBQVEsQ0FBQyxjQUFjO2dCQUMzQixPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztZQUVuQyxLQUFLLFFBQVEsQ0FBQyxVQUFVO2dCQUN2QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztZQUVoQztnQkFDQyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7U0FDMUI7SUFDRixDQUFDOzs7WUE1S0QsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXNFVDthQUNEOzs7MkJBR0MsU0FBUyxTQUFDLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs2QkFHckQsU0FBUyxTQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTsyQkFHdkQsU0FBUyxTQUFDLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTsyQkFHckQsU0FBUyxTQUFDLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs0QkFHckQsU0FBUyxTQUFDLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTsrQkFHdEQsU0FBUyxTQUFDLFVBQVUsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTsyQkFHekQsU0FBUyxTQUFDLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs2QkFHckQsU0FBUyxTQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs2QkFHdkQsU0FBUyxTQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTsrQkFHdkQsU0FBUyxTQUFDLFVBQVUsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTsyQkFHekQsU0FBUyxTQUFDLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTsyQkFHckQsU0FBUyxTQUFDLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTswQkFHckQsU0FBUyxTQUFDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtvQ0FHcEQsU0FBUyxTQUFDLGVBQWUsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtpQ0FHOUQsU0FBUyxTQUFDLFlBQVksRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVGVtcGxhdGVSZWYsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDZWxsVmlldyB9IGZyb20gJy4uLy4uL2RvbWFpbi9jb2x1bW4vY2VsbC12aWV3JztcbmltcG9ydCB7IFRlbXBsYXRlc0NvbXBvbmVudCB9IGZyb20gJy4uL3RlbXBsYXRlL3RlbXBsYXRlcy5jb21wb25lbnQnO1xuXG5cbkBDb21wb25lbnQoe1xuXHR0ZW1wbGF0ZTogYFxuXG5cdFx0PG5nLXRlbXBsYXRlICN0ZXh0IGxldC1lbGVtZW50PVwiZWxlbWVudFwiPlxuXHRcdFx0PGd1aS12aWV3LXRleHQgW3ZhbHVlXT1cImVsZW1lbnRcIj48L2d1aS12aWV3LXRleHQ+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblxuXHRcdDxuZy10ZW1wbGF0ZSAjbnVtYmVyIGxldC1lbGVtZW50PVwiZWxlbWVudFwiPlxuXHRcdFx0PHNwYW4gY2xhc3M9XCJndWktY2VsbC1udW1iZXJcIj5cblx0XHRcdFx0e3sgZWxlbWVudC52YWx1ZSB9fVxuXHRcdFx0PC9zcGFuPlxuXHRcdDwvbmctdGVtcGxhdGU+XG5cblx0XHQ8bmctdGVtcGxhdGUgI2NoaXAgbGV0LWVsZW1lbnQ9XCJlbGVtZW50XCI+XG5cdFx0XHQ8Z3VpLWNoaXA+XG5cdFx0XHRcdDxndWktdmlldy10ZXh0IFt2YWx1ZV09XCJlbGVtZW50XCI+PC9ndWktdmlldy10ZXh0PlxuXHRcdFx0PC9ndWktY2hpcD5cblx0XHQ8L25nLXRlbXBsYXRlPlxuXG5cdFx0PG5nLXRlbXBsYXRlICNsaW5rIGxldC1lbGVtZW50PVwiZWxlbWVudFwiPlxuXHRcdFx0PGEgZ3VpLWJ1dHRvbiBsaW5rPVwidHJ1ZVwiIGhyZWY9XCJ7eyBlbGVtZW50LnZhbHVlIH19XCI+XG5cdFx0XHRcdDxndWktdmlldy10ZXh0IFt2YWx1ZV09XCJlbGVtZW50XCI+PC9ndWktdmlldy10ZXh0PlxuXHRcdFx0PC9hPlxuXHRcdDwvbmctdGVtcGxhdGU+XG5cblx0XHQ8bmctdGVtcGxhdGUgI2ltYWdlIGxldC1lbGVtZW50PVwiZWxlbWVudFwiPlxuXHRcdFx0PGltZyBzcmM9XCJ7eyBlbGVtZW50LnZhbHVlIH19XCIvPlxuXHRcdDwvbmctdGVtcGxhdGU+XG5cblx0XHQ8bmctdGVtcGxhdGUgI2NoZWNrYm94IGxldC1lbGVtZW50PVwiZWxlbWVudFwiPlxuXHRcdFx0PHNwYW4gY2xhc3M9XCJndWktY2VsbC1ib29sZWFuXCI+XG5cdFx0XHRcdDxndWktY2hlY2tib3ggW2NoZWNrZWRdPVwiISFlbGVtZW50LnZhbHVlXCIgW2Rpc2FibGVkXT1cInRydWVcIj48L2d1aS1jaGVja2JveD5cblx0XHRcdDwvc3Bhbj5cblx0XHQ8L25nLXRlbXBsYXRlPlxuXG5cdFx0PG5nLXRlbXBsYXRlICNib2xkIGxldC1lbGVtZW50PVwiZWxlbWVudFwiPlxuXHRcdFx0PGd1aS12aWV3LXRleHQgYm9sZCBbdmFsdWVdPVwiZWxlbWVudFwiPjwvZ3VpLXZpZXctdGV4dD5cblx0XHQ8L25nLXRlbXBsYXRlPlxuXG5cdFx0PG5nLXRlbXBsYXRlICNpdGFsaWMgbGV0LWVsZW1lbnQ9XCJlbGVtZW50XCI+XG5cdFx0XHQ8Z3VpLXZpZXctdGV4dCBpdGFsaWMgW3ZhbHVlXT1cImVsZW1lbnRcIj48L2d1aS12aWV3LXRleHQ+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblxuXHRcdDxuZy10ZW1wbGF0ZSAjY3VzdG9tIGxldC1lbGVtZW50PVwiZWxlbWVudFwiPlxuXHRcdFx0e3sgZWxlbWVudC52YWx1ZSB9fVxuXHRcdDwvbmctdGVtcGxhdGU+XG5cblx0XHQ8bmctdGVtcGxhdGUgI2Z1bmN0aW9uIGxldC1lbGVtZW50PVwiZWxlbWVudFwiPlxuXHRcdFx0PGd1aS1mdW5jdGlvbi12aWV3IFtlbGVtZW50XT1cImVsZW1lbnRcIj48L2d1aS1mdW5jdGlvbi12aWV3PlxuXHRcdDwvbmctdGVtcGxhdGU+XG5cblx0XHQ8bmctdGVtcGxhdGUgI2h0bWwgbGV0LWVsZW1lbnQ9XCJlbGVtZW50XCI+XG5cdFx0XHQ8Z3VpLWh0bWwtdmlldyBbZWxlbWVudF09XCJlbGVtZW50XCI+PC9ndWktaHRtbC12aWV3PlxuXHRcdDwvbmctdGVtcGxhdGU+XG5cblx0XHQ8bmctdGVtcGxhdGUgI2RhdGUgbGV0LWVsZW1lbnQ9XCJlbGVtZW50XCI+XG5cdFx0XHQ8c3BhbiBjbGFzcz1cImd1aS12aWV3LXRleHRcIj57eyBlbGVtZW50LnZhbHVlIHwgZGF0ZTogJ2RkL01NL3l5eXknIH19PC9zcGFuPlxuXHRcdDwvbmctdGVtcGxhdGU+XG5cblx0XHQ8bmctdGVtcGxhdGUgI2JhciBsZXQtZWxlbWVudD1cImVsZW1lbnRcIj5cblx0XHRcdDxndWktYmFyLXZpZXcgW3ZhbHVlXT1cImVsZW1lbnQudmFsdWVcIiBbc2hvd1BlcmNlbnRhZ2VdPVwiZmFsc2VcIj48L2d1aS1iYXItdmlldz5cblx0XHQ8L25nLXRlbXBsYXRlPlxuXG5cdFx0PG5nLXRlbXBsYXRlICNwZXJjZW50YWdlQmFyIGxldC1lbGVtZW50PVwiZWxlbWVudFwiPlxuXHRcdFx0PGd1aS1iYXItdmlldyBbdmFsdWVdPVwiZWxlbWVudC52YWx1ZVwiIFtzaG93UGVyY2VudGFnZV09XCJ0cnVlXCI+PC9ndWktYmFyLXZpZXc+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblxuXHRcdDxuZy10ZW1wbGF0ZSAjcGVyY2VudGFnZSBsZXQtZWxlbWVudD1cImVsZW1lbnRcIj5cblx0XHRcdDxndWktcGVyY2VudGFnZS12aWV3IFt2YWx1ZV09XCJlbGVtZW50LnZhbHVlXCI+PC9ndWktcGVyY2VudGFnZS12aWV3PlxuXHRcdDwvbmctdGVtcGxhdGU+XG5cblx0YFxufSlcbmV4cG9ydCBjbGFzcyBWaWV3VGVtcGxhdGVzQ29tcG9uZW50IGltcGxlbWVudHMgVGVtcGxhdGVzQ29tcG9uZW50IHtcblxuXHRAVmlld0NoaWxkKCd0ZXh0JywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG5cdHRleHRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuXHRAVmlld0NoaWxkKCdudW1iZXInLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcblx0bnVtYmVyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cblx0QFZpZXdDaGlsZCgnY2hpcCcsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuXHRjaGlwVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cblx0QFZpZXdDaGlsZCgnbGluaycsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuXHRsaW5rVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cblx0QFZpZXdDaGlsZCgnaW1hZ2UnLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcblx0aW1hZ2VUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuXHRAVmlld0NoaWxkKCdjaGVja2JveCcsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuXHRjaGVja2JveFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdEBWaWV3Q2hpbGQoJ2JvbGQnLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcblx0Ym9sZFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdEBWaWV3Q2hpbGQoJ2l0YWxpYycsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuXHRpdGFsaWNUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuXHRAVmlld0NoaWxkKCdjdXN0b20nLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcblx0Y3VzdG9tVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cblx0QFZpZXdDaGlsZCgnZnVuY3Rpb24nLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcblx0ZnVuY3Rpb25UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuXHRAVmlld0NoaWxkKCdodG1sJywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG5cdGh0bWxUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuXHRAVmlld0NoaWxkKCdkYXRlJywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG5cdGRhdGVUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuXHRAVmlld0NoaWxkKCdiYXInLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcblx0YmFyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cblx0QFZpZXdDaGlsZCgncGVyY2VudGFnZUJhcicsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuXHRwZXJjZW50YWdlQmFyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cblx0QFZpZXdDaGlsZCgncGVyY2VudGFnZScsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuXHRwZXJjZW50YWdlVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cblx0Z2V0VGVtcGxhdGUodmlldzogQ2VsbFZpZXcpOiBUZW1wbGF0ZVJlZjxhbnk+IHtcblxuXHRcdHN3aXRjaCAodmlldykge1xuXG5cdFx0XHRjYXNlIENlbGxWaWV3LlRFWFQ6XG5cdFx0XHRcdHJldHVybiB0aGlzLnRleHRUZW1wbGF0ZTtcblxuXHRcdFx0Y2FzZSBDZWxsVmlldy5OVU1CRVI6XG5cdFx0XHRcdHJldHVybiB0aGlzLm51bWJlclRlbXBsYXRlO1xuXG5cdFx0XHRjYXNlIENlbGxWaWV3LkNISVA6XG5cdFx0XHRcdHJldHVybiB0aGlzLmNoaXBUZW1wbGF0ZTtcblxuXHRcdFx0Y2FzZSBDZWxsVmlldy5MSU5LOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5saW5rVGVtcGxhdGU7XG5cblx0XHRcdGNhc2UgQ2VsbFZpZXcuSU1BR0U6XG5cdFx0XHRcdHJldHVybiB0aGlzLmltYWdlVGVtcGxhdGU7XG5cblx0XHRcdGNhc2UgQ2VsbFZpZXcuQ0hFQ0tCT1g6XG5cdFx0XHRcdHJldHVybiB0aGlzLmNoZWNrYm94VGVtcGxhdGU7XG5cblx0XHRcdGNhc2UgQ2VsbFZpZXcuQk9MRDpcblx0XHRcdFx0cmV0dXJuIHRoaXMuYm9sZFRlbXBsYXRlO1xuXG5cdFx0XHRjYXNlIENlbGxWaWV3LklUQUxJQzpcblx0XHRcdFx0cmV0dXJuIHRoaXMuaXRhbGljVGVtcGxhdGU7XG5cblx0XHRcdGNhc2UgQ2VsbFZpZXcuQ1VTVE9NOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5jdXN0b21UZW1wbGF0ZTtcblxuXHRcdFx0Y2FzZSBDZWxsVmlldy5GVU5DVElPTjpcblx0XHRcdFx0cmV0dXJuIHRoaXMuZnVuY3Rpb25UZW1wbGF0ZTtcblxuXHRcdFx0Y2FzZSBDZWxsVmlldy5IVE1MOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5odG1sVGVtcGxhdGU7XG5cblx0XHRcdGNhc2UgQ2VsbFZpZXcuREFURTpcblx0XHRcdFx0cmV0dXJuIHRoaXMuZGF0ZVRlbXBsYXRlO1xuXG5cdFx0XHRjYXNlIENlbGxWaWV3LkJBUjpcblx0XHRcdFx0cmV0dXJuIHRoaXMuYmFyVGVtcGxhdGU7XG5cblx0XHRcdGNhc2UgQ2VsbFZpZXcuUEVSQ0VOVEFHRV9CQVI6XG5cdFx0XHRcdHJldHVybiB0aGlzLnBlcmNlbnRhZ2VCYXJUZW1wbGF0ZTtcblxuXHRcdFx0Y2FzZSBDZWxsVmlldy5QRVJDRU5UQUdFOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5wZXJjZW50YWdlVGVtcGxhdGU7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiB0aGlzLnRleHRUZW1wbGF0ZTtcblx0XHR9XG5cdH1cblxufVxuIl19