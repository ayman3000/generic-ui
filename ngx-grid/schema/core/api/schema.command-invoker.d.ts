import { CommandInvoker } from '@generic-ui/hermes';
import { SchemaTheme } from './schema-theme';
import { SchemaDispatcher } from '../domain/schema.dispatcher';
import { SchemaReadModelRootId } from '../domain-read/schema.read-model-root-id';
import { StructureId } from '../../../structure/core/api/structure.id';
import { StructureCommandDispatcher } from '../../../structure/core/api/structure.command-dispatcher';
import { RowColoring } from './row-coloring';
import { FabricModalThemeService } from '@generic-ui/fabric';
export declare class SchemaCommandInvoker implements CommandInvoker {
    private readonly schemaDispatcher;
    private readonly structureCommandService;
    private readonly fabricModalThemeService;
    constructor(schemaDispatcher: SchemaDispatcher, structureCommandService: StructureCommandDispatcher, fabricModalThemeService: FabricModalThemeService);
    create(schemaId?: SchemaReadModelRootId): void;
    setTheme(theme: SchemaTheme, schemaId?: SchemaReadModelRootId, structureId?: StructureId): void;
    setRowColoring(rowColoring: RowColoring, schemaId?: SchemaReadModelRootId): void;
    setVerticalGrid(verticalGrid: boolean, schemaId?: SchemaReadModelRootId): void;
    setHorizontalGrid(horizontalGrid: boolean, schemaId?: SchemaReadModelRootId): void;
    private toSchemaRowColoring;
    private toFabricTheme;
}
