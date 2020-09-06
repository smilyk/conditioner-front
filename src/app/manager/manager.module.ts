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
import { ConditionersListComponent } from './conditioners-list/conditioners-list.component';


const routes: Routes =  [
  {path: 'conditioners', component: ConditionersListComponent},
  {path: 'conditioner/add', component: AddConditionerComponent},
];
@NgModule({
  declarations: [AddConditionerComponent, ConditionersListComponent],
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

  ],
  providers: [
    {provide: AbstractConditionerService, useClass: ConditionerService},
    {provide: MatDialogRef, useValue: {}},
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}},
    {provide: MAT_DIALOG_DATA, useValue: []},
  ],
  exports: [AddConditionerComponent, RouterModule, ConditionersListComponent]
})

export class ManagerModule { }
