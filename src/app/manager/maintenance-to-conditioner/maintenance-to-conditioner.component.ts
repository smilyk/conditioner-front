import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ConditionersForDetails} from '../../models/ConditionersForDetails';
import {AbstractConditionerService} from '../../services/abstract-conditioner-service';
import {Location} from '@angular/common';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {TypeMaintenance} from '../../models/TypeMaintenance';
import {AbstractMaintenanceService} from '../../services/abstract-maintenance-service';
import {Redirect} from '../../models/Redirect';

@Component({
  selector: 'app-maintenance-to-conditioner',
  templateUrl: './maintenance-to-conditioner.component.html',
  styleUrls: ['./maintenance-to-conditioner.component.css']
})
export class MaintenanceToConditionerComponent implements OnInit {
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
    nameMaintenance: ' ',
    peopleHours: 0,
    uuidTypeMaintenance: ' '
  };
  maintenance$: Observable<TypeMaintenance[]>;
  conditioner$: Observable<ConditionersForDetails[]>;
  typeMaintenanceUuid: any;
  conditionerUuid: any;
  private uuid: string;
  private uuidTM: string;
  typeMaintenanceName: any;
  typeMaintenanceChoose = false;
  conditionerName: any;
  conditionerChoose = false;
  private arrayCond: ConditionersForDetails[];
  constructor(private conditionerService: AbstractConditionerService,
              private maintenanceService: AbstractMaintenanceService,
              private route: ActivatedRoute,
              private router: Router,
              private httpClient: HttpClient,
              private location: Location,
  ) {
  }

  ngOnInit(): void {
    this.uuidTM = this.route.snapshot.paramMap.get('uuidTypeMaintenance');
    this.uuid = this.route.snapshot.paramMap.get('condUuid');
    this.conditionerService.getConditioner(this.uuid)
      .pipe(map(cond => cond))
      .subscribe(cond => {
        this.conditioner = cond;
      });
    this.maintenanceService.getMaintenance(this.uuidTM)
      .pipe(map(maint => maint))
      .subscribe(maint => {
        this.maintenance = maint;
      });
    // @ts-ignore
    this.maintenance$ = this.maintenanceService.getAllNotDeletedMaintenance().pipe(map(maint => maint));
    this.conditioner$ = this.conditionerService.getAllNotDeletedConditioners().pipe(map(cond => cond));
  }

  thereIsConditioner(): boolean {
    return this.uuid !== '_';
  }

  thereIsTypeMaintenance(): boolean{
    return this.uuidTM !== '_';
  }

  reset(): void {
  }

  saveFromTypeMaintenance(): void {
    this.conditionerService.addTypeMaintenanceToConditioner(this.conditionerUuid, this.uuidTM)
      .subscribe(() => this.cancelToCondList());
  }

  saveFromConditioner(): void {
    this.conditionerService.addTypeMaintenanceToConditioner(this.uuid, this.typeMaintenanceUuid)
      .subscribe(() => this.cancelToCondList());
  }
  onBlurMethodCond(uuidConditioner: string): void {
    this.conditionerUuid = uuidConditioner;
    this.conditionerChoose = true;
  }

  onBlurMethod(typqMaintenanceUuid: string): void {
    this.typeMaintenanceUuid = typqMaintenanceUuid;
    this.typeMaintenanceChoose = true;
  }

  cancelToCondList(): void {
    this.router.navigate([Redirect.CONDITIONERS_LIST]).then();
  }

  cancelToMaintList(): void {
    this.router.navigate([Redirect.MAINTENANCE_LIST]).then();
  }

  toSeeTo(): void {
    this.router.navigate([Redirect.GET_TYPE_MAINTENANCE_BY_ID + `${this.typeMaintenanceUuid}`],
      this.typeMaintenanceUuid).then();
  }

  toSeeToCond(): void{
    this.router.navigate([Redirect.GET_CONDITIONER_BY_ID + `${this.conditionerUuid}`],
      this.typeMaintenanceUuid).then();
  }
}
