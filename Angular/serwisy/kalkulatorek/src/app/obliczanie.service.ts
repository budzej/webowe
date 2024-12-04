import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ObliczanieService {

  constructor() { }
  oblicz(masa : number, wzrost : number){
    return masa / (wzrost * wzrost);
  }
  kategoria(bmi: number): string {
    if (bmi < 18.5) {
      return 'Niedowaga';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      return 'Norma';
    } else if (bmi >= 25 && bmi < 29.9) {
      return 'Nadwaga';
    } else {
      return 'Otyłość';
    }
}
}
