import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TutionService {

  getCourses(){
    return ["courses1", "courses2", "courses3"];
  }
}
