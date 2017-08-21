import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';

import { MinisterRoutingModule } from './minister-routing.module';

import { MinisterComponent } from './minister.component';
import { MinisterService } from './minister.service';
import { MinisterFormComponent } from './minister-form/minister-form.component';
import { MinisterCreateComponent } from './minister-create/minister-create.component';
import { MinisterEditorComponent } from './minister-editor/minister-editor.component';

@NgModule({
  imports: [
    SharedModule,
    MinisterRoutingModule
  ],
  declarations: [MinisterComponent, MinisterFormComponent, MinisterCreateComponent, MinisterEditorComponent],
  providers:[MinisterService]
})
export class MinisterModule { }
