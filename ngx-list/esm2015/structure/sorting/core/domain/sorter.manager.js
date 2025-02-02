import { RandomStringGenerator } from '@generic-ui/hermes';
import { Sorter } from './sorter';
import { SorterId } from '../api/sorter.id';
import { SortOrder } from '../../../../composition/core/domain/column/sort/sort-order';
export class SorterManager {
    constructor(enabled = false, multi = false) {
        this.sorters = new Map();
        this.enabled = enabled;
        this.multi = multi;
    }
    setConfig(config) {
        if (config && config.enabled !== undefined && config.enabled !== null) {
            this.enabled = config.enabled;
        }
        if (config && config.multiSorting !== undefined && config.multiSorting !== null) {
            this.multi = config.multiSorting;
            this.sorters.clear();
        }
    }
    toggle(field) {
        const fieldId = field.getId(), sorter = this.sorters.get(fieldId.getId());
        if (sorter) {
            if (sorter.hasDirection()) {
                sorter.changeDirection();
            }
            else {
                this.delete(fieldId);
            }
        }
        else {
            this.add(field);
        }
    }
    setSortOrder(field, sortOrder) {
        const fieldId = field.getId(), sorter = this.sorters.get(fieldId.getId());
        if (sortOrder === SortOrder.NONE) {
            this.delete(fieldId);
        }
        else if (sortOrder === SortOrder.ASC || sortOrder === SortOrder.DESC) {
            this.delete(fieldId);
            const direction = sortOrder === SortOrder.ASC;
            this.add(field, direction);
        }
    }
    add(field, direction = true) {
        this.addSorter(field.getId(), new Sorter(new SorterId(RandomStringGenerator.generate()), field, direction));
    }
    addSorter(fieldId, sorter) {
        if (!this.multi) {
            this.sorters.clear();
        }
        this.sorters.set(fieldId.getId(), sorter);
    }
    delete(fieldId) {
        this.sorters.delete(fieldId.getId());
    }
    update() {
    }
    // TODO Remove the loop from sorter.sort
    sort(entities) {
        const sorters = this.getAll();
        let sortedEntities = Array.from(entities);
        for (const sorter of sorters) {
            sortedEntities = sorter.sort(sortedEntities);
        }
        return sortedEntities;
    }
    getAll() {
        if (!this.enabled) {
            return [];
        }
        return Array.from(this.sorters)
            .map((arr) => arr[1])
            .sort((sorterOne, sorterTwo) => {
            return sorterOne.getRank() - sorterTwo.getRank();
        })
            .reverse();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGVyLm1hbmFnZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS9zb3J0aW5nL2NvcmUvZG9tYWluL3NvcnRlci5tYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRTNELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFbEMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRzVDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUl2RixNQUFNLE9BQU8sYUFBYTtJQVF6QixZQUFZLFVBQW1CLEtBQUssRUFDakMsUUFBaUIsS0FBSztRQUhSLFlBQU8sR0FBRyxJQUFJLEdBQUcsRUFBa0IsQ0FBQztRQUlwRCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBRUQsU0FBUyxDQUFDLE1BQXFCO1FBRTlCLElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxPQUFPLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEtBQUssSUFBSSxFQUFFO1lBQ3RFLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztTQUM5QjtRQUVELElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxZQUFZLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxZQUFZLEtBQUssSUFBSSxFQUFFO1lBQ2hGLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQztZQUNqQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3JCO0lBRUYsQ0FBQztJQUVELE1BQU0sQ0FBQyxLQUFrQjtR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QUU7WUFDOUMsT0FBTyxTQUFTLENBQUMsT0FBTyxFQUFFLEdBQUcsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2xELENBQUMsQ0FBQzthQUNELE9BQU8sRUFBRSxDQUFDO0lBQ2YsQ0FBQztDQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmFuZG9tU3RyaW5nR2VuZXJhdG9yIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU29ydGVyIH0gZnJvbSAnLi9zb3J0ZXInO1xuaW1wb3J0IHsgU29ydGluZ0NvbmZpZyB9IGZyb20gJy4uL2FwaS9zb3J0aW5nLWNvbmZpZyc7XG5pbXBvcnQgeyBTb3J0ZXJJZCB9IGZyb20gJy4uL2FwaS9zb3J0ZXIuaWQnO1xuaW1wb3J0IHsgRmllbGRJZCB9IGZyb20gJy4uLy4uLy4uL2ZpZWxkL2NvcmUvZG9tYWluL2ZpZWxkL2ZpZWxkLmlkJztcbmltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi8uLi9zb3VyY2UvY29yZS9kb21haW4vb3JpZ2luL29yaWdpbi1pdGVtLWVudGl0eSc7XG5pbXBvcnQgeyBTb3J0T3JkZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2RvbWFpbi9jb2x1bW4vc29ydC9zb3J0LW9yZGVyJztcbmltcG9ydCB7IEZpZWxkRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vZmllbGQvY29yZS9kb21haW4vZmllbGQvZmllbGQuZW50aXR5JztcblxuXG5leHBvcnQgY2xhc3MgU29ydGVyTWFuYWdlciB7XG5cblx0cHJpdmF0ZSBlbmFibGVkOiBib29sZWFuO1xuXG5cdHByaXZhdGUgbXVsdGk6IGJvb2xlYW47XG5cblx0cHJpdmF0ZSByZWFkb25seSBzb3J0ZXJzID0gbmV3IE1hcDxzdHJpbmcsIFNvcnRlcj4oKTtcblxuXHRjb25zdHJ1Y3RvcihlbmFibGVkOiBib29sZWFuID0gZmFsc2UsXG5cdFx0XHRcdG11bHRpOiBib29sZWFuID0gZmFsc2UpIHtcblx0XHR0aGlzLmVuYWJsZWQgPSBlbmFibGVkO1xuXHRcdHRoaXMubXVsdGkgPSBtdWx0aTtcblx0fVxuXG5cdHNldENvbmZpZyhjb25maWc6IFNvcnRpbmdDb25maWcpOiB2b2lkIHtcblxuXHRcdGlmIChjb25maWcgJiYgY29uZmlnLmVuYWJsZWQgIT09IHVuZGVmaW5lZCAmJiBjb25maWcuZW5hYmxlZCAhPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5lbmFibGVkID0gY29uZmlnLmVuYWJsZWQ7XG5cdFx0fVxuXG5cdFx0aWYgKGNvbmZpZyAmJiBjb25maWcubXVsdGlTb3J0aW5nICE9PSB1bmRlZmluZWQgJiYgY29uZmlnLm11bHRpU29ydGluZyAhPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5tdWx0aSA9IGNvbmZpZy5tdWx0aVNvcnRpbmc7XG5cdFx0XHR0aGlzLnNvcnRlcnMuY2xlYXIoKTtcblx0XHR9XG5cblx0fVxuXG5cdHRvZ2dsZShmaWVsZDogRmllbGRFbnRpdHkpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGZpZWxkSWQgPSBmaWVsZC5nZXRJZCgpLFxuXHRcdFx0c29ydGVyID0gdGhpcy5zb3J0ZXJzLmdldChmaWVsZElkLmdldElkKCkpO1xuXG5cdFx0aWYgKHNvcnRlcikge1xuXHRcdFx0aWYgKHNvcnRlci5oYXNEaXJlY3Rpb24oKSkge1xuXHRcdFx0XHRzb3J0ZXIuY2hhbmdlRGlyZWN0aW9uKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmRlbGV0ZShmaWVsZElkKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5hZGQoZmllbGQpO1xuXHRcdH1cblxuXHR9XG5cblx0c2V0U29ydE9yZGVyKGZpZWxkOiBGaWVsZEVudGl0eSwgc29ydE9yZGVyOiBTb3J0T3JkZXIpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGZpZWxkSWQgPSBmaWVsZC5nZXRJZCgpLFxuXHRcdFx0c29ydGVyID0gdGhpcy5zb3J0ZXJzLmdldChmaWVsZElkLmdldElkKCkpO1xuXG5cdFx0aWYgKHNvcnRPcmRlciA9PT0gU29ydE9yZGVyLk5PTkUpIHtcblx0XHRcdHRoaXMuZGVsZXRlKGZpZWxkSWQpO1xuXHRcdH0gZWxzZSBpZiAoc29ydE9yZGVyID09PSBTb3J0T3JkZXIuQVNDIHx8IHNvcnRPcmRlciA9PT0gU29ydE9yZGVyLkRFU0MpIHtcblxuXHRcdFx0dGhpcy5kZWxldGUoZmllbGRJZCk7XG5cblx0XHRcdGNvbnN0IGRpcmVjdGlvbiA9IHNvcnRPcmRlciA9PT0gU29ydE9yZGVyLkFTQztcblxuXHRcdFx0dGhpcy5hZGQoZmllbGQsIGRpcmVjdGlvbik7XG5cdFx0fVxuXHR9XG5cblx0YWRkKGZpZWxkOiBGaWVsZEVudGl0eSwgZGlyZWN0aW9uID0gdHJ1ZSk6IHZvaWQge1xuXHRcdHRoaXMuYWRkU29ydGVyKGZpZWxkLmdldElkKCksIG5ldyBTb3J0ZXIobmV3IFNvcnRlcklkKFJhbmRvbVN0cmluZ0dlbmVyYXRvci5nZW5lcmF0ZSgpKSwgZmllbGQsIGRpcmVjdGlvbikpO1xuXHR9XG5cblx0YWRkU29ydGVyKGZpZWxkSWQ6IEZpZWxkSWQsIHNvcnRlcjogU29ydGVyKTogdm9pZCB7XG5cblx0XHRpZiAoIXRoaXMubXVsdGkpIHtcblx0XHRcdHRoaXMuc29ydGVycy5jbGVhcigpO1xuXHRcdH1cblxuXHRcdHRoaXMuc29ydGVycy5zZXQoZmllbGRJZC5nZXRJZCgpLCBzb3J0ZXIpO1xuXHR9XG5cblx0ZGVsZXRlKGZpZWxkSWQ6IEZpZWxkSWQpOiB2b2lkIHtcblx0XHR0aGlzLnNvcnRlcnMuZGVsZXRlKGZpZWxkSWQuZ2V0SWQoKSk7XG5cdH1cblxuXHR1cGRhdGUoKTogdm9pZCB7XG5cdH1cblxuXHQvLyBUT0RPIFJlbW92ZSB0aGUgbG9vcCBmcm9tIHNvcnRlci5zb3J0XG5cdHNvcnQoZW50aXRpZXM6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+KTogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4ge1xuXHRcdGNvbnN0IHNvcnRlcnMgPSB0aGlzLmdldEFsbCgpO1xuXG5cdFx0bGV0IHNvcnRlZEVudGl0aWVzID0gQXJyYXkuZnJvbShlbnRpdGllcyk7XG5cblx0XHRmb3IgKGNvbnN0IHNvcnRlciBvZiBzb3J0ZXJzKSB7XG5cdFx0XHRzb3J0ZWRFbnRpdGllcyA9IHNvcnRlci5zb3J0KHNvcnRlZEVudGl0aWVzKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gc29ydGVkRW50aXRpZXM7XG5cdH1cblxuXHRnZXRBbGwoKTogQXJyYXk8U29ydGVyPiB7XG5cblx0XHRpZiAoIXRoaXMuZW5hYmxlZCkge1xuXHRcdFx0cmV0dXJuIFtdO1xuXHRcdH1cblxuXHRcdHJldHVybiBBcnJheS5mcm9tKHRoaXMuc29ydGVycylcblx0XHRcdFx0XHQubWFwKChhcnIpID0+IGFyclsxXSlcblx0XHRcdFx0XHQuc29ydCgoc29ydGVyT25lOiBTb3J0ZXIsIHNvcnRlclR3bzogU29ydGVyKSA9PiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gc29ydGVyT25lLmdldFJhbmsoKSAtIHNvcnRlclR3by5nZXRSYW5rKCk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQucmV2ZXJzZSgpO1xuXHR9XG59XG4iXX0=