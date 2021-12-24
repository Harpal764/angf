import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact:any;
  data:any;
  constructor() {
    this.contact={
      "name":"",
      "email":"",
      "phone":"",
      "message":""

    }
  }

  ngOnInit(): void {
  }
  submit(frm:NgForm){
     console.log(frm);
  }

}
