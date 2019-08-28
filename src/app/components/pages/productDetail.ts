import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../../domain/product';
import { Subscription } from 'rxjs';
import { ProductService } from '../../infrastructure/services/product';

@Component({
    selector: 'app-product-detail',
    templateUrl: '../../templates/pages/productDetail.html'
})

export class ProductDetailPage implements OnInit, OnDestroy {
    public product: Product;
    private subscription = new Subscription();
    private id: number = Number((window.location.href).split('/').pop());

    constructor(
        private productService: ProductService
    ) {
        this.getProduct(this.id);
    }

    public ngOnInit(): void {
        this.getProduct(this.id);
    }

    public getProduct(id: number): void {
        this.subscription = this.productService.getProduct(id).subscribe((result) => {
            this.product = result;
        });
    }

    public ngOnDestroy(): void {
        if (!this.subscription) {
            return;
        }
        this.subscription.unsubscribe();
    }
}
