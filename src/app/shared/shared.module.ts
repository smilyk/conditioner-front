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

const routes: Routes =  [
  {path: 'conditioners', component: ConditionersListComponent},
  {path: 'conditioner/add', component: AddConditionerComponent},
];

@NgModule({
  declarations: [NavConditionerComponent],
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
  exports: [NavConditionerComponent, RouterModule]
})
export class SharedModule { }

