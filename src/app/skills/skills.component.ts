import { Component, OnInit } from '@angular/core';
import {Skill} from '../Models/model';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills:Skill[]=[
    {
      name:'Angular',
      level:'Beginner',
      rating:'30'
    },
    {
      name:'Spring Boot',
      level:'Beginner',
      rating:'50'
    },
    {
      name:'Java',
      level:'intermediate',
      rating:'60'
    },
    {
      name:'MySql',
      level:'Beginner',
      rating:'40'
    },
   
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
