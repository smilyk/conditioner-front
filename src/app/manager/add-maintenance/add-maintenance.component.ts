import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {AbstractMaintenanceService} from '../../services/abstract-maintenance-service';
import {TypeMaintenance} from '../../models/TypeMaintenance';
import {Redirect} from '../../models/Redirect';

@Component({
  selector: 'app-add-maintenance',
  templateUrl: './add-maintenance.component.html',
  styleUrls: ['./add-maintenance.component.css']
})
export class AddMaintenanceComponent implements OnInit {

  constructor(
    private maintenanceService: AbstractMaintenanceService,
    private httpClient: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  saveTypeMaintenance(form: NgForm): void {
    const typeMaintenance = form.value as TypeMaintenance;
    typeMaintenance.deleted = false;
    this.maintenanceService.addTypeMaintenance(typeMaintenance)
      .subscribe(() => this.cancel());
  }

  cancel(): void {
    this.router.navigate([Redirect.MAINTENANCE_LIST]).then();
  }
}
