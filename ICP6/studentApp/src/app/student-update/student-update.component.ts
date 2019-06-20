import { Component, OnInit } from '@angular/core';
import { studentServiceService } from '../student-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.css']
})
export class studentUpdateComponent implements OnInit {

  constructor(private router: Router, public studentService: studentServiceService) {
  }
  onUpdatestudent(event) {
    const studentDetail = {
      firstName: event.firstName,
      lastName: event.lastName,
      emailAddress: event.emailAddress,
      address: event.address,
      phoneNo: event.phoneNo
    };
    this.studentService.updatestudentData( this.studentService.id, studentDetail)
      .subscribe(res => {
        this.router.navigateByUrl('students');
      }, (err) => {
        console.log(err);
      });
  }
  ngOnInit() {
    console.log(this.studentService.editdata);
  }

}
