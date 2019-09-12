import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import {FormControl,FormGroup, Validators} from '@angular/forms';
import {RouterModule, Router} from "@angular/router";

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
  constructor(public commonService:GlobalService,public router:Router) { }
  firstName:string;
  lastName:string;
  inputAddress:string;
  Phone:number;
  email:string;
  status: string;
  contactForm:FormGroup;
  ngOnInit() {
    this.contactForm = new FormGroup({
      firstName:new FormControl('',[Validators.required]),
      lastName:new FormControl('',[Validators.required]),
      inputAddress:new FormControl('',[Validators.required]),
      Phone:new FormControl('',[Validators.required,Validators.pattern('^[0-9]*$')]),
      email: new FormControl('',[Validators.required,Validators.email]),
      status: new FormControl('',[Validators.required])
    })
  }
  public addNewContact(){
    console.log(this.contactForm);
    let newContact = {
      "firstName": this.firstName,
       "lastName": this.lastName,
       "email": this.email,
       "phoneNumber": this.Phone,
       "status": "active",
       "address":this.inputAddress,
       "image":this.imgURL
    }
    if(confirm("Save new contact?")===true){
      this.commonService.contactList.push(newContact);
      this.router.navigate(['/contacts']);
    }
  }
  

}
