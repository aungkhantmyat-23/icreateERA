import { PageProductFilter } from './pages-detail/page-product-filter.pipe';
import { FormsModule } from '@angular/forms';
import { PageFilter } from './exhibitors-page/page-filter.pipe';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ExhibitorsPageComponent } from './exhibitors-page/exhibitors-page.component';
import { PagesDetailComponent } from './pages-detail/pages-detail.component';
import { PageCardComponent } from './page-card/page-card.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ExhibitorsPageComponent,
    PagesDetailComponent,
    PageCardComponent,
    PageFilter,
    ProductCardComponent,
    PageProductFilter,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
