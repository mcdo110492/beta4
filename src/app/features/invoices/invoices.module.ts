import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';

import { TitleBarModule } from './../title-bar/title-bar.module';

import { InvoicesRoutingModule } from './invoices-routing.module';

import { InvoicesComponent } from './invoices.component';

import { InvoicesService } from './invoices.service';
import { InvoicesItemsDialogComponent } from './invoices-items-dialog/invoices-items-dialog.component';

@NgModule({
  imports: [
    SharedModule,
    TitleBarModule,
    InvoicesRoutingModule
  ],
  declarations: [InvoicesComponent, InvoicesItemsDialogComponent],
  entryComponents:[InvoicesItemsDialogComponent],
  providers:[InvoicesService]
})
export class InvoicesModule { }
