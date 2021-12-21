import { ProductService } from './../service/product.service';
import { Product } from './../models/product';
import { Page } from './../models/page';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages-detail',
  templateUrl: './pages-detail.component.html',
  styleUrls: ['./pages-detail.component.css'],
})
export class PagesDetailComponent implements OnInit {
  productList: Product[] = [];
  pageItem: Page;
  products: Product[];
  productItem: Product;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      this.productList = products;
    });
    this.pageItem = history.state;
    console.log(history.state);

    
  }
}
