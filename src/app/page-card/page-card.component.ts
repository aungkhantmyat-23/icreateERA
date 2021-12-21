import { Page } from './../models/page';
import { PageService } from './../service/page.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-card',
  templateUrl: './page-card.component.html',
  styleUrls: ['./page-card.component.css'],
})
export class PageCardComponent implements OnInit {
  @Input()
  pageItem: Page;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private pageService: PageService
  ) {}

  ngOnInit(): void {}

  viewDetail(pageItem) {
    console.log(pageItem),
      this.router.navigate(['/page-detail'], { state: pageItem });
  }
}
