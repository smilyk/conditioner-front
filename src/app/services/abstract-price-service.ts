import {Observable} from "rxjs";
import {RequestOffer} from "../models/RequestOffer";
import {ResponseOffer} from "../models/ResponseOffer";
import {ResponseOfferModel} from "../models/ResponseOfferModel";
import {ResponseGetPrice} from "../models/ResponseGetPrice";
import {Price} from "../models/Price";

export abstract class AbstractPriceService {

  abstract uploadFile(formData: FormData): Observable<string>;

  abstract getNameModelList(): Observable<any>;

  abstract getDetailPrice(requestArray: ResponseGetPrice[]);

  abstract getPrice(offerRequest: RequestOffer): Observable<ResponseOfferModel>;

  abstract getAllPrice(): Observable<Price[]>;
}








