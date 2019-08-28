import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'products'
    },
    {
        path: 'products',
        loadChildren: './modules/products#ProductsModule',
    },
    {
        path: 'products/:id',
        loadChildren: './modules/productDetail#ProductDetailModule',
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {
}
