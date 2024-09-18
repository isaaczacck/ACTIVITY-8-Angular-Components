import { Component } from '@angular/core';

@Component({
  selector: 'app-anagramchecker',
  templateUrl: './anagramchecker.component.html'
})
export class AnagramcheckerComponent {
  word1: string = '';
  word2: string = '';
  isAnagram: boolean | null = null;

  checkAnagram() {
    if (this.word1 && this.word2) {
      const normalize = (str: string) => str.replace(/\s+/g, '').toLowerCase().split('').sort().join('');
      this.isAnagram = normalize(this.word1) === normalize(this.word2);
    }
  }
}
