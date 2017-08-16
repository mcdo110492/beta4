import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardStateService } from './../../_services/auth-guard-state.service';
import { ConfirmationComponent } from './confirmation.component';
import { ConfirmationCreateComponent } from './confirmation-create/confirmation-create.component';
import { ConfirmationEditorComponent } from './confirmation-editor/confirmation-editor.component';

const routes: Routes = [
  { path: '', component: ConfirmationComponent, data: {animation:'confirmation'}, canActivate:[AuthGuardStateService] },
  { path: 'create', component: ConfirmationCreateComponent, data: {animation:'confirmation/create'}, canActivate:[AuthGuardStateService] },
  { path: 'detail/:id', component: ConfirmationEditorComponent, data: {animation:'confirmation/detail'}, canActivate:[AuthGuardStateService] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfirmationRoutingModule { }
