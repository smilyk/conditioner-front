import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddDataComponent} from './add-data/add-data.component';
import {RouterModule, Routes} from "@angular/router";
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
import {BrowserModule} from "@angular/platform-browser";
import {TransfereService} from "../services/transfereService";
import {MatMenuModule} from "@angular/material/menu";
import {MatTabsModule} from "@angular/material/tabs";
import {MatButtonModule} from "@angular/material/button";
import {HttpClientModule} from "@angular/common/http";
import {MatSortModule} from "@angular/material/sort";
import { CostComponent } from './cost/cost.component';
import { CostDetailComponent } from './cost-detail/cost-detail.component';
import {Redirect} from "../models/Redirect";
import { OfferComponent } from './offer/offer.component';
import {MatCardModule} from "@angular/material/card";
import {MatTableExporterModule} from "mat-table-exporter";


const routes: Routes =  [
  {path:'prices', component:CostComponent},
  {path: Redirect.DETAIL_PRICE, component: CostDetailComponent},
  {path: Redirect.OFFER, component:OfferComponent},
];

@NgModule({
  declarations: [AddDataComponent, CostComponent, CostDetailComponent, OfferComponent],
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
    RouterModule.forRoot(routes),
    BrowserModule,
    MatMenuModule,
    MatTabsModule,
    MatButtonModule,
    HttpClientModule,
    MatSortModule,
    MatCardModule,
    MatTableExporterModule,
  ],
  providers: [
    {provide: TransfereService},
    {provide: AbstractPriceService, useClass: PricesService},
    {provide: MatDialogRef, useValue: {}},
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}},
    {provide: MAT_DIALOG_DATA, useValue: []},
  ],
  exports: [ AddDataComponent, RouterModule, CostComponent, CostDetailComponent,OfferComponent]
})
export class SellCalculatorModule { }
