import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PojazdyService {

  private apiUrl = 'http://localhost:3000/pojazdy';

  constructor(private http: HttpClient) { }

  //metoda pobierania pojazdow z endpointa
  getPojazdy(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  //metoda wstawiania pojazdów z endpointa
  addPojazd(pojazd: any): Observable<any>{
    return this.http.post(this.apiUrl, pojazd);
  }

}
