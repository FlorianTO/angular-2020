import { Component, OnInit } from '@angular/core';
import {MessageService} from '../message.service';

import { SwitchHeurePipe } from '../switch-heure.pipe';
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  locale: string = "FR";

  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
  }

  chancheLocale(): void {
    if(this.locale == "FR")
      this.locale = "EN";
    else
      this.locale = "FR";
  }
}
