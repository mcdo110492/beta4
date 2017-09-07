import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';

import { GroupRoutingModule } from './group-routing.module';

import { TitleBarModule } from './../title-bar/title-bar.module';

import { GroupComponent } from './group.component';
import { GroupFormComponent } from './group-form/group-form.component';
import { GroupCreateComponent } from './group-create/group-create.component';
import { GroupEditorComponent } from './group-editor/group-editor.component';

import { GroupItemComponent } from './group-item/group-item.component';

import { GroupService } from './group.service';
import { GroupItemService } from './group-item.service';
import { GroupItemFormComponent } from './group-item/group-item-form/group-item-form.component';


@NgModule({
  imports: [
    SharedModule,
    GroupRoutingModule,
    TitleBarModule
  ],
  declarations: [GroupComponent, GroupFormComponent, GroupCreateComponent, GroupEditorComponent, GroupItemComponent, GroupItemFormComponent],
  providers:[GroupService,GroupItemService]
})
export class GroupModule { }
