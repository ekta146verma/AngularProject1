import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin',
  imports: [],
  templateUrl: './admin.html',
  styleUrl: './admin.css'
})
export class Admin implements OnInit, AfterViewInit, OnDestroy{
  constructor(){
    console.log("Constructor is called");

    // property initialization
  }
  ngOnInit(): void {
      console.log("On ng Init");
      // api call
      // Subscription
  }

  ngAfterViewInit(): void {
      console.log("on ng afterviewinit");

      // this will trigger when all the components get initialized
  }

  ngOnDestroy(): void {
      console.log("on ng OnDestroy");

      // this is used to destroy currrent session like when you are booking a ticket and you are in payment section 
      // it will ask you to do not close or reload the page otherwise session will be lost and user have to start again.
  }
}
