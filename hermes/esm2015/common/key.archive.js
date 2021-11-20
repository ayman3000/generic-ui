import { ReactiveService } from './reactive.service';
import { KeyMap } from './collections/key-map';
import { Optional } from './optional';
import { hermesFilter } from './stream/operator/hermes.filter';
import { hermesMap } from './stream/operator/hermes.map';
import { hermesDistinctUntilChanged } from './stream/operator/hermes.distinct-until-changed';
import { HermesArchiveSubject } from './stream/observable/hermes.archive-subject';
import { singleFromObservable } from './stream/observable/single/hermes.single-from-observable';
export class KeyArchive extends ReactiveService {
    constructor(defaultValue) {
        super();
        this.archive = new KeyMap();
        this.defaultValue = Optional.empty();
        this.archive$ = HermesArchiveSubject.of();
        if (defaultValue !== undefined && defaultValue !== null) {
            this.defaultValue = Optional.of(defaultValue);
        }
    }
    on(key) {
        this.tryToInitDefault(key);
        return this.archive$
            .toObservable()
            .pipe(hermesFilter(() => this.isNotStopped()), hermesMap((map) => {
            return map.find(key);
        }), hermesFilter((value) => value.isPresent()), hermesMap((value) => value.getValueOrNullOrThrowError()), hermesDistinctUntilChanged(this.equals), this.hermesTakeUntil());
    }
    once(key) {
        return singleFromObservable(this.on(key));
    }
    find(key) {
        this.tryToInitDefault(key);
        return this.archive.find(key);
    }
    next(key, value) {
        this.archive.set(key, value);
        this.archive$.next(this.archive);
    }
    equals(a, b) {
        return a === b;
    }
    createDefaultValue(defaultValue) {
        return defaultValue;
    }
    tryToInitDefault(key) {
        this.defaultValue
            .ifPresent((value) => {
            if (!this.archive.has(key)) {
                this.next(key, value);
            }
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5LmFyY2hpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWhlcm1lcy9zcmMvY29tbW9uL2tleS5hcmNoaXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUN0QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDL0QsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3pELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQzdGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBSWxGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBR2hHLE1BQU0sT0FBZ0IsVUFBNkIsU0FBUSxlQUFlO0lBUXpFLFlBQXNCLFlBQWdCO1FBQ3JDLEtBQUssRUFBRSxDQUFDO1FBUFEsWUFBTyxHQUFHLElBQUksTUFBTSxFQUFRLENBQUM7UUFJdEMsaUJBQVksR0FBZ0IsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBS3BELElBQUksQ0FBQyxRQUFRLEdBQUcsb0JBQW9CLENBQUMsRUFBRSxFQUFFLENBQUM7UUFFMUMsSUFBSSxZQUFZLEtBQUssU0FBUyxJQUFJLFlBQVksS0FBSyxJQUFJLEVBQUU7WUFDeEQsSUFBSSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQzlDO0lBQ0YsQ0FBQztJQUVELEVBQUUsQ0FBQyxHQUFNO1FBRVIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRTNCLE9BQU8sSUFBSSxDQUFDLFFBQVE7YUFDZCxZQUFZLEVBQUU7YUFDZCxJQUFJLENBQ0osWUFBWSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxFQUN2QyxTQUFTLENBQUMsQ0FBQyxHQUFpQixFQUFFLEVBQUU7WUFDL0IsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxFQUNGLFlBQVksQ0FBQyxDQUFDLEtBQWtCLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUN2RCxTQUFTLENBQUMsQ0FBQyxLQUFrQixFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsMEJBQTBCLEVBQUUsQ0FBQyxFQUNyRSwwQkFBMEIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQ3ZDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FDdEIsQ0FBQztJQUNSLENBQUM7SUFFRCxJQUFJLENBQUMsR0FBTTtRQUNWLE9BQU8sb0JBQW9CLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCxJQUFJLENBQUMsR0FBTTtRQUVWLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUUzQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxJQUFJLENBQUMsR0FBTSxFQUFFLEtBQVE7UUFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRVMsTUFBTSxDQUFDLENBQUksRUFBRSxDQUFJO1FBQzFCLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQixDQUFDO0lBRVMsa0JBQWtCLENBQUMsWUFBZTtRQUMzQyxPQUFPLFlBQVksQ0FBQztJQUNyQixDQUFDO0lBRU8sZ0JBQWdCLENBQUMsR0FBTTtRQUM5QixJQUFJLENBQUMsWUFBWTthQUNmLFNBQVMsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1lBRXBCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDdEI7UUFDRixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FFRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlYWN0aXZlU2VydmljZSB9IGZyb20gJy4vcmVhY3RpdmUuc2VydmljZSc7XG5pbXBvcnQgeyBLZXlNYXAgfSBmcm9tICcuL2NvbGxlY3Rpb25zL2tleS1tYXAnO1xuaW1wb3J0IHsgT3B0aW9uYWwgfSBmcm9tICcuL29wdGlvbmFsJztcbmltcG9ydCB7IGhlcm1lc0ZpbHRlciB9IGZyb20gJy4vc3RyZWFtL29wZXJhdG9yL2hlcm1lcy5maWx0ZXInO1xuaW1wb3J0IHsgaGVybWVzTWFwIH0gZnJvbSAnLi9zdHJlYW0vb3BlcmF0b3IvaGVybWVzLm1hcCc7XG5pbXBvcnQgeyBoZXJtZXNEaXN0aW5jdFVudGlsQ2hhbmdlZCB9IGZyb20gJy4vc3RyZWFtL29wZXJhdG9yL2hlcm1lcy5kaXN0aW5jdC11bnRpbC1jaGFuZ2VkJztcbmltcG9ydCB7IEhlcm1lc0FyY2hpdmVTdWJqZWN0IH0gZnJvbSAnLi9zdHJlYW0vb2JzZXJ2YWJsZS9oZXJtZXMuYXJjaGl2ZS1zdWJqZWN0JztcbmltcG9ydCB7IEhlcm1lc09ic2VydmFibGUgfSBmcm9tICcuL3N0cmVhbS9vYnNlcnZhYmxlL2hlcm1lcy5vYnNlcnZhYmxlJztcbmltcG9ydCB7IEtleSB9IGZyb20gJy4vY29sbGVjdGlvbnMva2V5JztcbmltcG9ydCB7IEhlcm1lc1NpbmdsZSB9IGZyb20gJy4vc3RyZWFtL29ic2VydmFibGUvc2luZ2xlL2hlcm1lcy5zaW5nbGUnO1xuaW1wb3J0IHsgc2luZ2xlRnJvbU9ic2VydmFibGUgfSBmcm9tICcuL3N0cmVhbS9vYnNlcnZhYmxlL3NpbmdsZS9oZXJtZXMuc2luZ2xlLWZyb20tb2JzZXJ2YWJsZSc7XG5cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEtleUFyY2hpdmU8SyBleHRlbmRzIEtleSwgVD4gZXh0ZW5kcyBSZWFjdGl2ZVNlcnZpY2Uge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgYXJjaGl2ZSA9IG5ldyBLZXlNYXA8SywgVD4oKTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGFyY2hpdmUkOiBIZXJtZXNBcmNoaXZlU3ViamVjdDxLZXlNYXA8SywgVD4+O1xuXG5cdHByaXZhdGUgZGVmYXVsdFZhbHVlOiBPcHRpb25hbDxUPiA9IE9wdGlvbmFsLmVtcHR5KCk7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKGRlZmF1bHRWYWx1ZT86IFQpIHtcblx0XHRzdXBlcigpO1xuXG5cdFx0dGhpcy5hcmNoaXZlJCA9IEhlcm1lc0FyY2hpdmVTdWJqZWN0Lm9mKCk7XG5cblx0XHRpZiAoZGVmYXVsdFZhbHVlICE9PSB1bmRlZmluZWQgJiYgZGVmYXVsdFZhbHVlICE9PSBudWxsKSB7XG5cdFx0XHR0aGlzLmRlZmF1bHRWYWx1ZSA9IE9wdGlvbmFsLm9mKGRlZmF1bHRWYWx1ZSk7XG5cdFx0fVxuXHR9XG5cblx0b24oa2V5OiBLKTogSGVybWVzT2JzZXJ2YWJsZTxUPiB7XG5cblx0XHR0aGlzLnRyeVRvSW5pdERlZmF1bHQoa2V5KTtcblxuXHRcdHJldHVybiB0aGlzLmFyY2hpdmUkXG5cdFx0XHRcdCAgIC50b09ic2VydmFibGUoKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBoZXJtZXNGaWx0ZXIoKCkgPT4gdGhpcy5pc05vdFN0b3BwZWQoKSksXG5cdFx0XHRcdFx0ICAgaGVybWVzTWFwKChtYXA6IEtleU1hcDxLLCBUPikgPT4ge1xuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIG1hcC5maW5kKGtleSk7XG5cdFx0XHRcdFx0ICAgfSksXG5cdFx0XHRcdFx0ICAgaGVybWVzRmlsdGVyKCh2YWx1ZTogT3B0aW9uYWw8VD4pID0+IHZhbHVlLmlzUHJlc2VudCgpKSxcblx0XHRcdFx0XHQgICBoZXJtZXNNYXAoKHZhbHVlOiBPcHRpb25hbDxUPikgPT4gdmFsdWUuZ2V0VmFsdWVPck51bGxPclRocm93RXJyb3IoKSksXG5cdFx0XHRcdFx0ICAgaGVybWVzRGlzdGluY3RVbnRpbENoYW5nZWQodGhpcy5lcXVhbHMpLFxuXHRcdFx0XHRcdCAgIHRoaXMuaGVybWVzVGFrZVVudGlsKClcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdG9uY2Uoa2V5OiBLKTogSGVybWVzU2luZ2xlPFQ+IHtcblx0XHRyZXR1cm4gc2luZ2xlRnJvbU9ic2VydmFibGUodGhpcy5vbihrZXkpKTtcblx0fVxuXG5cdGZpbmQoa2V5OiBLKTogT3B0aW9uYWw8VD4ge1xuXG5cdFx0dGhpcy50cnlUb0luaXREZWZhdWx0KGtleSk7XG5cblx0XHRyZXR1cm4gdGhpcy5hcmNoaXZlLmZpbmQoa2V5KTtcblx0fVxuXG5cdG5leHQoa2V5OiBLLCB2YWx1ZTogVCk6IHZvaWQge1xuXHRcdHRoaXMuYXJjaGl2ZS5zZXQoa2V5LCB2YWx1ZSk7XG5cdFx0dGhpcy5hcmNoaXZlJC5uZXh0KHRoaXMuYXJjaGl2ZSk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZXF1YWxzKGE6IFQsIGI6IFQpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gYSA9PT0gYjtcblx0fVxuXG5cdHByb3RlY3RlZCBjcmVhdGVEZWZhdWx0VmFsdWUoZGVmYXVsdFZhbHVlOiBUKTogVCB7XG5cdFx0cmV0dXJuIGRlZmF1bHRWYWx1ZTtcblx0fVxuXG5cdHByaXZhdGUgdHJ5VG9Jbml0RGVmYXVsdChrZXk6IEspOiB2b2lkIHtcblx0XHR0aGlzLmRlZmF1bHRWYWx1ZVxuXHRcdFx0LmlmUHJlc2VudCgodmFsdWUpID0+IHtcblxuXHRcdFx0XHRpZiAoIXRoaXMuYXJjaGl2ZS5oYXMoa2V5KSkge1xuXHRcdFx0XHRcdHRoaXMubmV4dChrZXksIHZhbHVlKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdH1cblxufVxuIl19