import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared/shared.module';

import { ConfirmationRoutingModule } from './confirmation-routing.module';

import { ConfirmationComponent } from './confirmation.component';

import { ConfirmationService } from './confirmation.service';
import { ConfirmationFormComponent } from './confirmation-form/confirmation-form.component';
import { ConfirmationEditorComponent } from './confirmation-editor/confirmation-editor.component';
import { ConfirmationCreateComponent } from './confirmation-create/confirmation-create.component';

@NgModule({
  imports: [
    ConfirmationRoutingModule,
    SharedModule
  ],
  declarations: [ConfirmationComponent, ConfirmationFormComponent, ConfirmationEditorComponent, ConfirmationCreateComponent],
  providers:[ConfirmationService]
})
export class ConfirmationModule { }
