import { Component, OnInit } from '@angular/core';
import { TutionService } from '../../tution.service';

@Component({
  selector: 'app-tution',
  templateUrl: './tution.component.html',
  styleUrls: ['./tution.component.scss']
})
export class TutionComponent {
      title = "List of Courses";
      courses;

  constructor() {
    let service = new TutionService();

   }
  }
