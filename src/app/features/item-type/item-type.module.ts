import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared/shared.module';
import { TitleBarModule } from './../title-bar/title-bar.module';

import { ItemTypeRoutingModule } from './item-type-routing.module';

import { ItemTypeService } from './item-type.service';

import { ItemTypeComponent } from './item-type.component';
import { ItemTypeFormComponent } from './item-type-form/item-type-form.component';
import { ItemTypeCreateComponent } from './item-type-create/item-type-create.component';
import { ItemTypeEditComponent } from './item-type-edit/item-type-edit.component';


@NgModule({
  imports: [
    SharedModule,
    ItemTypeRoutingModule,
    TitleBarModule
  ],
  declarations: [ItemTypeComponent, ItemTypeFormComponent, ItemTypeCreateComponent, ItemTypeEditComponent],
  providers:[ItemTypeService]
})
export class ItemTypeModule { }
