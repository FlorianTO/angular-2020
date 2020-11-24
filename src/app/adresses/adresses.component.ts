import { Component, Input, OnInit } from '@angular/core';
import { AdressToCoordService } from 'app/adress-to-coord.service';
import { MessageService } from 'app/message.service';
import { Adresse } from 'app/models/interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-adresses',
  templateUrl: './adresses.component.html',
  styleUrls: ['./adresses.component.css']
})
export class AdressesComponent implements OnInit {

  @Input()
  adress: Adresse;
  adresses: Adresse[];
  selectedAdress: Adresse;
  constructor(private heroService: AdressToCoordService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.heroService.getCoordsFromAdress(this.adress).subscribe(adr => this.adresses = adr);
  }

  onSelect(adr: Adresse): void {
    this.messageService.add(`AdressesComponent: Selected adress id=${adr.id}`);
    this.selectedAdress = adr;
  }

}
