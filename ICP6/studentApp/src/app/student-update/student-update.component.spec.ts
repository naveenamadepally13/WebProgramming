import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { studentUpdateComponent } from './student-update.component';

describe('studentUpdateComponent', () => {
  let component: studentUpdateComponent;
  let fixture: ComponentFixture<studentUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ studentUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(studentUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
