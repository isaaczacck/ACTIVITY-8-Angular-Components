import { Component } from '@angular/core';

@Component({
  selector: 'app-simpleform',
  templateUrl: './simpleform.component.html',
  styleUrl: './simpleform.component.css'
})
export class SimpleformComponent {

  name: string ='';
  age: string ='';
  submittedData: { name: string, age: string} | null = null;

  onSubmit(){
    this.submittedData ={
      name: this.name,
      age: this.age
    };
  }
}
