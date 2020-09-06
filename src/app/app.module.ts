import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { AddConditionerComponent } from './manager/add-conditioner/add-conditioner.component';
import {FormsModule} from '@angular/forms';
import {ManagerModule} from './manager/manager.module';
import {MatInputModule} from '@angular/material/input';
import { NavConditionerComponent } from './shared/nav-conditioner/nav-conditioner.component';
import {SharedModule} from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
