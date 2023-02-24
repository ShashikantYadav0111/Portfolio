import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit {
  myData:string[][] =[
    ['Name','Shashikant Yadav'],
    ['DOB','30/07/1999'],
    ['Work Exp','2 Years'],
    ['Education','B.Tech(2022)'],
    ['Interests','Chess'],
  ];
  aboutMe:string[] = [
    'Hi, I am a Web Developer with 2 years of experience in making web application',
    'Delivered all projects within the deadline and always eager to learn new things.',
    'Currently working as Consultant - Package Implementation for LTIMindtree'
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
