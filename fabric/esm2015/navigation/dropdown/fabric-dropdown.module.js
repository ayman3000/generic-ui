import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FabricDropdownComponent } from './dropdown.component';
import { DropdownItemComponent } from './dropdown-items/dropdown-item.component';
import { FabricArrowIconModule } from '../../common/icons/arrow-icon/fabric-arrow-icon.module';
export class FabricDropdownModule {
}
FabricDropdownModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FabricArrowIconModule
                ],
                declarations: [
                    FabricDropdownComponent,
                    DropdownItemComponent
                ],
                exports: [
                    FabricDropdownComponent,
                    DropdownItemComponent
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRyb3Bkb3duLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktZmFicmljL3NyYy9uYXZpZ2F0aW9uL2Ryb3Bkb3duL2ZhYnJpYy1kcm9wZG93bi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0QsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDakYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFpQi9GLE1BQU0sT0FBTyxvQkFBb0I7OztZQWRoQyxRQUFRLFNBQUM7Z0JBQ1QsT0FBTyxFQUFFO29CQUNSLFlBQVk7b0JBQ1oscUJBQXFCO2lCQUNyQjtnQkFDRCxZQUFZLEVBQUU7b0JBQ2IsdUJBQXVCO29CQUN2QixxQkFBcUI7aUJBQ3JCO2dCQUNELE9BQU8sRUFBRTtvQkFDUix1QkFBdUI7b0JBQ3ZCLHFCQUFxQjtpQkFDckI7YUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBGYWJyaWNEcm9wZG93bkNvbXBvbmVudCB9IGZyb20gJy4vZHJvcGRvd24uY29tcG9uZW50JztcbmltcG9ydCB7IERyb3Bkb3duSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vZHJvcGRvd24taXRlbXMvZHJvcGRvd24taXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmFicmljQXJyb3dJY29uTW9kdWxlIH0gZnJvbSAnLi4vLi4vY29tbW9uL2ljb25zL2Fycm93LWljb24vZmFicmljLWFycm93LWljb24ubW9kdWxlJztcblxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdEZhYnJpY0Fycm93SWNvbk1vZHVsZVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRGYWJyaWNEcm9wZG93bkNvbXBvbmVudCxcblx0XHREcm9wZG93bkl0ZW1Db21wb25lbnRcblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdEZhYnJpY0Ryb3Bkb3duQ29tcG9uZW50LFxuXHRcdERyb3Bkb3duSXRlbUNvbXBvbmVudFxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIEZhYnJpY0Ryb3Bkb3duTW9kdWxlIHtcbn1cbiJdfQ==