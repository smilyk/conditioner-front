import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Article} from "../../models/Atricle";
import {Price} from "../../models/Price";
import {HttpClient} from "@angular/common/http";
import {AbstractArticleService} from "../../services/abstract-article-service";
import {Router} from "@angular/router";
import {AbstractPriceService} from "../../services/abstract-price-service";
import {Redirect} from "../../models/Redirect";

@Component({
  selector: 'app-add-price-position',
  templateUrl: './add-price-position.component.html',
  styleUrls: ['./add-price-position.component.css']
})
export class AddPricePositionComponent implements OnInit {

  constructor(private httpClient: HttpClient,
              private priceService: AbstractPriceService,
              private router: Router) { }

  ngOnInit(): void {
  }

  save(form: NgForm) {
    const price = form.value as Price;
    console.log(price)
    if(price.unitsPosition === null){
      price.unitsPosition = '';
    }
    if(price.descriptionPosition === null){
      price.descriptionPosition = '';
    }
    this.priceService.addPricePosition(price)
      .subscribe(() => this.cancel());
  }

  cancel() {
    this.router.navigate([Redirect.UPLOAD_FILE]).then();
  }
}
