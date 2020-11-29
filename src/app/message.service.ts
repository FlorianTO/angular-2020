import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }
  messages: object[] = [];

  add(message: string): void {
    this.messages.push({"message": message, "heure": new Date().getHours(), "minute": new Date().getMinutes() });
  }

  clear(): void {
    this.messages = [];
  }
}
