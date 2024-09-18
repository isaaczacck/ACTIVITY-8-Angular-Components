import { Component } from '@angular/core';

@Component({
  selector: 'app-uppercasegreeting',
  templateUrl: './uppercasegreeting.component.html'
})
export class UppercasegreetingComponent {
  name: string = '';
  greeting: string = '';

  generateGreeting() {
    this.greeting = `HELLO, ${this.name.toUpperCase()}!`;
  }
}
