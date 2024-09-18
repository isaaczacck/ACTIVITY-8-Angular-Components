import { Component } from '@angular/core';

@Component({
  selector: 'app-randomquotedisplay',
  templateUrl: './randomquotedisplay.component.html'
})
export class RandomquotedisplayComponent {
  quotes: string[] = [
    "Don't Quit. You're Already in Pain. You're Already Hurt. Get a Reward From it.",
    "The purpose of our lives is to be happy.",
    "Life is what happens when you're busy making other plans.",
    "Get busy living or get busy dying.",
    "You have within you right now, everything you need to deal with whatever the world can throw at you."
  ];
  randomQuote: string = '';

  displayRandomQuote() {
    this.randomQuote = this.quotes[Math.floor(Math.random() * this.quotes.length)];
  }
}
