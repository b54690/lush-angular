import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductService } from '../infrastructure/services/product';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailPage } from '../components/pages/productDetail';
import { VideoHeaderModule } from './videoHeader';
import { MoreInfoModule } from './moreInfo';
import { SideBarModule } from './sideBar';
import { ProductImageModule } from './productImage';

const routes: Routes = [
    { path: '', component: ProductDetailPage }
];

@NgModule({
    imports: [
        CommonModule,
        FontAwesomeModule,
        RouterModule.forChild(routes),
        VideoHeaderModule,
        MoreInfoModule,
        SideBarModule,
        ProductImageModule
    ],
    declarations: [
        ProductDetailPage
    ],
    exports: [
        ProductDetailPage
    ],
    providers: [
        ProductService
    ]
})
export class ProductDetailModule {
}
