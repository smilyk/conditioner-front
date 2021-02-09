import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Price} from "../../models/Price";
import {AbstractPriceService} from "../../services/abstract-price-service";
import {Conditioner} from "../../models/Conditioner";
import {map} from "rxjs/operators";
import {Form, NgForm} from "@angular/forms";

@Component({
  selector: 'app-detail-price',
  templateUrl: './detail-price.component.html',
  styleUrls: ['./detail-price.component.css']
})
export class DetailPriceComponent implements OnInit {
  pricePosition: Price = {
    uuidPosition: '',
    namePosition: '',
    modelPosition: '',
    priceUkr: 0.0,
    priceUsa: 0.0,
    priceMarketPosition: 0.0,
    workPricePosition: 0.0,
    coefficientPosition: 0.0,
    unitsPosition: '',
    descriptionPosition: ''
  }

  constructor(private priceService: AbstractPriceService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    const uuid = this.route.snapshot.paramMap.get('id');
    this.priceService.getPricePositionById(uuid)
      .pipe(map(
        value => {
          this.pricePosition = value;
        }
      )).subscribe();

    // this.priceService.updatePricePosition()
  }

  update(form: NgForm) {
    const pricePosition = form.value as Price;
    pricePosition.uuidPosition = this.pricePosition.uuidPosition;
    pricePosition.namePosition = this.pricePosition.namePosition;
    this.priceService.updateConditioner(pricePosition)
      .subscribe(() => this.cancel());
  }


  cancel() {
    console.log('ui')
  }
}
