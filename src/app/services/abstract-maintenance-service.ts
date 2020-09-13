import {Observable} from 'rxjs';
import {ReturnedCode} from '../models/ReturnedCode';
import {TypeMaintenance} from '../models/TypeMaintenance';

export abstract class AbstractMaintenanceService {

  abstract addTypeMaintenance(typeMaintenance: TypeMaintenance): Observable<ReturnedCode>;
  abstract getAllMaintenance(): Observable<TypeMaintenance[]>;
  abstract getMaintenance(uuid: string): Observable<TypeMaintenance>;
  abstract deleteTypeMaintenance(uuid: string): Observable<TypeMaintenance>;
  // abstract startWorkConditioner(uuid: string): Observable<string>;
  // abstract getConditionerByInventoryNumber(inventoryNumber: string): Observable<ConditionersForDetails>;
}
