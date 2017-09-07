import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';

import { TitleBarModule } from './../title-bar/title-bar.module';

import { ItemPriceRoutingModule } from './item-price-routing.module';

import { ItemPriceComponent } from './item-price.component';
import { ItemPriceFormComponent } from './item-price-form/item-price-form.component';
import { ItemPriceCreateComponent } from './item-price-create/item-price-create.component';
import { ItemPriceEditorComponent } from './item-price-editor/item-price-editor.component';

import { ItemPriceService } from './item-price.service';

@NgModule({
  imports: [
    SharedModule,
    ItemPriceRoutingModule,
    TitleBarModule
  ],
  declarations: [ItemPriceComponent,ItemPriceFormComponent, ItemPriceCreateComponent, ItemPriceEditorComponent],
  providers:[ItemPriceService]
})
export class ItemPriceModule { }
