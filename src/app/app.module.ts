import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OrgAccountSalaryModule } from './org-account-salary/org-account-salary.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    OrgAccountSalaryModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
