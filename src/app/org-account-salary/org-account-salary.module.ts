import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalaryMatrixComponent } from './components/salary-matrix/salary-matrix.component';
import { SalaryEditRegisterComponent } from './components/salary-edit-register/salary-edit-register.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SalaryMatrixComponent, SalaryEditRegisterComponent],
  exports: [
    SalaryMatrixComponent,
    SalaryEditRegisterComponent
  ]
})
export class OrgAccountSalaryModule { }
