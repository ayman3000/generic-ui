import { HermesSubject } from './hermes.subject';
export class HermesBehaviorSubject extends HermesSubject {
    constructor(defaultValue) {
        super();
        this.lastValue = defaultValue;
    }
    next(value) {
        this.lastValue = value;
        super.next(value);
    }
    subscribe(arg) {
        const subscription = super.subscribe(arguments[0], arguments[1], arguments[2]);
        super.next(this.lastValue);
        return subscription;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLmJlaGF2aW9yLXN1YmplY3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWhlcm1lcy9zcmMvY29tbW9uL3N0cmVhbS9vYnNlcnZhYmxlL2hlcm1lcy5iZWhhdmlvci1zdWJqZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUlqRCxNQUFNLE9BQU8scUJBQXlCLFNBQVEsYUFBZ0I7SUFJN0QsWUFBWSxZQUFlO1FBQzFCLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUM7SUFDL0IsQ0FBQztJQUVELElBQUksQ0FBQyxLQUFRO1FBQ1osSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQixDQUFDO0lBVUQsU0FBUyxDQUNSLEdBQVE7UUFHUixNQUFNLFlBQVksR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFL0UsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFM0IsT0FBTyxZQUFZLENBQUM7SUFDckIsQ0FBQztDQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSGVybWVzU3ViamVjdCB9IGZyb20gJy4vaGVybWVzLnN1YmplY3QnO1xuaW1wb3J0IHsgSGVybWVzU3Vic2NyaXB0aW9uIH0gZnJvbSAnLi4vc3Vic2NyaXB0aW9uL2hlcm1lcy5zdWJzY3JpcHRpb24nO1xuaW1wb3J0IHsgSGVybWVzU3Vic2NyaWJlciB9IGZyb20gJy4vc3Vic2NyaWJlci9oZXJtZXMuc3Vic2NyaWJlcic7XG5cbmV4cG9ydCBjbGFzcyBIZXJtZXNCZWhhdmlvclN1YmplY3Q8VD4gZXh0ZW5kcyBIZXJtZXNTdWJqZWN0PFQ+IHtcblxuXHRwcml2YXRlIGxhc3RWYWx1ZTogVDtcblxuXHRjb25zdHJ1Y3RvcihkZWZhdWx0VmFsdWU6IFQpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMubGFzdFZhbHVlID0gZGVmYXVsdFZhbHVlO1xuXHR9XG5cblx0bmV4dCh2YWx1ZTogVCkge1xuXHRcdHRoaXMubGFzdFZhbHVlID0gdmFsdWU7XG5cdFx0c3VwZXIubmV4dCh2YWx1ZSk7XG5cdH1cblxuXHRzdWJzY3JpYmUoXG5cdFx0bmV4dD86ICh2YWx1ZTogVCkgPT4gdm9pZCxcblx0XHRlcnJvcj86IChlcnJvcjogYW55KSA9PiB2b2lkLFxuXHRcdGNvbXBsZXRlPzogKCkgPT4gdm9pZFxuXHQpOiBIZXJtZXNTdWJzY3JpcHRpb247XG5cdHN1YnNjcmliZShcblx0XHRzdWJzY3JpYmVyOiBIZXJtZXNTdWJzY3JpYmVyPFQ+XG5cdCk6IEhlcm1lc1N1YnNjcmlwdGlvbjtcblx0c3Vic2NyaWJlKFxuXHRcdGFyZzogYW55XG5cdCk6IEhlcm1lc1N1YnNjcmlwdGlvbiB7XG5cblx0XHRjb25zdCBzdWJzY3JpcHRpb24gPSBzdXBlci5zdWJzY3JpYmUoYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbMV0sIGFyZ3VtZW50c1syXSk7XG5cblx0XHRzdXBlci5uZXh0KHRoaXMubGFzdFZhbHVlKTtcblxuXHRcdHJldHVybiBzdWJzY3JpcHRpb247XG5cdH1cbn1cbiJdfQ==