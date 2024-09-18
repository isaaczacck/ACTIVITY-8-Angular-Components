import { Component } from '@angular/core';

@Component({
  selector: 'app-displayname',
  templateUrl: './displayname.component.html',
  styleUrl: './displayname.component.css'
})
export class DisplaynameComponent {

  userName: string = '';
  displayName: string ='';

  displayUserName(){
    this.displayName = this.userName;
  }
}
