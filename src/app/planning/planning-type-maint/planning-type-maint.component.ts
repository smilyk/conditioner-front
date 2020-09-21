import {Component, OnInit} from '@angular/core';
import {Planning} from '../../models/Planning';
import {AbstractConditionerService} from '../../services/abstract-conditioner-service';
import {ActivatedRoute, Router} from '@angular/router';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {MatTableDataSource} from '@angular/material/table';
import {Redirect} from '../../models/Redirect';

@Component({
  selector: 'app-planning-type-maint',
  templateUrl: './planning-type-maint.component.html',
  styleUrls: ['./planning-type-maint.component.css']
})
export class PlanningTypeMaintComponent implements OnInit {
  conditioner: Observable<Planning[]>;
  conditionerToday: Observable<Planning[]>;
  dataSource: MatTableDataSource<Planning>;
  dataSourceToday: MatTableDataSource<Planning>;
  displayedColumns: string[];
  displayedColumnsToday: string[];
  array1: any;
  array2: any;

  x: string;
  xToday: string;
  mounth: any;
  hours: any;
  day: any;
  minutes: any;
  mounthToday: any;
  hoursToday: any;
  dayToday: any;
  minutesToday: any;
  private conditionerWithMissedTypeMaintenance = true;
  private conditionerWithTodayTypeMaintenance = true;
  open = true;
  openToday = true;


  constructor(
    private conditionerService: AbstractConditionerService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.displayedColumns = ['uuidConditioner', 'uuidTypeMaintenance', 'nameConditioner',
      'inventoryNumber', 'maintenanceName', 'dateNextTypeMaintenance', 'details'];
    this.conditionerService.getAllPlannedMissedConditioner()
      .pipe(map(value => {
          this.array1 = value;
          if (this.array1.length === 0){
            this.conditionerWithMissedTypeMaintenance = false;
          }else{
          this.array1.forEach(c => {
            if (c.maintenance.length !== 0){
                this.x = c.maintenance.nameMaintenance;
                c.maintenanceName = this.x;
            }else{

            }
            if (c.nextTypeMaintenanceDate !== null) {
              this.mounth = c.nextTypeMaintenanceDate[1];
              this.day = c.nextTypeMaintenanceDate[2];
              if (this.mounth.toString().length < 2) {
                this.mounth = '0' + this.mounth;
              }
              if (this.day.toString().length < 2) {
                this.day = '0' + this.day;
              }
              this.hours = c.nextTypeMaintenanceDate[3];
              if (this.hours.toString().length < 2) {
                this.hours = '0' + this.hours;
              }
              this.minutes = c.nextTypeMaintenanceDate[4];
              if (this.minutes.toString().length < 2) {
                this.minutes = '0' + this.minutes;
              }
              c.dateNextTypeMaintenance = c.nextTypeMaintenanceDate[0] + '-' + this.mounth + '-' + this.day
                + ' в ' + this.hours + ':' + this.minutes;
            } else {
              c.dateNextTypeMaintenance = ' - ';
            }
          });
          return this.array1;
        }}
      )).subscribe(cond => {
        this.dataSource = new MatTableDataSource<Planning>(cond);
      }
    );
    this.conditionerService.getAllPlannedTodayConditioner()
      .pipe(map(value => {
        this.array2 = value;
        if (this.array2.length === 0){
          this.conditionerWithTodayTypeMaintenance = false;
        }else{
          this.array2.forEach(c => {
            if (c.maintenance.length !== 0){
              this.xToday = c.maintenance.nameMaintenance;
              c.maintenanceName = this.xToday;
            }else{

            }
            if (c.nextTypeMaintenanceDate !== null) {
              this.mounthToday = c.nextTypeMaintenanceDate[1];
              this.dayToday = c.nextTypeMaintenanceDate[2];
              if (this.mounthToday.toString().length < 2) {
                this.mounthToday = '0' + this.mounthToday;
              }
              if (this.dayToday.toString().length < 2) {
                this.dayToday = '0' + this.day;
              }
              this.hoursToday = c.nextTypeMaintenanceDate[3];
              if (this.hoursToday.toString().length < 2) {
                this.hoursToday = '0' + this.hoursToday;
              }
              this.minutesToday = c.nextTypeMaintenanceDate[4];
              if (this.minutesToday.toString().length < 2) {
                this.minutesToday = '0' + this.minutesToday;
              }
              c.dateNextTypeMaintenance = c.nextTypeMaintenanceDate[0] + '-' + this.mounthToday + '-' + this.dayToday
                + ' в ' + this.hoursToday + ':' + this.minutesToday;
            } else {
              c.dateNextTypeMaintenance = ' - ';
            }
          });
          return this.array2;
        }}
      )).subscribe(cond => {
        this.dataSourceToday = new MatTableDataSource<Planning>(cond);
      }
    );
  }

  thereIsMissedTypeMaintenanceConditioner(): boolean {
    return this.conditionerWithMissedTypeMaintenance;
  }
  thereIsTodayTypeMaintenanceConditioner(): boolean {
    return this.conditionerWithTodayTypeMaintenance;
  }

  openMissed(): boolean {
    this.open = false;
    return this.open;
  }

  closeMissed(): boolean {
    this.open = true;
    return this.open;
  }

  openTodayTM(): boolean {
    this.openToday = false;
    return this.open;
  }

  closeTodayTM(): boolean {
    this.openToday = true;
    return this.open;
  }

  details(uuidRecords: any): void {
    this.router.navigate([Redirect.GET_PLANNING_TYPE_MAINTENANCE_BY_RECORDS_UUID + `${uuidRecords}`],
      uuidRecords).then();
  }
  goToNextWeek(): void {
    this.router.navigate([Redirect.PLANNING_TYPE_MAINTENANCE_NEXT_WEEK]).then();
  }

  chooseDate(): void {
    this.router.navigate([Redirect.PLANNING_TYPE_MAINTENANCE_NEXT_DATES]).then();
  }
}
