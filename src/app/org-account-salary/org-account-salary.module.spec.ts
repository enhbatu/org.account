import { OrgAccountSalaryModule } from './org-account-salary.module';

describe('OrgAccountSalaryModule', () => {
  let orgAccountSalaryModule: OrgAccountSalaryModule;

  beforeEach(() => {
    orgAccountSalaryModule = new OrgAccountSalaryModule();
  });

  it('should create an instance', () => {
    expect(orgAccountSalaryModule).toBeTruthy();
  });
});
