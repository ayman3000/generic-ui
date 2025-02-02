export function checkInput(prop) {
    return {
        isChanged: () => {
            return hasChanged(prop);
        },
        ifChanged: (callback) => {
            if (hasChanged(prop)) {
                callback();
            }
        }
    };
}
export function ifChanged(prop, callback) {
    if (hasChanged(prop)) {
        callback(prop.currentValue);
    }
}
export function hasChanged(prop) {
    return prop !== undefined && prop.currentValue !== undefined;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2suaW5wdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2NvbW1vbi9jZGsvY29tcG9uZW50L2NoZWNrLmlucHV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVBLE1BQU0sVUFBVSxVQUFVLENBQUksSUFBZ0I7SUFFN0MsT0FBTztRQUNOLFNBQVMsRUFBRSxHQUFHLEVBQUU7WUFDZixPQUFPLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QixDQUFDO1FBQ0QsU0FBUyxFQUFFLENBQUMsUUFBb0IsRUFBRSxFQUFFO1lBQ25DLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNyQixRQUFRLEVBQUUsQ0FBQzthQUNYO1FBQ0YsQ0FBQztLQUNlLENBQUM7QUFFbkIsQ0FBQztBQUVELE1BQU0sVUFBVSxTQUFTLENBQUksSUFBZ0IsRUFBRSxRQUE4QjtJQUM1RSxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUNyQixRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0tBQzVCO0FBQ0YsQ0FBQztBQUVELE1BQU0sVUFBVSxVQUFVLENBQUksSUFBZ0I7SUFDN0MsT0FBTyxJQUFJLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxZQUFZLEtBQUssU0FBUyxDQUFDO0FBQzlELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VzIH0gZnJvbSAnLi9uZy1jaGFuZ2VzJztcblxuaW50ZXJmYWNlIElucHV0Q2hhbmdlcyB7XG5cblx0aXNDaGFuZ2VkKCk6IGJvb2xlYW47XG5cblx0aWZDaGFuZ2VkKGNhbGxiYWNrOiAoKSA9PiB2b2lkKTogdm9pZDtcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tJbnB1dDxUPihwcm9wOiBDaGFuZ2VzPFQ+KTogSW5wdXRDaGFuZ2VzIHtcblxuXHRyZXR1cm4ge1xuXHRcdGlzQ2hhbmdlZDogKCkgPT4ge1xuXHRcdFx0cmV0dXJuIGhhc0NoYW5nZWQocHJvcCk7XG5cdFx0fSxcblx0XHRpZkNoYW5nZWQ6IChjYWxsYmFjazogKCkgPT4gdm9pZCkgPT4ge1xuXHRcdFx0aWYgKGhhc0NoYW5nZWQocHJvcCkpIHtcblx0XHRcdFx0Y2FsbGJhY2soKTtcblx0XHRcdH1cblx0XHR9XG5cdH0gYXMgSW5wdXRDaGFuZ2VzO1xuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpZkNoYW5nZWQ8VD4ocHJvcDogQ2hhbmdlczxUPiwgY2FsbGJhY2s6ICh2YWx1ZTogYW55KSA9PiB2b2lkKTogdm9pZCB7XG5cdGlmIChoYXNDaGFuZ2VkKHByb3ApKSB7XG5cdFx0Y2FsbGJhY2socHJvcC5jdXJyZW50VmFsdWUpO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNDaGFuZ2VkPFQ+KHByb3A6IENoYW5nZXM8VD4pIHtcblx0cmV0dXJuIHByb3AgIT09IHVuZGVmaW5lZCAmJiBwcm9wLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkO1xufVxuIl19