import { Component } from '@angular/core';

@Component({
  selector: 'app-simplestopwatch',
  templateUrl: './simplestopwatch.component.html'
})
export class SimplestopwatchComponent {
  time: number = 0;
  intervalId: any = null;

  startStopwatch() {
    if (this.intervalId === null) {  // Prevent starting multiple intervals
      this.intervalId = setInterval(() => {
        this.time += 1;
      }, 1000);
    }
  }

  stopStopwatch() {
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;  // Reset intervalId to allow restarting
    }
  }

  resetStopwatch() {
    this.stopStopwatch();  // Stop the stopwatch before resetting
    this.time = 0;
  }
}
