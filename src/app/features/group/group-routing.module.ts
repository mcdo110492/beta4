import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardStateService } from './../../_services/auth-guard-state.service';

import { GroupComponent } from './group.component';
import { GroupCreateComponent } from './group-create/group-create.component';
import { GroupEditorComponent } from './group-editor/group-editor.component';

import { GroupItemComponent } from './group-item/group-item.component';

const routes: Routes = [
  { path: '', component: GroupComponent, data: {animation:'group/list'}, canActivate:[AuthGuardStateService] },
  { path: 'create', component: GroupCreateComponent, data: {animation:'group/create'}, canActivate:[AuthGuardStateService] },
  { path: 'detail/:id', component: GroupEditorComponent, data: {animation:'group/detail'}, canActivate:[AuthGuardStateService] },
  { path: 'items/:id/:name', component: GroupItemComponent, data: {animation:'group/items'}, canActivate:[AuthGuardStateService] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupRoutingModule { }
