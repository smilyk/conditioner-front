import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AbstractPlanningService} from './abstract-planning-service';
import {Observable} from 'rxjs';
import {Path} from '../models/Path';
import {ForGettingNotBustWorkersByDateAndTypeMaintenanceUuid} from '../models/ForGettingNotBustWorkersByDateAndTypeMaintenanceUuid';
import {ToPlanEntity} from '../models/ToPlanEntity';

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

  getNotBusyWorkersForTypeMaintenance(entity: ForGettingNotBustWorkersByDateAndTypeMaintenanceUuid): Observable<any> {
    return this.httpClient.put(apiUrl + Path.GET_NOT_BUSY_WORKERS_FOR_TYPE_MAINTENANCE, entity);

  }

  planRecord(entity: ToPlanEntity): Observable<any> {
    return this.httpClient.post(apiUrl + Path.PLAN_RECORD, entity);
  }
}
