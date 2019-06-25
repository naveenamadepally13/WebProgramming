import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { bookComponent } from './book/book.component';
import { bookUpdateComponent } from './book-update/book-update.component';
import { bookCreateComponent } from './book-create/book-create.component';

const routes: Routes = [
  {
    path: 'books',
    component: bookComponent,
    data: { title: 'book List' }
  },
  {
    path: 'book-create',
    component: bookCreateComponent,
    data: { title: 'Create book' }
  },
  {
    path: 'book-update',
    component: bookUpdateComponent,
    data: { title: 'Update book' }
  },
  { path: '',
    redirectTo: '/books',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
