import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'switchHeure'
})
export class SwitchHeurePipe implements PipeTransform {
  val: any;
  int: number;
  transform(value: unknown, locale: string): unknown {
    this.val = value;
    this.int = Number.parseInt(this.val);
    if(locale == "EN" && this.int >= 12)
      return this.int - 12;
    return this.int;
  }

}
