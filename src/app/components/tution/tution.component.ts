import { Component, OnInit } from '@angular/core';
import { TutionService } from '../../tution.service';
import { observable } from 'rxjs';

@Component({
  selector: 'app-tution',
  templateUrl: './tution.component.html',
  styleUrls: ['./tution.component.scss']
})
export class TutionComponent implements OnInit {

  title: string;
  tution$: object;

  constructor(private course: TutionService) { }

  ngOnInit() {
    this.title = "Course";
    this.course.getTution().subscribe(
      course => this.tution$ = course
    );
  }

}
