import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dane',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './dane.component.html',
  styleUrl: './dane.component.css'
})
export class DaneComponent {

// Model użytkownika
user = {
  imie: '',
  nazwisko: '',
  pesel: '',
  kategoria: '',
  tytul: ''
};

// Lista użytkowników
users: { pesel: string, tytul: string, kategoria: string }[] = [];

dodaj(){
 
    this.users.push({pesel : this.user.pesel,tytul : this.user.tytul, kategoria : this.user.kategoria});
  
}
saveToFile(){
  const blob = new Blob([JSON.stringify(this.users,null,2)], {
   type : 'application/json'
  });
  const url = window.URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = 'filmy.json';
  a.click();

  window.URL.revokeObjectURL(url);
}
}
