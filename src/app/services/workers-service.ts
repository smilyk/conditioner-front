import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Path} from '../models/Path';
import {AbstractWorkersService} from './abstract-workers-service';
import {ForGettingNotBustWorkersByDateAndTypeMaintenanceUuid} from '../models/ForGettingNotBustWorkersByDateAndTypeMaintenanceUuid';

const apiUrl = 'https://conditioners.herokuapp.com/';

@Injectable({
  providedIn: 'root'
})

export class WorkersService implements AbstractWorkersService {

  constructor(private httpClient: HttpClient) {
  }

  getNotBusyWorkersForTypeMaintenance(entity: ForGettingNotBustWorkersByDateAndTypeMaintenanceUuid): Observable<any> {
    this.httpClient.put(apiUrl + Path.GET_NOT_BUSY_WORKERS_FOR_TYPE_MAINTENANCE, entity);
    return null;
  }

}
