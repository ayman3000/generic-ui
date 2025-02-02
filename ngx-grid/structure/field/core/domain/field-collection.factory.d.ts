import { FieldCollection } from './field-collection';
import { FieldEntityFactory } from './field/field.entity-factory';
export declare class FieldCollectionFactory {
    private readonly fieldFactory;
    constructor(fieldFactory: FieldEntityFactory);
    create(): FieldCollection;
}
