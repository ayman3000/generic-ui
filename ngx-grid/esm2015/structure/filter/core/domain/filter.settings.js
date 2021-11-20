export class FilterSettings {
    constructor(filteringEnabled = false, searchEnabled = false, quickFiltersEnabled = false) {
        this.filteringEnabled = false;
        this.searchEnabled = false;
        this.quickFiltersEnabled = false;
        this.filteringEnabled = filteringEnabled;
        this.searchEnabled = searchEnabled;
        this.quickFiltersEnabled = quickFiltersEnabled;
    }
    isFilteringEnabled() {
        return this.filteringEnabled;
    }
    isQuickFilteringEnabled() {
        return this.quickFiltersEnabled;
    }
    isSearchingEnabled() {
        return this.searchEnabled;
    }
    setFilterConfig(config) {
        if (config && config.enabled !== undefined && config.enabled !== null) {
            this.filteringEnabled = config.enabled;
        }
    }
    setSearchingConfig(config) {
        if (config && config.enabled !== undefined && config.enabled !== null) {
            this.searchEnabled = config.enabled;
        }
    }
    setQuickFiltersConfig(config) {
        if (config && config.enabled !== undefined && config.enabled !== null) {
            this.quickFiltersEnabled = config.enabled;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLnNldHRpbmdzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9zdHJ1Y3R1cmUvZmlsdGVyL2NvcmUvZG9tYWluL2ZpbHRlci5zZXR0aW5ncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQSxNQUFNLE9BQU8sY0FBYztJQVExQixZQUFZLG1CQUE0QixLQUFLLEVBQzFDLGdCQUF5QixLQUFLLEVBQzlCLHNCQUErQixLQUFLO1FBUi9CLHFCQUFnQixHQUFZLEtBQUssQ0FBQztRQUVsQyxrQkFBYSxHQUFZLEtBQUssQ0FBQztRQUUvQix3QkFBbUIsR0FBWSxLQUFLLENBQUM7UUFLNUMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDO1FBQ3pDLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxtQkFBbUIsQ0FBQztJQUNoRCxDQUFDO0lBRUQsa0JBQWtCO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQzlCLENBQUM7SUFFRCx1QkFBdUI7UUFDdEIsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUM7SUFDakMsQ0FBQztJQUVELGtCQUFrQjtRQUNqQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDM0IsQ0FBQztJQUVELGVBQWUsQ0FBQyxNQUFvQjtRQUNuQyxJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsT0FBTyxLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsT0FBTyxLQUFLLElBQUksRUFBRTtZQUN0RSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztTQUN2QztJQUNGLENBQUM7SUFFRCxrQkFBa0IsQ0FBQyxNQUFvQjtRQUN0QyxJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsT0FBTyxLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsT0FBTyxLQUFLLElBQUksRUFBRTtZQUN0RSxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7U0FDcEM7SUFDRixDQUFDO0lBRUQscUJBQXFCLENBQUMsTUFBMEI7UUFDL0MsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLE9BQU8sS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLE9BQU8sS0FBSyxJQUFJLEVBQUU7WUFDdEUsSUFBSSxDQUFDLG1CQUFtQixHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7U0FDMUM7SUFDRixDQUFDO0NBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGaWx0ZXJDb25maWcgfSBmcm9tICcuLi9hcGkvY29uZmlnL2ZpbHRlci5jb25maWcnO1xuaW1wb3J0IHsgU2VhcmNoQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vc2VhcmNoL2NvcmUvYXBpL3NlYXJjaC1jb25maWcnO1xuaW1wb3J0IHsgUXVpY2tGaWx0ZXJzQ29uZmlnIH0gZnJvbSAnLi4vYXBpL3F1aWNrLWZpbHRlci9xdWljay1maWx0ZXJzLmNvbmZpZyc7XG5cbmV4cG9ydCBjbGFzcyBGaWx0ZXJTZXR0aW5ncyB7XG5cblx0cHJpdmF0ZSBmaWx0ZXJpbmdFbmFibGVkOiBib29sZWFuID0gZmFsc2U7XG5cblx0cHJpdmF0ZSBzZWFyY2hFbmFibGVkOiBib29sZWFuID0gZmFsc2U7XG5cblx0cHJpdmF0ZSBxdWlja0ZpbHRlcnNFbmFibGVkOiBib29sZWFuID0gZmFsc2U7XG5cblx0Y29uc3RydWN0b3IoZmlsdGVyaW5nRW5hYmxlZDogYm9vbGVhbiA9IGZhbHNlLFxuXHRcdFx0XHRzZWFyY2hFbmFibGVkOiBib29sZWFuID0gZmFsc2UsXG5cdFx0XHRcdHF1aWNrRmlsdGVyc0VuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZSkge1xuXHRcdHRoaXMuZmlsdGVyaW5nRW5hYmxlZCA9IGZpbHRlcmluZ0VuYWJsZWQ7XG5cdFx0dGhpcy5zZWFyY2hFbmFibGVkID0gc2VhcmNoRW5hYmxlZDtcblx0XHR0aGlzLnF1aWNrRmlsdGVyc0VuYWJsZWQgPSBxdWlja0ZpbHRlcnNFbmFibGVkO1xuXHR9XG5cblx0aXNGaWx0ZXJpbmdFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmZpbHRlcmluZ0VuYWJsZWQ7XG5cdH1cblxuXHRpc1F1aWNrRmlsdGVyaW5nRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5xdWlja0ZpbHRlcnNFbmFibGVkO1xuXHR9XG5cblx0aXNTZWFyY2hpbmdFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnNlYXJjaEVuYWJsZWQ7XG5cdH1cblxuXHRzZXRGaWx0ZXJDb25maWcoY29uZmlnOiBGaWx0ZXJDb25maWcpOiB2b2lkIHtcblx0XHRpZiAoY29uZmlnICYmIGNvbmZpZy5lbmFibGVkICE9PSB1bmRlZmluZWQgJiYgY29uZmlnLmVuYWJsZWQgIT09IG51bGwpIHtcblx0XHRcdHRoaXMuZmlsdGVyaW5nRW5hYmxlZCA9IGNvbmZpZy5lbmFibGVkO1xuXHRcdH1cblx0fVxuXG5cdHNldFNlYXJjaGluZ0NvbmZpZyhjb25maWc6IFNlYXJjaENvbmZpZyk6IHZvaWQge1xuXHRcdGlmIChjb25maWcgJiYgY29uZmlnLmVuYWJsZWQgIT09IHVuZGVmaW5lZCAmJiBjb25maWcuZW5hYmxlZCAhPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5zZWFyY2hFbmFibGVkID0gY29uZmlnLmVuYWJsZWQ7XG5cdFx0fVxuXHR9XG5cblx0c2V0UXVpY2tGaWx0ZXJzQ29uZmlnKGNvbmZpZzogUXVpY2tGaWx0ZXJzQ29uZmlnKTogdm9pZCB7XG5cdFx0aWYgKGNvbmZpZyAmJiBjb25maWcuZW5hYmxlZCAhPT0gdW5kZWZpbmVkICYmIGNvbmZpZy5lbmFibGVkICE9PSBudWxsKSB7XG5cdFx0XHR0aGlzLnF1aWNrRmlsdGVyc0VuYWJsZWQgPSBjb25maWcuZW5hYmxlZDtcblx0XHR9XG5cdH1cblxufVxuIl19