import {Component, OnInit, ViewChild} from '@angular/core';
import {ConditionersForList} from '../../models/ConditionersForList';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {AbstractConditionerService} from '../../services/abstract-conditioner-service';
import {ActivatedRoute, Router} from '@angular/router';
import {Redirect} from '../../models/Redirect';
import {Subscription} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-conditioners-list',
  templateUrl: './conditioners-list.component.html',
  styleUrls: ['./conditioners-list.component.css']
})
export class ConditionersListComponent implements OnInit {
  conditioners$: Subscription;
  dataSource: MatTableDataSource<ConditionersForList>;
  displayedColumns: string[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  filter: string;
  private array1: any;
  private mounth: string;
  private day: string;
  private hours: string;
  private minutes: string;
  private x = '';



  constructor(private conditionerService: AbstractConditionerService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.displayedColumns = [ 'uuidConditioner', 'nameConditioner', 'inventoryNumber',
      'startDate', 'maintenance', 'deleted', 'details'];

    this.conditioners$ = this.conditionerService.getAllConditioners().pipe(map(
      value => {
        console.log(value);
        this.array1 = value;
        this.array1.forEach(cond => {
          if (cond.maintenance.length !== 0){
            cond.maintenance.forEach(c => {
              this.x = c.nameMaintenance + ',' + this.x + ' ';
              cond.maintenance = this.x;
            });
          }else{
            cond.maintenance = ' - ';
          }
          if (cond.startDate != null){
            this.mounth = cond.startDate[1];
            this.day = cond.startDate[2];
            if (this.mounth.toString().length < 2){
              this.mounth = '0' + this.mounth;
            }
            if (this.day.toString().length < 2){
              this.day = '0' + this.day;
            }
            this.hours = cond.startDate[3];
            if (this.hours.toString().length < 2){
              this.hours = '0' + this.hours;
            }
            this.minutes = cond.startDate[4];
            if (this.minutes.toString().length < 2){
              this.minutes = '0' + this.minutes;
            }
            cond.startDate = cond.startDate[0] + '-' + this.mounth + '-' + this.day
              + ' в ' +  this.hours + ':' + this.minutes;
          }else{
            cond.startDate = ' - ';
          }
        });
        return this.array1;
      }
    ))
      .subscribe(conditioner => {
        this.array1.sort((a, b) => {
          if (a.inventoryNumber < b.inventoryNumber) {
            return -1;
          } else {
            return 0;
          }
        });

        this.dataSource = new MatTableDataSource<ConditionersForList>(conditioner);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.dataSource.filter = this.filter;
      });
  }


  addConditioner(): void {
    this.router.navigate([Redirect.ADD_CONDITIONER]).then();
  }

  applyFilter(filterValue: any): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  details(uuid: any): void {
    // const uuid = this.route.snapshot.paramMap.get('id');
    this.router.navigate([Redirect.GET_CONDITIONER_BY_ID + `${uuid}`], uuid).then();
  }

  isDeleted(deleted: boolean): boolean {
    return deleted;
  }
}
