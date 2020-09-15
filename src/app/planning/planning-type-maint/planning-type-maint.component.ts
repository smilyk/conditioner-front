import {Component, OnInit} from '@angular/core';
import {Planning} from '../../models/Planning';
import {AbstractConditionerService} from '../../services/abstract-conditioner-service';
import {ActivatedRoute, Router} from '@angular/router';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-planning-type-maint',
  templateUrl: './planning-type-maint.component.html',
  styleUrls: ['./planning-type-maint.component.css']
})
export class PlanningTypeMaintComponent implements OnInit {
  conditioner: Observable<Planning[]>;
  //   Planning = {
  //   inventoryNumber: '',
  //   maintenanceName: '',
  //   uuidTypeMaintenance: '',
  //   nameConditioner: ' ',
  //   place: ' ',
  //   dateNextTypeMaintenance: ' ',
  //   dateLastTypeMaintenance: ' ',
  //   uuidRecords: '',
  //   uuidConditioner: ''
  // };
  dataSource: MatTableDataSource<Planning>;
  displayedColumns: string[];
  array1: any;

x: string;
  mounth: any;
  hours: any;
  day: any;
  minutes: any;

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
          this.array1.forEach(c => {
            if (c.maintenance.length !== 0){
                this.x = c.maintenance.nameMaintenance;
                console.log(c.maintenance.nameMaintenance + ' c');
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
        }
      )).subscribe(cond => {
        this.dataSource = new MatTableDataSource<Planning>(cond);
      }
    );
  }

  details(uuidConditioner: any, uuidTypeMaintenance: any): void {

  }
}
