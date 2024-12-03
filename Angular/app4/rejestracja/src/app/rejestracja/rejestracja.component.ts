import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rejestracja',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './rejestracja.component.html',
  styleUrl: './rejestracja.component.css'
})
export class RejestracjaComponent {

    uzytkownik = {
      imie: '',
      nazwisko: '',
      email: '',
      haslo: '',
      potwierdzhaslo: '',
      wiek: null,
      zgoda:false,
      praca: ''
    }

  prace=["kierownik","kierowca","księgowa","pracownik fizyczny"];

  sprawdzHaslo(haslo: string): boolean {
    
    const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;
    return regex.test(haslo);
  }

uzytkownicy: any[]=[]
    dodaj(){
      if(this.uzytkownik.imie ==null || this.uzytkownik.nazwisko == null || this.uzytkownik.email ==null || this.uzytkownik.haslo ==null || this.uzytkownik.wiek ==null){
        alert("Wpisz wszystkie dane!")
      }else{
        if (!this.sprawdzHaslo(this.uzytkownik.haslo)) {
          alert("Hasło musi mieć co najmniej 8 znaków, zawierać cyfry i znaki specjalne!");
          return;
        }
        if(this.uzytkownik.haslo === this.uzytkownik.potwierdzhaslo ){
          this.uzytkownicy.push(this.uzytkownik);
         
          this.reset();
        }else{
          alert("Hasła musza sie zgadzac ze sobą!")
        }
        
      }
    }
    reset() {
      this.uzytkownik = {
        imie: '',
        nazwisko: '',
        email: '',
        haslo: '',
        potwierdzhaslo: '',
        wiek: null,
        zgoda: false,
        praca: ''
      };


}
}