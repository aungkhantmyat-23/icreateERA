import { ProductService } from './../service/product.service';
import { Product } from './../models/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  productItem:Product;
  
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productItem = history.state;
    console.log(history.state);

  }

}
