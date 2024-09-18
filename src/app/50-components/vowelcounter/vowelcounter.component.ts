import { Component } from '@angular/core';

@Component({
  selector: 'app-vowelcounter',
  templateUrl: './vowelcounter.component.html'
})
export class VowelcounterComponent {
  text: string = '';
  vowelCount: number = 0;

  countVowels() {
    this.vowelCount = (this.text.match(/[aeiouAEIOU]/g) || []).length;
  }
}
