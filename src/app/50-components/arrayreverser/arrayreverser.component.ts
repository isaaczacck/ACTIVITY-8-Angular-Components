import { Component } from '@angular/core';

@Component({
  selector: 'app-arrayreverser',
  templateUrl: './arrayreverser.component.html'
})
export class ArrayreverserComponent {
  arrayInput: string = '';
  reversedArray: string[] = [];

  reverseArray() {
    this.reversedArray = this.arrayInput.split(',').map(item => item.trim()).reverse();
  }
}
