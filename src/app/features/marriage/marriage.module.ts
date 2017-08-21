import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared/shared.module';

import { MarriageRoutingModule } from './marriage-routing.module';

import { MarriageComponent } from './marriage.component';

import { MarriageService } from './marriage.service';
import { MarriageFormComponent } from './marriage-form/marriage-form.component';
import { MarriageEditorComponent } from './marriage-editor/marriage-editor.component';
import { MarriageCreateComponent } from './marriage-create/marriage-create.component';

@NgModule({
  imports: [
    SharedModule,
    MarriageRoutingModule
  ],
  declarations: [
    MarriageComponent,
    MarriageFormComponent,
    MarriageEditorComponent,
    MarriageCreateComponent
  ],
  providers: [
    MarriageService
  ]
})
export class MarriageModule { }