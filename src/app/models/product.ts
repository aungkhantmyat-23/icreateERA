import { Page } from './page';
export class Product {
  id: number;
  pages: Page;
  productImg: string;
  productName: string;
  productDescription: string;

  constructor(id, pages, productImg, productName, productDescription) {
    this.id = id;
    this.pages = pages;
    this.productImg = productImg;
    this.productName = productName;
    this.productDescription = productDescription;
  }
}
