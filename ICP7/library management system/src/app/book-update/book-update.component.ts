import { Component, OnInit } from '@angular/core';
import { bookServiceService } from '../book-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.css']
})
export class bookUpdateComponent implements OnInit {

  constructor(private router: Router, public bookService: bookServiceService) {
  }
  onUpdatebook(event) {
    const bookDetail = {
      bookName: event.bookName,
      authorName: event.authorName,
      noOfCopies: event.noOfCopies,
      edition: event.edition,
      isbn: event.isbn
    };
    this.bookService.updatebookData( this.bookService.id, bookDetail)
      .subscribe(res => {
        this.router.navigateByUrl('books');
      }, (err) => {
        console.log(err);
      });
  }
  ngOnInit() {
    console.log(this.bookService.editdata);
  }

}
