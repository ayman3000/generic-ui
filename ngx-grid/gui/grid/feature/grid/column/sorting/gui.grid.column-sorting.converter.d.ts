import { ColumnSortingConfig } from '../../../../../../composition/core/api/sort/column-sorting.config';
import { GuiColumnSorting } from '../../../../../../gui.grid.index';
export declare class GuiGridColumnSortingConverter {
    convert(sortingConfig: boolean | GuiColumnSorting): ColumnSortingConfig;
}
