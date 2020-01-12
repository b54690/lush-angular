import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../domain/models/product.model';
import { ProductService } from '../../infrastructure/services/product.service';

@Component({
    selector: 'app-product-detail',
    templateUrl: '../../templates/pages/productDetail.html'
})

export class ProductDetailPage implements OnInit, OnDestroy {
    public product: Product;
    private subscription = new Subscription();
    private id: string;

    constructor(
        private productService: ProductService,
        private route: ActivatedRoute
    ) {
        this.getProduct(this.id);
    }

    public ngOnInit(): void {
        this.route.params.subscribe((result) => {
            this.id = result.id;
        });
        this.getProduct(this.id);
    }

    public getProduct(id: string): void {
        this.subscription = this.productService.getProduct(id)
            .subscribe((result) => {
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
