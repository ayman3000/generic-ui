import { GenericBuilder } from '../../../common/cdk/generic-builder';
import { PagingDefinition } from '../../paging/feature/paging-definition';
export class StructureDefinitionBuilder extends GenericBuilder {
    constructor(headerEnabled, bottomPaging, topPaging) {
        super();
        this.headerEnabled = headerEnabled;
        this.bottomPaging = bottomPaging;
        this.topPaging = topPaging;
        this.border = true;
    }
    withHeader(enabled) {
        this.headerEnabled = enabled;
        return this;
    }
    withBottomPaging(paging) {
        this.bottomPaging = paging;
        return this;
    }
    withTopPaging(paging) {
        this.topPaging = paging;
        return this;
    }
    withBorder(enabled) {
        this.border = enabled;
        return this;
    }
    buildObject() {
        return new StructureDefinition(this.headerEnabled, this.bottomPaging, this.topPaging, this.border);
    }
}
export class StructureDefinitionDefaultBuilder extends StructureDefinitionBuilder {
    constructor() {
        super(StructureDefinitionDefaultBuilder.defaultHeaderEnabled, StructureDefinitionDefaultBuilder.defaultBottomPaging, StructureDefinitionDefaultBuilder.defaultTopPaging);
    }
}
StructureDefinitionDefaultBuilder.defaultHeaderEnabled = true;
StructureDefinitionDefaultBuilder.defaultBottomPaging = new PagingDefinition.DefaultBuilder().build();
StructureDefinitionDefaultBuilder.defaultTopPaging = new PagingDefinition.DefaultBuilder().build();
export class StructureDefinition {
    constructor(headerEnabled, bottomPaging, topPaging, border) {
        this.headerEnabled = headerEnabled;
        this.bottomPaging = bottomPaging;
        this.topPaging = topPaging;
        this.border = border;
    }
    isHeaderEnabled() {
        return this.headerEnabled;
    }
    isBorderEnabled() {
        return this.border;
    }
    getBottomPaging() {
        return this.bottomPaging;
    }
    getTopPaging() {
        return this.topPaging;
    }
}
StructureDefinition.Builder = StructureDefinitionBuilder;
StructureDefinition.DefaultBuilder = StructureDefinitionDefaultBuilder;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWRlZmluaXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS9ncmlkL2ZlYXR1cmUvc3RydWN0dXJlLWRlZmluaXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBRTFFLE1BQU0sT0FBTywwQkFBMkIsU0FBUSxjQUFtQztJQUlsRixZQUFvQixhQUFzQixFQUMvQixZQUE4QixFQUM5QixTQUEyQjtRQUNyQyxLQUFLLEVBQUUsQ0FBQztRQUhXLGtCQUFhLEdBQWIsYUFBYSxDQUFTO1FBQy9CLGlCQUFZLEdBQVosWUFBWSxDQUFrQjtRQUM5QixjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUo5QixXQUFNLEdBQVksSUFBSSxDQUFDO0lBTS9CLENBQUM7SUFFRCxVQUFVLENBQUMsT0FBZ0I7UUFDMUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUM7UUFDN0IsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDO0lBRUQsZ0JBQWdCLENBQUMsTUFBd0I7UUFDeEMsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUM7UUFDM0IsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDO0lBRUQsYUFBYSxDQUFDLE1BQXdCO1FBQ3JDLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1FBQ3hCLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQztJQUVELFVBQVUsQ0FBQyxPQUFnQjtRQUMxQixJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztRQUN0QixPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7SUFFUyxXQUFXO1FBQ3BCLE9BQU8sSUFBSSxtQkFBbUIsQ0FDN0IsSUFBSSxDQUFDLGFBQWEsRUFDbEIsSUFBSSxDQUFDLFlBQVksRUFDakIsSUFBSSxDQUFDLFNBQVMsRUFDZCxJQUFJLENBQUMsTUFBTSxDQUNYLENBQUM7SUFDSCxDQUFDO0NBRUQ7QUFFRCxNQUFNLE9BQU8saUNBQWtDLFNBQVEsMEJBQTBCO0lBTWhGO1FBQ0MsS0FBSyxDQUNKLGlDQUFpQyxDQUFDLG9CQUFvQixFQUN0RCxpQ0FBaUMsQ0FBQyxtQkFBbUIsRUFDckQsaUNBQWlDLENBQUMsZ0JBQWdCLENBQ2xELENBQUM7SUFDSCxDQUFDOztBQVZ1QixzREFBb0IsR0FBWSxJQUFJLENBQUM7QUFDckMscURBQW1CLEdBQXFCLElBQUksZ0JBQWdCLENBQUMsY0FBYyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDdEYsa0RBQWdCLEdBQXFCLElBQUksZ0JBQWdCLENBQUMsY0FBYyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7QUFXNUcsTUFBTSxPQUFPLG1CQUFtQjtJQWMvQixZQUFZLGFBQXNCLEVBQy9CLFlBQThCLEVBQzlCLFNBQTJCLEVBQzNCLE1BQWU7UUFDakIsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFDakMsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDdEIsQ0FBQztJQUVELGVBQWU7UUFDZCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDM0IsQ0FBQztJQUVELGVBQWU7UUFDZCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDcEIsQ0FBQztJQUVELGVBQWU7UUFDZCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDMUIsQ0FBQztJQUVELFlBQVk7UUFDWCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDdkIsQ0FBQzs7QUFwQ00sMkJBQU8sR0FBRywwQkFBMEIsQ0FBQztBQUVyQyxrQ0FBYyxHQUFHLGlDQUFpQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2VuZXJpY0J1aWxkZXIgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vY2RrL2dlbmVyaWMtYnVpbGRlcic7XG5pbXBvcnQgeyBQYWdpbmdEZWZpbml0aW9uIH0gZnJvbSAnLi4vLi4vcGFnaW5nL2ZlYXR1cmUvcGFnaW5nLWRlZmluaXRpb24nO1xuXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlRGVmaW5pdGlvbkJ1aWxkZXIgZXh0ZW5kcyBHZW5lcmljQnVpbGRlcjxTdHJ1Y3R1cmVEZWZpbml0aW9uPiB7XG5cblx0cHJpdmF0ZSBib3JkZXI6IGJvb2xlYW4gPSB0cnVlO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgaGVhZGVyRW5hYmxlZDogYm9vbGVhbixcblx0XHRcdFx0cHJpdmF0ZSBib3R0b21QYWdpbmc6IFBhZ2luZ0RlZmluaXRpb24sXG5cdFx0XHRcdHByaXZhdGUgdG9wUGFnaW5nOiBQYWdpbmdEZWZpbml0aW9uKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdHdpdGhIZWFkZXIoZW5hYmxlZDogYm9vbGVhbik6IFN0cnVjdHVyZURlZmluaXRpb25CdWlsZGVyIHtcblx0XHR0aGlzLmhlYWRlckVuYWJsZWQgPSBlbmFibGVkO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0d2l0aEJvdHRvbVBhZ2luZyhwYWdpbmc6IFBhZ2luZ0RlZmluaXRpb24pOiBTdHJ1Y3R1cmVEZWZpbml0aW9uQnVpbGRlciB7XG5cdFx0dGhpcy5ib3R0b21QYWdpbmcgPSBwYWdpbmc7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHR3aXRoVG9wUGFnaW5nKHBhZ2luZzogUGFnaW5nRGVmaW5pdGlvbik6IFN0cnVjdHVyZURlZmluaXRpb25CdWlsZGVyIHtcblx0XHR0aGlzLnRvcFBhZ2luZyA9IHBhZ2luZztcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHdpdGhCb3JkZXIoZW5hYmxlZDogYm9vbGVhbik6IFN0cnVjdHVyZURlZmluaXRpb25CdWlsZGVyIHtcblx0XHR0aGlzLmJvcmRlciA9IGVuYWJsZWQ7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRwcm90ZWN0ZWQgYnVpbGRPYmplY3QoKTogU3RydWN0dXJlRGVmaW5pdGlvbiB7XG5cdFx0cmV0dXJuIG5ldyBTdHJ1Y3R1cmVEZWZpbml0aW9uKFxuXHRcdFx0dGhpcy5oZWFkZXJFbmFibGVkLFxuXHRcdFx0dGhpcy5ib3R0b21QYWdpbmcsXG5cdFx0XHR0aGlzLnRvcFBhZ2luZyxcblx0XHRcdHRoaXMuYm9yZGVyXG5cdFx0KTtcblx0fVxuXG59XG5cbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVEZWZpbml0aW9uRGVmYXVsdEJ1aWxkZXIgZXh0ZW5kcyBTdHJ1Y3R1cmVEZWZpbml0aW9uQnVpbGRlciB7XG5cblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgZGVmYXVsdEhlYWRlckVuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xuXHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBkZWZhdWx0Qm90dG9tUGFnaW5nOiBQYWdpbmdEZWZpbml0aW9uID0gbmV3IFBhZ2luZ0RlZmluaXRpb24uRGVmYXVsdEJ1aWxkZXIoKS5idWlsZCgpO1xuXHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBkZWZhdWx0VG9wUGFnaW5nOiBQYWdpbmdEZWZpbml0aW9uID0gbmV3IFBhZ2luZ0RlZmluaXRpb24uRGVmYXVsdEJ1aWxkZXIoKS5idWlsZCgpO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKFxuXHRcdFx0U3RydWN0dXJlRGVmaW5pdGlvbkRlZmF1bHRCdWlsZGVyLmRlZmF1bHRIZWFkZXJFbmFibGVkLFxuXHRcdFx0U3RydWN0dXJlRGVmaW5pdGlvbkRlZmF1bHRCdWlsZGVyLmRlZmF1bHRCb3R0b21QYWdpbmcsXG5cdFx0XHRTdHJ1Y3R1cmVEZWZpbml0aW9uRGVmYXVsdEJ1aWxkZXIuZGVmYXVsdFRvcFBhZ2luZ1xuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZURlZmluaXRpb24ge1xuXG5cdHN0YXRpYyBCdWlsZGVyID0gU3RydWN0dXJlRGVmaW5pdGlvbkJ1aWxkZXI7XG5cblx0c3RhdGljIERlZmF1bHRCdWlsZGVyID0gU3RydWN0dXJlRGVmaW5pdGlvbkRlZmF1bHRCdWlsZGVyO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgaGVhZGVyRW5hYmxlZDogYm9vbGVhbjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGJvdHRvbVBhZ2luZzogUGFnaW5nRGVmaW5pdGlvbjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHRvcFBhZ2luZzogUGFnaW5nRGVmaW5pdGlvbjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGJvcmRlcjogYm9vbGVhbjtcblxuXHRjb25zdHJ1Y3RvcihoZWFkZXJFbmFibGVkOiBib29sZWFuLFxuXHRcdFx0XHRib3R0b21QYWdpbmc6IFBhZ2luZ0RlZmluaXRpb24sXG5cdFx0XHRcdHRvcFBhZ2luZzogUGFnaW5nRGVmaW5pdGlvbixcblx0XHRcdFx0Ym9yZGVyOiBib29sZWFuKSB7XG5cdFx0dGhpcy5oZWFkZXJFbmFibGVkID0gaGVhZGVyRW5hYmxlZDtcblx0XHR0aGlzLmJvdHRvbVBhZ2luZyA9IGJvdHRvbVBhZ2luZztcblx0XHR0aGlzLnRvcFBhZ2luZyA9IHRvcFBhZ2luZztcblx0XHR0aGlzLmJvcmRlciA9IGJvcmRlcjtcblx0fVxuXG5cdGlzSGVhZGVyRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5oZWFkZXJFbmFibGVkO1xuXHR9XG5cblx0aXNCb3JkZXJFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmJvcmRlcjtcblx0fVxuXG5cdGdldEJvdHRvbVBhZ2luZygpOiBQYWdpbmdEZWZpbml0aW9uIHtcblx0XHRyZXR1cm4gdGhpcy5ib3R0b21QYWdpbmc7XG5cdH1cblxuXHRnZXRUb3BQYWdpbmcoKTogUGFnaW5nRGVmaW5pdGlvbiB7XG5cdFx0cmV0dXJuIHRoaXMudG9wUGFnaW5nO1xuXHR9XG5cbn1cbiJdfQ==