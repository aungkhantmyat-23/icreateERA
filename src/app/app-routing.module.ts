import { ExhibitorsPageComponent } from './exhibitors-page/exhibitors-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesDetailComponent } from './pages-detail/pages-detail.component';

const routes: Routes = [
  {path:'',component:ExhibitorsPageComponent},
  {path:'exhibitors',component:ExhibitorsPageComponent},
  {path:'page-detail',component:PagesDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
