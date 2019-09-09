import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseUrl } from '../../config/general';
import 'rxjs/add/operator/map';
import { Product } from '../../domain/models/product.model';

@Injectable()
export class ProductService {

    constructor(
        private http: HttpClient
    ) {
    }

    public getAllProducts(): Observable<Array<Product>> {
        return this.http.get<Product[]>(`${baseUrl}`).map((results) => {
            const products: Array<Product> = [];

            results.forEach(res => {
                const result: Product = new Product(
                    res.id,
                    res.title,
                    res.media,
                    res.average_rating,
                    res.average_rating_percentage,
                    res.product_type,
                    res.description,
                    res.body,
                    res.certification,
                    res.categories,
                    res.kitchen,
                    res.preservatives_free
                );
                products.push(result);
            });
            return products;
        });
    }

    public getProduct(id: string): Observable<Product> {
        return this.http.get<Product>(`${baseUrl}/${id}`).map((result: Product) => {
            return result as Product;
        });
    }
}
