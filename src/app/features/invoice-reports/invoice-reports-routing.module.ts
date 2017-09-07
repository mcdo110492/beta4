import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardStateService } from './../../_services/auth-guard-state.service';

import { InvoiceReportsComponent } from './invoice-reports.component';

const routes: Routes = [
  { path: '', component: InvoiceReportsComponent,  data: {animation:'invoice/reports'}, canActivate:[AuthGuardStateService]  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceReportsRoutingModule { }
