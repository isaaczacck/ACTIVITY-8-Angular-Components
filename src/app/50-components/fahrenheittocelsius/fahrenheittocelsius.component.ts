import { Component } from '@angular/core';

@Component({
  selector: 'app-fahrenheittocelsius',
  templateUrl: './fahrenheittocelsius.component.html'
})
export class FahrenheittocelsiusComponent {
  fahrenheit: number | null = null;
  celsius: number | null = null;

  convertToCelsius() {
    if (this.fahrenheit !== null) {
      this.celsius = (this.fahrenheit - 32) * 5 / 9;
    }
  }
}
