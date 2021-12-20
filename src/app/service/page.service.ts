import { pagesUrl } from './../config/api';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from '../models/page';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor(private http:HttpClient) { }

  getPages():Observable<Page[]>{
    return this.http.get<Page[]>(pagesUrl);
  }
}
