import { Component } from '@angular/core';

@Component({
  selector: 'app-compoundinterestcalculator',
  templateUrl: './compoundinterestcalculator.component.html'
})
export class CompoundinterestcalculatorComponent {
  principal: number | null = null;
  rate: number | null = null;
  time: number | null = null;
  frequency: number | null = null;
  compoundInterest: number | null = null;

  calculateCompoundInterest() {
    if (this.principal !== null && this.rate !== null && this.time !== null && this.frequency !== null) {
      this.compoundInterest = this.principal * Math.pow(1 + (this.rate / (100 * this.frequency)), this.frequency * this.time) - this.principal;
    }
  }
}
