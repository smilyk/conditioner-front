import {AbstractConditionerService} from './abstract-conditioner-service';
import {Conditioner} from '../models/Conditioner';
import {Observable} from 'rxjs';
import {ReturnedCode} from '../models/ReturnedCode';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Path} from '../models/Path';

const apiUrl = 'https://conditioners.herokuapp.com/';

@Injectable({
  providedIn: 'root'
})

export class ConditionerService implements AbstractConditionerService{

  constructor(private httpClient: HttpClient) {
  }

  addConditioner(conditioner: Conditioner): Observable<any> {
    return this.httpClient.post(apiUrl + Path.ADD_CONDITIONER_TO_DB, conditioner);
  }

}
