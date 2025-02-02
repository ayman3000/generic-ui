import { Optional } from '../../../../common/optional';
export class AggregateFactoryArchive {
    constructor() {
        this.map = new Map();
    }
    add(key, factory) {
        this.map.set(key, factory);
    }
    get(key) {
        return Optional.of(this.map.get(key));
    }
    has(key) {
        return this.map.has(key);
    }
}
export class AggregateRepositoryArchive {
    constructor() {
        this.map = new Map();
    }
    add(key, repository) {
        this.map.set(key, repository);
    }
    get(key) {
        return Optional.of(this.map.get(key));
    }
    has(key) {
        return this.map.has(key);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmaW5lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL2d1aS1oZXJtZXMvc3JjL2NvcmUvZG9tYWluL2NvbW1hbmQvY29uZmlnL2RlZmluZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFPdkQsTUFBTSxPQUFPLHVCQUF1QjtJQUluQztRQUZpQixRQUFHLEdBQUcsSUFBSSxHQUFHLEVBQWtDLENBQUM7SUFHakUsQ0FBQztJQUVELEdBQUcsQ0FBQyxHQUFXLEVBQUUsT0FBK0I7UUFFL0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCxHQUFHLENBQUMsR0FBVztRQUNkLE9BQU8sUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxHQUFHLENBQUMsR0FBVztRQUNkLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDMUIsQ0FBQztDQUNEO0FBRUQsTUFBTSxPQUFPLDBCQUEwQjtJQUl0QztRQUZpQixRQUFHLEdBQUcsSUFBSSxHQUFHLEVBQXFDLENBQUM7SUFHcEUsQ0FBQztJQUVELEdBQUcsQ0FBQyxHQUFXLEVBQUUsVUFBcUM7UUFFckQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxHQUFHLENBQUMsR0FBVztRQUNkLE9BQU8sUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxHQUFHLENBQUMsR0FBVztRQUNkLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDMUIsQ0FBQztDQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWdncmVnYXRlRmFjdG9yeSB9IGZyb20gJy4uLy4uL3RhY3RpY2FsL2FnZ3JlZ2F0ZS9hZ2dyZWdhdGUtZmFjdG9yeSc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVSb290IH0gZnJvbSAnLi4vLi4vdGFjdGljYWwvYWdncmVnYXRlL2FnZ3JlZ2F0ZS1yb290JztcbmltcG9ydCB7IE9wdGlvbmFsIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL29wdGlvbmFsJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi90YWN0aWNhbC9hZ2dyZWdhdGUvYWdncmVnYXRlLXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgQ3JlYXRlQWdncmVnYXRlQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuLi9jcmVhdGUtYWdncmVnYXRlL2NyZWF0ZS1hZ2dyZWdhdGUuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnLi4vLi4vdGFjdGljYWwvYWdncmVnYXRlL2FnZ3JlZ2F0ZS1pZCc7XG5pbXBvcnQgeyBDb21tYW5kIH0gZnJvbSAnLi4vY29tbWFuZCc7XG5cblxuZXhwb3J0IGNsYXNzIEFnZ3JlZ2F0ZUZhY3RvcnlBcmNoaXZlPEkgZXh0ZW5kcyBBZ2dyZWdhdGVJZCwgQSBleHRlbmRzIEFnZ3JlZ2F0ZVJvb3Q8ST4+IHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IG1hcCA9IG5ldyBNYXA8c3RyaW5nLCBBZ2dyZWdhdGVGYWN0b3J5PEksIEE+PigpO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHR9XG5cblx0YWRkKGtleTogc3RyaW5nLCBmYWN0b3J5OiBBZ2dyZWdhdGVGYWN0b3J5PEksIEE+KTogdm9pZCB7XG5cblx0XHR0aGlzLm1hcC5zZXQoa2V5LCBmYWN0b3J5KTtcblx0fVxuXG5cdGdldChrZXk6IHN0cmluZyk6IE9wdGlvbmFsPEFnZ3JlZ2F0ZUZhY3Rvcnk8SSwgQT4+IHtcblx0XHRyZXR1cm4gT3B0aW9uYWwub2YodGhpcy5tYXAuZ2V0KGtleSkpO1xuXHR9XG5cblx0aGFzKGtleTogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubWFwLmhhcyhrZXkpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBZ2dyZWdhdGVSZXBvc2l0b3J5QXJjaGl2ZTxJIGV4dGVuZHMgQWdncmVnYXRlSWQsIEEgZXh0ZW5kcyBBZ2dyZWdhdGVSb290PEk+PiB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBtYXAgPSBuZXcgTWFwPHN0cmluZywgQWdncmVnYXRlUmVwb3NpdG9yeTxJLCBBPj4oKTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0fVxuXG5cdGFkZChrZXk6IHN0cmluZywgcmVwb3NpdG9yeTogQWdncmVnYXRlUmVwb3NpdG9yeTxJLCBBPik6IHZvaWQge1xuXG5cdFx0dGhpcy5tYXAuc2V0KGtleSwgcmVwb3NpdG9yeSk7XG5cdH1cblxuXHRnZXQoa2V5OiBzdHJpbmcpOiBPcHRpb25hbDxBZ2dyZWdhdGVSZXBvc2l0b3J5PEksIEE+PiB7XG5cdFx0cmV0dXJuIE9wdGlvbmFsLm9mKHRoaXMubWFwLmdldChrZXkpKTtcblx0fVxuXG5cdGhhcyhrZXk6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm1hcC5oYXMoa2V5KTtcblx0fVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFnZ3JlZ2F0ZUNvbmZpZzxJIGV4dGVuZHMgQWdncmVnYXRlSWQsIEEgZXh0ZW5kcyBBZ2dyZWdhdGVSb290PEk+LCBDIGV4dGVuZHMgQ29tbWFuZDxJPj4ge1xuXG5cdHJlcG9zaXRvcnk6IEFnZ3JlZ2F0ZVJlcG9zaXRvcnk8SSwgQT47XG5cblx0ZmFjdG9yeTogQWdncmVnYXRlRmFjdG9yeTxJLCBBPjtcblxuXHRrZXk6IHN0cmluZztcblxuXHRjcmVhdGVIYW5kbGVyOiBDcmVhdGVBZ2dyZWdhdGVDb21tYW5kSGFuZGxlcjxBLCBDPjtcblxuXHRjb21tYW5kSGFuZGxlcnM6IEFycmF5PFByb3ZpZGVyPlxuXG59XG4iXX0=