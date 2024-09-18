import { Component } from '@angular/core';

@Component({
  selector: 'app-palindromechecker',
  templateUrl: './palindromechecker.component.html'
})
export class PalindromecheckerComponent {
  word: string = '';
  isPalindrome: boolean | null = null;

  checkPalindrome() {
    const cleanedWord = this.word.replace(/\s+/g, '').toLowerCase();
    this.isPalindrome = cleanedWord === cleanedWord.split('').reverse().join('');
  }
}
