import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  constructor(public commonService:GlobalService) { }

  contactList = this.commonService.getContactList();

  deleteContact=(index)=>{
    this.contactList.splice(index,1);
  }

  sendEachContact = (contact)=>{
    this.commonService.setEachContact(contact);
  }

  ngOnInit() {
  }

}
