import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddDataComponent} from './add-data/add-data.component';
import {Routes} from "@angular/router";
import {MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS, MatDialogRef} from "@angular/material/dialog";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {AbstractPriceService} from "../services/abstract-price-service";
import {PricesService} from "../services/prices-service";
import {MatListModule} from "@angular/material/list";
import {MatInputModule} from "@angular/material/input";
import {MatChipsModule} from "@angular/material/chips";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatRadioModule} from "@angular/material/radio";
import {MatIconModule} from "@angular/material/icon";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";


const routes: Routes =  [

  // {path: '/price', component:AddDataComponent},
];

@NgModule({
  declarations: [AddDataComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatListModule,
    MatInputModule,
    MatChipsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatIconModule,
    MatPaginatorModule,
    MatTableModule,
  ],
  providers: [
    {provide: AbstractPriceService, useClass: PricesService},
    {provide: MatDialogRef, useValue: {}},
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}},
    {provide: MAT_DIALOG_DATA, useValue: []},
  ],
  exports: []
})
export class SellCalculatorModule { }
