import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '../../infrastructure/services/product';
import { Product } from '../../domain/product';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-product-page',
    templateUrl: '../../templates/pages/products.html'
})

export class ProductsPage implements OnInit, OnDestroy {
    public products: Array<Product>;
    private subscription = new Subscription();

    constructor(
        private productService: ProductService
    ) {
        this.getAllProducts();
    }

    public ngOnInit(): void {
        this.subscription = this.productService.allProducts()
        .subscribe((res) => {
            this.products = res;
        });
    }

    private getAllProducts(): void {
        this.productService.allProducts().subscribe((res) => {
            this.products = res;
        });
    }

    public ngOnDestroy(): void {
        if (!this.subscription) {
            return;
        }
        this.subscription.unsubscribe();
    }
}
