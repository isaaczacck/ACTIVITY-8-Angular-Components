import { Component } from '@angular/core';

@Component({
  selector: 'app-primenumberchecker',
  templateUrl: './primenumberchecker.component.html'
})
export class PrimenumbercheckerComponent {
  number: number | null = null;
  isPrime: boolean | null = null;

  checkPrime() {
    if (this.number !== null) {
      if (this.number <= 1) {
        this.isPrime = false;
        return;
      }
      for (let i = 2; i <= Math.sqrt(this.number); i++) {
        if (this.number % i === 0) {
          this.isPrime = false;
          return;
        }
      }
      this.isPrime = true;
    }
  }
}
