import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared/shared.module';

import { FileUploadModule } from './../file-upload/file-upload.module';

import { DeathRoutingModule } from './death-routing.module';

import { DeathComponent } from './death.component';

import { DeathService } from './death.service';
import { DeathFormComponent } from './death-form/death-form.component';
import { DeathCreateComponent } from './death-create/death-create.component';
import { DeathEditorComponent } from './death-editor/death-editor.component';
import { DeathBulkComponent } from './death-bulk/death-bulk.component';

@NgModule({
  imports: [
    SharedModule,
    DeathRoutingModule,
    FileUploadModule
  ],
  declarations: [DeathComponent, DeathFormComponent, DeathCreateComponent, DeathEditorComponent, DeathBulkComponent],
  providers:[DeathService]
})
export class DeathModule { }
