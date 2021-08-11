import { Observable } from 'rxjs';
import { StructureId } from '../../../../core/api/structure.id';
import { Reactive } from '../../../../../common/cdk/reactive/reactive';
export declare class SearchingRepository extends Reactive {
    private enabled;
    private enabled$;
    constructor();
    setEnabled(enabled: boolean, structureId: StructureId): void;
    onSearchingEnabled(structureId: StructureId): Observable<boolean>;
}
