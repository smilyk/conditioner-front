import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddPriceComponent} from './add-price/add-price.component';
import {MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {RouterModule, Routes} from "@angular/router";
import {AbstractPriceService} from "../services/abstract-price-service";
import {PricesService} from "../services/prices-service";
import {Redirect} from "../models/Redirect";
import {ConditionerHomeComponent} from "../shared/conditioner-home/conditioner-home.component";
import {MatTableExporterModule} from "mat-table-exporter";
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {ArticleDetailsComponent} from "../manager/article-details/article-details.component";
import { DetailPriceComponent } from './detail-price/detail-price.component';
import {ConditionerDetailsComponent} from "../manager/conditioner-details/conditioner-details.component";
import {MatMenuModule} from "@angular/material/menu";
import {MatTabsModule} from "@angular/material/tabs";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatRadioModule} from "@angular/material/radio";
import {MatCardModule} from "@angular/material/card";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatListModule} from "@angular/material/list";


const routes: Routes =  [
  {path: Redirect.HOME, component: ConditionerHomeComponent},
  {path: Redirect.DETAIL_PRICE_POSITION + ':id' , component: DetailPriceComponent},
];

@NgModule({
  declarations: [AddPriceComponent, DetailPriceComponent],
  imports: [
    CommonModule,
    MatTableExporterModule,
    MatTableModule,
    MatMenuModule,
    MatTabsModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatDialogModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatTooltipModule,
    MatListModule,
  ],
  exports: [
    AddPriceComponent, DetailPriceComponent
  ],
  providers: [
    {provide: AbstractPriceService, useClass: PricesService},
    {provide: MatDialogRef, useValue: {}},
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}},
    {provide: MAT_DIALOG_DATA, useValue: []},
  ],
})
export class PriceModule { }
