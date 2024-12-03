import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-film',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent {
  filmTitle: string = ''; // zmienna przechowująca tytuł filmu
  filmCategory: string = ''; // zmienna przechowująca kategorię filmu
  wynik: string = ''; // zmienna przechowująca wybrane dane
  newCategory: string = ''; // zmienna przechowująca nową kategorię
  filmCategories: string[] = ['Komedia', 'Obyczajowy', 'Sensacyjny', 'Horror']; // domyślne kategorie filmów

  // Metoda dodająca film
  addFilm() {
    console.log({ tytul: this.filmTitle, kategoria: this.filmCategory });
    if (this.filmTitle !== "" && this.filmCategory !== "") {
      this.wynik = `Wybrano: ${this.filmTitle} z kategorii ${this.filmCategory}`;
    } else {
      this.wynik = "Nie wybrano filmu...";
    }
    // Resetowanie pól formularza
    this.filmTitle = '';
    this.filmCategory = '';
  }

  // Metoda dodająca nową kategorię
  addCategory() {
    if (this.newCategory && !this.filmCategories.includes(this.newCategory)) {
      this.filmCategories.push(this.newCategory);
      this.newCategory = ''; // czyszczenie pola po dodaniu kategorii
    } else {
      alert("Podano pustą nazwę lub taka kategoria już istnieje.");
    }
  }
}
