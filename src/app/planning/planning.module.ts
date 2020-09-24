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
import {PlanningTypeMaintDetailsComponent} from './planning-type-maint-details/planning-type-maint-details.component';
import {PlanningTypeMaintWeekComponent} from './planning-type-maint-week/planning-type-maint-week.component';
import {PlanningTypeMaintDateComponent} from './planning-type-maint-date/planning-type-maint-date.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {AbstractPlanningService} from '../services/abstract-planning-service';
import {PlanningService} from '../services/planning-service';
import {PlanRecordComponent} from './plan-record/plan-record.component';

const routes: Routes =  [
  {path: Redirect.PLANNING_TYPE_MAINTENANCE_ALL, component: PlanningTypeMaintComponent},
  {path: Redirect.GET_PLANNING_TYPE_MAINTENANCE_BY_RECORDS_UUID + Redirect.ID, component: PlanningTypeMaintDetailsComponent},
  {path: Redirect.PLANNING_TYPE_MAINTENANCE_NEXT_WEEK, component: PlanningTypeMaintWeekComponent},
  {path: Redirect.PLANNING_TYPE_MAINTENANCE_NEXT_DATES, component: PlanningTypeMaintDateComponent},
  {path: Redirect.PLAN_RECORD + Redirect.ID, component: PlanRecordComponent},
];

@NgModule({
  declarations: [PlanningTypeMaintComponent, PlanningTypeMaintDetailsComponent, PlanningTypeMaintWeekComponent,
    PlanningTypeMaintDateComponent, PlanRecordComponent],
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
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    {provide: AbstractConditionerService, useClass: ConditionerService},
    {provide: AbstractMaintenanceService, useClass: MaintenanceService},
    {provide: AbstractPlanningService, useClass: PlanningService},
    {provide: MatDialogRef, useValue: {}},
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}},
    {provide: MAT_DIALOG_DATA, useValue: []},
  ],
  exports: [PlanningTypeMaintComponent, PlanningTypeMaintDetailsComponent, PlanningTypeMaintWeekComponent
  , PlanRecordComponent]
})
export class PlanningModule { }
