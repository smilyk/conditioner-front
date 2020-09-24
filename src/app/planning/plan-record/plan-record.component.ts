import {Component, OnInit} from '@angular/core';
import {ConditionersForDetails} from '../../models/ConditionersForDetails';
import {TypeMaintenance} from '../../models/TypeMaintenance';
import {AbstractPlanningService} from '../../services/abstract-planning-service';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {MatDialog} from '@angular/material/dialog';
import {Location} from '@angular/common';
import {map} from 'rxjs/operators';
import {ForGettingNotBustWorkersByDateAndTypeMaintenanceUuid} from '../../models/ForGettingNotBustWorkersByDateAndTypeMaintenanceUuid';
import {AbstractWorkersService} from '../../services/abstract-workers-service';
import {AbstractConditionerService} from '../../services/abstract-conditioner-service';
import {Workers} from '../../models/Workers';

@Component({
  selector: 'app-plan-record',
  templateUrl: './plan-record.component.html',
  styleUrls: ['./plan-record.component.css']
})
export class PlanRecordComponent implements OnInit {

  conditioner: ConditionersForDetails = {
    nameConditioner: '',
    place: '',
    inventoryNumber: ' ',
    startDate: ' ',
    uuidConditioner: ' ',
    maintenance: [],
    deleted: false
  };
  maintenance: TypeMaintenance = {
    deleted: false,
    hoursBeforeTypeMaintenance: 0,
    nameMaintenance: '',
    peopleHours: 0,
    uuidTypeMaintenance: ''
  };
  dtoForGettingNotBusyWorkersForMaintenance: ForGettingNotBustWorkersByDateAndTypeMaintenanceUuid = {
    startDate: '',
    uuidTypeMaintenance: '',
    countOfWorkers: 2
  };
  worker: Workers = {
    userUuid: '',
    firstName: 'string',
    lastName: '',
    email: 'string;,',
  };
  x: any;
  recordUuid: any;
  nextTypeMaintenanceDate: any;
  mounthToday: any;
  dayToday: string;
  hoursToday: string;
  minutesToday: string;
  nextDate: any;
  private array1: any;

  constructor(
    private condService: AbstractConditionerService,
    private planningService: AbstractPlanningService,
    private workerService: AbstractWorkersService,
    private route: ActivatedRoute,
    private router: Router,
    private httpClient: HttpClient,
    public dialog: MatDialog,
    private location: Location,
  ) {
  }

  ngOnInit(): void {
    this.recordUuid = this.route.snapshot.paramMap.get('uuid');
    this.planningService.getNotBusyWorkersForTypeMaintenance(this.dtoForGettingNotBusyWorkersForMaintenance)
      .pipe(
        map(   value => {
            this.array1 = value;
            this.array1.forEach(cond => {
              this.worker = cond;
            });
            return this.array1;
          }
        ))
      .subscribe(conditioner => {
        this.array1.sort((a, b) => {
          if (a.lastName < b.lastName) {
            return -1;
          } else {
            return 0;
          }
        });
      });
    this.planningService.getPlanningRecord(this.recordUuid)
      .pipe(map(cond => cond))
      .subscribe(cond => {
          this.conditioner = cond;
          this.maintenance = cond.maintenance;
          this.nextDate = cond.nextTypeMaintenanceDate;
          this.mounthToday = cond.nextTypeMaintenanceDate[1];
          this.dayToday = cond.nextTypeMaintenanceDate[2];
          if (this.mounthToday.toString().length < 2) {
            this.mounthToday = '0' + this.mounthToday;
          }
          if (this.dayToday.toString().length < 2) {
            this.dayToday = '0' + this.dayToday;
          }
          this.hoursToday = cond.nextTypeMaintenanceDate[3];
          if (this.hoursToday.toString().length < 2) {
            this.hoursToday = '0' + this.hoursToday;
          }
          this.minutesToday = cond.nextTypeMaintenanceDate[4];
          if (this.minutesToday.toString().length < 2) {
            this.minutesToday = '0' + this.minutesToday;
          }
          this.nextTypeMaintenanceDate = cond.nextTypeMaintenanceDate[0] + '-' + this.mounthToday + '-' + this.dayToday
            + ' в ' + this.hoursToday + ':' + this.minutesToday;
        }
      );
  }

  choose(): void {
    this.dtoForGettingNotBusyWorkersForMaintenance.startDate = this.nextDate;
    this.dtoForGettingNotBusyWorkersForMaintenance.uuidTypeMaintenance = this.maintenance.uuidTypeMaintenance;
    this.ngOnInit();
  }

  change(): void {

  }

  plane(): void {

  }

  return(): void {

  }
}
