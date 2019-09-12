import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import {RouterModule,Router,ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  constructor(public commonService:GlobalService,public router:Router,public activatedRoute:ActivatedRoute) { }
  index;
  eachContact;
  firstName;
  lastName;
  inputAddress;
  Phone;
  email;
  imgURL;
  ngOnInit() {
    let currentContact = this.activatedRoute.snapshot.params.index;
    this.eachContact = this.commonService.contactList[currentContact];
    this.firstName = this.eachContact.firstName;
    this.lastName = this.eachContact.lastName
    this.inputAddress = this.eachContact.address;
    this.Phone = this.eachContact.phoneNumber;
    this.email = this.eachContact.email;
    this.imgURL = this.eachContact.image;
  }

  public modifyContact(){
    let modifiedObject = {
      "firstName":this.firstName,
      "lastName":this.lastName,
      "email": this.email,
      "phoneNumber": this.Phone,
      "status": "active",
      "address":this.inputAddress,
      "image":this.imgURL
    }
    
    this.commonService.contactList.splice(this.index,1,modifiedObject);
    alert("Saved Successfully!!");
    this.router.navigate(['/contacts']);
    
  }

}
