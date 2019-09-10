import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css']
})
export class CreateContactComponent implements OnInit {
  imageUploaded = false;
  public imagePath;
  imgURL: any;
  public message: string;
  uploadFile=()=>{
    let myFile = document.getElementById("myFile");
    myFile.click();
  }
  selectFile=(event)=>{
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
  constructor() { }

  ngOnInit() {
  }

}
