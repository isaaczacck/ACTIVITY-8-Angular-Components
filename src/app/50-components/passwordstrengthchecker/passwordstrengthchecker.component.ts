import { Component } from '@angular/core';

@Component({
  selector: 'app-passwordstrengthchecker',
  templateUrl: './passwordstrengthchecker.component.html'
})
export class PasswordstrengthcheckerComponent {
  password: string = '';
  strength: string = '';

  checkStrength() {
    if (this.password.length < 6) {
      this.strength = 'Weak';
    } else if (this.password.length < 12) {
      this.strength = 'Medium';
    } else {
      this.strength = 'Strong';
    }
  }
}
