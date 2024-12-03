import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FilmComponent } from './film/film.component';
import { KsiazkaComponent } from './ksiazka/ksiazka.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FilmComponent, KsiazkaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'filmy';
}
