import { productsUrl } from './../config/api';
import { Product } from './../models/product';
import { Observable, pluck } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getProducts():Observable<any>{
    return this.http.get<Product[]>('assets/db.json')
    .pipe(pluck('products'));
  }
}
