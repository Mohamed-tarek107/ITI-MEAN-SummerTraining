import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Products } from "./components/products/products";
import { Navbar } from './components/navbar/navbar';
// meta data
//decoretor
@Component({
  selector: 'app-root',
  //guest list
  //bahot el class bta3 el component
  imports: [Products,Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  //entry point
  
  protected readonly title = signal('MEANstack');
}
