import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { VideoHeaderComponent } from '../components/components/videoHeader';

@NgModule({
    imports: [
        CommonModule,
        FontAwesomeModule
    ],
    declarations: [
        VideoHeaderComponent
    ],
    exports: [
        VideoHeaderComponent
    ]
})
export class VideoHeaderModule {
}
