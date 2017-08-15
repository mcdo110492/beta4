import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardStateService } from './../../_services/auth-guard-state.service';

import { DeathComponent } from './death.component';

const routes: Routes = [
  { path: '', component: DeathComponent , data: {animation:'death'}, canActivate:[AuthGuardStateService] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeathRoutingModule { }
