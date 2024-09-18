import { Component } from '@angular/core';

@Component({
  selector: 'app-oddsumcalculator',
  templateUrl: './oddsumcalculator.component.html'
})
export class OddsumcalculatorComponent {
  number: number | null = null;
  sum: number | null = null;

  calculateOddSum() {
    if (this.number !== null && this.number > 0) {
      this.sum = Array.from({ length: this.number }, (_, i) => i + 1)
                      .filter(n => n % 2 !== 0)
                      .reduce((acc, cur) => acc + cur, 0);
    }
  }
}
