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
import {AbstractConditionerService} from '../../services/abstract-conditioner-service';
import {Workers} from '../../models/Workers';
import {Observable} from 'rxjs';
import {AbstractWorkerService} from '../../services/abstract-worker-service';

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
  worker$: Observable<Workers[]>;
  x: any;
  recordUuid: any;
  nextTypeMaintenanceDate: any;
  mounthToday: any;
  dayToday: string;
  hoursToday: string;
  minutesToday: string;
  nextDate: any;
  array1: any;
  id: any;
  chooseDate = false;
  chooseWorker = false;
  workerOne: any;
  workerTwo: any;
  workersSchemeOne: any;
  workersSchemeTwo: any;
   workerOneChoosed = false;
   workerTwoChoosed = false;

  constructor(
    private condService: AbstractConditionerService,
    private planningService: AbstractPlanningService,
    private workerService: AbstractWorkerService,
    private route: ActivatedRoute,
    private router: Router,
    private httpClient: HttpClient,
    public dialog: MatDialog,
    private location: Location,
  ) {
  }

  ngOnInit(): void {
    this.recordUuid = this.route.snapshot.paramMap.get('uuid');
    this.workerService.getWorkerByUuid('dd').pipe(map(
      value => {
        console.log(value + ' c');
        this.worker = value;
      }
    ));
    this.worker$ = this.planningService.getNotBusyWorkersForTypeMaintenance(this.dtoForGettingNotBusyWorkersForMaintenance)
      .pipe(map(
        value => {
            this.array1 = value;
            // this.array1.forEach(cond => {
            //   this.worker = cond;
            // });
            return this.array1;
          }
        ));
      // .subscribe(conditioner => {
      //   this.array1.sort((a, b) => {
      //     if (a.lastName < b.lastName) {
      //       return -1;
      //     } else {
      //       return 0;
      //     }
      //   });
      // });
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
    this.chooseDate = true;
    this.ngOnInit();
  }

  change(): void {

  }

  plane(): void {

  }

  return(): void {

  }

  // toChooseWorker(workerOne: any, workerTwo: any): void {
  //   console.log(workerOne.userUuid + ' one' + workerOne.lastName);
  //   console.log(workerTwo.userUuid + ' two' + workerTwo.lastName);
  //   this.chooseWorker = true;
  // }

  // toChooseSecondWorkerWorker(workerTwo: any): void {
  //   this.workerTwo = workerTwo;
  //   console.log(workerTwo.lastName + ' 2');
  //   console.log(this.workerTwo.userUuid + ' two' + this.workerTwo.lastName);
  // }
  //
  // toChooseFirstWorkers(workerOne: any): void {
  //   console.log(workerOne.lastName + ' 1')
  //   cz
  //   console.log(this.workerOne.userUuid + ' two' + this.workerOne.lastName);
  // }



  firstOnBlurMethod(userUuid: string): void {

    this.array1.forEach(w => {
      if (w.userUuid === userUuid){
        this.workerOne = w;
      }
    });
    this.workerTwoChoosed = true;
    console.log(this.workerOne.firstName + ' 1');
  }

  secondOnBlurMethod(userUuid: string): void {
    this.array1.forEach(w => {
      if (w.userUuid === userUuid){
        this.workerTwo = w;
      }
    });
    this.workerOneChoosed = true;
    console.log(this.workerTwo.lastName + ' 2');
  }

  toChooseWorkers(): void {
    this.chooseWorker = true;
  }
}
