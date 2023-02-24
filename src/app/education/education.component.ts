import { Component, OnInit } from '@angular/core';
import { Education } from '../Models/model'
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educationList: Education[] = [
    {
      institute: 'G.L. Bajaj Institute of Technology and Management',
      course: 'Btech-ECE',
      duration: '2018-2022',
      score: '76%'
    },
    {
      institute: 'Vidya Mandir Public School',
      course: 'XIIth',
      duration: '2017-2018',
      score: '77%'
    },
    {
      institute: 'Vidya Mandir Public School',
      course: 'Xth',
      duration: '2015-2016',
      score: '78%'
    },


  ];
  constructor() { }

  ngOnInit(): void {
  }

}
