/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { FabricNotificationPosition } from './fabric-notification-position';
export class FabricNotificationsContainerComponent {
    constructor() {
        this.onNotificationClose = new EventEmitter();
        this.FabricNotificationPosition = FabricNotificationPosition;
    }
    /**
     * @param {?} selectedNotification
     * @return {?}
     */
    emitClosedNotification(selectedNotification) {
        this.onNotificationClose.emit(selectedNotification);
    }
    /**
     * @param {?} fabricNotificationPosition
     * @return {?}
     */
    isPosition(fabricNotificationPosition) {
        return this.position === fabricNotificationPosition;
    }
}
FabricNotificationsContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-notifications-container',
                template: `
		<gui-notification *ngFor="let notification of notifications"
						  [notification]="notification"
						  (onNotificationClose)="emitClosedNotification($event)">
		</gui-notification>
	`,
                host: {
                    '[class.gui-notifications-top-right]': 'isPosition(FabricNotificationPosition.TOP_RIGHT)',
                    '[class.gui-notifications-top-left]': 'isPosition(FabricNotificationPosition.TOP_LEFT)',
                    '[class.gui-notifications-bottom-right]': 'isPosition(FabricNotificationPosition.BOTTOM_RIGHT)',
                    '[class.gui-notifications-bottom-left]': 'isPosition(FabricNotificationPosition.BOTTOM_LEFT)'
                },
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
FabricNotificationsContainerComponent.propDecorators = {
    notifications: [{ type: Input }],
    position: [{ type: Input }],
    onNotificationClose: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    FabricNotificationsContainerComponent.prototype.notifications;
    /** @type {?} */
    FabricNotificationsContainerComponent.prototype.position;
    /** @type {?} */
    FabricNotificationsContainerComponent.prototype.onNotificationClose;
    /** @type {?} */
    FabricNotificationsContainerComponent.prototype.FabricNotificationPosition;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLW5vdGlmaWNhdGlvbnMtY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbIm1vZGFsL25vdGlmaWNhdGlvbi9mYWJyaWMtbm90aWZpY2F0aW9ucy1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5ILE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBbUI1RSxNQUFNLE9BQU8scUNBQXFDO0lBakJsRDtRQTBCQyx3QkFBbUIsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXpDLCtCQUEwQixHQUFHLDBCQUEwQixDQUFDO0lBU3pELENBQUM7Ozs7O0lBUEEsc0JBQXNCLENBQUMsb0JBQXdDO1FBQzlELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUNyRCxDQUFDOzs7OztJQUVELFVBQVUsQ0FBQywwQkFBc0Q7UUFDaEUsT0FBTyxJQUFJLENBQUMsUUFBUSxLQUFLLDBCQUEwQixDQUFDO0lBQ3JELENBQUM7OztZQXBDRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLDZCQUE2QjtnQkFDdkMsUUFBUSxFQUFFOzs7OztFQUtUO2dCQUNELElBQUksRUFBRTtvQkFDTCxxQ0FBcUMsRUFBRSxrREFBa0Q7b0JBQ3pGLG9DQUFvQyxFQUFFLGlEQUFpRDtvQkFDdkYsd0NBQXdDLEVBQUUscURBQXFEO29CQUMvRix1Q0FBdUMsRUFBRSxvREFBb0Q7aUJBQzdGO2dCQUNELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUMvQzs7OzRCQUdDLEtBQUs7dUJBR0wsS0FBSztrQ0FHTCxNQUFNOzs7O0lBTlAsOERBQ3lDOztJQUV6Qyx5REFDcUM7O0lBRXJDLG9FQUN5Qzs7SUFFekMsMkVBQXdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmFicmljTm90aWZpY2F0aW9uIH0gZnJvbSAnLi9mYWJyaWMtbm90aWZpY2F0aW9uJztcbmltcG9ydCB7IEZhYnJpY05vdGlmaWNhdGlvblBvc2l0aW9uIH0gZnJvbSAnLi9mYWJyaWMtbm90aWZpY2F0aW9uLXBvc2l0aW9uJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLW5vdGlmaWNhdGlvbnMtY29udGFpbmVyJyxcblx0dGVtcGxhdGU6IGBcblx0XHQ8Z3VpLW5vdGlmaWNhdGlvbiAqbmdGb3I9XCJsZXQgbm90aWZpY2F0aW9uIG9mIG5vdGlmaWNhdGlvbnNcIlxuXHRcdFx0XHRcdFx0ICBbbm90aWZpY2F0aW9uXT1cIm5vdGlmaWNhdGlvblwiXG5cdFx0XHRcdFx0XHQgIChvbk5vdGlmaWNhdGlvbkNsb3NlKT1cImVtaXRDbG9zZWROb3RpZmljYXRpb24oJGV2ZW50KVwiPlxuXHRcdDwvZ3VpLW5vdGlmaWNhdGlvbj5cblx0YCxcblx0aG9zdDoge1xuXHRcdCdbY2xhc3MuZ3VpLW5vdGlmaWNhdGlvbnMtdG9wLXJpZ2h0XSc6ICdpc1Bvc2l0aW9uKEZhYnJpY05vdGlmaWNhdGlvblBvc2l0aW9uLlRPUF9SSUdIVCknLFxuXHRcdCdbY2xhc3MuZ3VpLW5vdGlmaWNhdGlvbnMtdG9wLWxlZnRdJzogJ2lzUG9zaXRpb24oRmFicmljTm90aWZpY2F0aW9uUG9zaXRpb24uVE9QX0xFRlQpJyxcblx0XHQnW2NsYXNzLmd1aS1ub3RpZmljYXRpb25zLWJvdHRvbS1yaWdodF0nOiAnaXNQb3NpdGlvbihGYWJyaWNOb3RpZmljYXRpb25Qb3NpdGlvbi5CT1RUT01fUklHSFQpJyxcblx0XHQnW2NsYXNzLmd1aS1ub3RpZmljYXRpb25zLWJvdHRvbS1sZWZ0XSc6ICdpc1Bvc2l0aW9uKEZhYnJpY05vdGlmaWNhdGlvblBvc2l0aW9uLkJPVFRPTV9MRUZUKSdcblx0fSxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgRmFicmljTm90aWZpY2F0aW9uc0NvbnRhaW5lckNvbXBvbmVudCB7XG5cblx0QElucHV0KClcblx0bm90aWZpY2F0aW9uczogQXJyYXk8RmFicmljTm90aWZpY2F0aW9uPjtcblxuXHRASW5wdXQoKVxuXHRwb3NpdGlvbjogRmFicmljTm90aWZpY2F0aW9uUG9zaXRpb247XG5cblx0QE91dHB1dCgpXG5cdG9uTm90aWZpY2F0aW9uQ2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0RmFicmljTm90aWZpY2F0aW9uUG9zaXRpb24gPSBGYWJyaWNOb3RpZmljYXRpb25Qb3NpdGlvbjtcblxuXHRlbWl0Q2xvc2VkTm90aWZpY2F0aW9uKHNlbGVjdGVkTm90aWZpY2F0aW9uOiBGYWJyaWNOb3RpZmljYXRpb24pOiB2b2lkIHtcblx0XHR0aGlzLm9uTm90aWZpY2F0aW9uQ2xvc2UuZW1pdChzZWxlY3RlZE5vdGlmaWNhdGlvbik7XG5cdH1cblxuXHRpc1Bvc2l0aW9uKGZhYnJpY05vdGlmaWNhdGlvblBvc2l0aW9uOiBGYWJyaWNOb3RpZmljYXRpb25Qb3NpdGlvbik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnBvc2l0aW9uID09PSBmYWJyaWNOb3RpZmljYXRpb25Qb3NpdGlvbjtcblx0fVxufVxuIl19