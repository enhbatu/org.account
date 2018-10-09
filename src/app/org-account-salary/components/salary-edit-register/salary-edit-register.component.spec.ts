import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryEditRegisterComponent } from './salary-edit-register.component';

describe('SalaryEditRegisterComponent', () => {
  let component: SalaryEditRegisterComponent;
  let fixture: ComponentFixture<SalaryEditRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalaryEditRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaryEditRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
