export class Optional {
    constructor(value) {
        if (Optional.isValueEmpty(value)) {
            this.value = null;
        }
        else {
            this.value = value;
        }
        return this;
    }
    static empty() {
        return new Optional(null);
    }
    static of(value) {
        return new Optional(value);
    }
    static isValueEmpty(value) {
        return typeof value === 'undefined' || value === null;
    }
    isEmpty() {
        return Optional.isValueEmpty(this.value);
    }
    isPresent() {
        return !this.isEmpty();
    }
    filter(filterer) {
        if (this.isPresent() && filterer(this.value)) {
            return this;
        }
        return Optional.empty();
    }
    forEach(callback) {
        if (this.isPresent()) {
            callback(this.value);
        }
    }
    map(mapper) {
        if (this.isPresent()) {
            return new Optional(mapper(this.value));
        }
        return Optional.empty();
    }
    /**
     * @deprecated
     */
    getValueOrNullOrThrowError() {
        return this.value;
    }
    getOrThrow() {
        if (this.isEmpty()) {
            throw new Error('Called getOrThrow on an empty Optional');
        }
        return this.value;
    }
    getOrElse(other) {
        if (this.isPresent()) {
            return this.value;
        }
        return other();
    }
    ifPresent(method) {
        if (this.isPresent()) {
            method(this.value);
        }
    }
    ifEmpty(method) {
        if (this.isEmpty()) {
            method();
        }
    }
    orElse(other) {
        if (this.isPresent()) {
            return this;
        }
        return other();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9uYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWhlcm1lcy9zcmMvY29tbW9uL29wdGlvbmFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sT0FBTyxRQUFRO0lBSXBCLFlBQW9CLEtBQVE7UUFFM0IsSUFBSSxRQUFRLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2pDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1NBQ2xCO2FBQU07WUFDTixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztTQUNuQjtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQztJQUVELE1BQU0sQ0FBQyxLQUFLO1FBQ1gsT0FBTyxJQUFJLFFBQVEsQ0FBTSxJQUFJLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsTUFBTSxDQUFDLEVBQUUsQ0FBSSxLQUFRO1FBQ3BCLE9BQU8sSUFBSSxRQUFRLENBQUksS0FBSyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVPLE1BQU0sQ0FBQyxZQUFZLENBQUMsS0FBVTtRQUNyQyxPQUFPLE9BQU8sS0FBSyxLQUFLLFdBQVcsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDO0lBQ3ZELENBQUM7SUFFRCxPQUFPO1FBQ04sT0FBTyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsU0FBUztRQUNSLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELE1BQU0sQ0FBQyxRQUErQjtRQUNyQyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzdDLE9BQU8sSUFBSSxDQUFDO1NBQ1o7UUFDRCxPQUFPLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsT0FBTyxDQUFDLFFBQTJCO1FBQ2xDLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQ3JCLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDckI7SUFDRixDQUFDO0lBRUQsR0FBRyxDQUFJLE1BQXVCO1FBQzdCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQ3JCLE9BQU8sSUFBSSxRQUFRLENBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQzNDO1FBQ0QsT0FBTyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsMEJBQTBCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNuQixDQUFDO0lBRUQsVUFBVTtRQUNULElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ25CLE1BQU0sSUFBSSxLQUFLLENBQUMsd0NBQXdDLENBQUMsQ0FBQztTQUMxRDtRQUNELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNuQixDQUFDO0lBRUQsU0FBUyxDQUFjLEtBQWM7UUFDcEMsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDckIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ2xCO1FBQ0QsT0FBTyxLQUFLLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRUQsU0FBUyxDQUFDLE1BQTBCO1FBQ25DLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQ3JCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbkI7SUFDRixDQUFDO0lBRUQsT0FBTyxDQUFDLE1BQWtCO1FBQ3pCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ25CLE1BQU0sRUFBRSxDQUFDO1NBQ1Q7SUFDRixDQUFDO0lBRUQsTUFBTSxDQUFjLEtBQXdCO1FBQzNDLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQ3JCLE9BQU8sSUFBSSxDQUFDO1NBQ1o7UUFDRCxPQUFPLEtBQUssRUFBRSxDQUFDO0lBQ2hCLENBQUM7Q0FFRCIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBPcHRpb25hbDxUPiB7XG5cblx0cHJpdmF0ZSByZWFkb25seSB2YWx1ZTogVDtcblxuXHRwcml2YXRlIGNvbnN0cnVjdG9yKHZhbHVlOiBUKSB7XG5cblx0XHRpZiAoT3B0aW9uYWwuaXNWYWx1ZUVtcHR5KHZhbHVlKSkge1xuXHRcdFx0dGhpcy52YWx1ZSA9IG51bGw7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMudmFsdWUgPSB2YWx1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHN0YXRpYyBlbXB0eSgpOiBPcHRpb25hbDxhbnk+IHtcblx0XHRyZXR1cm4gbmV3IE9wdGlvbmFsPGFueT4obnVsbCk7XG5cdH1cblxuXHRzdGF0aWMgb2Y8VT4odmFsdWU6IFUpOiBPcHRpb25hbDxVPiB7XG5cdFx0cmV0dXJuIG5ldyBPcHRpb25hbDxVPih2YWx1ZSk7XG5cdH1cblxuXHRwcml2YXRlIHN0YXRpYyBpc1ZhbHVlRW1wdHkodmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnIHx8IHZhbHVlID09PSBudWxsO1xuXHR9XG5cblx0aXNFbXB0eSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gT3B0aW9uYWwuaXNWYWx1ZUVtcHR5KHRoaXMudmFsdWUpO1xuXHR9XG5cblx0aXNQcmVzZW50KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiAhdGhpcy5pc0VtcHR5KCk7XG5cdH1cblxuXHRmaWx0ZXIoZmlsdGVyZXI6ICh2YWx1ZTogVCkgPT4gYm9vbGVhbik6IE9wdGlvbmFsPFQ+IHtcblx0XHRpZiAodGhpcy5pc1ByZXNlbnQoKSAmJiBmaWx0ZXJlcih0aGlzLnZhbHVlKSkge1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXHRcdHJldHVybiBPcHRpb25hbC5lbXB0eSgpO1xuXHR9XG5cblx0Zm9yRWFjaChjYWxsYmFjazogKHZhbHVlOiBUKSA9PiBhbnkpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5pc1ByZXNlbnQoKSkge1xuXHRcdFx0Y2FsbGJhY2sodGhpcy52YWx1ZSk7XG5cdFx0fVxuXHR9XG5cblx0bWFwPFU+KG1hcHBlcjogKHZhbHVlOiBUKSA9PiBVKTogT3B0aW9uYWw8VT4ge1xuXHRcdGlmICh0aGlzLmlzUHJlc2VudCgpKSB7XG5cdFx0XHRyZXR1cm4gbmV3IE9wdGlvbmFsPFU+KG1hcHBlcih0aGlzLnZhbHVlKSk7XG5cdFx0fVxuXHRcdHJldHVybiBPcHRpb25hbC5lbXB0eSgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBkZXByZWNhdGVkXG5cdCAqL1xuXHRnZXRWYWx1ZU9yTnVsbE9yVGhyb3dFcnJvcigpOiBUIHtcblx0XHRyZXR1cm4gdGhpcy52YWx1ZTtcblx0fVxuXG5cdGdldE9yVGhyb3coKTogVCB7XG5cdFx0aWYgKHRoaXMuaXNFbXB0eSgpKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0NhbGxlZCBnZXRPclRocm93IG9uIGFuIGVtcHR5IE9wdGlvbmFsJyk7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLnZhbHVlO1xuXHR9XG5cblx0Z2V0T3JFbHNlPFUgZXh0ZW5kcyBUPihvdGhlcjogKCkgPT4gVSk6IFQge1xuXHRcdGlmICh0aGlzLmlzUHJlc2VudCgpKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy52YWx1ZTtcblx0XHR9XG5cdFx0cmV0dXJuIG90aGVyKCk7XG5cdH1cblxuXHRpZlByZXNlbnQobWV0aG9kOiAodmFsdWU6IFQpID0+IHZvaWQpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5pc1ByZXNlbnQoKSkge1xuXHRcdFx0bWV0aG9kKHRoaXMudmFsdWUpO1xuXHRcdH1cblx0fVxuXG5cdGlmRW1wdHkobWV0aG9kOiAoKSA9PiB2b2lkKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuaXNFbXB0eSgpKSB7XG5cdFx0XHRtZXRob2QoKTtcblx0XHR9XG5cdH1cblxuXHRvckVsc2U8VSBleHRlbmRzIFQ+KG90aGVyOiAoKSA9PiBPcHRpb25hbDxVPik6IE9wdGlvbmFsPFQ+IHtcblx0XHRpZiAodGhpcy5pc1ByZXNlbnQoKSkge1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXHRcdHJldHVybiBvdGhlcigpO1xuXHR9XG5cbn1cbiJdfQ==