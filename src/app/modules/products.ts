import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductsPage } from '../components/pages/products';
import { RouterModule, Routes } from '@angular/router';
import { ProductService } from '../infrastructure/services/product.service';
import { LazyLoadImageModule } from 'ng-lazyload-image';

const routes: Routes = [
    { path: '', component: ProductsPage }
];

@NgModule({
    imports: [
        CommonModule,
        FontAwesomeModule,
        RouterModule.forChild(routes),
        LazyLoadImageModule
    ],
    declarations: [
        ProductsPage
    ],
    exports: [
        ProductsPage
    ],
    providers: [
        ProductService
    ]
})
export class ProductsModule {
}
