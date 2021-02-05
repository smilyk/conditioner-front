import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavConditionerComponent} from './nav-conditioner/nav-conditioner.component';
import {RouterModule, Routes} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {ConditionersListComponent} from '../manager/conditioners-list/conditioners-list.component';
import {AddConditionerComponent} from '../manager/add-conditioner/add-conditioner.component';
import {AddMaintenanceComponent} from '../manager/add-maintenance/add-maintenance.component';
import { ConditionerHomeComponent } from './conditioner-home/conditioner-home.component';
import { ConditionerFooterComponent } from './conditioner-footer/conditioner-footer.component';
import { CalculatorComponent } from './calculator/calculator.component';
import {MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS, MatDialogRef} from '@angular/material/dialog';
import {AbstractCalculatorService} from '../services/abstract-calculator-service';
import {CalculatorService} from '../services/calculator-service';
import {AddPriceComponent} from "../price/add-price/add-price.component";
import {AddDataComponent} from "../sell-calculator/add-data/add-data.component";


const routes: Routes =  [
  {path: 'conditioners', component: ConditionersListComponent},
  {path: 'conditioner/add', component: AddConditionerComponent},
  {path: 'calculator', component: CalculatorComponent},
  {path: 'maint/add', component: AddMaintenanceComponent},
  {path: '', component: ConditionerHomeComponent},
  {path: 'upload/file', component: AddPriceComponent},
  {path: 'price', component: AddDataComponent},
];

@NgModule({
  declarations: [NavConditionerComponent, ConditionerHomeComponent, ConditionerFooterComponent, CalculatorComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatMenuModule,
    MatTabsModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatIconModule,
    MatSelectModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {provide: AbstractCalculatorService, useClass: CalculatorService},
    {provide: MatDialogRef, useValue: {}},
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}},
    {provide: MAT_DIALOG_DATA, useValue: []},
  ],
  exports: [NavConditionerComponent, RouterModule, ConditionerFooterComponent, CalculatorComponent]
})
export class SharedModule { }

