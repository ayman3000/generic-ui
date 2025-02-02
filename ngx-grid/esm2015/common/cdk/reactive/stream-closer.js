import { HermesSubject, hermesTakeUntil } from '@generic-ui/hermes';
export class StreamCloser {
    constructor() {
        this.unsubscribe$ = new HermesSubject();
    }
    takeUntil() {
        return hermesTakeUntil(this.unsubscribe$);
    }
    unsubscribe() {
        if (this.unsubscribe$.isCompleted) {
            return;
        }
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyZWFtLWNsb3Nlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvY29tbW9uL2Nkay9yZWFjdGl2ZS9zdHJlYW0tY2xvc2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHcEUsTUFBTSxPQUFPLFlBQVk7SUFJeEI7UUFGaUIsaUJBQVksR0FBRyxJQUFJLGFBQWEsRUFBUSxDQUFDO0lBRzFELENBQUM7SUFFRCxTQUFTO1FBQ1IsT0FBTyxlQUFlLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCxXQUFXO1FBQ1YsSUFBSyxJQUFJLENBQUMsWUFBb0IsQ0FBQyxXQUFXLEVBQUU7WUFDM0MsT0FBTztTQUNQO1FBRUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzlCLENBQUM7Q0FFRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhlcm1lc1N1YmplY3QsIGhlcm1lc1Rha2VVbnRpbCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cblxuZXhwb3J0IGNsYXNzIFN0cmVhbUNsb3NlcjxUPiB7XG5cblx0cHJpdmF0ZSByZWFkb25seSB1bnN1YnNjcmliZSQgPSBuZXcgSGVybWVzU3ViamVjdDx2b2lkPigpO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHR9XG5cblx0dGFrZVVudGlsKCkge1xuXHRcdHJldHVybiBoZXJtZXNUYWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpO1xuXHR9XG5cblx0dW5zdWJzY3JpYmUoKTogdm9pZCB7XG5cdFx0aWYgKCh0aGlzLnVuc3Vic2NyaWJlJCBhcyBhbnkpLmlzQ29tcGxldGVkKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy51bnN1YnNjcmliZSQubmV4dCgpO1xuXHRcdHRoaXMudW5zdWJzY3JpYmUkLmNvbXBsZXRlKCk7XG5cdH1cblxufVxuIl19