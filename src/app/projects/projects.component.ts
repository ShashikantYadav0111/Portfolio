import { Component, OnInit } from '@angular/core';
import { Project  } from '../Models/model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects:Project[]=[
    {
      title:'Online Banking System',
      technologies:'Java,Spring Boot,Mysql,Git',
      description:['Online bank Management System','Provides interface to both employees and clients for a seemless banking experience.']
    },
    {
      title:'Online Exam System',
      technologies:'Java,Spring Boot,OracleSql,Git,Angular',
      description:['Online Exam System on which organiser can conduct quizes according to his need for interview','Provides interface to both Students and Organiser for a seemless  experience.']
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
