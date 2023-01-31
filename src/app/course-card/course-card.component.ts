import { Component, EventEmitter, Input, Output } from '@angular/core';
import { COURSES } from 'src/db-data';

import { Course } from '../model/course';


@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent {
@Input()
course:Course

@Input()
cardIndex:number

@Output('courseSelected')
emitterEvent = new EventEmitter<Course>()

onCourseView(){
  console.log("card link clicked")

  this.emitterEvent.emit(this.course)
}
}
