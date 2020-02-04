import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from '../../domain/models/product.model';
import { ProductService } from '../../infrastructure/services/product.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
    selector: 'app-product-page',
    templateUrl: '../../templates/pages/products.html'
})

export class ProductsPage implements OnInit, OnDestroy {
    public products: Array<Product>;
    public product: Product;
    public defaultImage = 'https://www.placecage.com/1000/1000';
    private subscription = new Subscription();

    constructor(
        private spinner: NgxSpinnerService,
        private productService: ProductService
    ) {
        this.getProducts();
    }

    public ngOnInit(): void {
        this.getProducts();
    }

    private getProducts(): void {
        this.spinner.show();
        this.subscription = this.productService.getAllProducts()
            .subscribe((res) => {
                console.log(res);
                this.products = res;
                this.spinner.hide();
        });
    }

    public ngOnDestroy(): void {
        if (!this.subscription) {
            return;
        }
        this.subscription.unsubscribe();
    }
}
