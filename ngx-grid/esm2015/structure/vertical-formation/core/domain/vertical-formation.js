var VerticalFormation_1;
import { __decorate } from "tslib";
import { DomainObject } from '@generic-ui/hermes';
import { VerticalRange } from './vertical-range';
import { VerticalFormationContainerHeight } from './container/vertical-formation.container-height';
import { ScrollBarPositionSetAggregateEvent } from './scroll-bar/scroll-bar-position-set.aggregate-event';
let VerticalFormation = VerticalFormation_1 = class VerticalFormation {
    constructor(structureId, enabled = false, viewportHeight = 0, sourceSize = 0, scrollPosition = 0, rowHeight, hiddenItemsTop, hiddenItemsBottom) {
        this.structureId = structureId;
        this.enabled = enabled;
        this.rowHeight = VerticalFormation_1.ROW_HEIGHT;
        this.hiddenItemsTop = VerticalFormation_1.HIDDEN_ITEMS_TOP;
        this.hiddenItemsBottom = VerticalFormation_1.HIDDEN_ITEMS_BOTTOM;
        this.container = new VerticalFormationContainerHeight();
        this.sourceSize = sourceSize;
        this.container.setSourceSize(this.sourceSize * this.rowHeight);
        this.container.setContainerHeight(viewportHeight);
        this.scrollPosition = scrollPosition;
        if (Number.isInteger(rowHeight)) {
            this.rowHeight = rowHeight;
        }
        if (Number.isInteger(hiddenItemsTop)) {
            this.hiddenItemsTop = hiddenItemsTop;
        }
        if (Number.isInteger(hiddenItemsBottom)) {
            this.hiddenItemsBottom = hiddenItemsBottom;
        }
        this.calculateRange();
    }
    isEnabled() {
        return this.enabled &&
            this.container.getHeight() > 0 &&
            this.sourceSize > 0;
    }
    getViewPortHeight() {
        return this.container.getVisibleContainerHeight();
    }
    getSourceHeight() {
        return this.container.getSourceHeight();
    }
    getRowHeight() {
        return this.rowHeight;
    }
    getRange() {
        return this.range;
    }
    getTopMargin() {
        return this.range.getStart() * this.rowHeight;
    }
    calculateRange() {
        if (this.calcFullHeight() <= this.container.getHeight()) {
            this.range = new VerticalRange(0, this.sourceSize, 0);
            return;
        }
        const itemsInViewport = Math.ceil(this.container.getHeight() / this.rowHeight), viewportPositionIndex = Math.floor(this.scrollPosition / this.rowHeight);
        let end = (viewportPositionIndex + itemsInViewport + this.hiddenItemsBottom);
        let topMargin = viewportPositionIndex;
        if (topMargin + itemsInViewport >= this.sourceSize) {
            topMargin = this.sourceSize - itemsInViewport;
        }
        let start = Math.max(viewportPositionIndex - this.hiddenItemsTop, 0);
        if (end > this.sourceSize) {
            end = this.sourceSize;
            start = end - itemsInViewport;
        }
        // end - itemsInViewport;
        this.range = new VerticalRange(start, end, topMargin);
        return {
            start,
            end,
            topMargin
        };
    }
    setEnabled(enabled) {
        this.enabled = enabled;
        // TODO dispatch aggregate event
        if (this.enabled && !this.container.isContainerHeightProperForVirtualScroll()) {
            this.logger.warn('Height needs to be specified in order for virtual scroll to work.');
        }
        this.calculateRange();
    }
    setSourceSize(sourceSize = 0) {
        this.sourceSize = sourceSize;
        this.container.setSourceSize(this.sourceSize * this.rowHeight);
        this.calculateRange();
    }
    setTopHiddenItemsCount(count) {
        this.hiddenItemsTop = count;
        this.calculateRange();
    }
    setBottomHiddenItemsCount(count) {
        this.hiddenItemsBottom = count;
        this.calculateRange();
    }
    setScrollPosition(scrollPosition) {
        this.scrollPosition = scrollPosition;
        this.calculateRange();
    }
    scrollToIndex(index) {
        if (index >= this.sourceSize) {
            index = this.sourceSize;
        }
        if (index < -1) {
            index = 0;
        }
        const position = index * this.rowHeight;
        return new ScrollBarPositionSetAggregateEvent(this.structureId, position);
    }
    setViewportHeight(height) {
        this.container.setContainerHeight(height);
        this.calculateRange();
    }
    setRowHeight(rowHeight) {
        this.rowHeight = rowHeight;
        this.container.setSourceSize(this.sourceSize * this.rowHeight);
        this.calculateRange();
    }
    setLogger(logger) {
        this.logger = logger;
    }
    // TODO REMOVE
    calcFullHeight() {
        return this.sourceSize * this.rowHeight;
    }
};
VerticalFormation.ROW_HEIGHT = 42;
VerticalFormation.HIDDEN_ITEMS_TOP = 5;
VerticalFormation.HIDDEN_ITEMS_BOTTOM = 2;
VerticalFormation = VerticalFormation_1 = __decorate([
    DomainObject
], VerticalFormation);
export { VerticalFormation };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGljYWwtZm9ybWF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9zdHJ1Y3R1cmUvdmVydGljYWwtZm9ybWF0aW9uL2NvcmUvZG9tYWluL3ZlcnRpY2FsLWZvcm1hdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0saURBQWlELENBQUM7QUFLbkcsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sc0RBQXNELENBQUM7SUFJN0YsaUJBQWlCLCtCQUFqQixpQkFBaUI7SUF5QjdCLFlBQW9CLFdBQXdCLEVBQ2pDLFVBQW1CLEtBQUssRUFDaEMsaUJBQXlCLENBQUMsRUFDMUIsYUFBcUIsQ0FBQyxFQUN0QixpQkFBeUIsQ0FBQyxFQUMxQixTQUFrQixFQUNsQixjQUF1QixFQUN2QixpQkFBMEI7UUFQVCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUNqQyxZQUFPLEdBQVAsT0FBTyxDQUFpQjtRQWpCM0IsY0FBUyxHQUFXLG1CQUFpQixDQUFDLFVBQVUsQ0FBQztRQUVqRCxtQkFBYyxHQUFXLG1CQUFpQixDQUFDLGdCQUFnQixDQUFDO1FBRTVELHNCQUFpQixHQUFXLG1CQUFpQixDQUFDLG1CQUFtQixDQUFDO1FBRWxFLGNBQVMsR0FBcUMsSUFBSSxnQ0FBZ0MsRUFBRSxDQUFDO1FBa0I1RixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsU0FBUyxDQUFDLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRWxELElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO1FBRXJDLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUNoQyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztTQUMzQjtRQUVELElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsRUFBRTtZQUNyQyxJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztTQUNyQztRQUVELElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFO1lBQ3hDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxpQkFBaUIsQ0FBQztTQUMzQztRQUVELElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsU0FBUztRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU87WUFDbEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDO1lBQzlCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxpQkFBaUI7UUFDaEIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLHlCQUF5QixFQUFFLENBQUM7SUFDbkQsQ0FBQztJQUVELGVBQWU7UUFDZCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDekMsQ0FBQztJQUVELFlBQVk7UUFDWCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDdkIsQ0FBQztJQUVELFFBQVE7UUFDUCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDbkIsQ0FBQztJQUVELFlBQVk7UUFDWCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsY0FBYztRQUViLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDeEQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLGFBQWEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN0RCxPQUFPO1NBQ1A7UUFFRCxNQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUM3RSxxQkFBcUIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRTFFLElBQUksR0FBRyxHQUFHLENBQUMscUJBQXFCLEdBQUcsZUFBZSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBRTdFLElBQUksU0FBUyxHQUFHLHFCQUFxQixDQUFDO1FBRXRDLElBQUksU0FBUyxHQUFHLGVBQWUsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25ELFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLGVBQWUsQ0FBQztTQUM5QztRQUVELElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUVyRSxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQzFCLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ3RCLEtBQUssR0FBRyxHQUFHLEdBQUcsZUFBZSxDQUFDO1NBQzlCO1FBRUQseUJBQXlCO1FBRXpCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxhQUFhLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUV0RCxPQUFPO1lBQ04sS0FBSztZQUNMLEdBQUc7WUFDSCxTQUFTO1NBQ1QsQ0FBQztJQUNILENBQUM7SUFFRCxVQUFVLENBQUMsT0FBZ0I7UUFDMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFFdkIsZ0NBQWdDO1FBQ2hDLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsdUNBQXVDLEVBQUUsRUFBRTtZQUM5RSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxtRUFBbUUsQ0FBQyxDQUFDO1NBQ3RGO1FBRUQsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxhQUFhLENBQUMsYUFBcUIsQ0FBQztRQUNuQyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUU3QixJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUUvRCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELHNCQUFzQixDQUFDLEtBQWE7UUFDbkMsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7UUFDNUIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCx5QkFBeUIsQ0FBQyxLQUFhO1FBQ3RDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7UUFDL0IsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxjQUFzQjtRQUN2QyxJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztRQUNyQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELGFBQWEsQ0FBQyxLQUFhO1FBRTFCLElBQUksS0FBSyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDN0IsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7U0FDeEI7UUFFRCxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRTtZQUNmLEtBQUssR0FBRyxDQUFDLENBQUM7U0FDVjtRQUVELE1BQU0sUUFBUSxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBRXhDLE9BQU8sSUFBSSxrQ0FBa0MsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxNQUFjO1FBQy9CLElBQUksQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxZQUFZLENBQUMsU0FBaUI7UUFDN0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxTQUFTLENBQUMsTUFBYztRQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN0QixDQUFDO0lBRUQsY0FBYztJQUNkLGNBQWM7UUFDYixPQUFPLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN6QyxDQUFDO0NBRUQsQ0FBQTtBQXZMZ0IsNEJBQVUsR0FBRyxFQUFFLENBQUM7QUFFaEIsa0NBQWdCLEdBQUcsQ0FBQyxDQUFDO0FBRXJCLHFDQUFtQixHQUFHLENBQUMsQ0FBQztBQU41QixpQkFBaUI7SUFEN0IsWUFBWTtHQUNBLGlCQUFpQixDQXlMN0I7U0F6TFksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9tYWluT2JqZWN0IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgVmVydGljYWxSYW5nZSB9IGZyb20gJy4vdmVydGljYWwtcmFuZ2UnO1xuaW1wb3J0IHsgVmVydGljYWxGb3JtYXRpb25Db250YWluZXJIZWlnaHQgfSBmcm9tICcuL2NvbnRhaW5lci92ZXJ0aWNhbC1mb3JtYXRpb24uY29udGFpbmVyLWhlaWdodCc7XG5cbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvbG9nZ2VyL2xvZ2dlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU2Nyb2xsQmFyUG9zaXRpb25TZXRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4vc2Nyb2xsLWJhci9zY3JvbGwtYmFyLXBvc2l0aW9uLXNldC5hZ2dyZWdhdGUtZXZlbnQnO1xuXG5cbkBEb21haW5PYmplY3RcbmV4cG9ydCBjbGFzcyBWZXJ0aWNhbEZvcm1hdGlvbiB7XG5cblx0c3RhdGljIHJlYWRvbmx5IFJPV19IRUlHSFQgPSA0MjtcblxuXHRzdGF0aWMgcmVhZG9ubHkgSElEREVOX0lURU1TX1RPUCA9IDU7XG5cblx0c3RhdGljIHJlYWRvbmx5IEhJRERFTl9JVEVNU19CT1RUT00gPSAyO1xuXG5cblx0cHJpdmF0ZSByb3dIZWlnaHQ6IG51bWJlciA9IFZlcnRpY2FsRm9ybWF0aW9uLlJPV19IRUlHSFQ7XG5cblx0cHJpdmF0ZSBoaWRkZW5JdGVtc1RvcDogbnVtYmVyID0gVmVydGljYWxGb3JtYXRpb24uSElEREVOX0lURU1TX1RPUDtcblxuXHRwcml2YXRlIGhpZGRlbkl0ZW1zQm90dG9tOiBudW1iZXIgPSBWZXJ0aWNhbEZvcm1hdGlvbi5ISURERU5fSVRFTVNfQk9UVE9NO1xuXG5cdHByaXZhdGUgY29udGFpbmVyOiBWZXJ0aWNhbEZvcm1hdGlvbkNvbnRhaW5lckhlaWdodCA9IG5ldyBWZXJ0aWNhbEZvcm1hdGlvbkNvbnRhaW5lckhlaWdodCgpO1xuXG5cdHByaXZhdGUgc2Nyb2xsUG9zaXRpb246IG51bWJlcjtcblxuXHRwcml2YXRlIHJhbmdlOiBWZXJ0aWNhbFJhbmdlO1xuXG5cdHByaXZhdGUgc291cmNlU2l6ZTogbnVtYmVyO1xuXG5cdHByaXZhdGUgbG9nZ2VyOiBMb2dnZXI7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgZW5hYmxlZDogYm9vbGVhbiA9IGZhbHNlLFxuXHRcdFx0XHR2aWV3cG9ydEhlaWdodDogbnVtYmVyID0gMCxcblx0XHRcdFx0c291cmNlU2l6ZTogbnVtYmVyID0gMCxcblx0XHRcdFx0c2Nyb2xsUG9zaXRpb246IG51bWJlciA9IDAsXG5cdFx0XHRcdHJvd0hlaWdodD86IG51bWJlcixcblx0XHRcdFx0aGlkZGVuSXRlbXNUb3A/OiBudW1iZXIsXG5cdFx0XHRcdGhpZGRlbkl0ZW1zQm90dG9tPzogbnVtYmVyKSB7XG5cdFx0dGhpcy5zb3VyY2VTaXplID0gc291cmNlU2l6ZTtcblx0XHR0aGlzLmNvbnRhaW5lci5zZXRTb3VyY2VTaXplKHRoaXMuc291cmNlU2l6ZSAqIHRoaXMucm93SGVpZ2h0KTtcblx0XHR0aGlzLmNvbnRhaW5lci5zZXRDb250YWluZXJIZWlnaHQodmlld3BvcnRIZWlnaHQpO1xuXG5cdFx0dGhpcy5zY3JvbGxQb3NpdGlvbiA9IHNjcm9sbFBvc2l0aW9uO1xuXG5cdFx0aWYgKE51bWJlci5pc0ludGVnZXIocm93SGVpZ2h0KSkge1xuXHRcdFx0dGhpcy5yb3dIZWlnaHQgPSByb3dIZWlnaHQ7XG5cdFx0fVxuXG5cdFx0aWYgKE51bWJlci5pc0ludGVnZXIoaGlkZGVuSXRlbXNUb3ApKSB7XG5cdFx0XHR0aGlzLmhpZGRlbkl0ZW1zVG9wID0gaGlkZGVuSXRlbXNUb3A7XG5cdFx0fVxuXG5cdFx0aWYgKE51bWJlci5pc0ludGVnZXIoaGlkZGVuSXRlbXNCb3R0b20pKSB7XG5cdFx0XHR0aGlzLmhpZGRlbkl0ZW1zQm90dG9tID0gaGlkZGVuSXRlbXNCb3R0b207XG5cdFx0fVxuXG5cdFx0dGhpcy5jYWxjdWxhdGVSYW5nZSgpO1xuXHR9XG5cblx0aXNFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmVuYWJsZWQgJiZcblx0XHRcdHRoaXMuY29udGFpbmVyLmdldEhlaWdodCgpID4gMCAmJlxuXHRcdFx0dGhpcy5zb3VyY2VTaXplID4gMDtcblx0fVxuXG5cdGdldFZpZXdQb3J0SGVpZ2h0KCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuY29udGFpbmVyLmdldFZpc2libGVDb250YWluZXJIZWlnaHQoKTtcblx0fVxuXG5cdGdldFNvdXJjZUhlaWdodCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLmNvbnRhaW5lci5nZXRTb3VyY2VIZWlnaHQoKTtcblx0fVxuXG5cdGdldFJvd0hlaWdodCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnJvd0hlaWdodDtcblx0fVxuXG5cdGdldFJhbmdlKCk6IFZlcnRpY2FsUmFuZ2Uge1xuXHRcdHJldHVybiB0aGlzLnJhbmdlO1xuXHR9XG5cblx0Z2V0VG9wTWFyZ2luKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMucmFuZ2UuZ2V0U3RhcnQoKSAqIHRoaXMucm93SGVpZ2h0O1xuXHR9XG5cblx0Y2FsY3VsYXRlUmFuZ2UoKTogYW55IHtcblxuXHRcdGlmICh0aGlzLmNhbGNGdWxsSGVpZ2h0KCkgPD0gdGhpcy5jb250YWluZXIuZ2V0SGVpZ2h0KCkpIHtcblx0XHRcdHRoaXMucmFuZ2UgPSBuZXcgVmVydGljYWxSYW5nZSgwLCB0aGlzLnNvdXJjZVNpemUsIDApO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IGl0ZW1zSW5WaWV3cG9ydCA9IE1hdGguY2VpbCh0aGlzLmNvbnRhaW5lci5nZXRIZWlnaHQoKSAvIHRoaXMucm93SGVpZ2h0KSxcblx0XHRcdHZpZXdwb3J0UG9zaXRpb25JbmRleCA9IE1hdGguZmxvb3IodGhpcy5zY3JvbGxQb3NpdGlvbiAvIHRoaXMucm93SGVpZ2h0KTtcblxuXHRcdGxldCBlbmQgPSAodmlld3BvcnRQb3NpdGlvbkluZGV4ICsgaXRlbXNJblZpZXdwb3J0ICsgdGhpcy5oaWRkZW5JdGVtc0JvdHRvbSk7XG5cblx0XHRsZXQgdG9wTWFyZ2luID0gdmlld3BvcnRQb3NpdGlvbkluZGV4O1xuXG5cdFx0aWYgKHRvcE1hcmdpbiArIGl0ZW1zSW5WaWV3cG9ydCA+PSB0aGlzLnNvdXJjZVNpemUpIHtcblx0XHRcdHRvcE1hcmdpbiA9IHRoaXMuc291cmNlU2l6ZSAtIGl0ZW1zSW5WaWV3cG9ydDtcblx0XHR9XG5cblx0XHRsZXQgc3RhcnQgPSBNYXRoLm1heCh2aWV3cG9ydFBvc2l0aW9uSW5kZXggLSB0aGlzLmhpZGRlbkl0ZW1zVG9wLCAwKTtcblxuXHRcdGlmIChlbmQgPiB0aGlzLnNvdXJjZVNpemUpIHtcblx0XHRcdGVuZCA9IHRoaXMuc291cmNlU2l6ZTtcblx0XHRcdHN0YXJ0ID0gZW5kIC0gaXRlbXNJblZpZXdwb3J0O1xuXHRcdH1cblxuXHRcdC8vIGVuZCAtIGl0ZW1zSW5WaWV3cG9ydDtcblxuXHRcdHRoaXMucmFuZ2UgPSBuZXcgVmVydGljYWxSYW5nZShzdGFydCwgZW5kLCB0b3BNYXJnaW4pO1xuXG5cdFx0cmV0dXJuIHtcblx0XHRcdHN0YXJ0LFxuXHRcdFx0ZW5kLFxuXHRcdFx0dG9wTWFyZ2luXG5cdFx0fTtcblx0fVxuXG5cdHNldEVuYWJsZWQoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMuZW5hYmxlZCA9IGVuYWJsZWQ7XG5cblx0XHQvLyBUT0RPIGRpc3BhdGNoIGFnZ3JlZ2F0ZSBldmVudFxuXHRcdGlmICh0aGlzLmVuYWJsZWQgJiYgIXRoaXMuY29udGFpbmVyLmlzQ29udGFpbmVySGVpZ2h0UHJvcGVyRm9yVmlydHVhbFNjcm9sbCgpKSB7XG5cdFx0XHR0aGlzLmxvZ2dlci53YXJuKCdIZWlnaHQgbmVlZHMgdG8gYmUgc3BlY2lmaWVkIGluIG9yZGVyIGZvciB2aXJ0dWFsIHNjcm9sbCB0byB3b3JrLicpO1xuXHRcdH1cblxuXHRcdHRoaXMuY2FsY3VsYXRlUmFuZ2UoKTtcblx0fVxuXG5cdHNldFNvdXJjZVNpemUoc291cmNlU2l6ZTogbnVtYmVyID0gMCk6IHZvaWQge1xuXHRcdHRoaXMuc291cmNlU2l6ZSA9IHNvdXJjZVNpemU7XG5cblx0XHR0aGlzLmNvbnRhaW5lci5zZXRTb3VyY2VTaXplKHRoaXMuc291cmNlU2l6ZSAqIHRoaXMucm93SGVpZ2h0KTtcblxuXHRcdHRoaXMuY2FsY3VsYXRlUmFuZ2UoKTtcblx0fVxuXG5cdHNldFRvcEhpZGRlbkl0ZW1zQ291bnQoY291bnQ6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuaGlkZGVuSXRlbXNUb3AgPSBjb3VudDtcblx0XHR0aGlzLmNhbGN1bGF0ZVJhbmdlKCk7XG5cdH1cblxuXHRzZXRCb3R0b21IaWRkZW5JdGVtc0NvdW50KGNvdW50OiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLmhpZGRlbkl0ZW1zQm90dG9tID0gY291bnQ7XG5cdFx0dGhpcy5jYWxjdWxhdGVSYW5nZSgpO1xuXHR9XG5cblx0c2V0U2Nyb2xsUG9zaXRpb24oc2Nyb2xsUG9zaXRpb246IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuc2Nyb2xsUG9zaXRpb24gPSBzY3JvbGxQb3NpdGlvbjtcblx0XHR0aGlzLmNhbGN1bGF0ZVJhbmdlKCk7XG5cdH1cblxuXHRzY3JvbGxUb0luZGV4KGluZGV4OiBudW1iZXIpOiBTdHJ1Y3R1cmVBZ2dyZWdhdGVFdmVudCB7XG5cblx0XHRpZiAoaW5kZXggPj0gdGhpcy5zb3VyY2VTaXplKSB7XG5cdFx0XHRpbmRleCA9IHRoaXMuc291cmNlU2l6ZTtcblx0XHR9XG5cblx0XHRpZiAoaW5kZXggPCAtMSkge1xuXHRcdFx0aW5kZXggPSAwO1xuXHRcdH1cblxuXHRcdGNvbnN0IHBvc2l0aW9uID0gaW5kZXggKiB0aGlzLnJvd0hlaWdodDtcblxuXHRcdHJldHVybiBuZXcgU2Nyb2xsQmFyUG9zaXRpb25TZXRBZ2dyZWdhdGVFdmVudCh0aGlzLnN0cnVjdHVyZUlkLCBwb3NpdGlvbik7XG5cdH1cblxuXHRzZXRWaWV3cG9ydEhlaWdodChoZWlnaHQ6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuY29udGFpbmVyLnNldENvbnRhaW5lckhlaWdodChoZWlnaHQpO1xuXHRcdHRoaXMuY2FsY3VsYXRlUmFuZ2UoKTtcblx0fVxuXG5cdHNldFJvd0hlaWdodChyb3dIZWlnaHQ6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMucm93SGVpZ2h0ID0gcm93SGVpZ2h0O1xuXHRcdHRoaXMuY29udGFpbmVyLnNldFNvdXJjZVNpemUodGhpcy5zb3VyY2VTaXplICogdGhpcy5yb3dIZWlnaHQpO1xuXHRcdHRoaXMuY2FsY3VsYXRlUmFuZ2UoKTtcblx0fVxuXG5cdHNldExvZ2dlcihsb2dnZXI6IExvZ2dlcik6IHZvaWQge1xuXHRcdHRoaXMubG9nZ2VyID0gbG9nZ2VyO1xuXHR9XG5cblx0Ly8gVE9ETyBSRU1PVkVcblx0Y2FsY0Z1bGxIZWlnaHQoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5zb3VyY2VTaXplICogdGhpcy5yb3dIZWlnaHQ7XG5cdH1cblxufVxuIl19