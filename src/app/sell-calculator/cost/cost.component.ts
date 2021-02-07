import {Component, OnInit} from '@angular/core';
import {AbstractPriceService} from "../../services/abstract-price-service";
import {TransfereService} from "../../services/transfereService";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Location} from "@angular/common";
import {map} from "rxjs/operators";
import {ResponseOffer} from "../../models/ResponseOffer";
import {Subscription} from "rxjs";
import {Redirect} from "../../models/Redirect";
import {RequestGetPrice} from "../../models/RequestGetPrice";

@Component({
  selector: 'app-cost',
  templateUrl: './cost.component.html',
  styleUrls: ['./cost.component.css']
})
export class CostComponent implements OnInit {

  data = this.transferService.getData();
  transactions: ResponseOffer[] = [{
    model: '',
    priceUkr: 0.0,
    priceUsa: 0.0,
    workPriceUkr: 0.0,
    sumUkr: 0.0,
    priceInternet: 0.0
  }
  ];
  tmp: string;
  displayedColumns: any

  private x: Subscription;
  totalPriceUkr: string;
  totalPriceUsa: string;
  totalPriceWork: string
  totalCost: string;

  request: RequestGetPrice = {
    name: '',
    model: '',
    count: 0
  };
  requestArray = [];

  constructor(private priceService: AbstractPriceService,
              private transferService: TransfereService,
              private route: ActivatedRoute,
              private router: Router,
              private httpClient: HttpClient,
              private location: Location,) {
  }

  ngOnInit(): void {
    console.log(" hi")
    this.x = this.priceService.getPrice(this.data).pipe(map(value => {
      this.tmp = value.client;
      this.transactions = value.price;
      this.totalPriceUkr = this.transactions.map(t => t.priceUkr).reduce((acc, value) => acc + value, 0) + ' ₴';
      this.totalPriceUsa = this.transactions.map(t => t.priceUsa).reduce((acc, value) => acc + value, 0) + ' $';
      this.totalPriceWork = this.transactions.map(t => t.workPriceUkr).reduce((acc, value) => acc + value, 0) + ' ₴';
      this.totalCost = this.transactions.map(t => t.sumUkr).reduce((acc, value) => acc + value, 0) + ' ₴';

    })).subscribe();
    this.displayedColumns = ['model', 'priceUkr', 'priceUsa', 'priceWork', 'total'];
  }

  detailCost() {
    this.requestArray = this.data.model
    this.transferService.setData(this.requestArray);
    this.router.navigate([Redirect.DETAIL_PRICE]).then();
  }

  createOffer() {

  }
}


