import { SummariesValues } from '../summaries.values';
export class NumberSummarizedValues extends SummariesValues {
    constructor(sum, min, max, average, median) {
        super();
        this.sum = this.setValueWithPrecision(sum);
        this.min = this.setValueWithPrecision(min);
        this.max = this.setValueWithPrecision(max);
        this.average = this.setValueWithPrecision(average);
        this.median = this.setValueWithPrecision(median);
    }
    setValueWithPrecision(value) {
        if (!value && value !== 0) {
            return null;
        }
        if (value === 0) {
            return 0;
        }
        return +((value).toFixed(2));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLXN1bW1hcml6ZWQudmFsdWVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9zdHJ1Y3R1cmUvc3VtbWFyaWVzL2NvcmUvZG9tYWluL2NhbGN1bGF0aW9uL251bWJlci9udW1iZXItc3VtbWFyaXplZC52YWx1ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXRELE1BQU0sT0FBTyxzQkFBdUIsU0FBUSxlQUFlO0lBUTFELFlBQVksR0FBVyxFQUNwQixHQUFXLEVBQ1gsR0FBVyxFQUNYLE9BQWUsRUFDZixNQUFjO1FBQ2hCLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVPLHFCQUFxQixDQUFDLEtBQWE7UUFDMUMsSUFBSSxDQUFDLEtBQUssSUFBSSxLQUFLLEtBQUssQ0FBQyxFQUFFO1lBQzFCLE9BQU8sSUFBSSxDQUFDO1NBQ1o7UUFFRCxJQUFJLEtBQUssS0FBSyxDQUFDLEVBQUU7WUFDaEIsT0FBTyxDQUFDLENBQUM7U0FDVDtRQUVELE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUIsQ0FBQztDQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3VtbWFyaWVzVmFsdWVzIH0gZnJvbSAnLi4vc3VtbWFyaWVzLnZhbHVlcyc7XG5cbmV4cG9ydCBjbGFzcyBOdW1iZXJTdW1tYXJpemVkVmFsdWVzIGV4dGVuZHMgU3VtbWFyaWVzVmFsdWVzIHtcblxuXHRwdWJsaWMgcmVhZG9ubHkgc3VtOiBudW1iZXI7XG5cdHB1YmxpYyByZWFkb25seSBtaW46IG51bWJlcjtcblx0cHVibGljIHJlYWRvbmx5IG1heDogbnVtYmVyO1xuXHRwdWJsaWMgcmVhZG9ubHkgYXZlcmFnZTogbnVtYmVyO1xuXHRwdWJsaWMgcmVhZG9ubHkgbWVkaWFuOiBudW1iZXI7XG5cblx0Y29uc3RydWN0b3Ioc3VtOiBudW1iZXIsXG5cdFx0XHRcdG1pbjogbnVtYmVyLFxuXHRcdFx0XHRtYXg6IG51bWJlcixcblx0XHRcdFx0YXZlcmFnZTogbnVtYmVyLFxuXHRcdFx0XHRtZWRpYW46IG51bWJlcikge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5zdW0gPSB0aGlzLnNldFZhbHVlV2l0aFByZWNpc2lvbihzdW0pO1xuXHRcdHRoaXMubWluID0gdGhpcy5zZXRWYWx1ZVdpdGhQcmVjaXNpb24obWluKTtcblx0XHR0aGlzLm1heCA9IHRoaXMuc2V0VmFsdWVXaXRoUHJlY2lzaW9uKG1heCk7XG5cdFx0dGhpcy5hdmVyYWdlID0gdGhpcy5zZXRWYWx1ZVdpdGhQcmVjaXNpb24oYXZlcmFnZSk7XG5cdFx0dGhpcy5tZWRpYW4gPSB0aGlzLnNldFZhbHVlV2l0aFByZWNpc2lvbihtZWRpYW4pO1xuXHR9XG5cblx0cHJpdmF0ZSBzZXRWYWx1ZVdpdGhQcmVjaXNpb24odmFsdWU6IG51bWJlcik6IG51bWJlciB7XG5cdFx0aWYgKCF2YWx1ZSAmJiB2YWx1ZSAhPT0gMCkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0aWYgKHZhbHVlID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gMDtcblx0XHR9XG5cblx0XHRyZXR1cm4gKygodmFsdWUpLnRvRml4ZWQoMikpO1xuXHR9XG5cbn1cbiJdfQ==