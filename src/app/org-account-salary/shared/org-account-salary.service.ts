import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { SalaryMatrixModel } from './SalaryMatrixModel';

@Injectable({
  providedIn: 'root'
})
export class OrgAccountSalaryService {
  apiurl = "http://localhost:10012/api/";

  constructor(private http: HttpClient) { }

  SalaryMatrix(): Observable<SalaryMatrixModel> {
    let user = JSON.parse(localStorage.getItem('user'));
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      }),
    };
    return this.http.get<SalaryMatrixModel>(this.apiurl + "InsureeInfo/pention/salary", httpOptions);
  }
}
