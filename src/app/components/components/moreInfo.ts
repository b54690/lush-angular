import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-more-info',
    templateUrl: '../../templates/components/moreInfo.html'
})

export class MoreInfoComponent {
    @Input() public body: string;

    constructor() {
    }
}
