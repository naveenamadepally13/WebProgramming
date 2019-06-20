import { TestBed } from '@angular/core/testing';

import { studentServiceService } from './student-service.service';

describe('studentServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: studentServiceService = TestBed.get(studentServiceService);
    expect(service).toBeTruthy();
  });
});
