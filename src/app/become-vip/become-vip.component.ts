import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-become-vip',
  templateUrl: './become-vip.component.html',
  styleUrls: ['./become-vip.component.css']
})
export class BecomeVipComponent implements OnInit {
  firstName:string = '';
  lastName:string = '';
  email:string = '';
  contactNumber:string = '';
  address:string = '';
  message:string = '';
  submission:string = '';
 

  constructor() { }

  ngOnInit() {
  }

  onTypingFirstName(event:any){
    this.firstName = (<HTMLInputElement>event.target).value;
  }

  onTypingLastName(event:any){
    this.lastName = (<HTMLInputElement>event.target).value;
  }

  onTypingEmail(event:any){
    this.email = (<HTMLInputElement>event.target).value;
  }

  onTypingContactNumber(event:any){
    this.contactNumber = (<HTMLInputElement>event.target).value;
  }

  onTypingAddress(event:any){
    this.address = (<HTMLInputElement>event.target).value;
  }

  onTypingMessae(event:any){
    this.message = (<HTMLInputElement>event.target).value;
  }

  onSubmit(){
    this.submission = "First Name: " + this.firstName + 
    ", Last Name: " + this.lastName +  ", Email: " + this.email +
    ", Contact number: " + this.contactNumber +  ", Address: " + this.address + 
    ", Message: " + this.message;
  }
}
