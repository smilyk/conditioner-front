import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddPriceComponent} from './add-price/add-price.component';
import {MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS, MatDialogRef} from "@angular/material/dialog";
import {Routes} from "@angular/router";
import {AbstractPriceService} from "../services/abstract-price-service";
import {PricesService} from "../services/prices-service";
import {Redirect} from "../models/Redirect";
import {ConditionerHomeComponent} from "../shared/conditioner-home/conditioner-home.component";
import {MatTableExporterModule} from "mat-table-exporter";
import {MatTableModule} from "@angular/material/table";


const routes: Routes =  [
  {path: Redirect.HOME, component: ConditionerHomeComponent},
];

@NgModule({
  declarations: [AddPriceComponent],
  exports: [
    AddPriceComponent
  ],
  imports: [
    CommonModule,
    MatTableExporterModule,
    MatTableModule
  ],
  providers: [
    {provide: AbstractPriceService, useClass: PricesService},
    {provide: MatDialogRef, useValue: {}},
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}},
    {provide: MAT_DIALOG_DATA, useValue: []},
  ],
})
export class PriceModule { }
