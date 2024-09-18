import { Component } from '@angular/core';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html'
})
export class ShoppinglistComponent {
  item: string = '';
  items: string[] = [];

  addItem() {
    if (this.item) {
      this.items.push(this.item);
      this.item = '';                      // Clear input after adding
    }
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
  }
}
