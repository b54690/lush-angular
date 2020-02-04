import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-side-bar',
    templateUrl: '../../templates/components/sideBar.html'
})

export class SideBarComponent {
    @Input() public title: string;
    @Input() public averageRatingPercentage: string;
    @Input() public averageRating: string;
    @Input() public body: string;

    constructor() {
    }
}
