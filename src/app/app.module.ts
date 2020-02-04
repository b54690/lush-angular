import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavBarModule } from './modules/navBar';
import { ProductsModule } from './modules/products';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NavBarModule,
        ProductsModule,
        HttpClientModule,
        NgxSpinnerModule,
        BrowserAnimationsModule,
        FontAwesomeModule
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
