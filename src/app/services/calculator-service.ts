import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {AbstractCalculatorService} from './abstract-calculator-service';
import {Calculator} from '../models/Calculator';
import {Path} from '../models/Path';
import {HttpClient} from '@angular/common/http';

const apiUrlLocal = 'localhost:8082/';
const apiUrl = 'https://conditioners.herokuapp.com/';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService implements AbstractCalculatorService {
  constructor(private httpClient: HttpClient) {
  }

  getPower(data: Calculator): Observable<any> {
    console.log(data + ' fg');
    return this.httpClient.post(apiUrl + Path.GET_PLANNING_POWER, data);
  }
}
