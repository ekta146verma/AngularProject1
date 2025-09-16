import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css'
})
export class DataBinding {
  courseName: string = "Angular 20";
  isActive: boolean = false;
  currentDate: Date = new Date();
  rollNo: number = 26;
  minTestLength = 5;
  spanClassName = "secondary";

  constructor(){
    console.log(this.courseName);
    this.courseName = "Angular 20 updated";
    setTimeout(() => {
      this.rollNo -= 12;
    }, 10000);
  }

  showAlert(){
    alert("Welcome to angular 20");
  }

  onCityChange(){
    alert("City Change");
  }

}
