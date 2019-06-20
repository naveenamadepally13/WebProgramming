import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';
import { studentServiceService } from '../student-service.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class studentComponent implements OnInit {

  constructor(private modalService: NgbModal, private router: Router, private studentService: studentServiceService) { }
  students: any;
  // public i = 0;

  open() {
    this.router.navigateByUrl('student-create');
  }
  edit(studentData) {
    this.studentService.editdata = studentData;
    this.studentService.id = studentData._id;
    this.router.navigateByUrl('student-update');
  }
  delete(studentData) {
    this.studentService.deletestudent(studentData._id)
      .subscribe(res => {
        this.studentService.getstudents().subscribe(res1 => {
          this.students = res1;
        }, err => {
          console.log(err);
        });
      }, err => {
        console.log(err);
      });
  }
  ngOnInit() {
    this.studentService.getstudents()
      .subscribe(res => {
        console.log(res);
        this.students = res;
      }, err => {
        console.log(err);
      });
  }

}
