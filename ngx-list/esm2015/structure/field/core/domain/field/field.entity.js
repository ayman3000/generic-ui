import { DataType } from './data/data-type';
import { Entity } from '@generic-ui/hermes';
export class FieldEntity extends Entity {
    constructor(id, field, name) {
        super(id);
        this.id = id;
        this.field = field;
        this.name = name;
    }
    static of(id, dataField, name) {
        return new FieldEntity(id, dataField, name);
    }
    getId() {
        return this.id;
    }
    getKey() {
        return this.getId().toString();
    }
    getDataType() {
        return this.field.getDataType();
    }
    getName() {
        return this.name;
    }
    /**
     * @deprecated
     */
    getField() {
        return this.field;
    }
    /**
     * Probably should not be used.
     *
     * @deprecated
     */
    getAccessor() {
        return this.field.getAccessor();
    }
    /**
     * Probably should not be used.
     *
     * @deprecated
     */
    getAccessorMethod() {
        return this.field.getAccessorMethod();
    }
    /**
     * Probably should not be used.
     *
     * @deprecated
     */
    getSearchAccessorMethod() {
        return this.field.getSearchAccessorMethod();
    }
    getValue(entity) {
        return this.field.getValue(entity);
    }
    getDisplayValue(value) {
        return this.field.getDisplayValue(value);
    }
    /**
     * Probably should not be used.
     *
     * @deprecated
     */
    isSummaries(type) {
        return this.field.isSummaries(type);
    }
    /**
     * Probably should not be used.
     *
     * @deprecated
     */
    isSummariesEnabled() {
        return this.field.isSummariesEnabled();
    }
    search(item, searchPhrase) {
        return this.field.search(item, searchPhrase);
    }
    filter(item, filterPhrase) {
        const value = this.field.getValue(item);
        if (this.field.getDataType() === DataType.NUMBER) {
            return this.field.filter(value, filterPhrase);
        }
        else if (this.field.getDataType() === DataType.BOOLEAN) {
            return this.field.filter(value, filterPhrase);
        }
        else if (this.field.getDataType() === DataType.STRING) {
            return this.field.filter(value, filterPhrase);
        }
        else if (this.field.getDataType() === DataType.DATE) {
            return this.field.filter(value, filterPhrase);
        }
        else {
            return true;
        }
    }
    sort(entityOne, entityTwo, direction) {
        const valueOne = direction ? this.field.getSortValue(entityOne) : this.field.getSortValue(entityTwo), valueTwo = direction ? this.field.getSortValue(entityTwo) : this.field.getSortValue(entityOne);
        if (this.field.getDataType() === DataType.NUMBER) {
            return this.field.sort(valueOne, valueTwo);
        }
        else if (this.field.getDataType() === DataType.BOOLEAN) {
            return this.field.sort(valueOne, valueTwo);
        }
        else if (this.field.getDataType() === DataType.STRING) {
            return this.field.sort(valueOne, valueTwo);
        }
        else if (this.field.getDataType() === DataType.DATE) {
            return this.field.sort(valueOne, valueTwo);
        }
        else {
            return 0;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuZW50aXR5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9zdHJ1Y3R1cmUvZmllbGQvY29yZS9kb21haW4vZmllbGQvZmllbGQuZW50aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQVM1QyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHNUMsTUFBTSxPQUFPLFdBQVksU0FBUSxNQUFlO0lBUS9DLFlBQVksRUFBVyxFQUNwQixLQUFxQixFQUNyQixJQUFZO1FBQ2QsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ1YsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNsQixDQUFDO0lBRUQsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFXLEVBQUUsU0FBeUIsRUFBRSxJQUFZO1FBQzdELE9BQU8sSUFBSSxXQUFXLENBQUMsRUFBRSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsS0FBSztRQUNKLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRUQsTUFBTTtRQUNMLE9BQU8sSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFFRCxXQUFXO1FBQ1YsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFFRCxPQUFPO1FBQ04sT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7T0FFRztJQUNILFFBQVE7UUFDUCxPQUFPLElBQUksQ0FBQyxL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QU0sRUFBRTtZQUNqRCxPQUFRLElBQUksQ0FBQyxLQUF5QixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDaEU7YUFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLEtBQUssUUFBUSxDQUFDLE9BQU8sRUFBRTtZQUN6RCxPQUFRLElBQUksQ0FBQyxLQUEwQixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDakU7YUFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLEtBQUssUUFBUSxDQUFDLE1BQU0sRUFBRTtZQUN4RCxPQUFRLElBQUksQ0FBQyxLQUF5QixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDaEU7YUFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLEtBQUssUUFBUSxDQUFDLElBQUksRUFBRTtZQUN0RCxPQUFRLElBQUksQ0FBQyxLQUF1QixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDOUQ7YUFBTTtZQUNOLE9BQU8sQ0FBQyxDQUFDO1NBQ1Q7SUFDRixDQUFDO0NBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhRmllbGRUeXBlcyB9IGZyb20gJy4vZGF0YS9kYXRhLWZpZWxkLXR5cGVzJztcbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi9kYXRhL2RhdGEtdHlwZSc7XG5pbXBvcnQgeyBOdW1iZXJEYXRhRmllbGQgfSBmcm9tICcuL2RhdGEvdHlwZS9udW1iZXItZGF0YS1maWVsZCc7XG5pbXBvcnQgeyBCb29sZWFuRGF0YUZpZWxkIH0gZnJvbSAnLi9kYXRhL3R5cGUvYm9vbGVhbi1kYXRhLWZpZWxkJztcbmltcG9ydCB7IFN0cmluZ0RhdGFGaWVsZCB9IGZyb20gJy4vZGF0YS90eXBlL3N0cmluZy1kYXRhLWZpZWxkJztcbmltcG9ydCB7IERhdGVEYXRhRmllbGQgfSBmcm9tICcuL2RhdGEvdHlwZS9kYXRlLWRhdGEtZmllbGQnO1xuaW1wb3J0IHsgRmllbGRJZCB9IGZyb20gJy4vZmllbGQuaWQnO1xuXG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vLi4vc291cmNlL2NvcmUvZG9tYWluL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHknO1xuaW1wb3J0IHsgU3VtbWFyaWVzVHlwZSB9IGZyb20gJy4uLy4uLy4uLy4uL3N1bW1hcmllcy9jb3JlL2RvbWFpbi9zdW1tYXJpZXMudHlwZSc7XG5pbXBvcnQgeyBFbnRpdHkgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5cbmV4cG9ydCBjbGFzcyBGaWVsZEVudGl0eSBleHRlbmRzIEVudGl0eTxGaWVsZElkPiB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBpZDogRmllbGRJZDtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGZpZWxkOiBEYXRhRmllbGRUeXBlcztcblxuXHRwcml2YXRlIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcblxuXHRjb25zdHJ1Y3RvcihpZDogRmllbGRJZCxcblx0XHRcdFx0ZmllbGQ6IERhdGFGaWVsZFR5cGVzLFxuXHRcdFx0XHRuYW1lOiBzdHJpbmcpIHtcblx0XHRzdXBlcihpZCk7XG5cdFx0dGhpcy5pZCA9IGlkO1xuXHRcdHRoaXMuZmllbGQgPSBmaWVsZDtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHR9XG5cblx0c3RhdGljIG9mKGlkOiBGaWVsZElkLCBkYXRhRmllbGQ6IERhdGFGaWVsZFR5cGVzLCBuYW1lOiBzdHJpbmcpOiBGaWVsZEVudGl0eSB7XG5cdFx0cmV0dXJuIG5ldyBGaWVsZEVudGl0eShpZCwgZGF0YUZpZWxkLCBuYW1lKTtcblx0fVxuXG5cdGdldElkKCk6IEZpZWxkSWQge1xuXHRcdHJldHVybiB0aGlzLmlkO1xuXHR9XG5cblx0Z2V0S2V5KCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0SWQoKS50b1N0cmluZygpO1xuXHR9XG5cblx0Z2V0RGF0YVR5cGUoKTogRGF0YVR5cGUge1xuXHRcdHJldHVybiB0aGlzLmZpZWxkLmdldERhdGFUeXBlKCk7XG5cdH1cblxuXHRnZXROYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmFtZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAZGVwcmVjYXRlZFxuXHQgKi9cblx0Z2V0RmllbGQoKTogRGF0YUZpZWxkVHlwZXMge1xuXHRcdHJldHVybiB0aGlzLmZpZWxkO1xuXHR9XG5cblx0LyoqXG5cdCAqIFByb2JhYmx5IHNob3VsZCBub3QgYmUgdXNlZC5cblx0ICpcblx0ICogQGRlcHJlY2F0ZWRcblx0ICovXG5cdGdldEFjY2Vzc29yKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuZmllbGQuZ2V0QWNjZXNzb3IoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBQcm9iYWJseSBzaG91bGQgbm90IGJlIHVzZWQuXG5cdCAqXG5cdCAqIEBkZXByZWNhdGVkXG5cdCAqL1xuXHRnZXRBY2Nlc3Nvck1ldGhvZCgpOiAoZW50aXR5OiBPcmlnaW5JdGVtRW50aXR5KSA9PiBhbnkge1xuXHRcdHJldHVybiB0aGlzLmZpZWxkLmdldEFjY2Vzc29yTWV0aG9kKCk7XG5cdH1cblxuXHQvKipcblx0ICogUHJvYmFibHkgc2hvdWxkIG5vdCBiZSB1c2VkLlxuXHQgKlxuXHQgKiBAZGVwcmVjYXRlZFxuXHQgKi9cblx0Z2V0U2VhcmNoQWNjZXNzb3JNZXRob2QoKTogKGVudGl0eTogT3JpZ2luSXRlbUVudGl0eSkgPT4gYW55IHtcblx0XHRyZXR1cm4gdGhpcy5maWVsZC5nZXRTZWFyY2hBY2Nlc3Nvck1ldGhvZCgpO1xuXHR9XG5cblx0Z2V0VmFsdWUoZW50aXR5OiBPcmlnaW5JdGVtRW50aXR5KTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5maWVsZC5nZXRWYWx1ZShlbnRpdHkpO1xuXHR9XG5cblx0Z2V0RGlzcGxheVZhbHVlKHZhbHVlOiBhbnkpOiBhbnkge1xuXHRcdHJldHVybiAodGhpcy5maWVsZCBhcyBhbnkpLmdldERpc3BsYXlWYWx1ZSh2YWx1ZSk7XG5cdH1cblxuXHQvKipcblx0ICogUHJvYmFibHkgc2hvdWxkIG5vdCBiZSB1c2VkLlxuXHQgKlxuXHQgKiBAZGVwcmVjYXRlZFxuXHQgKi9cblx0aXNTdW1tYXJpZXModHlwZTogU3VtbWFyaWVzVHlwZSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmZpZWxkLmlzU3VtbWFyaWVzKHR5cGUpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFByb2JhYmx5IHNob3VsZCBub3QgYmUgdXNlZC5cblx0ICpcblx0ICogQGRlcHJlY2F0ZWRcblx0ICovXG5cdGlzU3VtbWFyaWVzRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5maWVsZC5pc1N1bW1hcmllc0VuYWJsZWQoKTtcblx0fVxuXG5cdHNlYXJjaChpdGVtOiBPcmlnaW5JdGVtRW50aXR5LCBzZWFyY2hQaHJhc2U6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmZpZWxkLnNlYXJjaChpdGVtLCBzZWFyY2hQaHJhc2UpO1xuXHR9XG5cblx0ZmlsdGVyKGl0ZW06IE9yaWdpbkl0ZW1FbnRpdHksIGZpbHRlclBocmFzZTogYW55KTogYm9vbGVhbiB7XG5cblx0XHRjb25zdCB2YWx1ZSA9IHRoaXMuZmllbGQuZ2V0VmFsdWUoaXRlbSk7XG5cblx0XHRpZiAodGhpcy5maWVsZC5nZXREYXRhVHlwZSgpID09PSBEYXRhVHlwZS5OVU1CRVIpIHtcblx0XHRcdHJldHVybiAodGhpcy5maWVsZCBhcyBOdW1iZXJEYXRhRmllbGQpLmZpbHRlcih2YWx1ZSwgZmlsdGVyUGhyYXNlKTtcblx0XHR9IGVsc2UgaWYgKHRoaXMuZmllbGQuZ2V0RGF0YVR5cGUoKSA9PT0gRGF0YVR5cGUuQk9PTEVBTikge1xuXHRcdFx0cmV0dXJuICh0aGlzLmZpZWxkIGFzIEJvb2xlYW5EYXRhRmllbGQpLmZpbHRlcih2YWx1ZSwgZmlsdGVyUGhyYXNlKTtcblx0XHR9IGVsc2UgaWYgKHRoaXMuZmllbGQuZ2V0RGF0YVR5cGUoKSA9PT0gRGF0YVR5cGUuU1RSSU5HKSB7XG5cdFx0XHRyZXR1cm4gKHRoaXMuZmllbGQgYXMgU3RyaW5nRGF0YUZpZWxkKS5maWx0ZXIodmFsdWUsIGZpbHRlclBocmFzZSk7XG5cdFx0fSBlbHNlIGlmICh0aGlzLmZpZWxkLmdldERhdGFUeXBlKCkgPT09IERhdGFUeXBlLkRBVEUpIHtcblx0XHRcdHJldHVybiAodGhpcy5maWVsZCBhcyBEYXRlRGF0YUZpZWxkKS5maWx0ZXIodmFsdWUsIGZpbHRlclBocmFzZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0fVxuXG5cdHNvcnQoZW50aXR5T25lOiBPcmlnaW5JdGVtRW50aXR5LCBlbnRpdHlUd286IE9yaWdpbkl0ZW1FbnRpdHksIGRpcmVjdGlvbjogYm9vbGVhbik6IG51bWJlciB7XG5cblx0XHRjb25zdCB2YWx1ZU9uZSA9IGRpcmVjdGlvbiA/IHRoaXMuZmllbGQuZ2V0U29ydFZhbHVlKGVudGl0eU9uZSkgOiB0aGlzLmZpZWxkLmdldFNvcnRWYWx1ZShlbnRpdHlUd28pLFxuXHRcdFx0dmFsdWVUd28gPSBkaXJlY3Rpb24gPyB0aGlzLmZpZWxkLmdldFNvcnRWYWx1ZShlbnRpdHlUd28pIDogdGhpcy5maWVsZC5nZXRTb3J0VmFsdWUoZW50aXR5T25lKTtcblxuXHRcdGlmICh0aGlzLmZpZWxkLmdldERhdGFUeXBlKCkgPT09IERhdGFUeXBlLk5VTUJFUikge1xuXHRcdFx0cmV0dXJuICh0aGlzLmZpZWxkIGFzIE51bWJlckRhdGFGaWVsZCkuc29ydCh2YWx1ZU9uZSwgdmFsdWVUd28pO1xuXHRcdH0gZWxzZSBpZiAodGhpcy5maWVsZC5nZXREYXRhVHlwZSgpID09PSBEYXRhVHlwZS5CT09MRUFOKSB7XG5cdFx0XHRyZXR1cm4gKHRoaXMuZmllbGQgYXMgQm9vbGVhbkRhdGFGaWVsZCkuc29ydCh2YWx1ZU9uZSwgdmFsdWVUd28pO1xuXHRcdH0gZWxzZSBpZiAodGhpcy5maWVsZC5nZXREYXRhVHlwZSgpID09PSBEYXRhVHlwZS5TVFJJTkcpIHtcblx0XHRcdHJldHVybiAodGhpcy5maWVsZCBhcyBTdHJpbmdEYXRhRmllbGQpLnNvcnQodmFsdWVPbmUsIHZhbHVlVHdvKTtcblx0XHR9IGVsc2UgaWYgKHRoaXMuZmllbGQuZ2V0RGF0YVR5cGUoKSA9PT0gRGF0YVR5cGUuREFURSkge1xuXHRcdFx0cmV0dXJuICh0aGlzLmZpZWxkIGFzIERhdGVEYXRhRmllbGQpLnNvcnQodmFsdWVPbmUsIHZhbHVlVHdvKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIDA7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==