import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AbstractPlanningService} from './abstract-planning-service';
import {Observable} from 'rxjs';
import {Path} from '../models/Path';

const apiUrl = 'https://conditioners.herokuapp.com/';

@Injectable({
  providedIn: 'root'
})

export class PlanningService implements AbstractPlanningService{

  constructor(private httpClient: HttpClient) {
  }

  getPlanningRecord(uuidRecord: string): Observable<any> {
    return this.httpClient.get(apiUrl + Path.GET_RECORD_BY_UUID + `${uuidRecord}`);

  }


}
