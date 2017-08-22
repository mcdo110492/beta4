import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared/shared.module';

import { FileUploadModule } from './../file-upload/file-upload.module';

import { BaptismRoutingModule } from './baptism-routing.module';
import { BaptismComponent } from './baptism.component';


import { BaptismService } from './baptism.service';
import { BaptismEditorComponent } from './baptism-editor/baptism-editor.component';
import { BaptismFormComponent } from './baptism-form/baptism-form.component';
import { BaptismCreateComponent } from './baptism-create/baptism-create.component';
import { BaptismBulkComponent } from './baptism-bulk/baptism-bulk.component';

@NgModule({
  imports: [
    SharedModule,
    BaptismRoutingModule,
    FileUploadModule
  ],
  declarations: [BaptismComponent, BaptismEditorComponent, BaptismFormComponent, BaptismCreateComponent, BaptismBulkComponent],
  providers:[BaptismService]
})
export class BaptismModule { }
