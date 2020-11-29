import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { AdressToCoordService } from 'app/adress-to-coord.service';
import { MessageService } from 'app/message.service';
import { Adresse } from 'app/models/interfaces';

@Component({
  selector: 'app-adresses',
  templateUrl: './adresses.component.html',
  styleUrls: ['./adresses.component.css']
})
export class AdressesComponent implements OnChanges {

  id: number;
  @Input() name: string;
  @Input() type: string ;
  @Input() number: number;
  @Input() postalCode: number;
  coordY: string;
  coordX: string;
  @Input() city: string;

  adresses: Adresse[];
  selectedAdress: Adresse;
  results = [];

  constructor(private adressService: AdressToCoordService, private messageService: MessageService) { }

  ngOnInit(): void { }

  ngOnChanges(): void {
    if(this.name != '' && this.type != '' && this.number != 0 && this.postalCode != 0 && this.coordY != '' && this.coordX != '' && this.city != '')
    {
      this.results = [];
      this.adressService.getCoordsFromAdress({ city : this.city, name : this.name, id : this.id, coordX : this.coordX, coordY : this.coordY, postalCode: this.postalCode, number: this.number, type : this.type }).subscribe(adr => {
        this.adresses = adr;
        for( let adresse of this.adresses["features"]) {
          this.results.push(adresse);
        }
      });
    }
  }
}
