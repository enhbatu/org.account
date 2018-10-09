import { TestBed } from '@angular/core/testing';

import { OrgAccountSalaryService } from './org-account-salary.service';

describe('OrgAccountSalaryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrgAccountSalaryService = TestBed.get(OrgAccountSalaryService);
    expect(service).toBeTruthy();
  });
});
