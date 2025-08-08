import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// meta data
//decoretor
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  //entry point
  
  protected readonly title = signal('MEANstack');
}
