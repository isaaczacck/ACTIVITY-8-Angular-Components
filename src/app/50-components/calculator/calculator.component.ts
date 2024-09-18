import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html'
})
export class CalculatorComponent {
  num1: number | null = null;
  num2: number | null = null;
  result: number | null = null;
  operation: string = '';

  calculate() {
    if (this.num1 !== null && this.num2 !== null) {
      switch (this.operation) {
        case 'add':
          this.result = this.num1 + this.num2;
          break;
        case 'subtract':
          this.result = this.num1 - this.num2;
          break;
        case 'multiply':
          this.result = this.num1 * this.num2;
          break;
        case 'divide':
          if (this.num2 !== 0) {
            this.result = this.num1 / this.num2;
          } else {
            this.result = null;
            alert('Cannot divide by zero');
          }
          break;
        default:
          this.result = null;
      }
    }
  }
}
