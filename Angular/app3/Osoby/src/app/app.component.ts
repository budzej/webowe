import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OsobaComponent } from "./osoba/osoba.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [OsobaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Osoby';
}
