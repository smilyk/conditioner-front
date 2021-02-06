import {Component, OnInit} from '@angular/core';
import {AbstractPriceService} from "../../services/abstract-price-service";
import {TransfereService} from "../../services/transfereService";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Location} from "@angular/common";
import {map} from "rxjs/operators";
import {ResponseOffer} from "../../models/ResponseOffer";
import {Subscription} from "rxjs";

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

  /** Gets the total cost of all transactions. */
  // getTotalCost() {
  //   console.log(this.transactions.map(t => t.priceUkr).reduce((acc, value) => acc + value, 0))
  //   return this.transactions.map(t => t.priceUkr).reduce((acc, value) => acc + value, 0);
  // }
  /** Gets the total cost of all transactions. */
  getTotalCostPriceUkr() {
    // console.log(this.y + ' 2')
    // console.log(this.transactions[0].priceUkr + ' yyy')
    // return this.transactions[0].priceUkr;
    // console.log(this.transactions.map(t => t.priceUkr).reduce((acc, value) => acc + value, 0))
    // let x = this.transactions.map(t => t.priceUkr).reduce((a, v) => a + v, 0);
    // console.log(x + ' 0');
    // this.y = x;
    // console.log(this.y + ' 3')
// console.log(this.transactions.map(t => t.priceUkr).reduce((acc, value) => acc + value))
//     let ttt = this.transactions.map(t => t.priceUkr).reduce((acc, value) => acc + value);
// console.log(ttt + ' ttt')
//     return ttt;
  }

  getTotalCostPriceUsa() {

    return this.transactions.map(t => t.priceUsa).reduce((acc, value) => acc + value, 0);
  }

  getTotalCostPriceWork() {
    return this.transactions.map(t => t.workPriceUkr).reduce((acc, value) => acc + value, 0);
  }

  getTotalCostPriceTotal() {
  }

  //   return this.transactions.map(t => t.).reduce((acc, value) => acc + value, 0);
  // }
}


