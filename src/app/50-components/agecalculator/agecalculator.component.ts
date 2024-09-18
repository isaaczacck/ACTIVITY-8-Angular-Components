import { Component } from '@angular/core';

@Component({
  selector: 'app-agecalculator',
  templateUrl: './agecalculator.component.html'
})
export class AgecalculatorComponent {
  birthYear: number | null = null;
  age: number | null = null;

  calculateAge() {
    if (this.birthYear !== null) {
      const currentYear = new Date().getFullYear();
      this.age = currentYear - this.birthYear;
    }
  }
}
