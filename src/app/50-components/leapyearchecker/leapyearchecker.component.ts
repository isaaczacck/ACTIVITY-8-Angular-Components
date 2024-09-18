import { Component } from '@angular/core';

@Component({
  selector: 'app-leapyearchecker',
  templateUrl: './leapyearchecker.component.html'
})
export class LeapyearcheckerComponent {
  year: number | null = null;
  isLeapYear: boolean | null = null;

  checkLeapYear() {
    if (this.year !== null) {
      this.isLeapYear = (this.year % 4 === 0 && this.year % 100 !== 0) || (this.year % 400 === 0);
    }
  }
}
