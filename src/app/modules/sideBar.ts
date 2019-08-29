import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SideBarComponent } from '../components/components/sideBar';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        FontAwesomeModule,
        RouterModule
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
