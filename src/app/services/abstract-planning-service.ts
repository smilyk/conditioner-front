import {Observable} from 'rxjs';
import {ForGettingNotBustWorkersByDateAndTypeMaintenanceUuid} from '../models/ForGettingNotBustWorkersByDateAndTypeMaintenanceUuid';
import {Workers} from '../models/Workers';


export abstract class AbstractPlanningService {
  abstract getPlanningRecord(uuidRecord: string): Observable<any>;
  abstract getNotBusyWorkersForTypeMaintenance(entity: ForGettingNotBustWorkersByDateAndTypeMaintenanceUuid):
    Observable<Workers[]>;
}
