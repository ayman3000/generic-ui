import { PagingDispatcher } from './paging.dispatcher';
import { Injectable } from '@angular/core';
import { PagingCommandInvoker } from '../api/paging.command-invoker';
export class PagingDomainCommandInvoker extends PagingCommandInvoker {
    constructor(pagingDispatcher) {
        super();
        this.pagingDispatcher = pagingDispatcher;
    }
    enable(structureId) {
        this.pagingDispatcher.setPaging({ enabled: true }, structureId);
    }
    disable(structureId) {
        this.pagingDispatcher.setPaging({ enabled: false }, structureId);
    }
    setPaging(paging, structureId) {
        this.pagingDispatcher.setPaging(paging, structureId);
    }
    changePageSize(pageSize, structureId) {
        this.pagingDispatcher.changePageSize(pageSize, structureId);
    }
    nextPage(structureId) {
        this.pagingDispatcher.nextPage(structureId);
    }
    prevPage(structureId) {
        this.pagingDispatcher.prevPage(structureId);
    }
    goToPage(pageNumber, currentPage, structureId) {
        if (currentPage < pageNumber) {
            while (currentPage !== pageNumber) {
                this.nextPage(structureId);
                currentPage += 1;
            }
        }
        else {
            while (currentPage !== pageNumber) {
                this.prevPage(structureId);
                currentPage -= 1;
            }
        }
    }
    changePagerTop(enabled, structureId) {
        this.pagingDispatcher.setPaging({ pagerTop: enabled }, structureId);
    }
    changePagerBottom(enabled, structureId) {
        this.pagingDispatcher.setPaging({ pagerBottom: enabled }, structureId);
    }
}
PagingDomainCommandInvoker.decorators = [
    { type: Injectable }
];
PagingDomainCommandInvoker.ctorParameters = () => [
    { type: PagingDispatcher }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLmRvbWFpbi5jb21tYW5kLWludm9rZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS9wYWdpbmcvY29yZS9kb21haW4vcGFnaW5nLmRvbWFpbi5jb21tYW5kLWludm9rZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFHdkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUdyRSxNQUFNLE9BQU8sMEJBQTJCLFNBQVEsb0JBQW9CO0lBRW5FLFlBQTZCLGdCQUFrQztRQUM5RCxLQUFLLEVBQUUsQ0FBQztRQURvQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBRS9ELENBQUM7SUFFRCxNQUFNLENBQUMsV0FBd0I7UUFDOUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRUQsT0FBTyxDQUFDLFdBQXdCO1FBQy9CLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVELFNBQVMsQ0FBQyxNQUFvQixFQUFFLFdBQXdCO1FBQ3ZELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRCxjQUFjLENBQUMsUUFBZ0IsRUFBRSxXQUF3QjtRQUN4RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQsUUFBUSxDQUFDLFdBQXdCO1FBQ2hDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELFFBQVEsQ0FBQyxXQUF3QjtRQUNoQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxRQUFRLENBQUMsVUFBa0IsRUFBRSxXQUFtQixFQUFFLFdBQXdCO1FBRXpFLElBQUksV0FBVyxHQUFHLFVBQVUsRUFBRTtZQUM3QixPQUFPLFdBQVcsS0FBSyxVQUFVLEVBQUU7Z0JBQ2xDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQzNCLFdBQVcsSUFBSSxDQUFDLENBQUM7YUFDakI7U0FDRDthQUFNO1lBQ04sT0FBTyxXQUFXLEtBQUssVUFBVSxFQUFFO2dCQUNsQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUMzQixXQUFXLElBQUksQ0FBQyxDQUFDO2FBQ2pCO1NBQ0Q7SUFDRixDQUFDO0lBRUQsY0FBYyxDQUFDLE9BQWdCLEVBQUUsV0FBd0I7UUFDeEQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBRUQsaUJBQWlCLENBQUMsT0FBZ0IsRUFBRSxXQUF3QjtRQUMzRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7OztZQXBERCxVQUFVOzs7WUFORixnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYWdpbmdEaXNwYXRjaGVyIH0gZnJvbSAnLi9wYWdpbmcuZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBQYWdpbmdDb25maWcgfSBmcm9tICcuLi9hcGkvY29uZmlnL3BhZ2luZy1jb25maWcnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGFnaW5nQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi9hcGkvcGFnaW5nLmNvbW1hbmQtaW52b2tlcic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQYWdpbmdEb21haW5Db21tYW5kSW52b2tlciBleHRlbmRzIFBhZ2luZ0NvbW1hbmRJbnZva2VyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHBhZ2luZ0Rpc3BhdGNoZXI6IFBhZ2luZ0Rpc3BhdGNoZXIpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0ZW5hYmxlKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMucGFnaW5nRGlzcGF0Y2hlci5zZXRQYWdpbmcoeyBlbmFibGVkOiB0cnVlIH0sIHN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdGRpc2FibGUoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5wYWdpbmdEaXNwYXRjaGVyLnNldFBhZ2luZyh7IGVuYWJsZWQ6IGZhbHNlIH0sIHN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdHNldFBhZ2luZyhwYWdpbmc6IFBhZ2luZ0NvbmZpZywgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5wYWdpbmdEaXNwYXRjaGVyLnNldFBhZ2luZyhwYWdpbmcsIHN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdGNoYW5nZVBhZ2VTaXplKHBhZ2VTaXplOiBudW1iZXIsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMucGFnaW5nRGlzcGF0Y2hlci5jaGFuZ2VQYWdlU2l6ZShwYWdlU2l6ZSwgc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0bmV4dFBhZ2Uoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5wYWdpbmdEaXNwYXRjaGVyLm5leHRQYWdlKHN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdHByZXZQYWdlKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMucGFnaW5nRGlzcGF0Y2hlci5wcmV2UGFnZShzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRnb1RvUGFnZShwYWdlTnVtYmVyOiBudW1iZXIsIGN1cnJlbnRQYWdlOiBudW1iZXIsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCkge1xuXG5cdFx0aWYgKGN1cnJlbnRQYWdlIDwgcGFnZU51bWJlcikge1xuXHRcdFx0d2hpbGUgKGN1cnJlbnRQYWdlICE9PSBwYWdlTnVtYmVyKSB7XG5cdFx0XHRcdHRoaXMubmV4dFBhZ2Uoc3RydWN0dXJlSWQpO1xuXHRcdFx0XHRjdXJyZW50UGFnZSArPSAxO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR3aGlsZSAoY3VycmVudFBhZ2UgIT09IHBhZ2VOdW1iZXIpIHtcblx0XHRcdFx0dGhpcy5wcmV2UGFnZShzdHJ1Y3R1cmVJZCk7XG5cdFx0XHRcdGN1cnJlbnRQYWdlIC09IDE7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Y2hhbmdlUGFnZXJUb3AoZW5hYmxlZDogYm9vbGVhbiwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5wYWdpbmdEaXNwYXRjaGVyLnNldFBhZ2luZyh7IHBhZ2VyVG9wOiBlbmFibGVkIH0sIHN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdGNoYW5nZVBhZ2VyQm90dG9tKGVuYWJsZWQ6IGJvb2xlYW4sIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMucGFnaW5nRGlzcGF0Y2hlci5zZXRQYWdpbmcoeyBwYWdlckJvdHRvbTogZW5hYmxlZCB9LCBzdHJ1Y3R1cmVJZCk7XG5cdH1cbn1cbiJdfQ==