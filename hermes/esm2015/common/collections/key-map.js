import { Optional } from '../optional';
export class KeyMap {
    constructor() {
        this.keys = new Map();
        this.values = new WeakMap();
    }
    find(key) {
        const internalKey = this.getInternalKey(key);
        if (internalKey !== undefined) {
            return Optional.of(this.values.get(internalKey));
        }
        else {
            return Optional.empty();
        }
    }
    has(key) {
        const internalKey = this.getInternalKey(key);
        return this.values.has(internalKey);
    }
    set(key, value) {
        this.keys.set(key.toString(), key);
        this.values.set(key, value);
    }
    size() {
        return this.keys.size;
    }
    remove(key) {
        if (this.hasInternalKey(key)) {
            this.keys.delete(key.toString());
            this.values.delete(key);
        }
    }
    removeAll() {
        this.keys.forEach((value) => {
            this.values.delete(value);
        });
        this.keys.clear();
    }
    getInternalKey(key) {
        return this.keys.get(key.toString());
    }
    hasInternalKey(key) {
        return this.keys.has(key.toString());
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5LW1hcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktaGVybWVzL3NyYy9jb21tb24vY29sbGVjdGlvbnMva2V5LW1hcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRXZDLE1BQU0sT0FBTyxNQUFNO0lBQW5CO1FBRWtCLFNBQUksR0FBRyxJQUFJLEdBQUcsRUFBYSxDQUFDO1FBRTVCLFdBQU0sR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO0lBbUQvQyxDQUFDO0lBakRBLElBQUksQ0FBQyxHQUFNO1FBRVYsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUU3QyxJQUFJLFdBQVcsS0FBSyxTQUFTLEVBQUU7WUFDOUIsT0FBTyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7U0FDakQ7YUFBTTtZQUNOLE9BQU8sUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3hCO0lBQ0YsQ0FBQztJQUVELEdBQUcsQ0FBQyxHQUFNO1FBRVQsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUU3QyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxHQUFHLENBQUMsR0FBTSxFQUFFLEtBQVE7UUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsSUFBSTtRQUNILE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDdkIsQ0FBQztJQUVELE1BQU0sQ0FBQyxHQUFNO1FBQ1osSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3hCO0lBQ0YsQ0FBQztJQUVELFNBQVM7UUFDUixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRU8sY0FBYyxDQUFDLEdBQU07UUFDNUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRU8sY0FBYyxDQUFDLEdBQU07UUFDNUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUN0QyxDQUFDO0NBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBLZXkgfSBmcm9tICcuL2tleSc7XG5pbXBvcnQgeyBPcHRpb25hbCB9IGZyb20gJy4uL29wdGlvbmFsJztcblxuZXhwb3J0IGNsYXNzIEtleU1hcDxLIGV4dGVuZHMgS2V5LCBUPiB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBrZXlzID0gbmV3IE1hcDxzdHJpbmcsIEs+KCk7XG5cblx0cHJpdmF0ZSByZWFkb25seSB2YWx1ZXMgPSBuZXcgV2Vha01hcDxLLCBUPigpO1xuXG5cdGZpbmQoa2V5OiBLKTogT3B0aW9uYWw8VD4ge1xuXG5cdFx0Y29uc3QgaW50ZXJuYWxLZXkgPSB0aGlzLmdldEludGVybmFsS2V5KGtleSk7XG5cblx0XHRpZiAoaW50ZXJuYWxLZXkgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIE9wdGlvbmFsLm9mKHRoaXMudmFsdWVzLmdldChpbnRlcm5hbEtleSkpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gT3B0aW9uYWwuZW1wdHkoKTtcblx0XHR9XG5cdH1cblxuXHRoYXMoa2V5OiBLKTogYm9vbGVhbiB7XG5cblx0XHRjb25zdCBpbnRlcm5hbEtleSA9IHRoaXMuZ2V0SW50ZXJuYWxLZXkoa2V5KTtcblxuXHRcdHJldHVybiB0aGlzLnZhbHVlcy5oYXMoaW50ZXJuYWxLZXkpO1xuXHR9XG5cblx0c2V0KGtleTogSywgdmFsdWU6IFQpOiB2b2lkIHtcblx0XHR0aGlzLmtleXMuc2V0KGtleS50b1N0cmluZygpLCBrZXkpO1xuXHRcdHRoaXMudmFsdWVzLnNldChrZXksIHZhbHVlKTtcblx0fVxuXG5cdHNpemUoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5rZXlzLnNpemU7XG5cdH1cblxuXHRyZW1vdmUoa2V5OiBLKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuaGFzSW50ZXJuYWxLZXkoa2V5KSkge1xuXHRcdFx0dGhpcy5rZXlzLmRlbGV0ZShrZXkudG9TdHJpbmcoKSk7XG5cdFx0XHR0aGlzLnZhbHVlcy5kZWxldGUoa2V5KTtcblx0XHR9XG5cdH1cblxuXHRyZW1vdmVBbGwoKTogdm9pZCB7XG5cdFx0dGhpcy5rZXlzLmZvckVhY2goKHZhbHVlKSA9PiB7XG5cdFx0XHR0aGlzLnZhbHVlcy5kZWxldGUodmFsdWUpO1xuXHRcdH0pO1xuXHRcdHRoaXMua2V5cy5jbGVhcigpO1xuXHR9XG5cblx0cHJpdmF0ZSBnZXRJbnRlcm5hbEtleShrZXk6IEspOiBLIHtcblx0XHRyZXR1cm4gdGhpcy5rZXlzLmdldChrZXkudG9TdHJpbmcoKSk7XG5cdH1cblxuXHRwcml2YXRlIGhhc0ludGVybmFsS2V5KGtleTogSyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmtleXMuaGFzKGtleS50b1N0cmluZygpKTtcblx0fVxuXG59XG4iXX0=