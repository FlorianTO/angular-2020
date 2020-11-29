import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdressDetailComponent } from './adress-detail/adress-detail.component';
import { SearchAdressComponent } from './search-adress/search-adress.component';

const routes: Routes = [
  { path: '', redirectTo: '/adresses', pathMatch: 'full' },
  { path: 'adresses', component: SearchAdressComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
