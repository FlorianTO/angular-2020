import { Injectable } from '@angular/core';
import { MessageService } from 'app/message.service';
import { Observable, of } from 'rxjs';
import { Type } from 'app/models/interfaces';


const TYPES: Type[] = [
  { id: 1, name: 'rue' },
  { id: 2, name: 'boulevard' },
  { id: 3, name: 'chemin' }
];

@Injectable({
  providedIn: 'root'
})

export class TypeService {

  constructor(private messageService: MessageService) { }

  getTypes(): Observable<Type[]> {
    this.messageService.add('TypeService: fetched types');
    return of(TYPES);
  }
}
