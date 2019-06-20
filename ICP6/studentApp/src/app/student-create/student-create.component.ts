import { Component, OnInit } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { studentServiceService } from '../student-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class studentCreateComponent implements OnInit {
  angForm: FormGroup;
  constructor(private router: Router, private studentService: studentServiceService) {
  }
  addstudent(event) {
    const studentDetail = {
        firstName: event.firstName,
        lastName: event.lastName,
        emailAddress: event.emailAddress,
        address: event.address,
        phoneNo: event.phoneNo
    };
    this.studentService.poststudent(studentDetail)
      .subscribe(res => {
        this.router.navigateByUrl('students');
      }, (err) => {
        console.log(err);
      });
  }

  ngOnInit() {
  }
}
