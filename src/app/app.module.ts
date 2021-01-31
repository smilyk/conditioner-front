import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {FormsModule} from '@angular/forms';
import {ManagerModule} from './manager/manager.module';
import {MatInputModule} from '@angular/material/input';
import {SharedModule} from './shared/shared.module';
import {RemoveConditionerDialogComponent} from './dialogs/remove-conditioner-dialog/remove-conditioner-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {StartWorkConditionerDialogComponent} from './dialogs/start-work-conditioner-dialog/start-work-conditioner-dialog.component';
import {RemoveMaintenanceDialogComponent} from './dialogs/remove-maintenance-dialog/remove-maintenance-dialog.component';
import {PlanningModule} from './planning/planning.module';
import {PriceModule} from "./price/price.module";
import {AddFileDialogComponent} from "./dialogs/add-file-dialog/add-file-dialog.component";

@NgModule({
  declarations: [
    AppComponent,
    RemoveConditionerDialogComponent,
    StartWorkConditionerDialogComponent,
    RemoveMaintenanceDialogComponent,
AddFileDialogComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    MatTabsModule,
    MatIconModule,
    MatMenuModule,
    FormsModule,
    MatInputModule,
    SharedModule,
    ManagerModule,
    PlanningModule,
    MatDialogModule,
    PriceModule,
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
