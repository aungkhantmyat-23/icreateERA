import { categoriesUrl } from './../config/api';
import { Category } from './../models/category';
import { Observable, pluck } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}
  getCategories(): Observable<any> {
    return this.http.get<Category[]>('assets/db.json').pipe(pluck('categories'));
  }
}
