import { Component, OnInit } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { bookServiceService } from '../book-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class bookCreateComponent implements OnInit {
  angForm: FormGroup;
  constructor(private router: Router, private bookService: bookServiceService) {
  }
  addbook(event) {
    const bookDetail = {
      bookName: event.bookName,
      authorName: event.authorName,
      noOfCopies: event.noOfCopies,
      edition: event.edition,
      isbn: event.isbn
    };
    this.bookService.postbook(bookDetail)
      .subscribe(res => {
        this.router.navigateByUrl('books');
      }, (err) => {
        console.log(err);
      });
  }

  ngOnInit() {
  }
}
