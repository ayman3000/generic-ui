import { HermesSubject } from './stream/observable/hermes.subject';
import { hermesTakeUntil } from './stream/operator/hermes.take-until';
import { toRxJsObservable } from '../infrastructure/rxjs/to-rxjs-observable';
import { takeUntil } from 'rxjs/operators';
import { Injectable } from '@angular/core';
export class Reactive {
    constructor() {
        this.hermesUnsubscribe$ = new HermesSubject();
    }
    ngOnDestroy() {
        this.hermesUnsubscribe();
    }
    takeUntil() {
        return takeUntil(toRxJsObservable(this.hermesUnsubscribe$));
    }
    hermesUnsubscribe() {
        this.hermesUnsubscribe$.next();
        this.hermesUnsubscribe$.complete();
    }
    hermesTakeUntil() {
        return hermesTakeUntil(this.hermesUnsubscribe$);
    }
    isNotStopped() {
        return !this.hermesUnsubscribe$.isCompleted;
    }
}
Reactive.decorators = [
    { type: Injectable }
];
Reactive.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWhlcm1lcy9zcmMvY29tbW9uL3JlYWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNuRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDdEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDN0UsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsTUFBTSxPQUFnQixRQUFRO0lBSTdCO1FBRmlCLHVCQUFrQixHQUFHLElBQUksYUFBYSxFQUFRLENBQUM7SUFHaEUsQ0FBQztJQUVELFdBQVc7UUFDVixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRVMsU0FBUztRQUNsQixPQUFPLFNBQVMsQ0FDZixnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FDekMsQ0FBQztJQUNILENBQUM7SUFFUyxpQkFBaUI7UUFDMUIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBRVMsZUFBZTtRQUN4QixPQUFPLGVBQWUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRVMsWUFBWTtRQUNyQixPQUFPLENBQUUsSUFBSSxDQUFDLGtCQUEwQixDQUFDLFdBQVcsQ0FBQztJQUN0RCxDQUFDOzs7WUE3QkQsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbm9UeXBlT3BlcmF0b3JGdW5jdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSGVybWVzU3ViamVjdCB9IGZyb20gJy4vc3RyZWFtL29ic2VydmFibGUvaGVybWVzLnN1YmplY3QnO1xuaW1wb3J0IHsgaGVybWVzVGFrZVVudGlsIH0gZnJvbSAnLi9zdHJlYW0vb3BlcmF0b3IvaGVybWVzLnRha2UtdW50aWwnO1xuaW1wb3J0IHsgdG9SeEpzT2JzZXJ2YWJsZSB9IGZyb20gJy4uL2luZnJhc3RydWN0dXJlL3J4anMvdG8tcnhqcy1vYnNlcnZhYmxlJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFJlYWN0aXZlIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGhlcm1lc1Vuc3Vic2NyaWJlJCA9IG5ldyBIZXJtZXNTdWJqZWN0PHZvaWQ+KCk7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKCkge1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy5oZXJtZXNVbnN1YnNjcmliZSgpO1xuXHR9XG5cblx0cHJvdGVjdGVkIHRha2VVbnRpbDxUPigpOiBNb25vVHlwZU9wZXJhdG9yRnVuY3Rpb248VD4ge1xuXHRcdHJldHVybiB0YWtlVW50aWwoXG5cdFx0XHR0b1J4SnNPYnNlcnZhYmxlKHRoaXMuaGVybWVzVW5zdWJzY3JpYmUkKVxuXHRcdCk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgaGVybWVzVW5zdWJzY3JpYmUoKTogdm9pZCB7XG5cdFx0dGhpcy5oZXJtZXNVbnN1YnNjcmliZSQubmV4dCgpO1xuXHRcdHRoaXMuaGVybWVzVW5zdWJzY3JpYmUkLmNvbXBsZXRlKCk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgaGVybWVzVGFrZVVudGlsKCk6IGFueSB7XG5cdFx0cmV0dXJuIGhlcm1lc1Rha2VVbnRpbCh0aGlzLmhlcm1lc1Vuc3Vic2NyaWJlJCk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgaXNOb3RTdG9wcGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiAhKHRoaXMuaGVybWVzVW5zdWJzY3JpYmUkIGFzIGFueSkuaXNDb21wbGV0ZWQ7XG5cdH1cblxufVxuIl19