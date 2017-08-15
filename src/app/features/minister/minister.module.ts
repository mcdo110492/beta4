import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';

import { MinisterRoutingModule } from './minister-routing.module';

import { MinisterComponent } from './minister.component';
import { MinisterService } from './minister.service';

@NgModule({
  imports: [
    SharedModule,
    MinisterRoutingModule
  ],
  declarations: [MinisterComponent],
  providers:[MinisterService]
})
export class MinisterModule { }
