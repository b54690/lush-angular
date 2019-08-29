import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MoreInfoComponent } from '../components/components/moreInfo';

@NgModule({
    imports: [
        CommonModule,
        FontAwesomeModule
    ],
    declarations: [
        MoreInfoComponent
    ],
    exports: [
        MoreInfoComponent
    ]
})
export class MoreInfoModule {
}
