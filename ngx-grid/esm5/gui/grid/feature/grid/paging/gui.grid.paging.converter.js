/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { PagingDisplayMode } from '../../../../../structure/paging/feature/mode/paging-display-mode';
import { GuiPagingDisplay } from '../../../core/api/gui.grid.public-api';
var GuiGridPagingConverter = /** @class */ (function () {
    function GuiGridPagingConverter() {
    }
    /**
     * @param {?} guiPaging
     * @return {?}
     */
    GuiGridPagingConverter.prototype.convert = /**
     * @param {?} guiPaging
     * @return {?}
     */
    function (guiPaging) {
        /** @type {?} */
        var pagingConfig = {};
        if (guiPaging.enabled !== undefined && guiPaging.enabled !== null) {
            pagingConfig.enabled = guiPaging.enabled;
        }
        if (guiPaging.page !== undefined && guiPaging.page !== null) {
            pagingConfig.page = guiPaging.page;
        }
        if (guiPaging.pageSize !== undefined && guiPaging.pageSize !== null) {
            pagingConfig.pageSize = guiPaging.pageSize;
        }
        if (guiPaging.pageSizes !== undefined && guiPaging.pageSizes !== null) {
            pagingConfig.pageSizes = guiPaging.pageSizes;
        }
        if (guiPaging.pagerTop !== undefined && guiPaging.pagerTop !== null) {
            pagingConfig.pagerTop = guiPaging.pagerTop;
        }
        if (guiPaging.pagerBottom !== undefined && guiPaging.pagerBottom !== null) {
            pagingConfig.pagerBottom = guiPaging.pagerBottom;
        }
        if (guiPaging.display !== undefined && guiPaging.display !== null) {
            pagingConfig.displayMode = this.convertDisplay(guiPaging.display);
        }
        return pagingConfig;
    };
    /**
     * @private
     * @param {?} pagingDisplay
     * @return {?}
     */
    GuiGridPagingConverter.prototype.convertDisplay = /**
     * @private
     * @param {?} pagingDisplay
     * @return {?}
     */
    function (pagingDisplay) {
        if (typeof pagingDisplay === 'string') {
            return this.convertString(pagingDisplay);
        }
        else {
            return this.convertEnum(pagingDisplay);
        }
    };
    /**
     * @private
     * @param {?} pagingDisplay
     * @return {?}
     */
    GuiGridPagingConverter.prototype.convertString = /**
     * @private
     * @param {?} pagingDisplay
     * @return {?}
     */
    function (pagingDisplay) {
        /** @type {?} */
        var loweredPaging = pagingDisplay.toLocaleLowerCase();
        switch (loweredPaging) {
            case 'basic':
                return PagingDisplayMode.BASIC;
            case 'advanced':
                return PagingDisplayMode.ADVANCED;
            default:
                return PagingDisplayMode.BASIC;
        }
    };
    /**
     * @private
     * @param {?} pagingDisplay
     * @return {?}
     */
    GuiGridPagingConverter.prototype.convertEnum = /**
     * @private
     * @param {?} pagingDisplay
     * @return {?}
     */
    function (pagingDisplay) {
        switch (pagingDisplay) {
            case GuiPagingDisplay.BASIC:
                return PagingDisplayMode.BASIC;
            case GuiPagingDisplay.ADVANCED:
                return PagingDisplayMode.ADVANCED;
            default:
                return PagingDisplayMode.BASIC;
        }
    };
    return GuiGridPagingConverter;
}());
export { GuiGridPagingConverter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQucGFnaW5nLmNvbnZlcnRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsiZ3VpL2dyaWQvZmVhdHVyZS9ncmlkL3BhZ2luZy9ndWkuZ3JpZC5wYWdpbmcuY29udmVydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrRUFBa0UsQ0FBQztBQUNyRyxPQUFPLEVBQWEsZ0JBQWdCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUlwRjtJQUFBO0lBOEVBLENBQUM7Ozs7O0lBNUVBLHdDQUFPOzs7O0lBQVAsVUFBUSxTQUFvQjs7WUFFckIsWUFBWSxHQUFpQixFQUFFO1FBRXJDLElBQUksU0FBUyxDQUFDLE9BQU8sS0FBSyxTQUFTLElBQUksU0FBUyxDQUFDLE9BQU8sS0FBSyxJQUFJLEVBQUU7WUFDbEUsWUFBWSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDO1NBQ3pDO1FBRUQsSUFBSSxTQUFTLENBQUMsSUFBSSxLQUFLLFNBQVMsSUFBSSxTQUFTLENBQUMsSUFBSSxLQUFLLElBQUksRUFBRTtZQUM1RCxZQUFZLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUM7U0FDbkM7UUFFRCxJQUFJLFNBQVMsQ0FBQyxRQUFRLEtBQUssU0FBUyxJQUFJLFNBQVMsQ0FBQyxRQUFRLEtBQUssSUFBSSxFQUFFO1lBQ3BFLFlBQVksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQztTQUMzQztRQUVELElBQUksU0FBUyxDQUFDLFNBQVMsS0FBSyxTQUFTLElBQUksU0FBUyxDQUFDLFNBQVMsS0FBSyxJQUFJLEVBQUU7WUFDdEUsWUFBWSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDO1NBQzdDO1FBRUQsSUFBSSxTQUFTLENBQUMsUUFBUSxLQUFLLFNBQVMsSUFBSSxTQUFTLENBQUMsUUFBUSxLQUFLLElBQUksRUFBRTtZQUNwRSxZQUFZLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUM7U0FDM0M7UUFFRCxJQUFJLFNBQVMsQ0FBQyxXQUFXLEtBQUssU0FBUyxJQUFJLFNBQVMsQ0FBQyxXQUFXLEtBQUssSUFBSSxFQUFFO1lBQzFFLFlBQVksQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDLFdBQVcsQ0FBQztTQUNqRDtRQUVELElBQUksU0FBUyxDQUFDLE9BQU8sS0FBSyxTQUFTLElBQUksU0FBUyxDQUFDLE9BQU8sS0FBSyxJQUFJLEVBQUU7WUFDbEUsWUFBWSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNsRTtRQUVELE9BQU8sWUFBWSxDQUFDO0lBQ3JCLENBQUM7Ozs7OztJQUVPLCtDQUFjOzs7OztJQUF0QixVQUF1QixhQUF3QztRQUU5RCxJQUFJLE9BQU8sYUFBYSxLQUFLLFFBQVEsRUFBRTtZQUN0QyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDekM7YUFBTTtZQUNOLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUN2QztJQUNGLENBQUM7Ozs7OztJQUVPLDhDQUFhOzs7OztJQUFyQixVQUFzQixhQUFxQjs7WUFFcEMsYUFBYSxHQUFHLGFBQWEsQ0FBQyxpQkFBaUIsRUFBRTtRQUV2RCxRQUFRLGFBQWEsRUFBRTtZQUV0QixLQUFLLE9BQU87Z0JBQ1gsT0FBTyxpQkFBaUIsQ0FBQyxLQUFLLENBQUM7WUFFaEMsS0FBSyxVQUFVO2dCQUNkLE9BQU8saUJBQWlCLENBQUMsUUFBUSxDQUFDO1lBRW5DO2dCQUNDLE9BQU8saUJBQWlCLENBQUMsS0FBSyxDQUFDO1NBQ2hDO0lBQ0YsQ0FBQzs7Ozs7O0lBRU8sNENBQVc7Ozs7O0lBQW5CLFVBQW9CLGFBQStCO1FBRWxELFFBQVEsYUFBYSxFQUFFO1lBRXRCLEtBQUssZ0JBQWdCLENBQUMsS0FBSztnQkFDMUIsT0FBTyxpQkFBaUIsQ0FBQyxLQUFLLENBQUM7WUFFaEMsS0FBSyxnQkFBZ0IsQ0FBQyxRQUFRO2dCQUM3QixPQUFPLGlCQUFpQixDQUFDLFFBQVEsQ0FBQztZQUVuQztnQkFDQyxPQUFPLGlCQUFpQixDQUFDLEtBQUssQ0FBQztTQUNoQztJQUNGLENBQUM7SUFFRiw2QkFBQztBQUFELENBQUMsQUE5RUQsSUE4RUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYWdpbmdEaXNwbGF5TW9kZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9wYWdpbmcvZmVhdHVyZS9tb2RlL3BhZ2luZy1kaXNwbGF5LW1vZGUnO1xuaW1wb3J0IHsgR3VpUGFnaW5nLCBHdWlQYWdpbmdEaXNwbGF5IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvZ3VpLmdyaWQucHVibGljLWFwaSc7XG5pbXBvcnQgeyBQYWdpbmdDb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvcGFnaW5nL2NvcmUvYXBpL3BhZ2luZy1jb25maWcnO1xuXG5cbmV4cG9ydCBjbGFzcyBHdWlHcmlkUGFnaW5nQ29udmVydGVyIHtcblxuXHRjb252ZXJ0KGd1aVBhZ2luZzogR3VpUGFnaW5nKTogUGFnaW5nQ29uZmlnIHtcblxuXHRcdGNvbnN0IHBhZ2luZ0NvbmZpZzogUGFnaW5nQ29uZmlnID0ge307XG5cblx0XHRpZiAoZ3VpUGFnaW5nLmVuYWJsZWQgIT09IHVuZGVmaW5lZCAmJiBndWlQYWdpbmcuZW5hYmxlZCAhPT0gbnVsbCkge1xuXHRcdFx0cGFnaW5nQ29uZmlnLmVuYWJsZWQgPSBndWlQYWdpbmcuZW5hYmxlZDtcblx0XHR9XG5cblx0XHRpZiAoZ3VpUGFnaW5nLnBhZ2UgIT09IHVuZGVmaW5lZCAmJiBndWlQYWdpbmcucGFnZSAhPT0gbnVsbCkge1xuXHRcdFx0cGFnaW5nQ29uZmlnLnBhZ2UgPSBndWlQYWdpbmcucGFnZTtcblx0XHR9XG5cblx0XHRpZiAoZ3VpUGFnaW5nLnBhZ2VTaXplICE9PSB1bmRlZmluZWQgJiYgZ3VpUGFnaW5nLnBhZ2VTaXplICE9PSBudWxsKSB7XG5cdFx0XHRwYWdpbmdDb25maWcucGFnZVNpemUgPSBndWlQYWdpbmcucGFnZVNpemU7XG5cdFx0fVxuXG5cdFx0aWYgKGd1aVBhZ2luZy5wYWdlU2l6ZXMgIT09IHVuZGVmaW5lZCAmJiBndWlQYWdpbmcucGFnZVNpemVzICE9PSBudWxsKSB7XG5cdFx0XHRwYWdpbmdDb25maWcucGFnZVNpemVzID0gZ3VpUGFnaW5nLnBhZ2VTaXplcztcblx0XHR9XG5cblx0XHRpZiAoZ3VpUGFnaW5nLnBhZ2VyVG9wICE9PSB1bmRlZmluZWQgJiYgZ3VpUGFnaW5nLnBhZ2VyVG9wICE9PSBudWxsKSB7XG5cdFx0XHRwYWdpbmdDb25maWcucGFnZXJUb3AgPSBndWlQYWdpbmcucGFnZXJUb3A7XG5cdFx0fVxuXG5cdFx0aWYgKGd1aVBhZ2luZy5wYWdlckJvdHRvbSAhPT0gdW5kZWZpbmVkICYmIGd1aVBhZ2luZy5wYWdlckJvdHRvbSAhPT0gbnVsbCkge1xuXHRcdFx0cGFnaW5nQ29uZmlnLnBhZ2VyQm90dG9tID0gZ3VpUGFnaW5nLnBhZ2VyQm90dG9tO1xuXHRcdH1cblxuXHRcdGlmIChndWlQYWdpbmcuZGlzcGxheSAhPT0gdW5kZWZpbmVkICYmIGd1aVBhZ2luZy5kaXNwbGF5ICE9PSBudWxsKSB7XG5cdFx0XHRwYWdpbmdDb25maWcuZGlzcGxheU1vZGUgPSB0aGlzLmNvbnZlcnREaXNwbGF5KGd1aVBhZ2luZy5kaXNwbGF5KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcGFnaW5nQ29uZmlnO1xuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0RGlzcGxheShwYWdpbmdEaXNwbGF5OiBzdHJpbmcgfCBHdWlQYWdpbmdEaXNwbGF5KTogUGFnaW5nRGlzcGxheU1vZGUge1xuXG5cdFx0aWYgKHR5cGVvZiBwYWdpbmdEaXNwbGF5ID09PSAnc3RyaW5nJykge1xuXHRcdFx0cmV0dXJuIHRoaXMuY29udmVydFN0cmluZyhwYWdpbmdEaXNwbGF5KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuY29udmVydEVudW0ocGFnaW5nRGlzcGxheSk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0U3RyaW5nKHBhZ2luZ0Rpc3BsYXk6IHN0cmluZyk6IFBhZ2luZ0Rpc3BsYXlNb2RlIHtcblxuXHRcdGNvbnN0IGxvd2VyZWRQYWdpbmcgPSBwYWdpbmdEaXNwbGF5LnRvTG9jYWxlTG93ZXJDYXNlKCk7XG5cblx0XHRzd2l0Y2ggKGxvd2VyZWRQYWdpbmcpIHtcblxuXHRcdFx0Y2FzZSAnYmFzaWMnOlxuXHRcdFx0XHRyZXR1cm4gUGFnaW5nRGlzcGxheU1vZGUuQkFTSUM7XG5cblx0XHRcdGNhc2UgJ2FkdmFuY2VkJzpcblx0XHRcdFx0cmV0dXJuIFBhZ2luZ0Rpc3BsYXlNb2RlLkFEVkFOQ0VEO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gUGFnaW5nRGlzcGxheU1vZGUuQkFTSUM7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0RW51bShwYWdpbmdEaXNwbGF5OiBHdWlQYWdpbmdEaXNwbGF5KTogUGFnaW5nRGlzcGxheU1vZGUge1xuXG5cdFx0c3dpdGNoIChwYWdpbmdEaXNwbGF5KSB7XG5cblx0XHRcdGNhc2UgR3VpUGFnaW5nRGlzcGxheS5CQVNJQzpcblx0XHRcdFx0cmV0dXJuIFBhZ2luZ0Rpc3BsYXlNb2RlLkJBU0lDO1xuXG5cdFx0XHRjYXNlIEd1aVBhZ2luZ0Rpc3BsYXkuQURWQU5DRUQ6XG5cdFx0XHRcdHJldHVybiBQYWdpbmdEaXNwbGF5TW9kZS5BRFZBTkNFRDtcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIFBhZ2luZ0Rpc3BsYXlNb2RlLkJBU0lDO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=