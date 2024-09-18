import { Component } from '@angular/core';

@Component({
  selector: 'app-shapeselector',
  templateUrl: './shapeselector.component.html'
})
export class ShapeselectorComponent {
  shapes: string[] = ['Circle', 'Square', 'Triangle', 'Rectangle'];
  selectedShape: string = '';

  selectShape(shape: string) {
    this.selectedShape = shape;
  }
}
