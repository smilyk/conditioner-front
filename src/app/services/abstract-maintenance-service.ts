import {Observable} from 'rxjs';
import {ReturnedCode} from '../models/ReturnedCode';
import {TypeMaintenance} from '../models/TypeMaintenance';

export abstract class AbstractMaintenanceService {

  abstract addTypeMaintenance(typeMaintenance: TypeMaintenance): Observable<ReturnedCode>;
  abstract getAllMaintenance(): Observable<ReturnedCode>;
  // abstract getConditioner(uuid: string): Observable<ConditionersForDetails>;
  // abstract deleteConditioner(uuid: string): Observable<ConditionersForDetails>;
  // abstract startWorkConditioner(uuid: string): Observable<string>;
  // abstract getConditionerByInventoryNumber(inventoryNumber: string): Observable<ConditionersForDetails>;
}
