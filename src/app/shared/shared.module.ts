import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';

import { CdkTableModule } from '@angular/cdk';


import {
  MdAutocompleteModule,
  MdCheckboxModule,
  MdDatepickerModule,
  MdNativeDateModule,
  MdInputModule,
  MdRadioModule,
  MdSelectModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdMenuModule,
  MdSidenavModule,
  MdToolbarModule,
  MdListModule,
  MdGridListModule,
  MdCardModule,
  MdTabsModule,
  MdButtonModule,
  MdButtonToggleModule,
  MdChipsModule,
  MdIconModule,
  MdProgressSpinnerModule,
  MdProgressBarModule,
  MdDialogModule,
  MdTooltipModule,
  MdSnackBarModule,
  MdTableModule,
  MdSortModule,
  MdPaginatorModule
} from '@angular/material';
import { UniqueValidatorDirective } from './unique-validator.directive';


const AngularMaterialModules: any[] = [
  MdAutocompleteModule,
  MdCheckboxModule,
  MdDatepickerModule,
  MdNativeDateModule,
  MdInputModule,
  MdRadioModule,
  MdSelectModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdMenuModule,
  MdSidenavModule,
  MdToolbarModule,
  MdListModule,
  MdGridListModule,
  MdCardModule,
  MdTabsModule,
  MdButtonModule,
  MdButtonToggleModule,
  MdChipsModule,
  MdIconModule,
  MdProgressSpinnerModule,
  MdProgressBarModule,
  MdDialogModule,
  MdTooltipModule,
  MdSnackBarModule,
  MdTableModule,
  MdSortModule,
  MdPaginatorModule
];



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UniqueValidatorDirective],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CdkTableModule,
    AngularMaterialModules,
    FlexLayoutModule,
    UniqueValidatorDirective
  ]
})
export class SharedModule { }
