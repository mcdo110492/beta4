import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardStateService } from './../../_services/auth-guard-state.service';

import { MinisterComponent } from './minister.component';

const routes: Routes = [
  { path: '', component: MinisterComponent, data: {animation:'minister'}, canActivate:[AuthGuardStateService] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MinisterRoutingModule { }
