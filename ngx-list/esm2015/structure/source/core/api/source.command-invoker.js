import { Injectable } from '@angular/core';
export class SourceCommandInvoker {
    constructor() {
    }
}
SourceCommandInvoker.decorators = [
    { type: Injectable }
];
SourceCommandInvoker.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLmNvbW1hbmQtaW52b2tlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvc3RydWN0dXJlL3NvdXJjZS9jb3JlL2FwaS9zb3VyY2UuY29tbWFuZC1pbnZva2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFTM0MsTUFBTSxPQUFnQixvQkFBb0I7SUFFekM7SUFDQSxDQUFDOzs7WUFKRCxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlRWRpdFNvdXJjZUl0ZW1QYXJhbXMgfSBmcm9tICcuLi9kb21haW4vb3JpZ2luL2VkaXQvc3RydWN0dXJlLmVkaXQtc291cmNlLWl0ZW0ucGFyYW1zJztcbmltcG9ydCB7IFNlbGVjdGVkUm93IH0gZnJvbSAnLi4vLi4vLi4vZm9ybWF0aW9uL2NvcmUvYXBpL3Jvdy1zZWxlY3RlZC9zZWxlY3RlZC1yb3cnO1xuaW1wb3J0IHsgT3JpZ2luSWQgfSBmcm9tICcuLi9kb21haW4vb3JpZ2luL29yaWdpbi1pZCc7XG5pbXBvcnQgeyBDb21tYW5kSW52b2tlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFNvdXJjZUNvbW1hbmRJbnZva2VyIGltcGxlbWVudHMgQ29tbWFuZEludm9rZXIge1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3RvcigpIHtcblx0fVxuXG5cdGFic3RyYWN0IHNldE9yaWdpbihpdGVtczogQXJyYXk8YW55Piwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZDtcblxuXHRhYnN0cmFjdCBzZXRMb2FkaW5nKGVuYWJsZWQ6IGJvb2xlYW4sIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQ7XG5cblx0YWJzdHJhY3QgZWRpdEl0ZW0ocGFyYW1zOiBTdHJ1Y3R1cmVFZGl0U291cmNlSXRlbVBhcmFtcywgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZDtcblxuXHRhYnN0cmFjdCBlZGl0SXRlbUJ5SW5kZXgoaXRlbUluZGV4OiBudW1iZXIsIGZpZWxkSW5kZXg6IG51bWJlciwgdmFsdWU6IGFueSwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZDtcblxuXHRhYnN0cmFjdCBkZWxldGVSb3cocm93OiBTZWxlY3RlZFJvdywgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZDtcblxuXHRhYnN0cmFjdCBkZWxldGVSb3dzKHJvd3M6IEFycmF5PFNlbGVjdGVkUm93Piwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZDtcblxuXHRhYnN0cmFjdCBkZWxldGVJdGVtQnlJbmRleChpbmRleDogbnVtYmVyLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkO1xuXG5cdGFic3RyYWN0IGRlbGV0ZUl0ZW1CeUlkKGl0ZW1JZDogT3JpZ2luSWQsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQ7XG5cblx0YWJzdHJhY3QgZGVsZXRlTWFueUl0ZW1zQnlJbmRleChpbmRleGVzOiBBcnJheTxudW1iZXI+LCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkO1xuXG5cdGFic3RyYWN0IGRlbGV0ZU1hbnlJdGVtc0J5SXRlbUlkcyhpdGVtSWRzOiBBcnJheTxPcmlnaW5JZD4sIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQ7XG5cbn1cbiJdfQ==