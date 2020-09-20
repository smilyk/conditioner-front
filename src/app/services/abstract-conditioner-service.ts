import {Conditioner} from '../models/Conditioner';
import {Observable} from 'rxjs';
import {ReturnedCode} from '../models/ReturnedCode';
import {ConditionersForDetails} from '../models/ConditionersForDetails';
import {Planning} from '../models/Planning';
import {Dates} from '../models/Dates';

export abstract class AbstractConditionerService {

  abstract addConditioner(conditioner: Conditioner): Observable<ReturnedCode>;
  abstract getAllConditioners(): Observable<ConditionersForDetails[]>;
  abstract getAllNotDeletedConditioners(): Observable<ConditionersForDetails[]>;
  abstract getConditioner(uuid: string): Observable<ConditionersForDetails>;
  abstract deleteConditioner(uuid: string): Observable<ConditionersForDetails>;
  abstract startWorkConditioner(uuid: string): Observable<string>;
  abstract getConditionerByInventoryNumber(inventoryNumber: string): Observable<ConditionersForDetails>;
  abstract addTypeMaintenanceToConditioner(conditionerUuid: string, typeMaintenanceUuid: string): Observable<ConditionersForDetails>;

  abstract  getAllPlannedMissedConditioner(): Observable<Planning[]>;
  abstract  getAllPlannedTodayConditioner(): Observable<Planning[]>;
  abstract  getAllPlannedWeekConditioner(date: Dates): Observable<Planning[]>;
}
