import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSortModule} from '@angular/material/sort';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {AbstractConditionerService} from '../services/abstract-conditioner-service';
import {ConditionerService} from '../services/conditioner-service';
import {AddConditionerComponent} from './add-conditioner/add-conditioner.component';
import {ConditionersListComponent} from './conditioners-list/conditioners-list.component';
import {ConditionerDetailsComponent} from './conditioner-details/conditioner-details.component';
import {MatListModule} from '@angular/material/list';
import {Redirect} from '../models/Redirect';
import {UniqueTypeMaintenanceDirective} from '../directives/unique-type-maintenance.directive';


const routes: Routes =  [
  {path: Redirect.CONDITIONERS_LIST, component: ConditionersListComponent},
  {path: Redirect.ADD_CONDITIONER, component: AddConditionerComponent},
  {path: Redirect.GET_CONDITIONER_BY_ID + Redirect.ID, component: ConditionerDetailsComponent},
];
@NgModule({
  declarations: [AddConditionerComponent, ConditionersListComponent, ConditionerDetailsComponent, UniqueTypeMaintenanceDirective],
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
    {provide: MatDialogRef, useValue: {}},
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}},
    {provide: MAT_DIALOG_DATA, useValue: []},
  ],
  exports: [AddConditionerComponent, RouterModule, ConditionersListComponent, ConditionerDetailsComponent,
  UniqueTypeMaintenanceDirective]
})

export class ManagerModule { }
