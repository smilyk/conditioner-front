import {Component, OnInit} from '@angular/core';
import {ConditionersForDetails} from '../../models/ConditionersForDetails';
import {AbstractConditionerService} from '../../services/abstract-conditioner-service';
import {ActivatedRoute, Router} from '@angular/router';
import {map} from 'rxjs/operators';
import {Redirect} from '../../models/Redirect';
import {HttpClient} from '@angular/common/http';
import {MatDialog} from '@angular/material/dialog';
import {RemoveConditionerDialogComponent} from '../../dialogs/remove-conditioner-dialog/remove-conditioner-dialog.component';
import {StartWorkConditionerDialogComponent} from '../../dialogs/start-work-conditioner-dialog/start-work-conditioner-dialog.component';
import {Location} from '@angular/common';

@Component({
  selector: 'app-conditioner-details',
  templateUrl: './conditioner-details.component.html',
  styleUrls: ['./conditioner-details.component.css']
})
export class ConditionerDetailsComponent implements OnInit {
  conditioner: ConditionersForDetails = {
    nameConditioner: '',
    place: '',
    inventoryNumber: ' ',
    startDate: ' ',
    uuidConditioner: ' ',
    maintenance: [],
    deleted: false
  };
  nameConditioner: any;
  month: string;
  day: string;
  hours: string;
  minutes: string;
  started: boolean;
  x = [];
  isTypeMaintenance: boolean;
  typeMaintenance: string;
  private typeMaintenanceUuid: string;

  constructor(
    private conditionerService: AbstractConditionerService,
    private route: ActivatedRoute,
    private router: Router,
    private httpClient: HttpClient,
    public dialog: MatDialog,
    private location: Location,
  ) {

  }

  ngOnInit(): void {
    const uuid = this.route.snapshot.paramMap.get('uuid');
    this.conditionerService.getConditioner(uuid)
      // this.conditionerService.getConditioner('0ee86536-c7a5-4733-a5e0-a15525249533')
      // this.conditionerService.getConditioner('b015907c-6c0f-4b3c-bc12-bc9be6536c3c')
      .pipe(map(cond => cond))
      .subscribe(cond => {
        this.conditioner = cond;
        // запущен или нет
        this.started = cond.startDate === null;
        // ТО
        if (cond.maintenance.length !== 0) {
          cond.maintenance.forEach(c => {
            this.x.push(c.nameMaintenance);
            this.isTypeMaintenance = true;
          });
        } else {
          this.x.push('Кондиционеру не назначено ТО ');
          this.isTypeMaintenance = false;
        }
        //  дата
        if (cond.startDate != null) {
          this.month = cond.startDate[1];
          this.day = cond.startDate[2];
          if (this.month.toString().length < 2) {
            this.month = '0' + this.month;
          }
          if (this.day.toString().length < 2) {
            this.day = '0' + this.day;
          }
          this.hours = cond.startDate[3];
          if (this.hours.toString().length < 2) {
            this.hours = '0' + this.hours;
          }
          this.minutes = cond.startDate[4];
          if (this.minutes.toString().length < 2) {
            this.minutes = '0' + this.minutes;
          }
          cond.startDate = cond.startDate[0] + '-' + this.month + '-' + this.day
            + ' в ' + this.hours + ':' + this.minutes;
        } else {
          cond.startDate = ' не запущен в работу ';
        }
      });
  }

  startedAndNotTypeMaintenance(): boolean {
    return this.isTypeMaintenance === false && this.started === false;
  }

  cancel(): void {
    this.router.navigate([Redirect.CONDITIONERS_LIST]).then();
  }


  toSeeTypeMaintenance(i: number): void {
    this.router.navigate([Redirect.GET_TYPE_MAINTENANCE_BY_ID
    + `${this.conditioner.maintenance[i].uuidTypeMaintenance}`]);
  }

  startConditionerToWorkDialog(uuidConditioner: string): void {
    const dialogRef = this.dialog.open(StartWorkConditionerDialogComponent, {
      data: {
        conditionerUuid: uuidConditioner,
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      location.reload();
      this.ngOnInit();
    });
    this.ngOnInit();
  }


  notDeleted(): boolean {
    return this.conditioner.deleted;
  }

  deleteConditionerDialog(uuidConditioner: string, nameConditioner: string): void {
    const dialogRef = this.dialog.open(RemoveConditionerDialogComponent, {
      data: {
        conditionerName: nameConditioner,
        conditionerUuid: uuidConditioner,
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      location.reload();
      this.ngOnInit();
    });
    this.ngOnInit();
  }

  addTypeMaintenance(uuidConditioner: string): void {
    this.typeMaintenanceUuid = '_';
    this.router.navigate([Redirect.ADD_TYPE_MAINTENANCE_TO_CONDITIONER + `${uuidConditioner}`]);
  }
}
