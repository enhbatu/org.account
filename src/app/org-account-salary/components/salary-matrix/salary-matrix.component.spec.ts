import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryMatrixComponent } from './salary-matrix.component';

describe('SalaryMatrixComponent', () => {
  let component: SalaryMatrixComponent;
  let fixture: ComponentFixture<SalaryMatrixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalaryMatrixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaryMatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
