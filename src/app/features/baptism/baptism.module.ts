import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared/shared.module';

import { BaptismRoutingModule } from './baptism-routing.module';
import { BaptismComponent } from './baptism.component';


import { BaptismService } from './baptism.service';
import { BaptismEditorComponent } from './baptism-editor/baptism-editor.component';
import { BaptismFormComponent } from './baptism-form/baptism-form.component';
import { BaptismCreateComponent } from './baptism-create/baptism-create.component';

@NgModule({
  imports: [
    SharedModule,
    BaptismRoutingModule,
    
  ],
  declarations: [BaptismComponent, BaptismEditorComponent, BaptismFormComponent, BaptismCreateComponent],
  providers:[BaptismService]
})
export class BaptismModule { }
