import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { studentCreateComponent } from './student-create.component';

describe('studentCreateComponent', () => {
  let component: studentCreateComponent;
  let fixture: ComponentFixture<studentCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ studentCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(studentCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
