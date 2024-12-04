import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KalkulatorService } from './kalkulator.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BmiComponent } from './bmi/bmi.component';
import { ObliczPiComponent } from './oblicz-pi/oblicz-pi.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule,FormsModule,BmiComponent,ObliczPiComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [KalkulatorService]
})
export class AppComponent {
  title = 'kalkulatorek';
  num1 : number = 0;
  num2 : number = 0;
  wynik : {suma:number, roznica:number, iloczyn:number, iloraz:number} | null = null;
  error : string | null = null;
  constructor(private kalkulator: KalkulatorService){}
    //this.wynik = kalkulator.dodaj(3,4,5,1,2,5,6);
    calculate(): void{
      try{
        this.error = null;
        const suma = this.kalkulator.dodawanie(this.num1,this.num2);
        const roznica = this.kalkulator.odejmowanie(this.num1,this.num2);
        const iloczyn = this.kalkulator.mnozenie(this.num1,this.num2);
        const iloraz = this.kalkulator.dzielenie(this.num1,this.num2);
        this.wynik = {suma,roznica,iloczyn,iloraz};
      }
      catch (error:any){
        this.error = error.message;
        this.wynik = null;
      }
    }
  };

