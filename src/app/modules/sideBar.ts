import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from '../components/components/sideBar';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
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
