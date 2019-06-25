import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { bookComponent } from './book/book.component';
import { bookUpdateComponent } from './book-update/book-update.component';
import { bookCreateComponent } from './book-create/book-create.component';
import {bookServiceService} from './book-service.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    bookComponent,
    bookUpdateComponent,
    bookCreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [bookServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
