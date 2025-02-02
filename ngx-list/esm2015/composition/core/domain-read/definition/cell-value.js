export var CellValueType;
(function (CellValueType) {
    CellValueType[CellValueType["TEXT"] = 0] = "TEXT";
    CellValueType[CellValueType["HTML"] = 1] = "HTML";
})(CellValueType || (CellValueType = {}));
export class CellValue {
    constructor(value, type) {
        this.value = value;
        this.type = type;
    }
    static text(value) {
        return new CellValue(value, CellValueType.TEXT);
    }
    static HTML(value) {
        return new CellValue(value, CellValueType.HTML);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC12YWx1ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvY29tcG9zaXRpb24vY29yZS9kb21haW4tcmVhZC9kZWZpbml0aW9uL2NlbGwtdmFsdWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxDQUFOLElBQVksYUFHWDtBQUhELFdBQVksYUFBYTtJQUN4QixpREFBSSxDQUFBO0lBQ0osaURBQUksQ0FBQTtBQUNMLENBQUMsRUFIVyxhQUFhLEtBQWIsYUFBYSxRQUd4QjtBQUVELE1BQU0sT0FBTyxTQUFTO0lBRXJCLFlBQW1CLEtBQVUsRUFDVixJQUFtQjtRQURuQixVQUFLLEdBQUwsS0FBSyxDQUFLO1FBQ1YsU0FBSSxHQUFKLElBQUksQ0FBZTtJQUN0QyxDQUFDO0lBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFVO1FBQ3JCLE9BQU8sSUFBSSxTQUFTLENBQUMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFVO1FBQ3JCLE9BQU8sSUFBSSxTQUFTLENBQUMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqRCxDQUFDO0NBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZW51bSBDZWxsVmFsdWVUeXBlIHtcblx0VEVYVCxcblx0SFRNTFxufVxuXG5leHBvcnQgY2xhc3MgQ2VsbFZhbHVlIHtcblxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgdmFsdWU6IGFueSxcblx0XHRcdFx0cHVibGljIHJlYWRvbmx5IHR5cGU6IENlbGxWYWx1ZVR5cGUpIHtcblx0fVxuXG5cdHN0YXRpYyB0ZXh0KHZhbHVlOiBhbnkpOiBDZWxsVmFsdWUge1xuXHRcdHJldHVybiBuZXcgQ2VsbFZhbHVlKHZhbHVlLCBDZWxsVmFsdWVUeXBlLlRFWFQpO1xuXHR9XG5cblx0c3RhdGljIEhUTUwodmFsdWU6IGFueSk6IENlbGxWYWx1ZSB7XG5cdFx0cmV0dXJuIG5ldyBDZWxsVmFsdWUodmFsdWUsIENlbGxWYWx1ZVR5cGUuSFRNTCk7XG5cdH1cblxufVxuIl19