
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pluck } from 'rxjs';
import { Page } from '../models/page';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor(private http:HttpClient) { }

  getPages():Observable<any>{
    return this.http.get<Page[]>('assets/db.json')
    .pipe(pluck('pages'));
  }
}
