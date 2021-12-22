import { ProductService } from './../service/product.service';
import { Product } from './../models/product';
import { Page } from './../models/page';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-pages-detail',
  templateUrl: './pages-detail.component.html',
  styleUrls: ['./pages-detail.component.css'],
})
export class PagesDetailComponent implements OnInit {
  productList: Product[] = [];
  pageItem: Page;
  products: Product[];
  productDetail: Product;
  constructor(
    private sanitize: DomSanitizer,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      this.productList = products;
    });
    this.pageItem = history.state;
  }

  sanitizerUrl(url: string) {
    return this.sanitize.bypassSecurityTrustResourceUrl(url)
  }
}
