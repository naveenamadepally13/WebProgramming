import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { bookUpdateComponent } from './book-update.component';

describe('bookUpdateComponent', () => {
  let component: bookUpdateComponent;
  let fixture: ComponentFixture<bookUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ bookUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(bookUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
