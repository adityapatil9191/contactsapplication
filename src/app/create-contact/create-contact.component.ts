import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css']
})
export class CreateContactComponent implements OnInit {
  public imageUploaded:boolean = false;
  public imagePath:string;
  imgURL: any;
  public message: string;
  
  public uploadFile(){
    let myFile = document.getElementById("myFile");
    myFile.click();
  }

  public selectFile=(event)=>{
    if(event.target.files[0].length===0){
      return
    }
    let mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
    var reader = new FileReader();
    this.imagePath = event.target.files;
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event)=>{
      this.imgURL = reader.result;
    }
    this.imageUploaded = true;
  }
  constructor(public commonService:GlobalService) { }
  firstName:string;
  lastName:string;
  inputAddress:string;
  Phone:number;
  email:string;
  ngOnInit() {
  }
  public addNewContact(){
    let newContact = {
      "firstName": this.firstName,
       "lastName": this.lastName,
       "email": this.email,
       "phoneNumber": this.Phone,
       "status": "active",
       "address":this.inputAddress,
       "image":this.imgURL
    }
    this.commonService.contactList.push(newContact);

  }

}
