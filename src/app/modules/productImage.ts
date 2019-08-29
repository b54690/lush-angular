import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductImageComponent } from '../components/components/productImage';

@NgModule({
    imports: [
        CommonModule,
        FontAwesomeModule
    ],
    declarations: [
        ProductImageComponent
    ],
    exports: [
        ProductImageComponent
    ]
})
export class ProductImageModule {
}
