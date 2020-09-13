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
  typeMaintenanceUuid: any;
  maintenance$: Observable<TypeMaintenance[]>;
  private uuid: string;
  typeMaintenanceName: any;
  typeMaintenanceChoose = false;

  constructor(private conditionerService: AbstractConditionerService,
              private maintenanceService: AbstractMaintenanceService,
              private route: ActivatedRoute,
              private router: Router,
              private httpClient: HttpClient,
              private location: Location,
  ) {
  }

  ngOnInit(): void {
    this.uuid = this.route.snapshot.paramMap.get('condUuid');
    this.conditionerService.getConditioner(this.uuid)
      .pipe(map(cond => cond))
      .subscribe(cond => {
        this.conditioner = cond;
      });
    // @ts-ignore
    this.maintenance$ = this.maintenanceService.getAllMaintenance().pipe(map(maint => maint));
  }

  thereIsConditioner(): boolean {
    return this.uuid !== '_';
  }


  reset(): void {}

  save(): void {
  this.conditionerService.addTypeMaintenanceToConditioner(this.uuid, this.typeMaintenanceUuid)
    .subscribe(() => this.cancelToCondList());
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
    console.log(this.typeMaintenanceUuid + ' u');
    this.router.navigate([Redirect.GET_TYPE_MAINTENANCE_BY_ID + `${this.typeMaintenanceUuid}`],
      this.typeMaintenanceUuid).then();
  }
}
