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
    public product: Product;
    private subscription = new Subscription();

    constructor(
        private productService: ProductService
    ) {
        this.getProducts();
    }

    public ngOnInit(): void {
        this.getProducts();
    }

    private getProducts(): void {
        this.subscription = this.productService.getAllProducts()
            .subscribe((res) => {
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
