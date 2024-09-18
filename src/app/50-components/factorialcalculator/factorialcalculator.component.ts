import { Component } from '@angular/core';

@Component({
  selector: 'app-factorialcalculator',
  templateUrl: './factorialcalculator.component.html'
})
export class FactorialcalculatorComponent {
  number: number | null = null;
  factorial: number | null = null;

  calculateFactorial() {
    if (this.number !== null) {
      this.factorial = this.factorialFunction(this.number);
    }
  }

  private factorialFunction(n: number): number {
    return n <= 1 ? 1 : n * this.factorialFunction(n - 1);
  }
}
