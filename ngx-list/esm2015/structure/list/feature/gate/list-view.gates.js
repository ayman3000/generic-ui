import { ListViewPagingGate } from './paging/list-view-paging.gate';
import { ListViewModeGate } from './mode/list-view-mode.gate';
import { ListViewTemplateGate } from './template/list-view-template.gate';
import { ListViewFieldGate } from './field/list-view-field.gate';
import { ListViewSearchingGate } from './searching/list-view-searching.gate';
import { ListViewL10nGate } from './l10n/list-view-l10n.gate';
import { ListViewSourceGate } from './source/list-view-source.gate';
export const listViewGatewayDeclarations = [
    ListViewPagingGate,
    ListViewModeGate,
    ListViewTemplateGate,
    ListViewFieldGate,
    ListViewSearchingGate,
    ListViewL10nGate,
    ListViewSourceGate
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmdhdGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9zdHJ1Y3R1cmUvbGlzdC9mZWF0dXJlL2dhdGUvbGlzdC12aWV3LmdhdGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzlELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzlELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRXBFLE1BQU0sQ0FBQyxNQUFNLDJCQUEyQixHQUFHO0lBQzFDLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtDQUNsQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGlzdFZpZXdQYWdpbmdHYXRlIH0gZnJvbSAnLi9wYWdpbmcvbGlzdC12aWV3LXBhZ2luZy5nYXRlJztcbmltcG9ydCB7IExpc3RWaWV3TW9kZUdhdGUgfSBmcm9tICcuL21vZGUvbGlzdC12aWV3LW1vZGUuZ2F0ZSc7XG5pbXBvcnQgeyBMaXN0Vmlld1RlbXBsYXRlR2F0ZSB9IGZyb20gJy4vdGVtcGxhdGUvbGlzdC12aWV3LXRlbXBsYXRlLmdhdGUnO1xuaW1wb3J0IHsgTGlzdFZpZXdGaWVsZEdhdGUgfSBmcm9tICcuL2ZpZWxkL2xpc3Qtdmlldy1maWVsZC5nYXRlJztcbmltcG9ydCB7IExpc3RWaWV3U2VhcmNoaW5nR2F0ZSB9IGZyb20gJy4vc2VhcmNoaW5nL2xpc3Qtdmlldy1zZWFyY2hpbmcuZ2F0ZSc7XG5pbXBvcnQgeyBMaXN0Vmlld0wxMG5HYXRlIH0gZnJvbSAnLi9sMTBuL2xpc3Qtdmlldy1sMTBuLmdhdGUnO1xuaW1wb3J0IHsgTGlzdFZpZXdTb3VyY2VHYXRlIH0gZnJvbSAnLi9zb3VyY2UvbGlzdC12aWV3LXNvdXJjZS5nYXRlJztcblxuZXhwb3J0IGNvbnN0IGxpc3RWaWV3R2F0ZXdheURlY2xhcmF0aW9ucyA9IFtcblx0TGlzdFZpZXdQYWdpbmdHYXRlLFxuXHRMaXN0Vmlld01vZGVHYXRlLFxuXHRMaXN0Vmlld1RlbXBsYXRlR2F0ZSxcblx0TGlzdFZpZXdGaWVsZEdhdGUsXG5cdExpc3RWaWV3U2VhcmNoaW5nR2F0ZSxcblx0TGlzdFZpZXdMMTBuR2F0ZSxcblx0TGlzdFZpZXdTb3VyY2VHYXRlXG5dO1xuIl19