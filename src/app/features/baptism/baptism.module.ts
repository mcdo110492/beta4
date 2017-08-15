import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared/shared.module';

import { BaptismRoutingModule } from './baptism-routing.module';
import { BaptismComponent } from './baptism.component';


import { BaptismService } from './baptism.service';
import { BaptismFormEditorComponent } from './baptism-form-editor/baptism-form-editor.component';

@NgModule({
  imports: [
    SharedModule,
    BaptismRoutingModule,
    
  ],
  declarations: [BaptismComponent, BaptismFormEditorComponent],
  providers:[BaptismService]
})
export class BaptismModule { }
