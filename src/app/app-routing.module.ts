import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdressDetailComponent } from './adress-detail/adress-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchAdressComponent } from './search-adress/search-adress.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'adresses', component: SearchAdressComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: AdressDetailComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
