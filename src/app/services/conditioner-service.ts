import {AbstractConditionerService} from './abstract-conditioner-service';
import {Conditioner} from '../models/Conditioner';
import {Observable} from 'rxjs';
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

  getAllConditioners(): Observable<any> {
    return this.httpClient.get(apiUrl + Path.GET_ALL_CONDITIONERS);
  }

  getAllNotDeletedConditioners(): Observable<any> {
    return this.httpClient.get(apiUrl + Path.GET_ALL_NOT_DELETED_CONDITIONER);
  }

  getConditionerByInventoryNumber(inventoryNumber: string): Observable<any> {
    return this.httpClient.get(apiUrl + Path.GET_CONDITIONER_BY_INV_NUMBER + `${inventoryNumber}`);
  }

  getConditioner(uuid: string): Observable<any> {
    return this.httpClient.get(apiUrl + Path.GET_CONDITIONER + `${uuid}`);
  }

  deleteConditioner(uuid: string): Observable<any> {
    return this.httpClient.delete(apiUrl + Path.DELETE_CONDITIONER + `${uuid}`);
  }

  startWorkConditioner(uuid: string): Observable<any> {
    return this.httpClient.put(apiUrl + Path.START_WORK_CONDITIONER + `${uuid}`, null);
  }

  addTypeMaintenanceToConditioner(conditionerUuid: string, typeMaintenanceUuid: string): Observable<any> {
    return this.httpClient.put(apiUrl + Path.PUT_MAINTENANCE_TO_COND + `${conditionerUuid}`
      +  '/' + `${typeMaintenanceUuid}`
    , null);
  }

}
