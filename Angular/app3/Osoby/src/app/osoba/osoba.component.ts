import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Osoba {
  imie: string;
  nazwisko: string;
  wiek: number;
}

@Component({
  selector: 'app-osoba',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './osoba.component.html',
  styleUrl: './osoba.component.css'
})
export class OsobaComponent {
  

// Tablica osób
osoby: Osoba[] = [
  { imie: 'Jan', nazwisko: 'Kowalski', wiek: 30 },
  { imie: 'Anna', nazwisko: 'Nowak', wiek: 25 },
  { imie: 'Paweł', nazwisko: 'Wiśniewski', wiek: 35 }
];

imie: string = '';
nazwisko: string = '';
wiek: number | null = null;
znaleziono: boolean = false;

// Funkcja sprawdzająca, czy osoba istnieje w tablicy
sprawdzOsobe() {
  const osobaZnaleziono = this.osoby.some(
    osoba => osoba.imie === this.imie && osoba.nazwisko === this.nazwisko && osoba.wiek === this.wiek
  );

  if (osobaZnaleziono) {
    console.log('Osoba została znaleziona!');
  } else {
    console.log('Nie znaleziono takiej osoby.');
  }
}
}


