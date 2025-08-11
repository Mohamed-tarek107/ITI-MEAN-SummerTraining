import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Products } from "./components/products/products";
import { Navbar } from './components/navbar/navbar';
import { MovieList } from './components/movie-list/movie-list';
// meta data
//decoretor
@Component({
  selector: 'app-root',
  //guest list
  //bahot el class bta3 el component
  imports: [Navbar, MovieList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  //entry point
  protected readonly title = signal('MEANstack');
}
