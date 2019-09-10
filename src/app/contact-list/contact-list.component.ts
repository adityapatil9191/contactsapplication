import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  constructor() { }

  contactList = [
    {
      "firstName": "andrew",
      "lastName": "Blake",
      "email": "andrewblake@gmail.com ",
      "phoneNumber": 9873927382,
      "status": "active",
      "address":"address hill crest",
      "image":"http://demos.themes.guide/bodeo/assets/images/users/m101.jpg"
    },
    {
      "firstName": "abc",
      "lastName": "radomf",
      "email": "abce@gmail.com ",
      "phoneNumber": 98739223,
      "status": "active",
      "address":"address hill crest",
      "image":"http://demos.themes.guide/bodeo/assets/images/users/m105.jpg"
    },
    {
      "firstName": "andy",
      "lastName": "croatia",
      "email": "andycrotia@gmail.com ",
      "phoneNumber": 987327382,
      "status": "active",
      "address":"address hill crest",
      "image":"http://demos.themes.guide/bodeo/assets/images/users/w102.jpg"
    },
    {
      "firstName": "pamela",
      "lastName": "anderson",
      "email": "pamel@fmail.com ",
      "phoneNumber": 97327382,
      "status": "active",
      "address":"address hill crest",
      "image":"http://demos.themes.guide/bodeo/assets/images/users/w104.jpg"
    },
    {
      "firstName": "widget",
      "lastName": "fonda",
      "email": "widgetfonda@gmail.com",
      "phoneNumber": 97327232322,
      "status": "active",
      "address":"address hill crest",
      "image":"http://demos.themes.guide/bodeo/assets/images/users/w104.jpg"
    },

  ];

  ngOnInit() {
  }

}
