/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, Renderer2, ViewEncapsulation } from '@angular/core';
import { Indicator } from '../indicator';
export class FabricBadgeComponent extends Indicator {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(elementRef, renderer) {
        super(elementRef, renderer);
    }
}
FabricBadgeComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-badge',
                template: "<ng-content></ng-content>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[class.gui-badge]': 'true'
                },
                styles: [".gui-badge{background:#e6e6e6;border-radius:4px;color:#595959;display:inline-block;font-family:Arial;font-size:12px;font-weight:700;margin:0 0 0 2px;padding:4px 9.6px;position:relative;-ms-transform:translateX(-70%) translateY(-80%);transform:translateX(-70%) translateY(-80%);z-index:1}.gui-badge.gui-primary{background:#2185d0;color:#fff}.gui-badge.gui-primary.gui-outline{color:#2185d0}.gui-badge.gui-primary:hover{background:#1e77ba}.gui-badge.gui-primary:active{background:#1a69a4;color:#fff}.gui-badge.gui-primary:disabled{background:#6fb4e8;color:#439de1}.gui-badge.gui-primary.gui-badge{background:#439de1}.gui-badge.gui-secondary{background:#3cb371;color:#fff}.gui-badge.gui-secondary.gui-outline{color:#3cb371}.gui-badge.gui-secondary.gui-button:hover{background:#36a065}.gui-badge.gui-secondary.gui-button:active{background:#32945e;color:#fff}.gui-badge.gui-secondary.gui-button:disabled{background:#80d5a6;color:#5ac88b}.gui-badge.gui-secondary.gui-badge{background:#5ac88b}.gui-badge.gui-outline{background:0 0;color:#999;border:1px solid #d6d6d6}.gui-badge.gui-outline.gui-button:hover{background:#ccc;color:#fff}.gui-badge.gui-outline.gui-button:disabled{border-color:#ccc;color:#ccc}.gui-badge.gui-outline.gui-badge{background:#fff}.gui-badge.gui-outline.gui-primary{border-color:#439de1}.gui-badge.gui-outline.gui-primary.gui-button:hover{background:#2185d0;border-color:#2185d0}.gui-badge.gui-outline.gui-primary.gui-button:disabled{background:0 0;border-color:#6fb4e8;color:#6fb4e8}.gui-badge.gui-outline.gui-primary.gui-badge{background:#fff;border-color:#439de1;color:#439de1}.gui-badge.gui-outline.gui-secondary{border-color:#5ac88b}.gui-badge.gui-outline.gui-secondary.gui-button:hover{background:#3cb371;border-color:#3cb371}.gui-badge.gui-outline.gui-secondary.gui-button:disabled{background:0 0;border-color:#80d5a6;color:#80d5a6}.gui-badge.gui-outline.gui-secondary.gui-badge{background:#fff;border-color:#5ac88b;color:#5ac88b}", ".gui-material .gui-badge{background:#3949ab;color:#fff;font-family:Roboto,\"Helvetica Neue\",sans-serif;font-weight:500}.gui-material .gui-badge.gui-primary{background:#6200ee;color:#fff}.gui-material .gui-badge.gui-primary.gui-outline{color:#6200ee}.gui-material .gui-badge.gui-primary.gui-button:hover{background:#974dff}.gui-material .gui-badge.gui-primary.gui-button:active{background:#791aff;color:#fff}.gui-material .gui-badge.gui-primary.gui-button:disabled{background:#d1c4e9;color:#7d22ff}.gui-material .gui-badge.gui-primary.gui-badge{background:#6200ee}.gui-material .gui-badge.gui-secondary{background:#0097a7;color:#fff}.gui-material .gui-badge.gui-secondary.gui-outline{color:#0097a7}.gui-material .gui-badge.gui-secondary.gui-button:hover{background:#00a1b3}.gui-material .gui-badge.gui-secondary.gui-button:active{background:#00808e;color:#fff}.gui-material .gui-badge.gui-secondary.gui-button:disabled{background:#b2ebf2;color:#00c5da}.gui-material .gui-badge.gui-secondary.gui-badge{background:#0097a7}.gui-material .gui-badge.gui-outline{background:0 0;color:#3949ab;border-color:#5262c5}.gui-material .gui-badge.gui-outline.gui-button:hover{background:#e8eaf6;color:#3949ab}.gui-material .gui-badge.gui-outline.gui-button:active{background:#c5cae9}.gui-material .gui-badge.gui-outline.gui-button:disabled{border-color:#c5cae9;color:#c5cae9}.gui-material .gui-badge.gui-outline.gui-badge{background:#fff}.gui-material .gui-badge.gui-outline.gui-primary{border-color:#6200ee}.gui-material .gui-badge.gui-outline.gui-primary.gui-button:hover{background:#ede7f6;border-color:#6200ee;color:#6200ee}.gui-material .gui-badge.gui-outline.gui-primary.gui-button:active{background:#d1c4e9}.gui-material .gui-badge.gui-outline.gui-primary.gui-button:disabled{background:0 0;border-color:#d1c4e9;color:#d1c4e9}.gui-material .gui-badge.gui-outline.gui-primary.gui-badge{background:#fff;border-color:#6200ee;color:#7d22ff}.gui-material .gui-badge.gui-outline.gui-secondary{border-color:#0097a7}.gui-material .gui-badge.gui-outline.gui-secondary.gui-button:hover{background:#e0f7fa;border-color:#0097a7;color:#0097a7}.gui-material .gui-badge.gui-outline.gui-secondary.gui-button:active{background:#b2ebf2}.gui-material .gui-badge.gui-outline.gui-secondary.gui-button:disabled{background:0 0;border-color:#b2ebf2;color:#b2ebf2}.gui-material .gui-badge.gui-outline.gui-secondary.gui-badge{background:#fff;border-color:#0097a7;color:#0097a7}", ".gui-dark .gui-badge{background:#333;color:#bdbdbd}.gui-dark .gui-badge.gui-primary{background:#ce93d8;color:#212121}.gui-dark .gui-badge.gui-primary.gui-outline{color:#ce93d8}.gui-dark .gui-badge.gui-primary.gui-button:hover{background:#c680d1}.gui-dark .gui-badge.gui-primary.gui-button:active{background:#b55bc4;color:#212121}.gui-dark .gui-badge.gui-primary.gui-button:disabled{background:#ce93d8;color:#212121;opacity:.5}.gui-dark .gui-badge.gui-primary.gui-badge{background:#dfb8e6}.gui-dark .gui-badge.gui-secondary{background:#80cbc4;color:#212121}.gui-dark .gui-badge.gui-secondary.gui-outline{color:#80cbc4}.gui-dark .gui-badge.gui-secondary.gui-button:hover{background:#6ec4bc}.gui-dark .gui-badge.gui-secondary.gui-button:active{background:#26a69a;color:#212121}.gui-dark .gui-badge.gui-secondary.gui-button:disabled{background:#80cbc4;color:#212121;opacity:.5}.gui-dark .gui-badge.gui-secondary.gui-badge{background:#a4dad5}.gui-dark .gui-badge.gui-outline{background:0 0;color:#bdbdbd;border:1px solid #616161}.gui-dark .gui-badge.gui-outline.gui-button:hover{background:#616161;color:#bdbdbd}.gui-dark .gui-badge.gui-outline.gui-badge{background:#121212}.gui-dark .gui-badge.gui-outline.gui-primary{border-color:#ce93d8}.gui-dark .gui-badge.gui-outline.gui-primary.gui-button:hover{background:#ce93d8;border-color:#ce93d8;color:#212121}.gui-dark .gui-badge.gui-outline.gui-primary.gui-button:disabled{background:0 0;border-color:#f0def3;color:#f0def3}.gui-dark .gui-badge.gui-outline.gui-primary.gui-badge{background:#121212;border-color:#ce93d8;color:#dfb8e6}.gui-dark .gui-badge.gui-outline.gui-secondary{border-color:#80cbc4}.gui-dark .gui-badge.gui-outline.gui-secondary.gui-button:hover{background:#80cbc4;border-color:#80cbc4;color:#212121}.gui-dark .gui-badge.gui-outline.gui-secondary.gui-button:disabled{background:0 0;border-color:#b2ebf2;color:#b2ebf2}.gui-dark .gui-badge.gui-outline.gui-secondary.gui-badge{background:#121212;border-color:#80cbc4;color:#80cbc4}"]
            }] }
];
/** @nocollapse */
FabricBadgeComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkZ2UuY29tcG9uZXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9mYWJyaWMvIiwic291cmNlcyI6WyJnZW5lcmFsL2JhZGdlL2JhZGdlLmNvbXBvbmV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFN0csT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQWlCekMsTUFBTSxPQUFPLG9CQUFxQixTQUFRLFNBQVM7Ozs7O0lBRWxELFlBQVksVUFBc0IsRUFDL0IsUUFBbUI7UUFDckIsS0FBSyxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUM3QixDQUFDOzs7WUFuQkQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxXQUFXO2dCQUNyQix1Q0FBbUM7Z0JBTW5DLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsSUFBSSxFQUFFO29CQUNMLG1CQUFtQixFQUFFLE1BQU07aUJBQzNCOzthQUNEOzs7O1lBbEI0QyxVQUFVO1lBQUUsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSW5kaWNhdG9yIH0gZnJvbSAnLi4vaW5kaWNhdG9yJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktYmFkZ2UnLFxuXHR0ZW1wbGF0ZVVybDogJ2JhZGdlLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbXG5cdFx0Jy4vYmFkZ2Uubmd4LnNjc3MnLFxuXHRcdCcuL3RoZW1lcy9iYWRnZS5tYXRlcmlhbC5uZ3guc2NzcycsXG5cdFx0Jy4vdGhlbWVzL2JhZGdlLmRhcmsubmd4LnNjc3MnXG5cdF0sXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRob3N0OiB7XG5cdFx0J1tjbGFzcy5ndWktYmFkZ2VdJzogJ3RydWUnXG5cdH1cbn0pXG5leHBvcnQgY2xhc3MgRmFicmljQmFkZ2VDb21wb25lbnQgZXh0ZW5kcyBJbmRpY2F0b3Ige1xuXG5cdGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcblx0XHRzdXBlcihlbGVtZW50UmVmLCByZW5kZXJlcik7XG5cdH1cbn1cbiJdfQ==