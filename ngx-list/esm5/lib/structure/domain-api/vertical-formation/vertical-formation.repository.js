/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { distinctUntilChanged, filter, map } from 'rxjs/operators';
import { DomainEventBus } from '@generic-ui/hermes';
import { Reactive } from '../../../../common/cdk/reactive';
import { StructureCreatedEvent } from '../../domain/structure/create-structure/structure-created.event';
import { VerticalScrollEnabledSetEvent } from '../../domain/structure/vertical-formation/set-enabled/vertical-scroll-enabled-set.event';
import { InMemoryStructureReadStore } from '../../infrastructure/in-memory/feature-api/in-memory-structure.read-store';
import { RowHeightSetEvent } from '../../domain/structure/vertical-formation/set-row-height/row-height-set.event';
import { SchemaThemeSetEvent } from '../../../../schema/domain/theme/schema-theme-set.event';
import { StructureHeightSetEvent } from '../../domain/structure/vertical-formation/container/set-height/structure-height-set.event';
import { OriginSetEvent } from '../../domain/source/origin/set-origin/origin-set.event';
import { ScrollPositionSetEvent } from '../../domain/structure/vertical-formation/scroll-position/scroll-position-set.event';
import { RowHeightSetBasedOnThemeEvent } from '../../domain/structure/vertical-formation/set-row-height-theme/row-height-set-based-on-theme.event';
import { SearchPhraseSetDomainEvent } from '../../../../structure/search/domain/set-phrase/search-phrase-set.domain-event';
var VerticalFormationRepository = /** @class */ (function (_super) {
    tslib_1.__extends(VerticalFormationRepository, _super);
    function VerticalFormationRepository(domainEventBus, inMemoryStructureReadStore) {
        var _this = _super.call(this) || this;
        _this.domainEventBus = domainEventBus;
        _this.inMemoryStructureReadStore = inMemoryStructureReadStore;
        _this.verticalFormation = new Map();
        _this.verticalFormation$ = new ReplaySubject();
        _this.domainEventBus
            .ofEvent((/** @type {?} */ (StructureCreatedEvent)), (/** @type {?} */ (VerticalScrollEnabledSetEvent)), (/** @type {?} */ (OriginSetEvent)), (/** @type {?} */ (StructureHeightSetEvent)), (/** @type {?} */ (RowHeightSetEvent)), (/** @type {?} */ (SchemaThemeSetEvent)), (/** @type {?} */ (RowHeightSetBasedOnThemeEvent)), (/** @type {?} */ (ScrollPositionSetEvent)), (/** @type {?} */ (SearchPhraseSetDomainEvent)))
            .pipe(_this.takeUntil())
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            /** @type {?} */
            var aggregateId = event.getAggregateId();
            /** @type {?} */
            var optStructure = _this.inMemoryStructureReadStore.getById(aggregateId);
            optStructure.ifPresent((/**
             * @param {?} structureReadModelRoot
             * @return {?}
             */
            function (structureReadModelRoot) {
                /** @type {?} */
                var verticalFormation = structureReadModelRoot.getVerticalFormation();
                /** @type {?} */
                var structureReadModelRootId = structureReadModelRoot.getId();
                _this.next(aggregateId, verticalFormation);
            }));
        }));
        return _this;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    VerticalFormationRepository.prototype.onVerticalScrollEnabled = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return this.onVerticalFormation(structureId)
            .pipe(map((/**
         * @param {?} v
         * @return {?}
         */
        function (v) { return v.isEnabled(); })), distinctUntilChanged());
    };
    /**
     * @param {?} structureId
     * @return {?}
     */
    VerticalFormationRepository.prototype.onRowHeight = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return this.onVerticalFormation(structureId)
            .pipe(map((/**
         * @param {?} v
         * @return {?}
         */
        function (v) { return v.getRowHeight(); })));
    };
    /**
     * @param {?} structureId
     * @return {?}
     */
    VerticalFormationRepository.prototype.onContainerHeight = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return this.onVerticalFormation(structureId)
            .pipe(map((/**
         * @param {?} v
         * @return {?}
         */
        function (v) { return v.getViewPortHeight(); })));
    };
    /**
     * @param {?} structureId
     * @return {?}
     */
    VerticalFormationRepository.prototype.onTopMargin = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return this.onVerticalFormation(structureId)
            .pipe(map((/**
         * @param {?} v
         * @return {?}
         */
        function (v) { return v.getTopMargin(); })));
    };
    /**
     * @private
     * @param {?} structureId
     * @return {?}
     */
    VerticalFormationRepository.prototype.onVerticalFormation = /**
     * @private
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return this.verticalFormation$
            .asObservable()
            .pipe(filter((/**
         * @param {?} idToVerticalFormation
         * @return {?}
         */
        function (idToVerticalFormation) {
            /** @type {?} */
            var key = structureId.getId();
            return idToVerticalFormation.has(key);
        })), map((/**
         * @param {?} idToVerticalFormation
         * @return {?}
         */
        function (idToVerticalFormation) { return idToVerticalFormation.get(structureId.getId()); })));
    };
    /**
     * @private
     * @param {?} structureId
     * @param {?} verticalFormation
     * @return {?}
     */
    VerticalFormationRepository.prototype.next = /**
     * @private
     * @param {?} structureId
     * @param {?} verticalFormation
     * @return {?}
     */
    function (structureId, verticalFormation) {
        this.verticalFormation.set(structureId.toString(), verticalFormation);
        this.verticalFormation$.next(this.verticalFormation);
    };
    VerticalFormationRepository.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    VerticalFormationRepository.ctorParameters = function () { return [
        { type: DomainEventBus },
        { type: InMemoryStructureReadStore }
    ]; };
    return VerticalFormationRepository;
}(Reactive));
export { VerticalFormationRepository };
if (false) {
    /**
     * @type {?}
     * @private
     */
    VerticalFormationRepository.prototype.verticalFormation;
    /**
     * @type {?}
     * @private
     */
    VerticalFormationRepository.prototype.verticalFormation$;
    /**
     * @type {?}
     * @private
     */
    VerticalFormationRepository.prototype.domainEventBus;
    /**
     * @type {?}
     * @private
     */
    VerticalFormationRepository.prototype.inMemoryStructureReadStore;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGljYWwtZm9ybWF0aW9uLnJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluLWFwaS92ZXJ0aWNhbC1mb3JtYXRpb24vdmVydGljYWwtZm9ybWF0aW9uLnJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVuRSxPQUFPLEVBQWUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFakUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRzNELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGlFQUFpRSxDQUFDO0FBQ3hHLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLHlGQUF5RixDQUFDO0FBQ3hJLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDJFQUEyRSxDQUFDO0FBQ3ZILE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtFQUErRSxDQUFDO0FBRWxILE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQzdGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDJGQUEyRixDQUFDO0FBQ3BJLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUN4RixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxxRkFBcUYsQ0FBQztBQUM3SCxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxvR0FBb0csQ0FBQztBQUNuSixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSwrRUFBK0UsQ0FBQztBQUcz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cUIsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkMsQ0FBQyxFQUFDLEVBQ0YsR0FBRzs7OztRQUFDLFVBQUMscUJBQThELElBQUssT0FBQSxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQTlDLENBQThDLEVBQUMsQ0FDdkgsQ0FBQztJQUNSLENBQUM7Ozs7Ozs7SUFFTywwQ0FBSTs7Ozs7O0lBQVosVUFBYSxXQUF3QixFQUFFLGlCQUE2QztRQUNuRixJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDdEQsQ0FBQzs7Z0JBNUZELFVBQVU7Ozs7Z0JBbEJXLGNBQWM7Z0JBTzNCLDBCQUEwQjs7SUEwR25DLGtDQUFDO0NBQUEsQUEvRkQsQ0FDaUQsUUFBUSxHQThGeEQ7U0E5RlksMkJBQTJCOzs7Ozs7SUFFdkMsd0RBQW1GOzs7OztJQUVuRix5REFBbUc7Ozs7O0lBRXZGLHFEQUErQzs7Ozs7SUFDeEQsaUVBQThEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgUmVwbGF5U3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIGZpbHRlciwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudCwgRG9tYWluRXZlbnRCdXMgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBSZWFjdGl2ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvcmVhY3RpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFZlcnRpY2FsRm9ybWF0aW9uUmVhZE1vZGVsIH0gZnJvbSAnLi92ZXJ0aWNhbC1mb3JtYXRpb24ucmVhZC1tb2RlbCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDcmVhdGVkRXZlbnQgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlL2NyZWF0ZS1zdHJ1Y3R1cmUvc3RydWN0dXJlLWNyZWF0ZWQuZXZlbnQnO1xuaW1wb3J0IHsgVmVydGljYWxTY3JvbGxFbmFibGVkU2V0RXZlbnQgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlL3ZlcnRpY2FsLWZvcm1hdGlvbi9zZXQtZW5hYmxlZC92ZXJ0aWNhbC1zY3JvbGwtZW5hYmxlZC1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgSW5NZW1vcnlTdHJ1Y3R1cmVSZWFkU3RvcmUgfSBmcm9tICcuLi8uLi9pbmZyYXN0cnVjdHVyZS9pbi1tZW1vcnkvZmVhdHVyZS1hcGkvaW4tbWVtb3J5LXN0cnVjdHVyZS5yZWFkLXN0b3JlJztcbmltcG9ydCB7IFJvd0hlaWdodFNldEV2ZW50IH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS92ZXJ0aWNhbC1mb3JtYXRpb24vc2V0LXJvdy1oZWlnaHQvcm93LWhlaWdodC1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlUmVhZE1vZGVsUm9vdCB9IGZyb20gJy4uL3JlYWQvc3RydWN0dXJlLnJlYWQtbW9kZWwtcm9vdCc7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZVNldEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vc2NoZW1hL2RvbWFpbi90aGVtZS9zY2hlbWEtdGhlbWUtc2V0LmV2ZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUhlaWdodFNldEV2ZW50IH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS92ZXJ0aWNhbC1mb3JtYXRpb24vY29udGFpbmVyL3NldC1oZWlnaHQvc3RydWN0dXJlLWhlaWdodC1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgT3JpZ2luU2V0RXZlbnQgfSBmcm9tICcuLi8uLi9kb21haW4vc291cmNlL29yaWdpbi9zZXQtb3JpZ2luL29yaWdpbi1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgU2Nyb2xsUG9zaXRpb25TZXRFdmVudCB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvdmVydGljYWwtZm9ybWF0aW9uL3Njcm9sbC1wb3NpdGlvbi9zY3JvbGwtcG9zaXRpb24tc2V0LmV2ZW50JztcbmltcG9ydCB7IFJvd0hlaWdodFNldEJhc2VkT25UaGVtZUV2ZW50IH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS92ZXJ0aWNhbC1mb3JtYXRpb24vc2V0LXJvdy1oZWlnaHQtdGhlbWUvcm93LWhlaWdodC1zZXQtYmFzZWQtb24tdGhlbWUuZXZlbnQnO1xuaW1wb3J0IHsgU2VhcmNoUGhyYXNlU2V0RG9tYWluRXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvc2VhcmNoL2RvbWFpbi9zZXQtcGhyYXNlL3NlYXJjaC1waHJhc2Utc2V0LmRvbWFpbi1ldmVudCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFZlcnRpY2FsRm9ybWF0aW9uUmVwb3NpdG9yeSBleHRlbmRzIFJlYWN0aXZlIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHZlcnRpY2FsRm9ybWF0aW9uID0gbmV3IE1hcDxzdHJpbmcsIFZlcnRpY2FsRm9ybWF0aW9uUmVhZE1vZGVsPigpO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgdmVydGljYWxGb3JtYXRpb24kID0gbmV3IFJlcGxheVN1YmplY3Q8TWFwPHN0cmluZywgVmVydGljYWxGb3JtYXRpb25SZWFkTW9kZWw+PigpO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZG9tYWluRXZlbnRCdXM6IERvbWFpbkV2ZW50QnVzLFxuXHRcdFx0XHRwcml2YXRlIGluTWVtb3J5U3RydWN0dXJlUmVhZFN0b3JlOiBJbk1lbW9yeVN0cnVjdHVyZVJlYWRTdG9yZSkge1xuXHRcdHN1cGVyKCk7XG5cblx0XHR0aGlzLmRvbWFpbkV2ZW50QnVzXG5cdFx0XHQub2ZFdmVudChcblx0XHRcdFx0U3RydWN0dXJlQ3JlYXRlZEV2ZW50IGFzIGFueSxcblx0XHRcdFx0VmVydGljYWxTY3JvbGxFbmFibGVkU2V0RXZlbnQgYXMgYW55LFxuXHRcdFx0XHRPcmlnaW5TZXRFdmVudCBhcyBhbnksXG5cdFx0XHRcdFN0cnVjdHVyZUhlaWdodFNldEV2ZW50IGFzIGFueSxcblx0XHRcdFx0Um93SGVpZ2h0U2V0RXZlbnQgYXMgYW55LFxuXHRcdFx0XHRTY2hlbWFUaGVtZVNldEV2ZW50IGFzIGFueSwgLy8gVE9ET1xuXHRcdFx0XHRSb3dIZWlnaHRTZXRCYXNlZE9uVGhlbWVFdmVudCBhcyBhbnksXG5cdFx0XHRcdFNjcm9sbFBvc2l0aW9uU2V0RXZlbnQgYXMgYW55LFxuXHRcdFx0XHRTZWFyY2hQaHJhc2VTZXREb21haW5FdmVudCBhcyBhbnlcblx0XHRcdClcblx0XHRcdC5waXBlKHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKChldmVudDogRG9tYWluRXZlbnQ8U3RydWN0dXJlSWQ+KSA9PiB7XG5cblx0XHRcdFx0Y29uc3QgYWdncmVnYXRlSWQgPSBldmVudC5nZXRBZ2dyZWdhdGVJZCgpO1xuXG5cdFx0XHRcdGNvbnN0IG9wdFN0cnVjdHVyZSA9IHRoaXMuaW5NZW1vcnlTdHJ1Y3R1cmVSZWFkU3RvcmUuZ2V0QnlJZChhZ2dyZWdhdGVJZCk7XG5cblx0XHRcdFx0b3B0U3RydWN0dXJlLmlmUHJlc2VudCgoc3RydWN0dXJlUmVhZE1vZGVsUm9vdDogU3RydWN0dXJlUmVhZE1vZGVsUm9vdCkgPT4ge1xuXG5cdFx0XHRcdFx0Y29uc3QgdmVydGljYWxGb3JtYXRpb24gPSBzdHJ1Y3R1cmVSZWFkTW9kZWxSb290LmdldFZlcnRpY2FsRm9ybWF0aW9uKCksXG5cdFx0XHRcdFx0XHRzdHJ1Y3R1cmVSZWFkTW9kZWxSb290SWQgPSBzdHJ1Y3R1cmVSZWFkTW9kZWxSb290LmdldElkKCk7XG5cblx0XHRcdFx0XHR0aGlzLm5leHQoYWdncmVnYXRlSWQsIHZlcnRpY2FsRm9ybWF0aW9uKTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdH0pO1xuXHR9XG5cblx0b25WZXJ0aWNhbFNjcm9sbEVuYWJsZWQoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG5cblx0XHRyZXR1cm4gdGhpcy5vblZlcnRpY2FsRm9ybWF0aW9uKHN0cnVjdHVyZUlkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBtYXAoKHY6IFZlcnRpY2FsRm9ybWF0aW9uUmVhZE1vZGVsKSA9PiB2LmlzRW5hYmxlZCgpKSxcblx0XHRcdFx0XHQgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRvblJvd0hlaWdodChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuXG5cdFx0cmV0dXJuIHRoaXMub25WZXJ0aWNhbEZvcm1hdGlvbihzdHJ1Y3R1cmVJZClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgbWFwKCh2OiBWZXJ0aWNhbEZvcm1hdGlvblJlYWRNb2RlbCkgPT4gdi5nZXRSb3dIZWlnaHQoKSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdG9uQ29udGFpbmVySGVpZ2h0KHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG5cblx0XHRyZXR1cm4gdGhpcy5vblZlcnRpY2FsRm9ybWF0aW9uKHN0cnVjdHVyZUlkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBtYXAoKHY6IFZlcnRpY2FsRm9ybWF0aW9uUmVhZE1vZGVsKSA9PiB2LmdldFZpZXdQb3J0SGVpZ2h0KCkpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRvblRvcE1hcmdpbihzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuXG5cdFx0cmV0dXJuIHRoaXMub25WZXJ0aWNhbEZvcm1hdGlvbihzdHJ1Y3R1cmVJZClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgbWFwKCh2OiBWZXJ0aWNhbEZvcm1hdGlvblJlYWRNb2RlbCkgPT4gdi5nZXRUb3BNYXJnaW4oKSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdHByaXZhdGUgb25WZXJ0aWNhbEZvcm1hdGlvbihzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBPYnNlcnZhYmxlPFZlcnRpY2FsRm9ybWF0aW9uUmVhZE1vZGVsPiB7XG5cblx0XHRyZXR1cm4gdGhpcy52ZXJ0aWNhbEZvcm1hdGlvbiRcblx0XHRcdFx0ICAgLmFzT2JzZXJ2YWJsZSgpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGZpbHRlcigoaWRUb1ZlcnRpY2FsRm9ybWF0aW9uOiBNYXA8c3RyaW5nLCBWZXJ0aWNhbEZvcm1hdGlvblJlYWRNb2RlbD4pID0+IHtcblxuXHRcdFx0XHRcdFx0ICAgY29uc3Qga2V5ID0gc3RydWN0dXJlSWQuZ2V0SWQoKTtcblxuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIGlkVG9WZXJ0aWNhbEZvcm1hdGlvbi5oYXMoa2V5KTtcblx0XHRcdFx0XHQgICB9KSxcblx0XHRcdFx0XHQgICBtYXAoKGlkVG9WZXJ0aWNhbEZvcm1hdGlvbjogTWFwPHN0cmluZywgVmVydGljYWxGb3JtYXRpb25SZWFkTW9kZWw+KSA9PiBpZFRvVmVydGljYWxGb3JtYXRpb24uZ2V0KHN0cnVjdHVyZUlkLmdldElkKCkpKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0cHJpdmF0ZSBuZXh0KHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCwgdmVydGljYWxGb3JtYXRpb246IFZlcnRpY2FsRm9ybWF0aW9uUmVhZE1vZGVsKTogdm9pZCB7XG5cdFx0dGhpcy52ZXJ0aWNhbEZvcm1hdGlvbi5zZXQoc3RydWN0dXJlSWQudG9TdHJpbmcoKSwgdmVydGljYWxGb3JtYXRpb24pO1xuXHRcdHRoaXMudmVydGljYWxGb3JtYXRpb24kLm5leHQodGhpcy52ZXJ0aWNhbEZvcm1hdGlvbik7XG5cdH1cblxuXG59XG4iXX0=