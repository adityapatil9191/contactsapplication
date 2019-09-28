import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import {RouterModule,Router,ActivatedRoute} from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  constructor(public commonService:GlobalService,public router:Router,public activatedRoute:ActivatedRoute) { }
  contactForm:FormGroup;
  index;
  eachContact;
  firstName;
  lastName;
  inputAddress;
  Phone;
  email;
  imgURL;
  ngOnInit() {
    this.contactForm = new FormGroup({
      firstName:new FormControl('',[Validators.required]),
      lastName:new FormControl('',[Validators.required]),
      inputAddress:new FormControl('',[Validators.required]),
      Phone:new FormControl('',[Validators.required,Validators.pattern('^[0-9]*$')]),
      email: new FormControl('',[Validators.required,Validators.email]),
      status: new FormControl('',[Validators.required])
    });
    let currentContact = this.activatedRoute.snapshot.params.index;
    this.eachContact = this.commonService.contactList[currentContact];
    this.firstName = this.eachContact.firstName;
    this.lastName = this.eachContact.lastName
    this.inputAddress = this.eachContact.address;
    this.Phone = this.eachContact.phoneNumber;
    this.email = this.eachContact.email;
    this.imgURL = this.eachContact.image;
  }

  public imageUploaded:boolean = false;
  public imagePath:string;
  // imgURL: any;
  public message: string;
  
  public uploadFile(){
    let myFile = document.getElementById("myFile");
    myFile.click();
  }

  public selectFile(event){
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
