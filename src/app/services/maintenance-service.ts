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

  getAllNotDeletedMaintenance(): Observable<any> {
    return this.httpClient.get(apiUrl + Path.GET_ALL_NOT_DELETED_TYPE_MAINTENANCE);
  }

  getMaintenance(uuid: string): Observable<any> {
    return this.httpClient.get(apiUrl + Path.GET_MAINTENANCE_BY_ID + `${uuid}`);
  }

  deleteTypeMaintenance(uuid: string): Observable<any> {
    return this.httpClient.delete(apiUrl + Path.DELETE_TYPE_MAINTENANCE_BY_ID + `${uuid}`);
  }
}
