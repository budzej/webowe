import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PiService {

  constructor() { }
  objetosc(r : number){
    return (4 / 3) * Math.PI * Math.pow(r, 3);
  }
  pole(r: number){
    return 4 * Math.PI * Math.pow(r, 2);
  }
}
