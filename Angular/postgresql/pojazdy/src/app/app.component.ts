import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  //zmienne przechowujące pojazdy i pojazd
  title = 'Rejestracja pojazdów';
  pojazdy: any[] = [];
  pojazd = {
    marka : '',
    model : '',
    numer_rejestracyjny : '',
    wlasciciel : '',
    email : ''
  };

  //adres endpointa
  private apiUrl = "http://localhost:3000/pojazdy";
  //konstruktor klassy HttpClient
  constructor (private http: HttpClient){}

  //metoda na starcie pobierając pojazdy metodą GetPojazdy()
  ngOnInit(){
    this.getPojazdy();
  }

  //metoda pobierania pojazdów z endpointa
  getPojazdy() {
    this.http.get<any[]>(this.apiUrl).subscribe((data) => {
      this.pojazdy = data;
    });
  }
  addPojazd(){
    this.http.post<any>(this.apiUrl, this.pojazd).subscribe(() => {
      this.getPojazdy();
      this.pojazd = {marka: '', model: '', numer_rejestracyjny: '',wlasciciel: '', email: ''};
      
    });    
    location.reload();
  }
}
