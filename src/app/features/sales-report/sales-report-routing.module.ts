import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardStateService } from './../../_services/auth-guard-state.service';

import { SalesReportComponent } from './sales-report.component';

const routes: Routes = [
  { path: '', component: SalesReportComponent, data:{ animation :'sales/report' }, canActivate:[AuthGuardStateService] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesReportRoutingModule { }
