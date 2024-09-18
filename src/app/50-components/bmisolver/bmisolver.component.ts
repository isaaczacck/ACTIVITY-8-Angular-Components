import { Component } from '@angular/core';

@Component({
  selector: 'app-bmisolver',
  templateUrl: './bmisolver.component.html'
})
export class BmisolverComponent {
  height: number | null = null;
  weight: number | null = null;
  bmi: number | null = null;

  calculateBMI() {
    if (this.height !== null && this.weight !== null) {
      this.bmi = this.weight / ((this.height / 100) ** 2);
    }
  }
}
