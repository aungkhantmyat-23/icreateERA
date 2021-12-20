import { CategoryService } from './../service/category.service';
import { Category } from './../models/category';
import { PageService } from './../service/page.service';
import { Page } from './../models/page';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-exhibitors-page',
  templateUrl: './exhibitors-page.component.html',
  styleUrls: ['./exhibitors-page.component.css'],
})
export class ExhibitorsPageComponent implements OnInit {
  pageList:Page[] = [];
  categories:Category[] ;
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private pageService: PageService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.pageService.getPages().subscribe((pages)=>{
      this.pageList=pages;
    })

    this.categoryService.getCategories()
    .subscribe((categories:Category[])=>{
      this.categories=categories;
    })
  }

  viewDetail(pageItem) {
    this.router.navigate(['/page-detail'],
     { state: pageItem });
  }
}
