import {Component, OnInit} from '@angular/core';
import {AbstractPriceService} from "../../services/abstract-price-service";
import {TransfereService} from "../../services/transfereService";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Location} from "@angular/common";
import {map} from "rxjs/operators";
import {ResponseGetPrice} from "../../models/ResponseGetPrice";
import {RequestOffer} from "../../models/RequestOffer";

@Component({
  selector: 'app-cost-detail',
  templateUrl: './cost-detail.component.html',
  styleUrls: ['./cost-detail.component.css']
})
export class CostDetailComponent implements OnInit {
  data = this.transferService.getData();
  priceArray: ResponseGetPrice[] = [{
    name: '',
    model: '',
    count: 0.0,
    priceDefaultUkr: 0.0,
    priceGlobalUkr: 0.0,
    profitUkr: 0.0,
    priceUkr: 0.0,
    profitabilityUkr: 0.0,
    priceDefaultUsa: 0.0,
    priceGlobalUsa: 0.0,
    profitUsa: 0.0,
    priceUsa: 0.0,
    profitabilityUsa: 0.0,
  }]
  totalPriceDefaultUkr:number;
  totalGlobalUkr: number;
  totalProfitUkr: number;
  totalPriceUkr: number;
  totalProfitabilityUkr: number;
  totalPriceDefaultUsa: number;
  totalPriceGlobalUsa: number;
  totalProfitUsa: number;
  totalPriceUsa: number;
  totalProfitabilityUsa: number;

  displayedColumnsUkr: string[];
  displayedColumnsUsa: string[];
  offerRequest: RequestOffer = {
    client: '',
    model: []
  }

  constructor(private priceService: AbstractPriceService,
              private transferService: TransfereService,
              private route: ActivatedRoute,
              private router: Router,
              private httpClient: HttpClient,
              private location: Location,) {
  }

  ngOnInit(): void {
    console.log(this.data)
    this.priceService.getDetailPrice(this.data).pipe(map(value => {
      // @ts-ignore
      this.priceArray = value;
      this.totalPriceDefaultUkr = this.priceArray.map(t => t.priceDefaultUkr).reduce((acc, value) => acc + value, 0);
      this.totalGlobalUkr= this.priceArray.map(t => t.priceGlobalUkr).reduce((acc, value) => acc + value, 0);
      this.totalProfitUkr = this.priceArray.map(t => t.profitUkr).reduce((acc, value) => acc + value, 0);
      this.totalPriceUkr = this.priceArray.map(t => t.priceUkr).reduce((acc, value) => acc + value, 0);
      // this.totalProfitabilityUkr = this.priceArray.map(t => t.profitabilityUkr).reduce((acc, value) => acc + value, 0);
      this.totalProfitabilityUkr = (this.totalProfitUkr/this.totalGlobalUkr)*100;
      this.totalPriceDefaultUsa = this.priceArray.map(t => t.priceDefaultUsa).reduce((acc, value) => acc + value, 0);
      this.totalPriceGlobalUsa = this.priceArray.map(t => t.priceGlobalUsa).reduce((acc, value) => acc + value, 0);
      this.totalProfitUsa = this.priceArray.map(t => t.profitUsa).reduce((acc, value) => acc + value, 0);
      this.totalPriceUsa = this.priceArray.map(t => t.priceUsa).reduce((acc, value) => acc + value, 0);
      // this.totalProfitabilityUsa = this.priceArray.map(t => t.profitabilityUsa).reduce((acc, value) => acc + value, 0) ;
      this.totalProfitabilityUsa = (this.totalProfitUsa/this.totalPriceGlobalUsa)*100;
    })).subscribe();
    this.displayedColumnsUkr = ['model', "count", 'priceDefaultUkr', 'priceGlobalUkr',
      'profitUkr', 'priceUkr', 'profitabilityUkr']
    this.displayedColumnsUsa = ['model', "count", 'priceDefaultUsa', 'priceGlobalUsa',
      'profitUsa', 'priceUsa', 'profitabilityUsa',]
  }

  cost() {
    this.offerRequest.model = this.data;
    this.offerRequest.client = '';
    this.transferService.setData(this.offerRequest)
    this.router.navigate(['prices']).then();
  }

  createOffer() {

  }
}
