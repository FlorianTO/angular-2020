import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Adresse } from './models/interfaces';
import { MessageService } from './message.service';

const URL: string = "https://api-adresse.data.gouv.fr/search/?";
const LIMIT: number = 1;

@Injectable({
  providedIn: 'root'
})
export class AdressToCoordService {

  constructor(private http: HttpClient) { }

  getCoordsFromAdress(adress: Adresse): Observable<Adresse[]>
  {
    let params = new HttpParams();
    params = params.set( "q=", adress.number + "+" + adress.type + "+" + adress.name.replace(/\s/g, '+') + "+" + adress.city );
    params = params.set( "&limit=", LIMIT.toString() );
    params = params.set( "&type=", adress.type );
    params = params.set( "&postcode=", adress.postalCode.toString() );
    console.log(URL, { params: params });
    return this.http.get<Adresse[]>( URL, { params: params } );
  }
}
