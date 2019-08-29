import { Component } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';

@Component({
    selector: 'app-nav-bar',
    templateUrl: '../../templates/components/navBar.html'
})

export class NavBarComponent {
    public faSearch = faSearch;
}
