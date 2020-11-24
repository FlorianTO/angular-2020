import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdressesComponent } from './adresses/adresses.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdressDetailComponent } from './adress-detail/adress-detail.component';
import { SearchAdressComponent } from './search-adress/search-adress.component';
import { FavoriteAdressesComponent } from './favorite-adresses/favorite-adresses.component';
import { MessagesComponent } from './messages/messages.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AdressesComponent,
    DashboardComponent,
    AdressDetailComponent,
    SearchAdressComponent,
    FavoriteAdressesComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
