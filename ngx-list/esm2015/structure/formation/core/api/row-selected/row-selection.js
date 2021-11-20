import { GenericBuilder } from '../../../../../common/cdk/generic-builder';
export var RowSelectionType;
(function (RowSelectionType) {
    RowSelectionType[RowSelectionType["ROW"] = 0] = "ROW";
    RowSelectionType[RowSelectionType["CHECKBOX"] = 1] = "CHECKBOX";
})(RowSelectionType || (RowSelectionType = {}));
export var RowSelectionMode;
(function (RowSelectionMode) {
    RowSelectionMode[RowSelectionMode["SINGLE"] = 0] = "SINGLE";
    RowSelectionMode[RowSelectionMode["MULTIPLE"] = 1] = "MULTIPLE";
})(RowSelectionMode || (RowSelectionMode = {}));
export class RowSelection {
    constructor(config) {
        if (config.enabled !== undefined) {
            this.enabled = config.enabled;
        }
        if (config.mode !== undefined) {
            this.mode = config.mode;
        }
        if (config.type !== undefined) {
            this.type = config.type;
        }
    }
    isModeDefined() {
        return this.mode !== undefined;
    }
    isTypeDefined() {
        return this.type !== undefined;
    }
    isEnabledDefined() {
        return this.enabled !== undefined;
    }
    isEnabled() {
        return this.enabled;
    }
    getMode() {
        return this.mode;
    }
    getType() {
        return this.type;
    }
}
// eslint-disable-next-line @typescript-eslint/member-ordering
RowSelection.Builder = class RowSelectionBuilder extends GenericBuilder {
    constructor() {
        super();
    }
    buildObject() {
        return new RowSelection({
            enabled: this.enabled,
            type: this.type,
            mode: this.mode
        });
    }
    withEnabled(enabled) {
        this.enabled = enabled;
        return this;
    }
    withType(type) {
        this.type = type;
        return this;
    }
    withMode(mode) {
        this.mode = mode;
        return this;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LXNlbGVjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvc3RydWN0dXJlL2Zvcm1hdGlvbi9jb3JlL2FwaS9yb3ctc2VsZWN0ZWQvcm93LXNlbGVjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFFM0UsTUFBTSxDQUFOLElBQVksZ0JBR1g7QUFIRCxXQUFZLGdCQUFnQjtJQUMzQixxREFBRyxDQUFBO0lBQ0gsK0RBQVEsQ0FBQTtBQUNULENBQUMsRUFIVyxnQkFBZ0IsS0FBaEIsZ0JBQWdCLFFBRzNCO0FBRUQsTUFBTSxDQUFOLElBQVksZ0JBR1g7QUFIRCxXQUFZLGdCQUFnQjtJQUMzQiwyREFBTSxDQUFBO0lBQ04sK0RBQVEsQ0FBQTtBQUNULENBQUMsRUFIVyxnQkFBZ0IsS0FBaEIsZ0JBQWdCLFFBRzNCO0FBRUQsTUFBTSxPQUFPLFlBQVk7SUFReEIsWUFBb0IsTUFJbkI7UUFDQSxJQUFJLE1BQU0sQ0FBQyxPQUFPLEtBQUssU0FBUyxFQUFFO1lBQ2pDLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztTQUM5QjtRQUVELElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7WUFDOUIsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1NBQ3hCO1FBRUQsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUM5QixJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7U0FDeEI7SUFDRixDQUFDO0lBRUQsYUFBYTtRQUNaLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxTQUFTLENBQUM7SUFDaEMsQ0FBQztJQUVELGFBQWE7UUFDWixPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxnQkFBZ0I7UUFDZixPQUFPLElBQUksQ0FBQyxPQUFPLEtBQUssU0FBUyxDQUFDO0lBQ25DLENBQUM7SUFFRCxTQUFTO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxPQUFPO1FBQ04sT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxPQUFPO1FBQ04sT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2xCLENBQUM7O0FBRUQsOERBQThEO0FBQ3ZELG9CQUFPLEdBQUcsTUFBTSxtQkFBb0IsU0FBUSxjQUE0QjtJQVE5RTtRQUNDLEtBQUssRUFBRSxDQUFDO0lBQ1QsQ0FBQztJQUVELFdBQVc7UUFDVixPQUFPLElBQUksWUFBWSxDQUFDO1lBQ3ZCLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztZQUNyQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7U0FDZixDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQWdCO1FBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQztJQUVELFFBQVEsQ0FBQyxJQUFzQjtRQUM5QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7SUFFRCxRQUFRLENBQUMsSUFBc0I7UUFDOUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDO0NBRUQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdlbmVyaWNCdWlsZGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9nZW5lcmljLWJ1aWxkZXInO1xuXG5leHBvcnQgZW51bSBSb3dTZWxlY3Rpb25UeXBlIHtcblx0Uk9XLFxuXHRDSEVDS0JPWFxufVxuXG5leHBvcnQgZW51bSBSb3dTZWxlY3Rpb25Nb2RlIHtcblx0U0lOR0xFLFxuXHRNVUxUSVBMRVxufVxuXG5leHBvcnQgY2xhc3MgUm93U2VsZWN0aW9uIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGVuYWJsZWQ6IGJvb2xlYW47XG5cblx0cHJpdmF0ZSByZWFkb25seSB0eXBlOiBSb3dTZWxlY3Rpb25UeXBlO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgbW9kZTogUm93U2VsZWN0aW9uTW9kZTtcblxuXHRwcml2YXRlIGNvbnN0cnVjdG9yKGNvbmZpZzoge1xuXHRcdGVuYWJsZWQ/OiBib29sZWFuLFxuXHRcdG1vZGU/OiBSb3dTZWxlY3Rpb25Nb2RlLFxuXHRcdHR5cGU/OiBSb3dTZWxlY3Rpb25UeXBlXG5cdH0pIHtcblx0XHRpZiAoY29uZmlnLmVuYWJsZWQgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5lbmFibGVkID0gY29uZmlnLmVuYWJsZWQ7XG5cdFx0fVxuXG5cdFx0aWYgKGNvbmZpZy5tb2RlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMubW9kZSA9IGNvbmZpZy5tb2RlO1xuXHRcdH1cblxuXHRcdGlmIChjb25maWcudHlwZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnR5cGUgPSBjb25maWcudHlwZTtcblx0XHR9XG5cdH1cblxuXHRpc01vZGVEZWZpbmVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm1vZGUgIT09IHVuZGVmaW5lZDtcblx0fVxuXG5cdGlzVHlwZURlZmluZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMudHlwZSAhPT0gdW5kZWZpbmVkO1xuXHR9XG5cblx0aXNFbmFibGVkRGVmaW5lZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5lbmFibGVkICE9PSB1bmRlZmluZWQ7XG5cdH1cblxuXHRpc0VuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZW5hYmxlZDtcblx0fVxuXG5cdGdldE1vZGUoKTogUm93U2VsZWN0aW9uTW9kZSB7XG5cdFx0cmV0dXJuIHRoaXMubW9kZTtcblx0fVxuXG5cdGdldFR5cGUoKTogUm93U2VsZWN0aW9uVHlwZSB7XG5cdFx0cmV0dXJuIHRoaXMudHlwZTtcblx0fVxuXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbWVtYmVyLW9yZGVyaW5nXG5cdHN0YXRpYyBCdWlsZGVyID0gY2xhc3MgUm93U2VsZWN0aW9uQnVpbGRlciBleHRlbmRzIEdlbmVyaWNCdWlsZGVyPFJvd1NlbGVjdGlvbj4ge1xuXG5cdFx0ZW5hYmxlZDogYm9vbGVhbjtcblxuXHRcdHR5cGU6IFJvd1NlbGVjdGlvblR5cGU7XG5cblx0XHRtb2RlOiBSb3dTZWxlY3Rpb25Nb2RlO1xuXG5cdFx0Y29uc3RydWN0b3IoKSB7XG5cdFx0XHRzdXBlcigpO1xuXHRcdH1cblxuXHRcdGJ1aWxkT2JqZWN0KCk6IFJvd1NlbGVjdGlvbiB7XG5cdFx0XHRyZXR1cm4gbmV3IFJvd1NlbGVjdGlvbih7XG5cdFx0XHRcdGVuYWJsZWQ6IHRoaXMuZW5hYmxlZCxcblx0XHRcdFx0dHlwZTogdGhpcy50eXBlLFxuXHRcdFx0XHRtb2RlOiB0aGlzLm1vZGVcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdHdpdGhFbmFibGVkKGVuYWJsZWQ6IGJvb2xlYW4pOiBSb3dTZWxlY3Rpb25CdWlsZGVyIHtcblx0XHRcdHRoaXMuZW5hYmxlZCA9IGVuYWJsZWQ7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cblx0XHR3aXRoVHlwZSh0eXBlOiBSb3dTZWxlY3Rpb25UeXBlKTogUm93U2VsZWN0aW9uQnVpbGRlciB7XG5cdFx0XHR0aGlzLnR5cGUgPSB0eXBlO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXG5cdFx0d2l0aE1vZGUobW9kZTogUm93U2VsZWN0aW9uTW9kZSk6IFJvd1NlbGVjdGlvbkJ1aWxkZXIge1xuXHRcdFx0dGhpcy5tb2RlID0gbW9kZTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblxuXHR9O1xuXG59XG4iXX0=