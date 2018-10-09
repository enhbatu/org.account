import { Component, OnInit } from '@angular/core';
import { SalaryMatrixModel } from '../../shared/SalaryMatrixModel';

@Component({
  selector: 'app-salary-matrix',
  templateUrl: './salary-matrix.component.html',
  styleUrls: ['./salary-matrix.component.css']
})
export class SalaryMatrixComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  select(matrixRow: SalaryMatrixModel, CalMonth: number) {

  }
}
