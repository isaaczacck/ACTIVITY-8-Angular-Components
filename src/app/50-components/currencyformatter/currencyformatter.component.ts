import { Component } from '@angular/core';

@Component({
  selector: 'app-currencyformatter',
  templateUrl: './currencyformatter.component.html'
})
export class CurrencyformatterComponent {
  amount: number | null = null;
  currency: string = 'USD';
  formattedAmount: string = '';

  formatCurrency() {
    if (this.amount !== null) {
      switch (this.currency) {
        case 'USD':
          this.formattedAmount = `$${this.amount.toFixed(2)}`;
          break;
        case 'PHP':
          this.formattedAmount = `₱${this.amount.toFixed(2)}`;
          break;
        case 'EUR':
          this.formattedAmount = `€${this.amount.toFixed(2)}`;
          break;
        default:
          this.formattedAmount = `${this.amount.toFixed(2)} ${this.currency}`;
      }
    }
  }
}
