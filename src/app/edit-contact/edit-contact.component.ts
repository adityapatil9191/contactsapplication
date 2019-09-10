import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  constructor(public commonService:GlobalService) { }
  eachContact;
  firstName;
  lastName;
  inputAddress;
  Phone;
  email;
  imgURL;
  ngOnInit() {
    this.eachContact = this.commonService.getEachContact();
    this.firstName = this.eachContact.firstName;
    this.lastName = this.eachContact.lastName
    this.inputAddress = this.eachContact.address;
    this.Phone = this.eachContact.phoneNumber;
    this.email = this.eachContact.email;
    this.imgURL = this.eachContact.image;
  }

}
