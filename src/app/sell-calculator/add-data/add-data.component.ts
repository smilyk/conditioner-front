import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Location} from "@angular/common";
import {AbstractPriceService} from "../../services/abstract-price-service";
import {map} from "rxjs/operators";
import {NgForm} from "@angular/forms";
import {RequestGetPrice} from "../../models/RequestGetPrice";
import {MatTableDataSource} from "@angular/material/table";
import {Article} from "../../models/Atricle";
import {RequestOffer} from "../../models/RequestOffer";
import {TransfereService} from "../../services/transfereService";
import {Redirect} from "../../models/Redirect";

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
              private transfereService:TransfereService,
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
            this.modelNamesArray.push(prop);
          }
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
    this.offerRequest.client = 'Vasya';
    this.transfereService.setData(this.offerRequest);
    this.priceService.getPrice(this.offerRequest).subscribe(() => this.toPrice(this.offerRequest));
    this.router.navigate(['prices']).then();

  }

  saveDetails() {

    this.priceService.getDetailPrice(this.requestArray).subscribe(() => this.toDetailPrice(this.requestArray));

  }

  private toDetailPrice(requestArray: any[]) {

  }

  private toPrice(offerRequest: RequestOffer) {

  }
}
