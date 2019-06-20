import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { studentComponent } from './student/student.component';
import { studentUpdateComponent } from './student-update/student-update.component';
import { studentCreateComponent } from './student-create/student-create.component';

const routes: Routes = [
  {
    path: 'students',
    component: studentComponent,
    data: { title: 'student List' }
  },
  {
    path: 'student-create',
    component: studentCreateComponent,
    data: { title: 'Create student' }
  },
  {
    path: 'student-update',
    component: studentUpdateComponent,
    data: { title: 'Update student' }
  },
  { path: '',
    redirectTo: '/students',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
