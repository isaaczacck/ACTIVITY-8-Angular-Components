import { Component } from '@angular/core';

@Component({
  selector: 'app-randomnumbergenerator',
  templateUrl: './randomnumbergenerator.component.html'
})
export class RandomnumbergeneratorComponent {
  min: number = 0;
  max: number = 100;
  randomNumber: number | null = null;

  generateRandomNumber() {
    this.randomNumber = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
  }
}
