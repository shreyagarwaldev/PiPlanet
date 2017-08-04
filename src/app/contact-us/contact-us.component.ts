import { Component } from '@angular/core';

@Component({
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {

  submitted = false;
  fname: string;
  subjectText: string;
  messageText: string;
  emailId: string;

  onSubmit() {
  this.submitted = true;
    console.log(this.fname);
  }
  constructor() {
    this.fname = "";
  }
}
