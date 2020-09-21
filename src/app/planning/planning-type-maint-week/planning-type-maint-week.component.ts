import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Planning} from '../../models/Planning';
import {MatTableDataSource} from '@angular/material/table';
import {AbstractConditionerService} from '../../services/abstract-conditioner-service';
import {ActivatedRoute, Router} from '@angular/router';
import {map} from 'rxjs/operators';
import {Redirect} from '../../models/Redirect';
import {Dates} from '../../models/Dates';

@Component({
  selector: 'app-planning-type-maint-week',
  templateUrl: './planning-type-maint-week.component.html',
  styleUrls: ['./planning-type-maint-week.component.css']
})
export class PlanningTypeMaintWeekComponent implements OnInit {
  conditioner: Observable<Planning[]>;
  startDate: Date;
  finishDate: Date;
  dataSource: MatTableDataSource<Planning>;
  displayedColumns: string[];
  array1: any;
  x: string;
  mounth: any;
  hours: any;
  day: any;
  minutes: any;
  conditionerWithDatedTypeMaintenance = true;
  date: Dates = {
    startDate: '',
    finishDate: ''
  };
  private year: number;
  private finishYear: any;
  private finishDay: any;
  private finishMounth: any;

  constructor(
    private conditionerService: AbstractConditionerService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.displayedColumns = ['uuidConditioner', 'uuidTypeMaintenance', 'nameConditioner',
      'inventoryNumber', 'maintenanceName', 'dateNextTypeMaintenance', 'details'];
    this.startDate = new Date();
    this.finishDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
    this.year = this.startDate.getFullYear();
    this.mounth = this.startDate.getMonth();
    if (this.mounth.toString().length < 2){
      this.mounth = '0' + this.mounth;
    }
    this.day = this.startDate.getDate();
    if (this.day.toString().length < 2){
      this.day = '0' + this.day;
    }
    this.finishDay = this.finishDate.getDate();
    if (this.finishDay.toString().length < 2){
      this.finishDay = '0' + this.finishDay;
    }
    this.finishMounth = this.finishDate.getMonth();
    if (this.finishMounth.toString().length < 2){
      this.finishMounth = '0' + this.finishMounth;
    }
    this.finishYear = this.finishDate.getFullYear();
    this.date.startDate = this.year + '-' + this.mounth + '-' + this.day + 'T00:00:00.000';
    this.date.finishDate = this.finishYear + '-' + this.finishMounth + '-' + this.finishDay + 'T00:00:00.000';


    this.conditionerService.getAllPlannedWeekConditioner(this.date)
      .pipe(map(value => {
          this.array1 = value;
          if (this.array1.length === 0) {
            this.conditionerWithDatedTypeMaintenance = false;
          } else {
            this.array1.forEach(c => {
              if (c.maintenance.length !== 0) {
                this.x = c.maintenance.nameMaintenance;
                c.maintenanceName = this.x;
              } else {

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
          }
        }
      )).subscribe(cond => {
        this.dataSource = new MatTableDataSource<Planning>(cond);
      }
    );

  }

  thereIsDateTypeMaintenanceConditioner(): boolean {
    return this.conditionerWithDatedTypeMaintenance;
  }

  details(uuidRecords: any): void {
    this.router.navigate([Redirect.GET_PLANNING_TYPE_MAINTENANCE_BY_RECORDS_UUID + `${uuidRecords}`]).then();
  }

  cancel(): void {
    this.router.navigate([Redirect.PLANNING_TYPE_MAINTENANCE_ALL]).then();
  }
}
