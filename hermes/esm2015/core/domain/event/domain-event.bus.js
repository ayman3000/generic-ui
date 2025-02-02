import { Injectable } from '@angular/core';
import { DomainEventStream } from './domain-event.stream';
import { HermesObservable } from '../../../common/stream/observable/hermes.observable';
import { hermesFilter } from '../../../common/stream/operator/hermes.filter';
export class DomainEventBus extends HermesObservable {
    constructor(eventStream) {
        super();
        this.eventStream = eventStream;
    }
    subscribe(arg) {
        return this.eventStream.toObservable().subscribe(arguments[0], arguments[1], arguments[2]);
    }
    ofEvents(events) {
        return this
            .eventStream
            .toObservable()
            .pipe(hermesFilter((domainEvent) => {
            return events.some((event) => {
                const eventInstance = this.createEventInstance(event);
                return eventInstance.equalsByType(domainEvent);
            });
        }));
    }
    ofEventHandlers(handlers) {
        return this
            .eventStream
            .toObservable()
            .pipe(hermesFilter((event) => {
            return handlers.some((handler) => handler.forEvents([event]));
        }));
    }
    createEventInstance(event) {
        const args = [], argumentLength = event.constructor.length;
        args.fill(undefined, 0, argumentLength);
        if (args.length === 0) {
            return (new event());
        }
        else if (args.length === 1) {
            return (new event(args[0]));
        }
        else if (args.length === 2) {
            return (new event(args[0], args[1]));
        }
        else if (args.length === 3) {
            return (new event(args[0], args[1], args[2]));
        }
        else if (args.length === 4) {
            return (new event(args[0], args[1], args[2], args[3]));
        }
        else if (args.length === 5) {
            return (new event(args[0], args[1], args[2], args[3], args[4]));
        }
        else {
            throw new Error('DomainEventBus constructor out of arguments');
        }
    }
}
DomainEventBus.decorators = [
    { type: Injectable }
];
DomainEventBus.ctorParameters = () => [
    { type: DomainEventStream }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tYWluLWV2ZW50LmJ1cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktaGVybWVzL3NyYy9jb3JlL2RvbWFpbi9ldmVudC9kb21haW4tZXZlbnQuYnVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFHMUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDdkYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBSzdFLE1BQU0sT0FBTyxjQUE2QyxTQUFRLGdCQUFtQjtJQUVwRixZQUE2QixXQUE4QjtRQUMxRCxLQUFLLEVBQUUsQ0FBQztRQURvQixnQkFBVyxHQUFYLFdBQVcsQ0FBbUI7SUFFM0QsQ0FBQztJQVVELFNBQVMsQ0FDUixHQUFRO1FBR1IsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVGLENBQUM7SUFFRCxRQUFRLENBQWUsTUFBaUM7UUFDdkQsT0FBUSxJQUE0QjthQUNsQyxXQUFXO2FBQ1gsWUFBWSxFQUFFO2FBQ2QsSUFBSSxDQUNKLFlBQVksQ0FBQyxDQUFDLFdBQXFDLEVBQUUsRUFBRTtZQUN0RCxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUF5QixFQUFFLEVBQUU7Z0JBQ2hELE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDdEQsT0FBTyxhQUFhLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ2hELENBQUMsQ0FBQyxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRCxlQUFlLENBQWUsUUFBOEU7UUFDM0csT0FBUSxJQUE0QjthQUNsQyxXQUFXO2FBQ1gsWUFBWSxFQUFFO2FBQ2QsSUFBSSxDQUNKLFlBQVksQ0FBQyxDQUFDLEtBQStCLEVBQUUsRUFBRTtZQUNoRCxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFzRSxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlILENBQUMsQ0FBQyxDQUNGLENBQUM7SUFDSixDQUFDO0lBRU8sbUJBQW1CLENBQUMsS0FBeUI7UUFDcEQsTUFBTSxJQUFJLEdBQWdCLEVBQUUsRUFDM0IsY0FBYyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDO1FBRTNDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxjQUFjLENBQUMsQ0FBQztRQUV4QyxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3RCLE9BQU8sQ0FBQyxJQUFLLEtBQWEsRUFBRSxDQUFDLENBQUM7U0FDOUI7YUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQzdCLE9BQU8sQ0FBQyxJQUFLLEtBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3JDO2FBQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUM3QixPQUFPLENBQUMsSUFBSyxLQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDOUM7YUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQzdCLE9BQU8sQ0FBQyxJQUFLLEtBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdkQ7YUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQzdCLE9BQU8sQ0FBQyxJQUFLLEtBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2hFO2FBQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUM3QixPQUFPLENBQUMsSUFBSyxLQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDekU7YUFBTTtZQUNOLE1BQU0sSUFBSSxLQUFLLENBQUMsNkNBQTZDLENBQUMsQ0FBQztTQUMvRDtJQUNGLENBQUM7OztZQXBFRCxVQUFVOzs7WUFSRixpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50IH0gZnJvbSAnLi9kb21haW4tZXZlbnQnO1xuaW1wb3J0IHsgRG9tYWluRXZlbnRTdHJlYW0gfSBmcm9tICcuL2RvbWFpbi1ldmVudC5zdHJlYW0nO1xuaW1wb3J0IHsgQWdncmVnYXRlSWQgfSBmcm9tICcuLi90YWN0aWNhbC9hZ2dyZWdhdGUvYWdncmVnYXRlLWlkJztcbmltcG9ydCB7IERvbWFpbkV2ZW50SGFuZGxlckltcGwgfSBmcm9tICcuL2hhbmRsZXIvZG9tYWluLWV2ZW50LWhhbmRsZXItaW1wbCc7XG5pbXBvcnQgeyBIZXJtZXNPYnNlcnZhYmxlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3N0cmVhbS9vYnNlcnZhYmxlL2hlcm1lcy5vYnNlcnZhYmxlJztcbmltcG9ydCB7IGhlcm1lc0ZpbHRlciB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zdHJlYW0vb3BlcmF0b3IvaGVybWVzLmZpbHRlcic7XG5pbXBvcnQgeyBIZXJtZXNTdWJzY3JpcHRpb24gfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc3RyZWFtL3N1YnNjcmlwdGlvbi9oZXJtZXMuc3Vic2NyaXB0aW9uJztcbmltcG9ydCB7IEhlcm1lc1N1YnNjcmliZXIgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc3RyZWFtL29ic2VydmFibGUvc3Vic2NyaWJlci9oZXJtZXMuc3Vic2NyaWJlcic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEb21haW5FdmVudEJ1czxFID0gRG9tYWluRXZlbnQ8QWdncmVnYXRlSWQ+PiBleHRlbmRzIEhlcm1lc09ic2VydmFibGU8RT4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZXZlbnRTdHJlYW06IERvbWFpbkV2ZW50U3RyZWFtKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdHN1YnNjcmliZShcblx0XHRuZXh0PzogKHZhbHVlOiBFKSA9PiB2b2lkLFxuXHRcdGVycm9yPzogKGVycm9yOiBhbnkpID0+IHZvaWQsXG5cdFx0Y29tcGxldGU/OiAoKSA9PiB2b2lkXG5cdCk6IEhlcm1lc1N1YnNjcmlwdGlvbjtcblx0c3Vic2NyaWJlKFxuXHRcdHN1YnNjcmliZXI6IEhlcm1lc1N1YnNjcmliZXI8RT5cblx0KTogSGVybWVzU3Vic2NyaXB0aW9uO1xuXHRzdWJzY3JpYmUoXG5cdFx0YXJnOiBhbnlcblx0KTogSGVybWVzU3Vic2NyaXB0aW9uIHtcblxuXHRcdHJldHVybiB0aGlzLmV2ZW50U3RyZWFtLnRvT2JzZXJ2YWJsZSgpLnN1YnNjcmliZShhcmd1bWVudHNbMF0sIGFyZ3VtZW50c1sxXSwgYXJndW1lbnRzWzJdKTtcblx0fVxuXG5cdG9mRXZlbnRzPEUyIGV4dGVuZHMgRT4oZXZlbnRzOiBBcnJheTx0eXBlb2YgRG9tYWluRXZlbnQ+KTogSGVybWVzT2JzZXJ2YWJsZTxhbnk+IHtcblx0XHRyZXR1cm4gKHRoaXMgYXMgRG9tYWluRXZlbnRCdXM8YW55Pilcblx0XHRcdC5ldmVudFN0cmVhbVxuXHRcdFx0LnRvT2JzZXJ2YWJsZSgpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0aGVybWVzRmlsdGVyKChkb21haW5FdmVudDogRG9tYWluRXZlbnQ8QWdncmVnYXRlSWQ+KSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIGV2ZW50cy5zb21lKChldmVudDogdHlwZW9mIERvbWFpbkV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRjb25zdCBldmVudEluc3RhbmNlID0gdGhpcy5jcmVhdGVFdmVudEluc3RhbmNlKGV2ZW50KTtcblx0XHRcdFx0XHRcdHJldHVybiBldmVudEluc3RhbmNlLmVxdWFsc0J5VHlwZShkb21haW5FdmVudCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pXG5cdFx0XHQpO1xuXHR9XG5cblx0b2ZFdmVudEhhbmRsZXJzPEUyIGV4dGVuZHMgRT4oaGFuZGxlcnM6IEFycmF5PERvbWFpbkV2ZW50SGFuZGxlckltcGw8QWdncmVnYXRlSWQsIERvbWFpbkV2ZW50PEFnZ3JlZ2F0ZUlkPj4+KTogYW55IHtcblx0XHRyZXR1cm4gKHRoaXMgYXMgRG9tYWluRXZlbnRCdXM8YW55Pilcblx0XHRcdC5ldmVudFN0cmVhbVxuXHRcdFx0LnRvT2JzZXJ2YWJsZSgpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0aGVybWVzRmlsdGVyKChldmVudDogRG9tYWluRXZlbnQ8QWdncmVnYXRlSWQ+KSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIGhhbmRsZXJzLnNvbWUoKGhhbmRsZXI6IERvbWFpbkV2ZW50SGFuZGxlckltcGw8QWdncmVnYXRlSWQsIERvbWFpbkV2ZW50PEFnZ3JlZ2F0ZUlkPj4pID0+IGhhbmRsZXIuZm9yRXZlbnRzKFtldmVudF0pKTtcblx0XHRcdFx0fSlcblx0XHRcdCk7XG5cdH1cblxuXHRwcml2YXRlIGNyZWF0ZUV2ZW50SW5zdGFuY2UoZXZlbnQ6IHR5cGVvZiBEb21haW5FdmVudCk6IERvbWFpbkV2ZW50PEFnZ3JlZ2F0ZUlkPiB7XG5cdFx0Y29uc3QgYXJnczogQXJyYXk8dm9pZD4gPSBbXSxcblx0XHRcdGFyZ3VtZW50TGVuZ3RoID0gZXZlbnQuY29uc3RydWN0b3IubGVuZ3RoO1xuXG5cdFx0YXJncy5maWxsKHVuZGVmaW5lZCwgMCwgYXJndW1lbnRMZW5ndGgpO1xuXG5cdFx0aWYgKGFyZ3MubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gKG5ldyAoZXZlbnQgYXMgYW55KSgpKTtcblx0XHR9IGVsc2UgaWYgKGFyZ3MubGVuZ3RoID09PSAxKSB7XG5cdFx0XHRyZXR1cm4gKG5ldyAoZXZlbnQgYXMgYW55KShhcmdzWzBdKSk7XG5cdFx0fSBlbHNlIGlmIChhcmdzLmxlbmd0aCA9PT0gMikge1xuXHRcdFx0cmV0dXJuIChuZXcgKGV2ZW50IGFzIGFueSkoYXJnc1swXSwgYXJnc1sxXSkpO1xuXHRcdH0gZWxzZSBpZiAoYXJncy5sZW5ndGggPT09IDMpIHtcblx0XHRcdHJldHVybiAobmV3IChldmVudCBhcyBhbnkpKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pKTtcblx0XHR9IGVsc2UgaWYgKGFyZ3MubGVuZ3RoID09PSA0KSB7XG5cdFx0XHRyZXR1cm4gKG5ldyAoZXZlbnQgYXMgYW55KShhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKSk7XG5cdFx0fSBlbHNlIGlmIChhcmdzLmxlbmd0aCA9PT0gNSkge1xuXHRcdFx0cmV0dXJuIChuZXcgKGV2ZW50IGFzIGFueSkoYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSwgYXJnc1s0XSkpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0RvbWFpbkV2ZW50QnVzIGNvbnN0cnVjdG9yIG91dCBvZiBhcmd1bWVudHMnKTtcblx0XHR9XG5cdH1cblxufVxuIl19