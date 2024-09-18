import { Component } from '@angular/core';

@Component({
  selector: 'app-guessnumbergame',
  templateUrl: './guessnumbergame.component.html'
})
export class GuessnumbergameComponent {
  guess: number | null = null;
  randomNumber: number = Math.floor(Math.random() * 100) + 1;
  result: string = '';

  checkGuess() {
    if (this.guess !== null) {
      if (this.guess < this.randomNumber) {
        this.result = 'Too low!';
      } else if (this.guess > this.randomNumber) {
        this.result = 'Too high!';
      } else {
        this.result = 'Congratulations! You guessed it right!';
      }
    }
  }
}
