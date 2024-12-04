import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KalkulatorService {

  constructor() { }
    dodaj(...liczby : number[]) : number{
      let suma = 0;
      for(let liczba of liczby){
        suma+=liczba;
      }
      
      return suma;
    }

    dodawanie(a : number, b : number){
      return a+b;

    }
    odejmowanie(a : number, b : number){
      return a-b;
    }
    mnozenie(a : number, b : number){
      return a*b;
    }
    dzielenie(a : number, b : number){
      if(b!=0){
      return a/b;}
      else{
        throw new Error('Dzielenie przez zero!')
      }
    }
    
   
}
