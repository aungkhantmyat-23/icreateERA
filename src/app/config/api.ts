import { environment } from './../../environments/environment.prod';

export const baseUrl = environment.production
  ? 'http://localhost:3000'
  : 'http://localhost:3000';
export const categoriesUrl = baseUrl + '/categories';
export const pagesUrl = baseUrl + '/pages';
export const productsUrl = baseUrl + '/products';
export const JSON_URL = 'assets/db.json';