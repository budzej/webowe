import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RejestracjaComponent } from "./rejestracja/rejestracja.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RejestracjaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rejestracja';
}
