import { Component, OnInit } from '@angular/core';
import { Workexperience } from '../Models/model';

@Component({
  selector: 'app-workexperience',
  templateUrl: './workexperience.component.html',
  styleUrls: ['./workexperience.component.css']
})
export class WorkexperienceComponent implements OnInit {

  workexp: Workexperience[] = [
    {
      role: 'Consultant - Package Implementation',
      comapany: 'LTIMindtree',
      duration: '2022-running',
      description: ['Currently serving the bench period due to the lack of Projects',
        'I was trained in various technology including Spring Boot,RDBMS,RPA,OIC'
      ]
    },
    {
      role: 'Trainee',
      comapany: 'Cognizant',
      duration: 'jan-2022-jul-2022',
      description: ['I was trained in various technology including Spring Boot,RDBMS,RPA',
        'Made a bank Acount Management System that facilitates online banking experience for both the client and bank Employee'
      ]
    },

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
