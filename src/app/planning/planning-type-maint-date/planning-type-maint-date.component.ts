import {Component, OnInit} from '@angular/core';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import {Redirect} from '../../models/Redirect';
import {AbstractConditionerService} from '../../services/abstract-conditioner-service';
import {ActivatedRoute, Router} from '@angular/router';
import {map} from 'rxjs/operators';
import {MatTableDataSource} from '@angular/material/table';
import {Planning} from '../../models/Planning';
import {Dates} from '../../models/Dates';

@Component({
  selector: 'app-planning-type-maint-date',
  templateUrl: './planning-type-maint-date.component.html',
  styleUrls: ['./planning-type-maint-date.component.css']
})
export class PlanningTypeMaintDateComponent implements OnInit {
  events: string[] = [];
  startDate: string;
  finishDate: string;
  show = false;
  showConditioners = false;
  displayedColumns: any;
  dataSource: any;
  conditionerWithDateTypeMaintenance = true;
  array1: any;
  mounth: string;
  x: any;
  day: string;
  hour: string;
  minute: string;
  year: string;
  finishDay: string;
  finishYear: string;
  finishMounth: string;
  date: Dates = {
    startDate: '',
    finishDate: ''
  };
  private dateStartArray: string[];
  private dateFinishArray: string[];
  private startYear: string;
  private startMounth: string;
  private startDay: string;


  constructor(
    private conditionerService: AbstractConditionerService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>): void {
    this.events.push(`${type}: ${event.value}`);
    this.startDate = this.events[0];
    this.finishDate = this.events[1];
    this.dateStartArray = this.startDate.split(' ');
    this.dateFinishArray = this.finishDate.split(' ');
  }

  ngOnInit(): void {
  }

  choose(): void {
    this.show = true;
  }

  reset(): void {
    location.reload();
  }

  getRecords(): void {
    this.showConditioners = true;
    this.show = false;
    this.displayedColumns = ['uuidConditioner', 'uuidTypeMaintenance', 'nameConditioner',
      'inventoryNumber', 'maintenanceName', 'dateNextTypeMaintenance', 'details'];
    this.startYear = this.dateStartArray[4];
    this.startMounth = this.createMonth(this.dateStartArray[2]);
    this.startDay = this.dateStartArray[3];
    if (this.startDay.length < 2) {
      this.startDay = '0' + this.day;
    }
    this.finishDay = this.dateFinishArray[3];
    if (this.finishDay.length < 2) {
      this.finishDay = '0' + this.finishDay;
    }
    this.finishMounth = this.createMonth(this.dateFinishArray[2]);
    this.finishYear = this.dateFinishArray[4];
    this.date.startDate = this.startYear + '-' + this.startMounth + '-' + this.startDay + 'T00:00:00.000';

    this.date.finishDate = this.finishYear + '-' + this.finishMounth + '-' + this.finishDay + 'T00:00:00.000';
    console.log(this.date.finishDate);
    this.conditionerService.getAllPlannedWeekConditioner(this.date)
      .pipe(map(value => {
          this.array1 = value;
          if (this.array1.length === 0) {
            this.conditionerWithDateTypeMaintenance = false;
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
                this.hour = c.nextTypeMaintenanceDate[3];
                if (this.hour.toString().length < 2) {
                  this.hour = '0' + this.hour;
                }
                this.minute = c.nextTypeMaintenanceDate[4];
                if (this.minute.toString().length < 2) {
                  this.minute = '0' + this.minute;
                }
                c.dateNextTypeMaintenance = c.nextTypeMaintenanceDate[0] + '-' + this.mounth + '-' + this.day
                  + ' в ' + this.hour + ':' + this.minute;
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
    return this.conditionerWithDateTypeMaintenance;
  }

  details(uuidRecords: any): void {
    this.router.navigate([Redirect.GET_PLANNING_TYPE_MAINTENANCE_BY_RECORDS_UUID + `${uuidRecords}`], uuidRecords).then();
  }
  createMonth(mounth: string): string {
    if (mounth === 'Jan'){
      return '01';
    }
    if (mounth === 'Feb'){
      return '02';
    }
    if (mounth === 'Mar'){
      return '03';
    }
    if (mounth === 'Apr'){
      return '04';
    }
    if (mounth === 'May'){
      return '05';
    }
    if (mounth === 'Jun'){
      return '06';
    }
    if (mounth === 'Jul'){
      return '07';
    }
    if (mounth === 'Aug'){
      return '08';
    }
    if (mounth === 'Sep'){
      console.log(mounth + ' m');
      return '09';
    }
    if (mounth === 'Oct'){
      return '10';
    }
    if (mounth === 'Nov'){
      return '11';
    }
    if (mounth === 'Dec'){
      return '12';
    }
    return '';
  }

  cancel(): void {
    this.router.navigate([Redirect.PLANNING_TYPE_MAINTENANCE_ALL]).then();
  }
}
