import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MessageService } from 'app/message.service';

@Component({
  selector: 'app-search-adress',
  templateUrl: './search-adress.component.html',
  styleUrls: ['./search-adress.component.css']
})
export class SearchAdressComponent implements OnInit {

  name: string = '';
  type: string = '';
  number: number = 0;
  postalCode: number = 0;
  coordY: string = '';
  coordX: string = '';
  city: string = '';

  checkoutForm;

  constructor(private formBuilder: FormBuilder, private messages: MessageService) {
    this.checkoutForm = this.formBuilder.group({
      number: '',
      type: '',
      name: '',
      postalCode: '',
      city: ''
    })
  }

  ngOnInit(): void { }

  onSubmit() {
    this.name = this.checkoutForm.value.name;
    this.type = this.checkoutForm.value.type;
    this.number = this.checkoutForm.value.number;
    this.postalCode = this.checkoutForm.value.postalCode;
    this.coordY = this.checkoutForm.value.coordX;
    this.coordX = this.checkoutForm.value.coordY;
    this.city = this.checkoutForm.value.city;

    this.checkoutForm.reset();

    this.messages.add("=> " + this.number + ' ' + this.type + ' ' + this.name + ' ' + this.postalCode + ' ' + this.city);
  }
}
