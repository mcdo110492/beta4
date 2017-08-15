import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared/shared.module';

import { ConfirmationRoutingModule } from './confirmation-routing.module';

import { ConfirmationComponent } from './confirmation.component';

import { ConfirmationService } from './confirmation.service';

@NgModule({
  imports: [
    ConfirmationRoutingModule,
    SharedModule
  ],
  declarations: [ConfirmationComponent],
  providers:[ConfirmationService]
})
export class ConfirmationModule { }
