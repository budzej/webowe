import { Component } from '@angular/core';
import { PiService } from '../pi.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-oblicz-pi',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './oblicz-pi.component.html',
  styleUrl: './oblicz-pi.component.css',
  providers: [PiService]
})
export class ObliczPiComponent {
  objetosc : number = 0;
  pole : number = 0;
  r : number = 0;

  constructor(private pi: PiService){}
  obliczkule(){
    this.objetosc = this.pi.objetosc(this.r);
    this.pole = this.pi.pole(this.r);

  }
}
