import { Page } from './../models/page';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages-detail',
  templateUrl: './pages-detail.component.html',
  styleUrls: ['./pages-detail.component.css']
})
export class PagesDetailComponent implements OnInit {
 
  pageItem: Page;
  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.pageItem=history.state;
    console.log(history.state)
  }

}
