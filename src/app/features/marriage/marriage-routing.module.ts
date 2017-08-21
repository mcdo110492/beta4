import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardStateService } from './../../_services/auth-guard-state.service';
import { MarriageComponent } from './marriage.component';
import { MarriageEditorComponent } from './marriage-editor/marriage-editor.component';
import { MarriageCreateComponent } from './marriage-create/marriage-create.component';

const routes: Routes = [
  { path: '', component: MarriageComponent, data: { animations:'marriage' }, canActivate:[AuthGuardStateService] },
  { path: 'create', component: MarriageCreateComponent, data: { animations:'marriage/create' }, canActivate:[AuthGuardStateService] },
  { path: 'detail/:id', component: MarriageEditorComponent, data: { animations:'marriage/detail' }, canActivate:[AuthGuardStateService] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarriageRoutingModule { }
