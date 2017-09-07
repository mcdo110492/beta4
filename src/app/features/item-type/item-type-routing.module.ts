import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardStateService } from './../../_services/auth-guard-state.service';
import { ItemTypeComponent } from './item-type.component';
import { ItemTypeCreateComponent } from './item-type-create/item-type-create.component';
import { ItemTypeEditComponent } from './item-type-edit/item-type-edit.component';


const routes: Routes = [
  { path: '', component: ItemTypeComponent, data: {animation:'item/list'}, canActivate:[AuthGuardStateService] },
  { path: 'create', component: ItemTypeCreateComponent, data: {animation:'item/create'}, canActivate:[AuthGuardStateService] },
  { path: 'detail/:id', component: ItemTypeEditComponent, data: {animation:'item/detail'}, canActivate:[AuthGuardStateService] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemTypeRoutingModule { }
