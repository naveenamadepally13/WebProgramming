import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { bookCreateComponent } from './book-create.component';

describe('bookCreateComponent', () => {
  let component: bookCreateComponent;
  let fixture: ComponentFixture<bookCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ bookCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(bookCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
