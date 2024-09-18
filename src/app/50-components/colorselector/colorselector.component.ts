import { Component } from '@angular/core';

@Component({
  selector: 'app-colorselector',
  templateUrl: './colorselector.component.html'
})
export class ColorselectorComponent {
  colors: string[] = ['Red', 'Green', 'Blue', 'Yellow'];
  selectedColor: string = '';

  selectColor(color: string) {
    this.selectedColor = color;
  }
}
