import { Injectable } from '@angular/core';
import { Archive } from '@generic-ui/hermes';
import { RowSelectionType } from '../row-selected/row-selection';
export class RowSelectionTypeArchive extends Archive {
    constructor() {
        super(RowSelectionTypeArchive.DEFAULT_ROW_SELECTION_TYPE);
    }
}
RowSelectionTypeArchive.DEFAULT_ROW_SELECTION_TYPE = RowSelectionType.ROW;
RowSelectionTypeArchive.decorators = [
    { type: Injectable }
];
RowSelectionTypeArchive.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LXNlbGVjdGlvbi10eXBlLmFyY2hpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS9mb3JtYXRpb24vY29yZS9hcGkvdHlwZS9yb3ctc2VsZWN0aW9uLXR5cGUuYXJjaGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUU3QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUdqRSxNQUFNLE9BQU8sdUJBQXdCLFNBQVEsT0FBeUI7SUFJckU7UUFDQyxLQUFLLENBQUMsdUJBQXVCLENBQUMsMEJBQTBCLENBQUMsQ0FBQztJQUMzRCxDQUFDOztBQUplLGtEQUEwQixHQUFHLGdCQUFnQixDQUFDLEdBQUcsQ0FBQzs7WUFIbEUsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQXJjaGl2ZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFJvd1NlbGVjdGlvblR5cGUgfSBmcm9tICcuLi9yb3ctc2VsZWN0ZWQvcm93LXNlbGVjdGlvbic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBSb3dTZWxlY3Rpb25UeXBlQXJjaGl2ZSBleHRlbmRzIEFyY2hpdmU8Um93U2VsZWN0aW9uVHlwZT4ge1xuXG5cdHN0YXRpYyByZWFkb25seSBERUZBVUxUX1JPV19TRUxFQ1RJT05fVFlQRSA9IFJvd1NlbGVjdGlvblR5cGUuUk9XO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKFJvd1NlbGVjdGlvblR5cGVBcmNoaXZlLkRFRkFVTFRfUk9XX1NFTEVDVElPTl9UWVBFKTtcblx0fVxufVxuIl19