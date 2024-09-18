import { Component } from '@angular/core';

@Component({
  selector: 'app-wordshuffler',
  templateUrl: './wordshuffler.component.html'
})
export class WordshufflerComponent {
  word: string = '';
  shuffledWord: string = '';

  shuffleWord() {
    this.shuffledWord = this.word.split('').sort(() => Math.random() - 0.5).join('');
  }
}
