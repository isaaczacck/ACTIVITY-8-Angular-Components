import { Component } from '@angular/core';

@Component({
  selector: 'app-charactercounter',
  templateUrl: './charactercounter.component.html'
})
export class CharactercounterComponent {
  text: string = '';
  characterCount: number = 0;

  countCharacters() {
    this.characterCount = this.text.length;
  }
}
