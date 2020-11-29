import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-adress-detail',
  templateUrl: './adress-detail.component.html',
  styleUrls: ['./adress-detail.component.css']
})
export class AdressDetailComponent implements OnInit {

  @Input() adress: string;
  @Input() long: string;
  @Input() lat: string;

  constructor() { }

  ngOnInit(): void {
  }

}
