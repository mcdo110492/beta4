import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared/shared.module';

import { DeathRoutingModule } from './death-routing.module';

import { DeathComponent } from './death.component';

import { DeathService } from './death.service';

@NgModule({
  imports: [
    SharedModule,
    DeathRoutingModule
  ],
  declarations: [DeathComponent],
  providers:[DeathService]
})
export class DeathModule { }
