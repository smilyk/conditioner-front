import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Subscription} from 'rxjs';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {ActivatedRoute, Router} from '@angular/router';
import {AbstractMaintenanceService} from '../../services/abstract-maintenance-service';
import {map} from 'rxjs/operators';
import {TypeMaintenance} from '../../models/TypeMaintenance';
import {Redirect} from '../../models/Redirect';

@Component({
  selector: 'app-maintenance-list',
  templateUrl: './maintenance-list.component.html',
  styleUrls: ['./maintenance-list.component.css']
})
export class MaintenanceListComponent implements OnInit {
  maintenance$: Subscription;
  dataSource: MatTableDataSource<TypeMaintenance>;
  displayedColumns: string[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  filter: string;
  private array1: any;


  constructor(
    private maintenanceService: AbstractMaintenanceService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.displayedColumns = [ 'uuidTypeMaintenance', 'nameConditioner', 'peopleHours',
      'hoursBeforeTypeMaintenance', 'deleted', 'details'];

    this.maintenance$ = this.maintenanceService.getAllMaintenance().pipe(map(
      value => {
        this.array1 = value;
        return this.array1;
      }
    ))
      .subscribe(maint => {
        this.array1.sort((a, b) => {
          if (a.nameMaintenance < b.nameMaintenance) {
            return -1;
          } else {
            return 0;
          }
        });
        this.dataSource = new MatTableDataSource<TypeMaintenance>(maint);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.dataSource.filter = this.filter;
      });
  }

  addTypeMaintenance(): void {
    this.router.navigate([Redirect.ADD_TYPE_MAINTENANCE]).then();
  }

  applyFilter(filterValue: any): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  details(uuidTypeMaintenance: any): void {
    this.router.navigate([Redirect.GET_TYPE_MAINTENANCE_BY_ID + `${uuidTypeMaintenance}`],
      uuidTypeMaintenance).then();
  }

  isDeleed(deleted: boolean): boolean {
    return deleted;
  }
}
