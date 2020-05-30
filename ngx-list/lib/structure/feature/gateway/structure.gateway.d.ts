import { EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { ColumnConfig } from '../../../composition/domain/column/column.config';
import { PagingConfig } from '../../../../structure/paging/domain-api/paging-config';
import { SchemaTheme } from '../../../../schema/domain/theme/schema-theme';
import { SchemaRowColoring } from '../../../../schema/domain/coloring/schema-row-coloring';
import { SortingConfig } from '../../../../structure/sorting/domain-api/sorting-config';
import { FilterConfig } from '../../domain-api/filter/filter-config';
import { QuickFiltersConfig } from '../../domain-api/filter/quick-filters.config';
import { SearchConfig } from '../../../../structure/search/domain-api/search-config';
import { SummariesConfig } from '../../domain-api/summaries/summaries-config';
import { EditemItemValues } from '../../domain-api/source/event/editem-item.values';
import { StructureId } from '../../domain/structure.id';
import { CompositionId } from '../../../composition/domain/composition.id';
import { StructureCommandDispatcher } from '../../domain-api/structure.command-dispatcher';
import { PagingCommandDispatcher } from '../../../../structure/paging/domain-api/paging.command-dispatcher';
import { PagingEventRepository } from '../../../../structure/paging/domain-api/paging.event-repository';
import { SourceCommandDispatcher } from '../../domain-api/source/source.command-dispatcher';
import { SourceEventService } from '../../domain-api/source/event/source-event.service';
import { CompositionCommandDispatcher } from '../../../composition/domain-api/composition.command-dispatcher';
import { CompositionEventRepository } from '../../../composition/domain-api/composition.event-repository';
import { FormationEventService } from '../../domain-api/formation/formation-event.service';
import { StructureEditModeArchive } from '../edit/structure.edit-mode.archive';
import { StructureCellEditArchive } from '../edit/structure.cell-edit.archive';
import { StructureInfoPanelArchive } from '../panel/info/structure.info-panel.archive';
import { StructureSummariesConfigService } from '../panel/summaries/structure.summaries-config.service';
import { StructureCellEditStore } from '../edit/structure.cell-edit.store';
import { ColumnMenuConfig } from '../../domain-api/column-menu-config';
import { StructureColumnMenuConfigArchive } from '../header/menu/config/structure.column-menu-config.archive';
import { PagingDisplayModeArchive } from '../../../../structure/paging/feature/mode/paging-display-mode.archive';
import { StructureRowSelectEnabledArchive } from '../content/row/structure.row-select-enabled.archive';
import { SearchEventRepository } from '../../../../structure/search/domain-api/search.event-repository';
import { SchemaCommandDispatcher } from '../../../../schema/domain-api/schema.command-dispatcher';
import { StructureHeaderBottomEnabledArchive } from '../header/structure-header-bottom-enabled.archive';
import { StructureHeaderTopEnabledArchive } from '../header/structure-header-top-enabled.archive';
import { SchemaEventRepository } from '../../../../schema/domain-api/schema.event-repository';
import { SchemaReadModelRootId } from '../../../../schema/domain-api/read/schema.read-model-root-id';
import { RowColoring } from '../../../../schema/domain-api/row-coloring';
import { RowDetailConfig } from '../row-detail/row-detail.config';
import { StructureRowDetailConfigArchive } from '../row-detail/structure.row-detail.config-archive';
import { TitlePanelConfig } from '../panel/title-panel/title-panel.config';
import { FooterPanelConfig } from '../panel/footer-panel/footer-panel.config';
import { StructureTitlePanelConfigArchive } from '../panel/title-panel/structure.title-panel.config-archive';
import { StructureFooterPanelConfigArchive } from '../panel/footer-panel/structure.footer-panel.config-archive';
import { InfoPanelConfig } from '../panel/info/info-panel.config';
import { StructureInfoPanelConfigService } from '../panel/info/structure.info-panel-config.service';
import { SortingCommandDispatcher } from '../../../../structure/sorting/domain-api/sorting.command-dispatcher';
import { SearchCommandDispatcher } from '../../../../structure/search/domain-api/search.command-dispatcher';
import { FieldCommandDispatcher } from '../../../../structure/field/domain-api/field.command-dispatcher';
import { CommandDispatcher, DomainEventBus } from '@generic-ui/hermes';
import { StructureColumnInputHandler } from './column/structure-column.input-handler';
import { ColumnFieldFactory } from '../../../composition/domain/column/field/colum-field.factory';
/** @internal */
export declare abstract class StructureGateway extends SmartComponent implements OnChanges, OnInit {
    protected readonly domainEventBus: DomainEventBus;
    protected readonly commandDispatcher: CommandDispatcher;
    structureId: StructureId;
    protected compositionId: CompositionId;
    protected schemaId: SchemaReadModelRootId;
    protected structureCommandService: StructureCommandDispatcher;
    protected structurePagingCommandDispatcher: PagingCommandDispatcher;
    protected pagingEventRepository: PagingEventRepository;
    protected sortingCommandDispatcher: SortingCommandDispatcher;
    protected searchCommandDispatcher: SearchCommandDispatcher;
    protected fieldCommandDispatcher: FieldCommandDispatcher;
    protected sourceCommandService: SourceCommandDispatcher;
    protected sourceEventService: SourceEventService;
    protected schemaCommandDispatcher: SchemaCommandDispatcher;
    protected compositionCommandDispatcher: CompositionCommandDispatcher;
    protected compositionEventService: CompositionEventRepository;
    protected formationEventService: FormationEventService;
    protected structureEditModeArchive: StructureEditModeArchive;
    protected structureCellEditArchive: StructureCellEditArchive;
    protected structureInfoPanelEnabledArchive: StructureInfoPanelArchive;
    protected structureInfoPanelConfigService: StructureInfoPanelConfigService;
    protected structureSummariesConfigService: StructureSummariesConfigService;
    protected structureCellEditStore: StructureCellEditStore;
    protected columnFieldFactory: ColumnFieldFactory;
    protected structureColumnMenuConfigArchive: StructureColumnMenuConfigArchive;
    protected structurePagingDisplayModeArchive: PagingDisplayModeArchive;
    protected structureRowSelectEnabledArchive: StructureRowSelectEnabledArchive;
    protected searchEventRepository: SearchEventRepository;
    protected structureHeaderTopEnabledArchive: StructureHeaderTopEnabledArchive;
    protected structureHeaderBottomEnabledArchive: StructureHeaderBottomEnabledArchive;
    protected structureDetailViewConfigArchive: StructureRowDetailConfigArchive;
    protected structureTitlePanelConfigArchive: StructureTitlePanelConfigArchive;
    protected structureFooterPanelConfigArchive: StructureFooterPanelConfigArchive;
    protected schemaEventRepository: SchemaEventRepository;
    /***********************
     * INPUTS
     ***********************/
    columnHeaderTop: boolean;
    columnHeaderBottom: boolean;
    maxHeight: number;
    width: number;
    rowHeight: number;
    autoResizeWidth: boolean;
    source: Array<any>;
    columns: Array<ColumnConfig>;
    paging: boolean | PagingConfig;
    verticalGrid: boolean;
    horizontalGrid: boolean;
    theme: SchemaTheme;
    rowColoring: RowColoring;
    rowSelecting: boolean;
    loading: boolean;
    virtualScroll: boolean;
    sorting: boolean | SortingConfig;
    filtering: boolean | FilterConfig;
    quickFilters: boolean | QuickFiltersConfig;
    searching: boolean | SearchConfig;
    editMode: boolean;
    cellEditing: boolean;
    infoPanel: boolean | InfoPanelConfig;
    summaries: SummariesConfig;
    columnMenu: ColumnMenuConfig;
    rowDetail: RowDetailConfig;
    titlePanel: TitlePanelConfig;
    footerPanel: FooterPanelConfig;
    /***********************
     * OUTPUTS
     ***********************/
    pageChanged: EventEmitter<number>;
    pageSizeChanged: EventEmitter<number>;
    itemsSelected: EventEmitter<any>;
    columnsChanged: EventEmitter<void>;
    containerWidthChanged: EventEmitter<number>;
    sourceEdited: EventEmitter<EditemItemValues>;
    cellEditEntered: EventEmitter<void>;
    cellEditCanceled: EventEmitter<void>;
    cellEditSubmitted: EventEmitter<void>;
    searchPhraseChanged: EventEmitter<string>;
    themeChanged: EventEmitter<SchemaTheme>;
    horizontalGridChanged: EventEmitter<boolean>;
    verticalGridChanged: EventEmitter<boolean>;
    rowColoringChanged: EventEmitter<SchemaRowColoring>;
    structureColumnInputHandler: StructureColumnInputHandler;
    protected constructor(domainEventBus: DomainEventBus, commandDispatcher: CommandDispatcher, structureId: StructureId, compositionId: CompositionId, schemaId: SchemaReadModelRootId, structureCommandService: StructureCommandDispatcher, structurePagingCommandDispatcher: PagingCommandDispatcher, pagingEventRepository: PagingEventRepository, sortingCommandDispatcher: SortingCommandDispatcher, searchCommandDispatcher: SearchCommandDispatcher, fieldCommandDispatcher: FieldCommandDispatcher, sourceCommandService: SourceCommandDispatcher, sourceEventService: SourceEventService, schemaCommandDispatcher: SchemaCommandDispatcher, compositionCommandDispatcher: CompositionCommandDispatcher, compositionEventService: CompositionEventRepository, formationEventService: FormationEventService, structureEditModeArchive: StructureEditModeArchive, structureCellEditArchive: StructureCellEditArchive, structureInfoPanelEnabledArchive: StructureInfoPanelArchive, structureInfoPanelConfigService: StructureInfoPanelConfigService, structureSummariesConfigService: StructureSummariesConfigService, structureCellEditStore: StructureCellEditStore, columnFieldFactory: ColumnFieldFactory, structureColumnMenuConfigArchive: StructureColumnMenuConfigArchive, structurePagingDisplayModeArchive: PagingDisplayModeArchive, structureRowSelectEnabledArchive: StructureRowSelectEnabledArchive, searchEventRepository: SearchEventRepository, structureHeaderTopEnabledArchive: StructureHeaderTopEnabledArchive, structureHeaderBottomEnabledArchive: StructureHeaderBottomEnabledArchive, structureDetailViewConfigArchive: StructureRowDetailConfigArchive, structureTitlePanelConfigArchive: StructureTitlePanelConfigArchive, structureFooterPanelConfigArchive: StructureFooterPanelConfigArchive, schemaEventRepository: SchemaEventRepository);
    ngOnChanges(simpleChanges: SimpleChanges): void;
    ngOnInit(): void;
    onPageChange(page: number): void;
    private connectSchemaEvents;
}
