import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { studentComponent } from './student/student.component';
import { studentUpdateComponent } from './student-update/student-update.component';
import { studentCreateComponent } from './student-create/student-create.component';
import {studentServiceService} from './student-service.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    studentComponent,
    studentUpdateComponent,
    studentCreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [studentServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
