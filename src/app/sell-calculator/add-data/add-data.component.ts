import {Component, OnInit, Pipe} from '@angular/core';
import {AbstractConditionerService} from "../../services/abstract-conditioner-service";
import {AbstractMaintenanceService} from "../../services/abstract-maintenance-service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Location} from "@angular/common";
import {AbstractPriceService} from "../../services/abstract-price-service";
import {map} from "rxjs/operators";
import {NameModelList} from '../../models/NameModelList';
import {Models} from "../../models/Models";
import {FormBuilder, FormControl, FormGroup, NgForm} from "@angular/forms";
import {Conditioner} from "../../models/Conditioner";
import {RequestGetPrice} from "../../models/RequestGetPrice";
import {ConditionersForDetails} from "../../models/ConditionersForDetails";
import {MatTableDataSource} from "@angular/material/table";
import {Article} from "../../models/Atricle";
import {RequestOffer} from "../../models/RequestOffer";

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {

  nameIsChosen = false;
  array1: any[]
  modelNames
  modelNamesArray = [];
  modelValuesArray = [];
  name;
  request: RequestGetPrice = {
    name: '',
    model: '',
    count: 0
  };
  requestArray = [];
  choosingForPrint = []
  printRow = false;
  dataSource: any;
  displayedColumns: string[];
  choosingName: any;
  counter: number;
  offerRequest: RequestOffer = {
    client:'',
    model: []
  }


  constructor(private priceService: AbstractPriceService,
              private route: ActivatedRoute,
              private router: Router,
              private httpClient: HttpClient,
              private location: Location,
  ) {
  }

  ngOnInit(): void {
    // @ts-ignore
    this.choosingName$ = this.priceService.getNameModelList()
      .pipe(map(
        value => {
          this.array1 = value.rez;
          this.modelNames = Object.keys(this.array1);
          for (let prop of this.modelNames) {
            console.log(this.modelNames[0])
            this.modelNamesArray.push(prop);
          }
          console.log(this.modelNamesArray + ' 0')
        }
      )).subscribe();
    this.displayedColumns = ['name', 'model', 'count'];
    this.dataSource = new MatTableDataSource<Article>(this.choosingForPrint);
  }


  onBlurMethod(name) {
    this.nameIsChosen = true;
    console.log(this.nameIsChosen)
    this.modelValuesArray = [];
    this.modelValuesArray = Object.values(this.array1[name]);
    this.name = name;
  }

  onBlurModelMethod(name: any) {
    console.log(name + ' model')

  }


  addRow(form: NgForm) {
    // const row = form.value as RequestGetPrice;
    // this.requestArray.push(row);
  }

  trackByFn(index, item) {
    return item.id;
  }

  addNewRow(form: NgForm) {
    this.printRow = false
    const row = form.value as RequestGetPrice;
    this.requestArray.push(row);
    this.choosingForPrint.length = 0;
    this.requestArray.forEach((order: any) => {
      this.choosingForPrint.push(order);
    });
    this.printRow = true;
  }

  cancel() {

  }

  save() {
    this.offerRequest.model = this.requestArray;
    this.offerRequest.client = '';
    this.priceService.getPrice(this.offerRequest).subscribe(() => this.toPrice());
  }

  private toPrice() {

  }

  saveDetails() {
    this.priceService.getDetailPrice(this.requestArray).subscribe(() => this.toDetailPrice());

  }

  private toDetailPrice() {

  }
}
