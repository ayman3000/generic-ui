import { FabricReactive } from '../fabric-reactive';
import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { FabricModalThemeService } from '../../themes/fabric-modal-theme.service';
import { distinctUntilChanged } from 'rxjs/operators';
import { Theme } from '../../themes/theme';
export class FabricThemedComponent extends FabricReactive {
    constructor(elementRef, renderer, themeService) {
        super();
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.themeService = themeService;
    }
    ngAfterViewInit() {
        this.themeService
            .onTheme()
            .pipe(distinctUntilChanged(), this.takeUntil())
            .subscribe((theme) => {
            this.addTheme(theme);
        });
    }
    addTheme(theme) {
        this.removeThemes();
        const cssClass = FabricThemedComponent.CSS_CLASS_PREFIX + theme.toLowerCase();
        this.renderer.addClass(this.elementRef.nativeElement, cssClass);
    }
    removeThemes() {
        const themes = Object.keys(Theme)
            .map((key) => Theme[key].toLowerCase())
            .filter((val) => !Number.isInteger(val));
        themes.forEach((theme) => {
            const cssClass = FabricThemedComponent.CSS_CLASS_PREFIX + theme;
            this.renderer.removeClass(this.elementRef.nativeElement, cssClass);
        });
    }
    getElementRef() {
        return this.elementRef;
    }
    getRenderer() {
        return this.renderer;
    }
}
FabricThemedComponent.CSS_CLASS_PREFIX = 'gui-';
FabricThemedComponent.decorators = [
    { type: Directive }
];
FabricThemedComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: FabricModalThemeService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLXRoZW1lZC1jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWZhYnJpYy9zcmMvY29tbW9uL21vZGFsL2ZhYnJpYy10aGVtZWQtY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNwRCxPQUFPLEVBQWlCLFNBQVMsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWhGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUczQyxNQUFNLE9BQWdCLHFCQUFzQixTQUFRLGNBQWM7SUFJakUsWUFBdUMsVUFBc0IsRUFDckMsUUFBbUIsRUFDbkIsWUFBcUM7UUFDNUQsS0FBSyxFQUFFLENBQUM7UUFIOEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUNyQyxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLGlCQUFZLEdBQVosWUFBWSxDQUF5QjtJQUU3RCxDQUFDO0lBRUQsZUFBZTtRQUNkLElBQUksQ0FBQyxZQUFZO2FBQ2YsT0FBTyxFQUFFO2FBQ1QsSUFBSSxDQUNKLG9CQUFvQixFQUFFLEVBQ3RCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTLENBQUMsQ0FBQyxLQUFZLEVBQUUsRUFBRTtZQUMzQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVTLFFBQVEsQ0FBQyxLQUFZO1FBQzlCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixNQUFNLFFBQVEsR0FBRyxxQkFBcUIsQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFOUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVTLFlBQVk7UUFDckIsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7YUFDMUIsR0FBRyxDQUFDLENBQUMsR0FBVyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDOUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUUvQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBYSxFQUFFLEVBQUU7WUFDaEMsTUFBTSxRQUFRLEdBQUcscUJBQXFCLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1lBQ2hFLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3BFLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVTLGFBQWE7UUFDdEIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3hCLENBQUM7SUFFUyxXQUFXO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN0QixDQUFDOztBQTVDdUIsc0NBQWdCLEdBQUcsTUFBTSxDQUFDOztZQUhsRCxTQUFTOzs7WUFOeUIsVUFBVTtZQUFFLFNBQVM7WUFFL0MsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmFicmljUmVhY3RpdmUgfSBmcm9tICcuLi9mYWJyaWMtcmVhY3RpdmUnO1xuaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRmFicmljTW9kYWxUaGVtZVNlcnZpY2UgfSBmcm9tICcuLi8uLi90aGVtZXMvZmFicmljLW1vZGFsLXRoZW1lLnNlcnZpY2UnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gJy4uLy4uL3RoZW1lcy90aGVtZSc7XG5cbkBEaXJlY3RpdmUoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEZhYnJpY1RoZW1lZENvbXBvbmVudCBleHRlbmRzIEZhYnJpY1JlYWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG5cblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgQ1NTX0NMQVNTX1BSRUZJWCA9ICdndWktJztcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRcdFx0ICBwcml2YXRlIHJlYWRvbmx5IHJlbmRlcmVyOiBSZW5kZXJlcjIsXG5cdFx0XHRcdFx0XHQgIHByaXZhdGUgcmVhZG9ubHkgdGhlbWVTZXJ2aWNlOiBGYWJyaWNNb2RhbFRoZW1lU2VydmljZSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0dGhpcy50aGVtZVNlcnZpY2Vcblx0XHRcdC5vblRoZW1lKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHRkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKCh0aGVtZTogVGhlbWUpID0+IHtcblx0XHRcdFx0dGhpcy5hZGRUaGVtZSh0aGVtZSk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdHByb3RlY3RlZCBhZGRUaGVtZSh0aGVtZTogVGhlbWUpOiB2b2lkIHtcblx0XHR0aGlzLnJlbW92ZVRoZW1lcygpO1xuXHRcdGNvbnN0IGNzc0NsYXNzID0gRmFicmljVGhlbWVkQ29tcG9uZW50LkNTU19DTEFTU19QUkVGSVggKyB0aGVtZS50b0xvd2VyQ2FzZSgpO1xuXG5cdFx0dGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgY3NzQ2xhc3MpO1xuXHR9XG5cblx0cHJvdGVjdGVkIHJlbW92ZVRoZW1lcygpOiB2b2lkIHtcblx0XHRjb25zdCB0aGVtZXMgPSBPYmplY3Qua2V5cyhUaGVtZSlcblx0XHRcdFx0XHRcdFx0IC5tYXAoKGtleTogc3RyaW5nKSA9PiBUaGVtZVtrZXldLnRvTG93ZXJDYXNlKCkpXG5cdFx0XHRcdFx0XHRcdCAuZmlsdGVyKCh2YWwpID0+ICFOdW1iZXIuaXNJbnRlZ2VyKHZhbCkpO1xuXG5cdFx0dGhlbWVzLmZvckVhY2goKHRoZW1lOiBzdHJpbmcpID0+IHtcblx0XHRcdGNvbnN0IGNzc0NsYXNzID0gRmFicmljVGhlbWVkQ29tcG9uZW50LkNTU19DTEFTU19QUkVGSVggKyB0aGVtZTtcblx0XHRcdHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGNzc0NsYXNzKTtcblx0XHR9KTtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXRFbGVtZW50UmVmKCk6IEVsZW1lbnRSZWYge1xuXHRcdHJldHVybiB0aGlzLmVsZW1lbnRSZWY7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0UmVuZGVyZXIoKTogUmVuZGVyZXIyIHtcblx0XHRyZXR1cm4gdGhpcy5yZW5kZXJlcjtcblx0fVxufVxuXG4iXX0=