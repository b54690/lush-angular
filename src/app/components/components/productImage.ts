import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-product-image',
    templateUrl: '../../templates/components/productImage.html'
})

export class ProductImageComponent {
    @Input() public image: string;

    constructor() {
    }
}
