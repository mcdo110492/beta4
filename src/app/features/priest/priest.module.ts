import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared/shared.module';

import { PriestRoutingModule } from './priest-routing.module';

import { PriestComponent } from './priest.component';
import { PriestService } from './priest.service';

@NgModule({
  imports: [
    SharedModule,
    PriestRoutingModule
  ],
  declarations: [PriestComponent],
  providers:[PriestService]
})
export class PriestModule { }
