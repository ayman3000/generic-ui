import { HermesObservable } from '../observable/hermes.observable';
import { subscriberForOperator } from './operator-utils';
export function hermesMap(convert) {
    return (source) => {
        return new HermesObservable((observer) => {
            let index = 0;
            const subscriber = subscriberForOperator(observer, (value) => {
                observer.next(convert(value, index++));
            });
            return source.subscribe(subscriber).getFinalize();
        });
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLm1hcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktaGVybWVzL3NyYy9jb21tb24vc3RyZWFtL29wZXJhdG9yL2hlcm1lcy5tYXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUEwQixNQUFNLGlDQUFpQyxDQUFDO0FBQzNGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBSXpELE1BQU0sVUFBVSxTQUFTLENBQU8sT0FBdUM7SUFFdEUsT0FBTyxDQUFDLE1BQTJCLEVBQUUsRUFBRTtRQUN0QyxPQUFPLElBQUksZ0JBQWdCLENBQUksQ0FBQyxRQUE2QixFQUFFLEVBQUU7WUFDaEUsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBRWQsTUFBTSxVQUFVLEdBQUcscUJBQXFCLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBUSxFQUFFLEVBQUU7Z0JBQy9ELFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDeEMsQ0FBQyxDQUFDLENBQUM7WUFFSCxPQUFPLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkQsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDLENBQUM7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSGVybWVzT2JzZXJ2YWJsZSwgSGVybWVzT3BlcmF0b3JGdW5jdGlvbiB9IGZyb20gJy4uL29ic2VydmFibGUvaGVybWVzLm9ic2VydmFibGUnO1xuaW1wb3J0IHsgc3Vic2NyaWJlckZvck9wZXJhdG9yIH0gZnJvbSAnLi9vcGVyYXRvci11dGlscyc7XG5pbXBvcnQgeyBIZXJtZXNPYnNlcnZlciB9IGZyb20gJy4uL29ic2VydmFibGUvaGVybWVzLm9ic2VydmVyJztcblxuXG5leHBvcnQgZnVuY3Rpb24gaGVybWVzTWFwPFQsIFI+KGNvbnZlcnQ6ICh2YWx1ZTogVCwgaW5kZXg6IG51bWJlcikgPT4gUik6IEhlcm1lc09wZXJhdG9yRnVuY3Rpb248VCwgUj4ge1xuXG5cdHJldHVybiAoc291cmNlOiBIZXJtZXNPYnNlcnZhYmxlPFQ+KSA9PiB7XG5cdFx0cmV0dXJuIG5ldyBIZXJtZXNPYnNlcnZhYmxlPFI+KChvYnNlcnZlcjogSGVybWVzT2JzZXJ2ZXI8YW55PikgPT4ge1xuXHRcdFx0bGV0IGluZGV4ID0gMDtcblxuXHRcdFx0Y29uc3Qgc3Vic2NyaWJlciA9IHN1YnNjcmliZXJGb3JPcGVyYXRvcihvYnNlcnZlciwgKHZhbHVlOiBUKSA9PiB7XG5cdFx0XHRcdG9ic2VydmVyLm5leHQoY29udmVydCh2YWx1ZSwgaW5kZXgrKykpO1xuXHRcdFx0fSk7XG5cblx0XHRcdHJldHVybiBzb3VyY2Uuc3Vic2NyaWJlKHN1YnNjcmliZXIpLmdldEZpbmFsaXplKCk7XG5cdFx0fSk7XG5cdH07XG59XG4iXX0=