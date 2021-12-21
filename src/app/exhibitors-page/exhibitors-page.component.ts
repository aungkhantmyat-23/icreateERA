import { ProductService } from './../service/product.service';
import { Product } from './../models/product';
import { CategoryService } from './../service/category.service';
import { Category } from './../models/category';
import { PageService } from './../service/page.service';
import { Page } from './../models/page';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exhibitors-page',
  templateUrl: './exhibitors-page.component.html',
  styleUrls: ['./exhibitors-page.component.css'],
})
export class ExhibitorsPageComponent implements OnInit {
  pageList: Page[] = [];
  categories: Category[];
  category: Category;
  pageName: string; 
  productList:Product[]=[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private pageService: PageService,
    private categoryService: CategoryService,
    private productService:ProductService
  ) {}

  ngOnInit(): void {
    this.pageService.getPages().subscribe((pages) => {
      this.pageList = pages;
    });

    this.categoryService.getCategories().subscribe((categories: Category[]) => {
      this.categories = categories;
      console.log(categories);
    });


    // this.productService.getProducts().subscribe((products) => {
    //   this.productList = products;
    // });
  }

  viewDetail(pageItem) {
    this.router.navigate(['/page-detail'], { state: pageItem });
  }

  click(category: Category) {
    console.log(category);
  }
}
