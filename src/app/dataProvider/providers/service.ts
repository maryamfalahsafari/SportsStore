import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ApiService } from './api';

//import { IProduct } from '../models/product.model';

@Injectable()
export class Service {
    constructor(private _api: ApiService) {

    }
    getCategrories(): Observable<any> {
        return this._api.get('categories');
        //.do(data => { console.log(data); });
    }
    getProductsByCategoryId(categoryId: number): Observable<any> {
        return this._api.get(categoryId + '/products');
        //.do(data => { console.log(data); });
    }
    getProducts(): Observable<any> {
        return this._api.get('products');
        //.do(data => { console.log(data) });

    }
    getProductsById(id: number): Observable<any> {
        return this._api.get('products/:id', { id: id });
        //.do(data => { console.log(data) });

    }
    createProduct(product: any): Observable<any> {
        return this._api.post('products', product);
        //.do(data => { console.log(data); });
    }
    getOrders(): Observable<any> {
        return this._api.get('orders');
    }
    createOrder(order: any): Observable<any> {
        return this._api.post('orders', order);
    }
}