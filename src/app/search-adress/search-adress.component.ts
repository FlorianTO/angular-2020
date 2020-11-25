import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AdressToCoordService } from 'app/adress-to-coord.service';
//import { Adresse } from 'app/models/interfaces';

@Component({
  selector: 'app-search-adress',
  templateUrl: './search-adress.component.html',
  styleUrls: ['./search-adress.component.css']
})
export class SearchAdressComponent implements OnInit {

  showVar: boolean = true;
  id: number = 0;
  name: string = '';
  type: string = '';
  number: number = 0;
  postalCode: number = 0;
  coordY: string = '';
  coordX: string = '';
  city: string = '';

  types;
  checkoutForm;
  //adresses: Adresse[];
  constructor(private heroService: AdressToCoordService, private formBuilder: FormBuilder) {
    this.checkoutForm = this.formBuilder.group({
      id: '',
      number: '',
      type: '',
      name: '',
      postalCode: '',
      city: ''
    })
  }

  ngOnInit(): void {
    // this.types = {
    //   0: {
    //     name: "rue",
    //     value: "street"
    //   }, 1: {
    //     name: "boulevard",
    //     value: "bd"
    //   }
    // };
    /*this.heroService.getCoordsFromAdress( { city : "a", name : "b", id : 1, coordX : "a", coordY : "b", postalCode:33600, number: 3, type : "street" }).subscribe(adr => {
      console.log(adr);
      this.adresses = adr;
    });*/
  }

  onSubmit() {
    this.showVar = !this.showVar;
    this.id = this.checkoutForm.value.id;
    this.name = this.checkoutForm.value.name;
    this.type = this.checkoutForm.value.type;
    this.number = this.checkoutForm.value.number;
    this.postalCode = this.checkoutForm.value.postalCode;
    this.coordY = this.checkoutForm.value.coordX;
    this.coordX = this.checkoutForm.value.coordY;
    this.city = this.checkoutForm.value.city;

    

    this.checkoutForm.reset();

    console.warn('Your order has been submitted');
  }
}
