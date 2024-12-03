import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ksiazka',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './ksiazka.component.html',
  styleUrl: './ksiazka.component.css'
})
export class KsiazkaComponent {

  bookTitle: string = ''; 
  bookCategory: string = '';
  wynik : string = '';
  bookCategories: string[] = ['Komedia', 'Romanse', 'Horror'];
  newCategory: string = '';
  books: { title: string, category: string }[] = [];

  addBook(){
    if (this.bookTitle !== "" && this.bookCategory !== "") {
      this.books.push({ title: this.bookTitle, category: this.bookCategory });
      this.wynik = `Dodano książke: ${this.bookTitle} z kategorii ${this.bookCategory}`;
    } else {
      this.wynik = "Nie wybrano ksiazki...";
    }
    this.bookTitle = '';
    this.bookCategory = '';
  }

  addCategory() {
    if (this.newCategory && !this.bookCategories.includes(this.newCategory)) {
      this.bookCategories.push(this.newCategory);
      this.newCategory = '';
    } else {
      alert("Podano pustą nazwę lub taka kategoria już istnieje.");
    }
  }

}
