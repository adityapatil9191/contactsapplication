import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  constructor(public commonService:GlobalService) { }
  searchTerm;
  contactList = this.commonService.getContactList();

  deleteContact=(index)=>{
    if(confirm("Are you sure delete this contact? ")===true){
      this.contactList.splice(index,1);
    }
    
  }

  sendEachContact = (contact,i)=>{
    this.commonService.setEachContact(contact,i);
  }

  ngOnInit() {
  }

}
