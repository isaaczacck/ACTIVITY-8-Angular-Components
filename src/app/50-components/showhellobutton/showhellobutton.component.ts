import { Component } from '@angular/core';

@Component({
  selector: 'app-showhellobutton',
  templateUrl: './showhellobutton.component.html',
  styleUrl: './showhellobutton.component.css'
})
export class ShowhellobuttonComponent {

  showMessage: boolean = false;

  toggleMessage(){
    this.showMessage = !this.showMessage;
  }
}
