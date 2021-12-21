import { Product } from './../models/product';
import { Page } from './../models/page';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productFilter',
  pure: false,
})
export class PageProductFilter implements PipeTransform {
  transform(value: Product[], pages: Page) {
    let temp = value;
    if (pages) {
      temp = temp.filter((products) => products.pages.id === pages.id);
    }
    return temp;
  }
}
