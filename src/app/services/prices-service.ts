import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AbstractPriceService} from "./abstract-price-service";

const apiUrl = 'https://conditioners.herokuapp.com/';
// const apiUrl = 'http://localhost:8080/'

@Injectable({
  providedIn: 'root'
})

export class PricesService implements AbstractPriceService{

  constructor(private httpClient: HttpClient) {
  }

  uploadFile(formData: FormData): Observable<any> {
    return this.httpClient.post( apiUrl + 'api/uploadfiles', formData);
  }

}
