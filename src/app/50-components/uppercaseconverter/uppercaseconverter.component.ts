import { Component } from '@angular/core';

@Component({
  selector: 'app-uppercaseconverter',
  templateUrl: './uppercaseconverter.component.html'
})
export class UppercaseconverterComponent {
  text: string = '';
  uppercaseText: string = '';

  convertToUppercase() {
    this.uppercaseText = this.text.toUpperCase();
  }
}
