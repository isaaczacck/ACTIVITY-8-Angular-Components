import { Component } from '@angular/core';

@Component({
  selector: 'app-usergreeting',
  templateUrl: './usergreeting.component.html',
  styleUrl: './usergreeting.component.css'
})
export class UsergreetingComponent {


  name: string = '';
  greeting: string | null = null;

  displayGreeting(){
    if(this.name){
      this.greeting = `Hello, ${this.name}! Welcome!, Enjoy Coding`;
    }
  }

}
