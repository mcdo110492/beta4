import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared/shared.module';
import { TitleBarModule } from './../title-bar/title-bar.module';

import { SalesReportRoutingModule } from './sales-report-routing.module';
import { SalesReportComponent } from './sales-report.component';

import { SalesReportService } from './sales-report.service';
import { SalesReportFormComponent } from './sales-report-form/sales-report-form.component';

@NgModule({
  imports: [
    SharedModule,
    TitleBarModule,
    SalesReportRoutingModule
  ],
  declarations: [SalesReportComponent, SalesReportFormComponent],
  providers:[SalesReportService]
})
export class SalesReportModule { }
