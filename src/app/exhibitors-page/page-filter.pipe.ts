import { Category } from './../models/category';
import { Page } from './../models/page';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pageFilter',
})
export class PageFilter implements PipeTransform {
  transform(value: Page[], categories: Category, name: string) {
    let temp = value;

    if (categories) {
      temp = temp.filter((page) => page.categories.id == categories.id);
    }
    if (name) {
      temp = temp.filter((page) => 
        page.title.toLowerCase().startsWith(name.toLowerCase())
      );
    }
    return temp;
  }
}
