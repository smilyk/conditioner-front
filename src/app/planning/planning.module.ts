import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PlanningTypeMaintComponent} from './planning-type-maint/planning-type-maint.component';
import {AbstractConditionerService} from '../services/abstract-conditioner-service';
import {ConditionerService} from '../services/conditioner-service';
import {AbstractMaintenanceService} from '../services/abstract-maintenance-service';
import {MaintenanceService} from '../services/maintenance-service';
import {MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {AddConditionerComponent} from '../manager/add-conditioner/add-conditioner.component';
import {RouterModule, Routes} from '@angular/router';
import {Redirect} from '../models/Redirect';
import {ConditionersListComponent} from '../manager/conditioners-list/conditioners-list.component';
import {ConditionerDetailsComponent} from '../manager/conditioner-details/conditioner-details.component';
import {AddMaintenanceComponent} from '../manager/add-maintenance/add-maintenance.component';
import {MaintenanceToConditionerComponent} from '../manager/maintenance-to-conditioner/maintenance-to-conditioner.component';
import {MaintenanceDetailsComponent} from '../manager/maintenance-details/maintenance-details.component';
import {MaintenanceListComponent} from '../manager/maintenance-list/maintenance-list.component';
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
  ],
  exports: [PlanningTypeMaintComponent]
})
export class PlanningModule { }
