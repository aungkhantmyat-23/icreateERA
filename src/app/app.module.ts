import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ExhibitorsPageComponent } from './exhibitors-page/exhibitors-page.component';
import { PagesDetailComponent } from './pages-detail/pages-detail.component';
import { PageCardComponent } from './page-card/page-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ExhibitorsPageComponent,
    PagesDetailComponent,
    PageCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
