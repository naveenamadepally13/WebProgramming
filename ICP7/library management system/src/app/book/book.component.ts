import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';
import { bookServiceService } from '../book-service.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class bookComponent implements OnInit {

  constructor(private modalService: NgbModal, private router: Router, private bookService: bookServiceService) { }
  books: any;
  // public i = 0;

  open() {
    this.router.navigateByUrl('book-create');
  }
  edit(bookData) {
    this.bookService.editdata = bookData;
    this.bookService.id = bookData._id;
    this.router.navigateByUrl('book-update');
  }
  delete(bookData) {
    this.bookService.deletebook(bookData._id)
      .subscribe(res => {
        this.bookService.getbooks().subscribe(res1 => {
          this.books = res1;
        }, err => {
          console.log(err);
        });
      }, err => {
        console.log(err);
      });
  }
  ngOnInit() {
    this.bookService.getbooks()
      .subscribe(res => {
        console.log(res);
        this.books = res;
      }, err => {
        console.log(err);
      });
  }

}
