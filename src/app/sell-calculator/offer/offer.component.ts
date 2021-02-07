import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {AbstractPriceService} from "../../services/abstract-price-service";
import {TransfereService} from "../../services/transfereService";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Location} from "@angular/common";
import {OfferArray} from "../../models/OfferArray";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import {ResponseOfferModel} from "../../models/ResponseOfferModel";
import {ResponseOffer} from "../../models/ResponseOffer";

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {
  data = this.transferService.getData();
  dataSource: any;
  displayedColumns: any;
  client = '';
  offer: OfferArray[] = [{
    model: '-',
    priceUkr: '-',
    priceUsa: '-',
    priceInternet: '-'
  }]
  transactions: ResponseOffer[];
  tmpCond: OfferArray = {
    model: '',
    priceUkr: '',
    priceUsa: '-',
    priceInternet: '-'
  };
  tmpWork: OfferArray = {
    model: '',
    priceUkr: '',
    priceUsa: '-',
    priceInternet: '-'
  };
  tmpMag: OfferArray = {
    model: '',
    priceUkr: '',
    priceUsa: '-',
    priceInternet: '-'
  };
  tmoPriceOfMagistral = 0;
  summ: number;


  constructor(private priceService: AbstractPriceService,
              private transferService: TransfereService,
              private route: ActivatedRoute,
              private router: Router,
              private httpClient: HttpClient,
              private location: Location,
              private changeDetectorRefs: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.priceService.getPrice(this.data).pipe(map(value => {
      this.transactions = value.price;
      this.client = value.client
      for (let i = 0; i < this.transactions.length; i++) {
        if ('Кондицинер' === this.transactions[i].name) {
          this.tmpCond.model = this.transactions[i].model
          this.tmpCond.priceUkr = this.transactions[i].sumUkr + ''
          this.tmpCond.priceUsa = this.transactions[i].priceUsa + ''
          this.tmpCond.priceInternet = this.transactions[i].priceUkr + ''
          this.tmpWork.model = 'Работа'
          this.tmpWork.priceUkr = this.transactions[i].workPriceUkr + ''
          this.tmpWork.priceUsa = '-'
          this.tmpWork.priceInternet = '-'
          this.summ = this.transactions[i].workPriceUkr + this.transactions[i].sumUkr;
        }
      }
      for (let i = 0; i < this.transactions.length; i++) {
        if (this.transactions[i].name !== 'Кондицинер') {
          this.tmoPriceOfMagistral = this.tmoPriceOfMagistral + this.transactions[i].priceUkr;
          this.summ = this.summ + this.transactions[i].priceUkr;
        }
        this.tmpMag.model = 'Магистраль'
        this.tmpMag.priceUkr = this.tmoPriceOfMagistral + '';
        this.tmpMag.priceUsa = '-'
        this.tmpMag.priceInternet = '-'
      }
      this.offer.length = 0;
      this.offer.push(this.tmpCond)
      this.offer.push(this.tmpWork)
      this.offer.push(this.tmpMag)
      this.offer.forEach(console.log)
      this.transactions.forEach(console.log)
      this.dataSource = this.offer;
    })).subscribe();
    this.displayedColumns = ['model',
      'priceUkr', 'priceUsa', 'priceInternet'
    ];
    this.dataSource.data = this.offer;
  }
  refresh(): void {
    this.dataSource.data = this.dataSource.data;
  }
}
