import { Component } from '@angular/core';
import { ObliczanieService } from '../obliczanie.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bmi',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './bmi.component.html',
  styleUrl: './bmi.component.css',
  providers: [ObliczanieService]
})
export class BmiComponent {

  wzrost: number = 0;
  masa: number = 0;
  bmi: number | null = null;
  kategoria: string = '';

  constructor(private obliczanie: ObliczanieService){}
  obliczBMI() {
    this.bmi = this.obliczanie.oblicz(this.masa, this.wzrost);
    this.kategoria = this.obliczanie.kategoria(this.bmi);
  
}
}
