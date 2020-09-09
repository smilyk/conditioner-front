import {Injectable} from '@angular/core';
import {AbstractMaintenanceService} from './abstract-maintenance-service';
import {HttpClient} from '@angular/common/http';
import {TypeMaintenance} from '../models/TypeMaintenance';
import {Observable} from 'rxjs';
import {Path} from '../models/Path';


const apiUrl = 'https://conditioners.herokuapp.com/';

@Injectable({
  providedIn: 'root'
})

export class MaintenanceService implements AbstractMaintenanceService{

  constructor(private httpClient: HttpClient) {
  }

  addTypeMaintenance(typeMaintenance: TypeMaintenance): Observable<any> {
    return this.httpClient.post(apiUrl + Path.ADD_TYPE_MAINTENANCE, typeMaintenance);
  }

  getAllMaintenance(): Observable<any> {
    return this.httpClient.get(apiUrl + Path.GET_ALL_MAINTENANCE);
  }
}
