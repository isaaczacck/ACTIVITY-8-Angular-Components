import { Component } from '@angular/core';

@Component({
  selector: 'app-wordcounter',
  templateUrl: './wordcounter.component.html'
})
export class WordcounterComponent {
  text: string = '';
  wordCount: number = 0;

  countWords() {
    this.wordCount = this.text.trim() ? this.text.trim().split(/\s+/).length : 0;
  }
}
