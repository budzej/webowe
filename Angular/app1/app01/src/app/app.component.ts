import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h1>Welcome to {{title}}!</h1>
    <h2>{{imie}}</h2>
    <p>Potega 3^8 to {{potega}}</p>
    <p>{{losowa}}</p>
    <img src= {{obrazek}} width="300px">

    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title: string = 'Moja pierwsza aplikacja';
  imie: string = "Andżej"
  potega: number = Math.pow(3,8);
  losowa: number = Math.floor(Math.random()*10)+1;
  obrazek: string =  'assets/images/technic4.jpg';
}
