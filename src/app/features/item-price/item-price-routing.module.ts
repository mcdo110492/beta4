import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardStateService } from './../../_services/auth-guard-state.service';

import { ItemPriceComponent } from './item-price.component';
import { ItemPriceCreateComponent } from './item-price-create/item-price-create.component';
import { ItemPriceEditorComponent } from './item-price-editor/item-price-editor.component';

const routes: Routes = [

  { path: '', component: ItemPriceComponent, data: {animation:'price/list'}, canActivate:[AuthGuardStateService] },
  { path: 'create', component: ItemPriceCreateComponent, data: {animation:'price/create'}, canActivate:[AuthGuardStateService] },
  { path: 'detail/:id', component: ItemPriceEditorComponent, data: {animation:'price/detail'}, canActivate:[AuthGuardStateService] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemPriceRoutingModule { }
