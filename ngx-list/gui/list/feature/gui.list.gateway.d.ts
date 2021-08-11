import { EventEmitter, OnChanges } from '@angular/core';
import { GuiListItemComponent } from './item/gui.list-item.component';
import { GuiListField, GuiListLocalization, GuiListPaging, GuiListSearching, GuiListView } from '../core/api/gui.list.public-api';
import { GuiListPagingConverter } from './paging/gui-list.paging.converter';
import { GuiListCardComponent } from './card/gui.list-card.component';
import { GuiListModeConverter } from './mode/gui-list.mode.converter';
import { ListViewCardTemplate } from '../../../structure/list/feature/card/template/list-view.card-template';
import { ListViewTemplate } from '../../../structure/list/feature/source/template/list-view-template';
import { ListViewMode } from '../../../structure/list/core/domain/mode/list-view-mode';
import { FieldConfig } from '../../../structure/field/core/api/field.config';
import { SearchConfig } from '../../../structure/search/core/api/search-config';
import { NgChanges } from '../../../common/cdk/component/ng-changes';
export declare abstract class GuiListGateway implements OnChanges {
    listItem: GuiListItemComponent;
    listCard: GuiListCardComponent;
    source: Array<any>;
    template: (item: any) => string;
    cardTemplate: (item: any) => string;
    paging: boolean | GuiListPaging;
    view: GuiListView;
    fields: Array<GuiListField>;
    searching: GuiListSearching;
    localization: GuiListLocalization;
    pageChanged: EventEmitter<number>;
    pageSizeChanged: EventEmitter<number>;
    searchPhraseChanged: EventEmitter<string>;
    containerTemplate: ListViewTemplate;
    listCardTemplate: ListViewCardTemplate;
    listViewMode: ListViewMode;
    listViewModeSelector: boolean;
    guiListPagingConverter: GuiListPagingConverter;
    guiListModeConverter: GuiListModeConverter;
    listFields: Array<FieldConfig>;
    searchConfig: SearchConfig;
    ngOnChanges(changes: NgChanges<GuiListGateway>): void;
}
