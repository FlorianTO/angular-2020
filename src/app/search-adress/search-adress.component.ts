import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TypeService } from 'app/type.service';

@Component({
  selector: 'app-search-adress',
  templateUrl: './search-adress.component.html',
  styleUrls: ['./search-adress.component.css']
})
export class SearchAdressComponent implements OnInit {

  types;
  checkoutForm;
  constructor( private typeService: TypeService, private formBuilder: FormBuilder ) {
    this.checkoutForm = this.formBuilder.group({
      number: '',
      type: '',
      name: '',
      postalCode: '',
      city: ''
    })
  }

  ngOnInit(): void {
    this.types = this.typeService.getTypes().subscribe(type => this.types = type);
  }

  onSubmit(adress) {
    this.checkoutForm.reset();

    console.warn('Your order has been submitted', adress);
  }
}
