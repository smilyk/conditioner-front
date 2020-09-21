import {Component, OnInit} from '@angular/core';
import {ConditionersForDetails} from '../../models/ConditionersForDetails';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {MatDialog} from '@angular/material/dialog';
import {Location} from '@angular/common';
import {TypeMaintenance} from '../../models/TypeMaintenance';
import {AbstractPlanningService} from '../../services/abstract-planning-service';
import {map} from 'rxjs/operators';
import {Redirect} from '../../models/Redirect';

@Component({
  selector: 'app-planning-type-maint-details',
  templateUrl: './planning-type-maint-details.component.html',
  styleUrls: ['./planning-type-maint-details.component.css']
})
export class PlanningTypeMaintDetailsComponent implements OnInit {
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
  x: any;


  constructor(
    private planningService: AbstractPlanningService,
    private route: ActivatedRoute,
    private router: Router,
    private httpClient: HttpClient,
    public dialog: MatDialog,
    private location: Location,
  ) {
  }

  ngOnInit(): void {
    const recordUuid = this.route.snapshot.paramMap.get('uuid');
    console.log(recordUuid);
    this.planningService.getPlanningRecord(recordUuid)
      .pipe(map(cond => cond))
      .subscribe(cond => {
        this.conditioner = cond;
        this.maintenance = cond.maintenance;
      });
  }

  cancel(): void {
    this.router.navigate([Redirect.PLANNING_TYPE_MAINTENANCE_ALL]).then();
  }

  plan() {

  }
}
