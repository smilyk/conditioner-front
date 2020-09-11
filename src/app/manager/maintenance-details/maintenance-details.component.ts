import {Component, OnInit} from '@angular/core';
import {TypeMaintenance} from '../../models/TypeMaintenance';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {MatDialog} from '@angular/material/dialog';
import {Location} from '@angular/common';
import {AbstractMaintenanceService} from '../../services/abstract-maintenance-service';
import {map} from 'rxjs/operators';
import {Redirect} from '../../models/Redirect';
import {RemoveMaintenanceDialogComponent} from '../../dialogs/remove-maintenance-dialog/remove-maintenance-dialog.component';

@Component({
  selector: 'app-maintenance-details',
  templateUrl: './maintenance-details.component.html',
  styleUrls: ['./maintenance-details.component.css']
})
export class MaintenanceDetailsComponent implements OnInit {
  maintenance: TypeMaintenance = {
    deleted: false,
    hoursBeforeTypeMaintenance: 0,
    nameMaintenance: ' ',
    peopleHours: 0,
    uuidTypeMaintenance: ' '
  };
  private uuidConditioner: string;

  constructor(
    private maintenanceService: AbstractMaintenanceService,
    private route: ActivatedRoute,
    private router: Router,
    private httpClient: HttpClient,
    public dialog: MatDialog,
    private location: Location,
  ) { }

  ngOnInit(): void {
    const uuid = this.route.snapshot.paramMap.get('uuid');
    this.maintenanceService.getMaintenance(uuid)
      .pipe(map(maint => maint))
      .subscribe(maint => {
        this.maintenance = maint;
      });
  }

  cancel(): void {
    this.router.navigate([Redirect.MAINTENANCE_LIST]).then();
  }

  notDeleted(): boolean {
    return this.maintenance.deleted;
  }

  deleteMaintenanceDialog(uuidTypeMaintenance: string, nameMaintenance: string): void {
    const dialogRef = this.dialog.open(RemoveMaintenanceDialogComponent, {
      data: {
        typeMaintenanceName: nameMaintenance,
        typeMaintenanceUuid: uuidTypeMaintenance,
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      location.reload();
      this.ngOnInit();
    });
    this.ngOnInit();
  }

  addTypeMaintenance(uuidTypeMaintenance: string): void {
    this.uuidConditioner = '';


  }
}
