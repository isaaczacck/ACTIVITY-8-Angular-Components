import { Component } from '@angular/core';

@Component({
  selector: 'app-divisiblechecker',
  templateUrl: './divisiblechecker.component.html'
})
export class DivisiblecheckerComponent {
  number1: number | null = null;
  number2: number | null = null;
  result: string = '';

  checkDivisibility() {
    if (this.number1 !== null && this.number2 !== null) {
      this.result = this.number1 % this.number2 === 0 
        ? `${this.number1} is divisible by ${this.number2}` 
        : `${this.number1} is not divisible by ${this.number2}`;
    }
  }
}
