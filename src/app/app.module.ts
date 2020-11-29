import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdressesComponent } from './adresses/adresses.component';
import { AdressDetailComponent } from './adress-detail/adress-detail.component';
import { SearchAdressComponent } from './search-adress/search-adress.component';
import { MessagesComponent } from './messages/messages.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SwitchHeurePipe } from './switch-heure.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AdressesComponent,
    AdressDetailComponent,
    SearchAdressComponent,
    MessagesComponent,
    SwitchHeurePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
