import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SideBarComponent } from '../components/components/sideBar';

@NgModule({
    imports: [
        CommonModule,
        FontAwesomeModule
    ],
    declarations: [
        SideBarComponent
    ],
    exports: [
        SideBarComponent
    ]
})
export class SideBarModule {
}
