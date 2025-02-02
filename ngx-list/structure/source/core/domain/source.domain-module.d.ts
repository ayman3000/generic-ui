import { DomainModule } from '@generic-ui/hermes';
export declare class SourceDomainModule extends DomainModule {
    constructor();
    static commandHandlers(): import("@angular/core").Provider[][];
    static domainEventHandlers(): import("@angular/core").Provider[][];
}
