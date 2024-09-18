import { Component } from '@angular/core';

@Component({
  selector: 'app-validateusername',
  templateUrl: './validateusername.component.html'
})
export class ValidateusernameComponent {
  username: string = '';
  isValid: boolean | null = null;
  // Example rules: username must be at least 6 characters long and contain only letters and numbers
  minLength: number = 6;
  usernamePattern: RegExp = /^[a-zA-Z0-9]+$/;

  validateUsername() {
    if (this.username) {
      this.isValid = this.username.length >= this.minLength && this.usernamePattern.test(this.username);
    }
  }
}
