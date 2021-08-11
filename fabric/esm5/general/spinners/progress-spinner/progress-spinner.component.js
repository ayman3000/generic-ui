/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2, ViewEncapsulation } from '@angular/core';
import { AbstractSpinner } from '../abstract-spinner';
import { SpinnerMode } from './spinner-mode';
var FabricProgressSpinnerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FabricProgressSpinnerComponent, _super);
    function FabricProgressSpinnerComponent(elementRef, renderer) {
        var _this = _super.call(this, elementRef, renderer) || this;
        _this.value = 0;
        _this.animationsDisabled = true;
        _this.secondCircleDisabled = true;
        return _this;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    FabricProgressSpinnerComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        this.calculateValuePercentage(this.circumference, this.value);
        if (this.mode === SpinnerMode.Spin) {
            this.animationsDisabled = false;
            this.secondCircleDisabled = false;
            this.value = 0;
            this.circumference = this.croppedCircle;
        }
        if (this.animationsDisabled) {
            this.addClass('gui-animations-disabled');
        }
        else {
            this.removeClass('gui-animations-disabled');
        }
        if (this.secondCircleDisabled) {
            this.addClass('gui-second-circle-disabled');
        }
        else {
            this.removeClass('gui-second-circle-disabled');
        }
    };
    /**
     * @return {?}
     */
    FabricProgressSpinnerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.calculateValuePercentage(this.circumference, this.value);
    };
    /**
     * @protected
     * @param {?} circumference
     * @param {?} value
     * @return {?}
     */
    FabricProgressSpinnerComponent.prototype.calculateValuePercentage = /**
     * @protected
     * @param {?} circumference
     * @param {?} value
     * @return {?}
     */
    function (circumference, value) {
        this.valuePercentage = circumference - (value * circumference / 100);
    };
    FabricProgressSpinnerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-progress-spinner',
                    template: "<div\n\t\t[style.height.px]=\"circleSize\"\n\t\t[style.width.px]=\"circleSize\"\n\t\tclass=\"gui-progress-spinner\">\n\t<svg\n\t\t\t[style.height.px]=\"circleSize\"\n\t\t\t[style.width.px]=\"circleSize\"\n\t\t\tclass=\"circle-outer\">\n\t\t<circle\n\t\t\t\t[attr.r]=\"r\"\n\t\t\t\t[style.stroke-dasharray]=\"circumference\"\n\t\t\t\t[style.stroke-dashoffset]=\"valuePercentage\"\n\t\t\t\t[style.stroke-width]=\"width\"\n\t\t\t\t[style.stroke]=\"color\"\n\t\t\t\tcx=\"50%\"\n\t\t\t\tcy=\"50%\">\n\t\t</circle>\n\t</svg>\n\t<svg\n\t\t\t[style.height.px]=\"circleSize\"\n\t\t\t[style.width.px]=\"circleSize\"\n\t\t\tclass=\"circle-inner\">\n\t\t<circle\n\t\t\t\t[attr.r]=\"r\"\n\t\t\t\t[style.stroke-dasharray]=\"croppedCircle\"\n\t\t\t\t[style.stroke-dashoffset]=\"circumference\"\n\t\t\t\t[style.stroke-width]=\"width\"\n\t\t\t\t[style.stroke]=\"color\"\n\t\t\t\tcx=\"50%\"\n\t\t\t\tcy=\"50%\">\n\t\t</circle>\n\t</svg>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    styles: [".gui-progress-spinner{display:inline-block;margin:4px;position:relative;-ms-transform:rotate(-90deg);transform:rotate(-90deg)}.gui-progress-spinner circle{fill:transparent;stroke:#999}.gui-progress-spinner svg{position:absolute}.gui-progress-spinner .circle-inner{animation:2s linear infinite reverse forwards gui-spin-reverse}.gui-progress-spinner .circle-outer{-webkit-animation:2s linear infinite forwards gui-spin;animation:2s linear infinite forwards gui-spin}.gui-animations-disabled .gui-progress-spinner.gui-progress-spinner .circle-outer,.gui-animations-disabled .gui-progress-spinner.gui-progress-spinner.gui-progress-spinner{-webkit-animation:none;animation:none}.gui-second-circle-disabled .gui-progress-spinner.gui-progress-spinner .circle-inner{opacity:0}.gui-primary .gui-progress-spinner.gui-progress-spinner circle{stroke:#2185d0}.gui-secondary .gui-progress-spinner.gui-progress-spinner circle{stroke:#3cb371}", ".gui-material .gui-progress-spinner circle{stroke:#3949ab}.gui-material .gui-primary .gui-progress-spinner circle{stroke:#6200ee}.gui-material .gui-secondary .gui-progress-spinner circle{stroke:#0097a7}", ".gui-dark .gui-progress-spinner circle{stroke:#424242}.gui-dark .gui-primary .gui-progress-spinner circle{stroke:#ce93d8}.gui-dark .gui-secondary .gui-progress-spinner circle{stroke:#80cbc4}"]
                }] }
    ];
    /** @nocollapse */
    FabricProgressSpinnerComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    FabricProgressSpinnerComponent.propDecorators = {
        value: [{ type: Input }],
        mode: [{ type: Input }],
        color: [{ type: Input }]
    };
    return FabricProgressSpinnerComponent;
}(AbstractSpinner));
export { FabricProgressSpinnerComponent };
if (false) {
    /** @type {?} */
    FabricProgressSpinnerComponent.prototype.value;
    /** @type {?} */
    FabricProgressSpinnerComponent.prototype.mode;
    /** @type {?} */
    FabricProgressSpinnerComponent.prototype.color;
    /** @type {?} */
    FabricProgressSpinnerComponent.prototype.animationsDisabled;
    /** @type {?} */
    FabricProgressSpinnerComponent.prototype.secondCircleDisabled;
    /** @type {?} */
    FabricProgressSpinnerComponent.prototype.valuePercentage;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3Mtc3Bpbm5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9mYWJyaWMvIiwic291cmNlcyI6WyJnZW5lcmFsL3NwaW5uZXJzL3Byb2dyZXNzLXNwaW5uZXIvcHJvZ3Jlc3Mtc3Bpbm5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ04sdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUdMLFNBQVMsRUFFVCxpQkFBaUIsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QztJQVdvRCwwREFBZTtJQWlCbEUsd0NBQVksVUFBc0IsRUFDL0IsUUFBbUI7UUFEdEIsWUFFQyxrQkFBTSxVQUFVLEVBQUUsUUFBUSxDQUFDLFNBQzNCO1FBakJELFdBQUssR0FBVyxDQUFDLENBQUM7UUFRbEIsd0JBQWtCLEdBQVksSUFBSSxDQUFDO1FBRW5DLDBCQUFvQixHQUFZLElBQUksQ0FBQzs7SUFPckMsQ0FBQzs7Ozs7SUFFRCxvREFBVzs7OztJQUFYLFVBQVksT0FBc0I7UUFDakMsaUJBQU0sV0FBVyxZQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTNCLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUU5RCxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssV0FBVyxDQUFDLElBQUksRUFBRTtZQUNuQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxLQUFLLENBQUM7WUFDbEMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDZixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7U0FDeEM7UUFFRCxJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUM1QixJQUFJLENBQUMsUUFBUSxDQUFDLHlCQUF5QixDQUFDLENBQUM7U0FDekM7YUFBTTtZQUNOLElBQUksQ0FBQyxXQUFXLENBQUMseUJBQXlCLENBQUMsQ0FBQztTQUM1QztRQUVELElBQUksSUFBSSxDQUFDLG9CQUFvQixFQUFFO1lBQzlCLElBQUksQ0FBQyxRQUFRLENBQUMsNEJBQTRCLENBQUMsQ0FBQztTQUM1QzthQUFNO1lBQ04sSUFBSSxDQUFDLFdBQVcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1NBQy9DO0lBQ0YsQ0FBQzs7OztJQUVELGlEQUFROzs7SUFBUjtRQUNDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvRCxDQUFDOzs7Ozs7O0lBRVMsaUVBQXdCOzs7Ozs7SUFBbEMsVUFBbUMsYUFBcUIsRUFBRSxLQUFhO1FBQ3RFLElBQUksQ0FBQyxlQUFlLEdBQUcsYUFBYSxHQUFHLENBQUMsS0FBSyxHQUFHLGFBQWEsR0FBRyxHQUFHLENBQUMsQ0FBQztJQUN0RSxDQUFDOztnQkFoRUQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLDQ2QkFBZ0Q7b0JBTWhELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7aUJBQ3JDOzs7O2dCQXRCQSxVQUFVO2dCQUlWLFNBQVM7Ozt3QkFxQlIsS0FBSzt1QkFHTCxLQUFLO3dCQUdMLEtBQUs7O0lBOENQLHFDQUFDO0NBQUEsQUFqRUQsQ0FXb0QsZUFBZSxHQXNEbEU7U0F0RFksOEJBQThCOzs7SUFFMUMsK0NBQ2tCOztJQUVsQiw4Q0FDa0I7O0lBRWxCLCtDQUNjOztJQUVkLDREQUFtQzs7SUFFbkMsOERBQXFDOztJQUVyQyx5REFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcblx0Q29tcG9uZW50LFxuXHRFbGVtZW50UmVmLFxuXHRJbnB1dCxcblx0T25DaGFuZ2VzLFxuXHRPbkluaXQsXG5cdFJlbmRlcmVyMixcblx0U2ltcGxlQ2hhbmdlcyxcblx0Vmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFic3RyYWN0U3Bpbm5lciB9IGZyb20gJy4uL2Fic3RyYWN0LXNwaW5uZXInO1xuaW1wb3J0IHsgU3Bpbm5lck1vZGUgfSBmcm9tICcuL3NwaW5uZXItbW9kZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1wcm9ncmVzcy1zcGlubmVyJyxcblx0dGVtcGxhdGVVcmw6ICcuL3Byb2dyZXNzLXNwaW5uZXIuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFtcblx0XHQnLi9wcm9ncmVzcy1zcGlubmVyLm5neC5zY3NzJyxcblx0XHQnLi90aGVtZXMvcHJvZ3Jlc3Mtc3Bpbm5lci5tYXRlcmlhbC5uZ3guc2NzcycsXG5cdFx0Jy4vdGhlbWVzL3Byb2dyZXNzLXNwaW5uZXIuZGFyay5uZ3guc2Nzcydcblx0XSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgRmFicmljUHJvZ3Jlc3NTcGlubmVyQ29tcG9uZW50IGV4dGVuZHMgQWJzdHJhY3RTcGlubmVyIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xuXG5cdEBJbnB1dCgpXG5cdHZhbHVlOiBudW1iZXIgPSAwO1xuXG5cdEBJbnB1dCgpXG5cdG1vZGU6IFNwaW5uZXJNb2RlO1xuXG5cdEBJbnB1dCgpXG5cdGNvbG9yOiBzdHJpbmc7XG5cblx0YW5pbWF0aW9uc0Rpc2FibGVkOiBib29sZWFuID0gdHJ1ZTtcblxuXHRzZWNvbmRDaXJjbGVEaXNhYmxlZDogYm9vbGVhbiA9IHRydWU7XG5cblx0dmFsdWVQZXJjZW50YWdlOiBudW1iZXI7XG5cblx0Y29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cmVuZGVyZXI6IFJlbmRlcmVyMikge1xuXHRcdHN1cGVyKGVsZW1lbnRSZWYsIHJlbmRlcmVyKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblx0XHRzdXBlci5uZ09uQ2hhbmdlcyhjaGFuZ2VzKTtcblxuXHRcdHRoaXMuY2FsY3VsYXRlVmFsdWVQZXJjZW50YWdlKHRoaXMuY2lyY3VtZmVyZW5jZSwgdGhpcy52YWx1ZSk7XG5cblx0XHRpZiAodGhpcy5tb2RlID09PSBTcGlubmVyTW9kZS5TcGluKSB7XG5cdFx0XHR0aGlzLmFuaW1hdGlvbnNEaXNhYmxlZCA9IGZhbHNlO1xuXHRcdFx0dGhpcy5zZWNvbmRDaXJjbGVEaXNhYmxlZCA9IGZhbHNlO1xuXHRcdFx0dGhpcy52YWx1ZSA9IDA7XG5cdFx0XHR0aGlzLmNpcmN1bWZlcmVuY2UgPSB0aGlzLmNyb3BwZWRDaXJjbGU7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuYW5pbWF0aW9uc0Rpc2FibGVkKSB7XG5cdFx0XHR0aGlzLmFkZENsYXNzKCdndWktYW5pbWF0aW9ucy1kaXNhYmxlZCcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnJlbW92ZUNsYXNzKCdndWktYW5pbWF0aW9ucy1kaXNhYmxlZCcpO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLnNlY29uZENpcmNsZURpc2FibGVkKSB7XG5cdFx0XHR0aGlzLmFkZENsYXNzKCdndWktc2Vjb25kLWNpcmNsZS1kaXNhYmxlZCcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnJlbW92ZUNsYXNzKCdndWktc2Vjb25kLWNpcmNsZS1kaXNhYmxlZCcpO1xuXHRcdH1cblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMuY2FsY3VsYXRlVmFsdWVQZXJjZW50YWdlKHRoaXMuY2lyY3VtZmVyZW5jZSwgdGhpcy52YWx1ZSk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgY2FsY3VsYXRlVmFsdWVQZXJjZW50YWdlKGNpcmN1bWZlcmVuY2U6IG51bWJlciwgdmFsdWU6IG51bWJlcikge1xuXHRcdHRoaXMudmFsdWVQZXJjZW50YWdlID0gY2lyY3VtZmVyZW5jZSAtICh2YWx1ZSAqIGNpcmN1bWZlcmVuY2UgLyAxMDApO1xuXHR9XG59XG4iXX0=