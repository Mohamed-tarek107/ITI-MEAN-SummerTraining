import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserCards } from './components/user-cards/user-cards';

@Component({
  selector: 'app-root',
  imports: [UserCards],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('task2');
}
