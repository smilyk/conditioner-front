import {Component, OnInit} from '@angular/core';
import {AbstractPriceService} from "../../services/abstract-price-service";
import {TransfereService} from "../../services/transfereService";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Location} from "@angular/common";
import {map} from "rxjs/operators";
import {ResponseGetPrice} from "../../models/ResponseGetPrice";

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
  totalPriceDefaultUkr:string;
  totalGlobalUkr: string;
  totalProfitUkr: string;
  totalPriceUkr: string;
  totalProfitabilityUkr: string;
  totalPriceDefaultUsa: string;
  totalPriceGlobalUsa: string;
  totalProfitUsa: string;
  totalPriceUsa: string;
  totalProfitabilityUsa: string;

  displayedColumns: string[];

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
      this.totalPriceDefaultUkr = this.priceArray.map(t => t.priceDefaultUkr).reduce((acc, value) => acc + value, 0) + ' ₴';
      this.totalGlobalUkr= this.priceArray.map(t => t.priceGlobalUkr).reduce((acc, value) => acc + value, 0) + ' ₴';
      this.totalProfitUkr = this.priceArray.map(t => t.profitUkr).reduce((acc, value) => acc + value, 0) + ' ₴';
      this.totalPriceUkr = this.priceArray.map(t => t.priceUkr).reduce((acc, value) => acc + value, 0) + ' ₴';
      this.totalProfitabilityUkr = this.priceArray.map(t => t.profitabilityUkr).reduce((acc, value) => acc + value, 0) + ' ₴';
      this.totalPriceDefaultUsa = this.priceArray.map(t => t.priceDefaultUsa).reduce((acc, value) => acc + value, 0) + ' $';
      this.totalPriceGlobalUsa = this.priceArray.map(t => t.priceGlobalUsa).reduce((acc, value) => acc + value, 0) + ' $';
      this.totalProfitUsa = this.priceArray.map(t => t.profitUsa).reduce((acc, value) => acc + value, 0) + ' $';
      this.totalPriceUsa = this.priceArray.map(t => t.priceUsa).reduce((acc, value) => acc + value, 0) + ' $';
      this.totalProfitabilityUsa = this.priceArray.map(t => t.profitabilityUsa).reduce((acc, value) => acc + value, 0) + ' $';
    })).subscribe();
    this.displayedColumns = ['model', "count", 'priceDefaultUkr', 'priceGlobalUkr',
      'profitUkr', 'priceUkr', 'profitabilityUkr', 'priceDefaultUsa', 'priceGlobalUsa',
      'profitUsa', 'priceUsa', 'profitabilityUsa',]
  }

}
