import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PlanningTypeMaintComponent} from './planning-type-maint/planning-type-maint.component';
import {MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {RouterModule, Routes} from '@angular/router';
import {Redirect} from '../models/Redirect';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatListModule} from '@angular/material/list';
import {AbstractConditionerService} from '../services/abstract-conditioner-service';
import {ConditionerService} from '../services/conditioner-service';
import {AbstractMaintenanceService} from '../services/abstract-maintenance-service';
import {MaintenanceService} from '../services/maintenance-service';

const routes: Routes =  [
  {path: Redirect.PLANNING_TYPE_MAINTENANCE_ALL, component: PlanningTypeMaintComponent}
];

@NgModule({
  declarations: [PlanningTypeMaintComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    MatToolbarModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatSortModule,
    MatPaginatorModule,
    MatIconModule,
    MatSelectModule,
    MatDialogModule,
    RouterModule.forRoot(routes),
    MatListModule,
  ],
  providers: [
    {provide: AbstractConditionerService, useClass: ConditionerService},
    {provide: AbstractMaintenanceService, useClass: MaintenanceService},
    {provide: MatDialogRef, useValue: {}},
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}},
    {provide: MAT_DIALOG_DATA, useValue: []},
  ],
  exports: [PlanningTypeMaintComponent]
})
export class PlanningModule { }
