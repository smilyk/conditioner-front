import {Observable} from "rxjs";
import {RequestOffer} from "../models/RequestOffer";

export abstract class AbstractPriceService {

  abstract uploadFile(formData: FormData): Observable<string>;

  abstract getNameModelList(): Observable<any>;

  abstract getDetailPrice(requestArray: any[]);

  abstract  getPrice(offerRequest: RequestOffer): Observable<any>;


}







