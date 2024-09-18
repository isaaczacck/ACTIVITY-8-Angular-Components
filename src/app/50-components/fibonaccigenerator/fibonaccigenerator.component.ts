import { Component } from '@angular/core';

@Component({
  selector: 'app-fibonaccigenerator',
  templateUrl: './fibonaccigenerator.component.html'
})
export class FibonaccigeneratorComponent {
  count: number | null = null;
  fibonacciSeries: number[] = [];

  generateFibonacci() {
    if (this.count !== null && this.count > 0) {
      this.fibonacciSeries = this.fibonacci(this.count);
    }
  }

  private fibonacci(n: number): number[] {
    const series = [0, 1];
    while (series.length < n) {
      series.push(series[series.length - 1] + series[series.length - 2]);
    }
    return series.slice(0, n);
  }
}
