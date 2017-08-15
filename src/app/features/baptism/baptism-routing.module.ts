import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardStateService } from './../../_services/auth-guard-state.service';
import { BaptismComponent } from './baptism.component';
import { BaptismFormEditorComponent } from './baptism-form-editor/baptism-form-editor.component';

const routes: Routes = [
  { path: '', component: BaptismComponent, data: {animation:'baptism'}, canActivate:[AuthGuardStateService] },
  { path: 'detail/:id', component: BaptismFormEditorComponent, data: {animation:'baptism/detail'}, canActivate:[AuthGuardStateService] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaptismRoutingModule { }
