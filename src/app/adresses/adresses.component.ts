import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { AdressToCoordService } from 'app/adress-to-coord.service';
import { MessageService } from 'app/message.service';
import { Adresse } from 'app/models/interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-adresses',
  templateUrl: './adresses.component.html',
  styleUrls: ['./adresses.component.css']
})
export class AdressesComponent implements OnChanges {

  @Input() showMePartially: boolean;

  @Input() id: number;
  @Input() name: string;
  @Input() type: string ;
  @Input() number: number;
  @Input() postalCode: number;
  @Input() coordY: string;
  @Input() coordX: string;
  @Input() city: string;

  adresses: Adresse[];
  selectedAdress: Adresse;
  results = [];
  constructor(private heroService: AdressToCoordService, private messageService: MessageService) { }

  ngOnInit(): void { }

  onSelect(adr: Adresse): void {
    this.messageService.add(`AdressesComponent: Selected adress id=${adr.id}`);
    this.selectedAdress = adr;
  }

  ngOnChanges(): void {
    this.heroService.getCoordsFromAdress({ city : this.city, name : this.name, id : this.id, coordX : this.coordX, coordY : this.coordY, postalCode: this.postalCode, number: this.number, type : this.type }).subscribe(adr => {
      this.adresses = adr;
      console.log(this.adresses);
      for( let adresse of this.adresses["features"]) {
        console.log(adresse);
        this.results.push(adresse);
      }
    });
  }
}
