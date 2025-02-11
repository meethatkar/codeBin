import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { firebaseConfig } from '../firebaseConfig';
import { initializeApp } from "firebase/app";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'code_never_quits';
  constructor(){
    const app = initializeApp(firebaseConfig);
  }
}
