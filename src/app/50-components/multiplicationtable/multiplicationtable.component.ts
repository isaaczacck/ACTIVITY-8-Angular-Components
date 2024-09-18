import { Component } from '@angular/core';

@Component({
  selector: 'app-multiplicationtable',
  templateUrl: './multiplicationtable.component.html'
})
export class MultiplicationtableComponent {
  number: number = 0;
  table: number[] = [];

  generateTable() {
    if (this.number !== null) {
      this.table = Array.from({ length: 10 }, (_, i) => (i + 1) * this.number);
      
    }
  }
}
