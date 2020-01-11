import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-video-header',
    templateUrl: '../../templates/components/videoHeader.html'
})

export class VideoHeaderComponent {
    @Input() public video: string;
    @Input() public title: string;
    @Input() public videoAlt: string;
}
