import { Component } from '@angular/core';

@Component({
  selector: 'app-currencyconverter',
  templateUrl: './currencyconverter.component.html',
  styleUrl: './currencyconverter.component.css'
})
export class CurrencyconverterComponent {

  dollars: number | null = null;
  PHP: number | null = null;
  conversionRate: number = 55;

  convertCurrency(){
    if(this.dollars !== null){
      this.PHP = this.dollars * this.conversionRate;
    }
  }

}
