import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';

import { TitleBarModule } from './../title-bar/title-bar.module';

import { InvoiceReportsComponent } from './invoice-reports.component';

import { InvoiceReportsRoutingModule } from './invoice-reports-routing.module';

import { InvoiceReportsService } from './invoice-reports.service';

@NgModule({
  imports: [
    SharedModule,
    InvoiceReportsRoutingModule,
    TitleBarModule
  ],
  declarations: [InvoiceReportsComponent],
  providers:[InvoiceReportsService]
})
export class InvoiceReportsModule { }
