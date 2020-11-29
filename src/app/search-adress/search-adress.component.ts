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

  //  showVar: boolean = true;
  name: string = '';
  type: string = '';
  number: number = 0;
  postalCode: number = 0;
  coordY: string = '';
  coordX: string = '';
  city: string = '';

  types;
  checkoutForm;
  constructor(private heroService: AdressToCoordService, private formBuilder: FormBuilder) {
    this.checkoutForm = this.formBuilder.group({
      number: '',
      type: '',
      name: '',
      postalCode: '',
      city: ''
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    //this.showVar = !this.showVar;
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
