import {Observable} from 'rxjs';
import {ForGettingNotBustWorkersByDateAndTypeMaintenanceUuid} from '../models/ForGettingNotBustWorkersByDateAndTypeMaintenanceUuid';


export abstract class AbstractPlanningService {
  abstract getPlanningRecord(uuidRecord: string): Observable<any>;
  abstract getNotBusyWorkersForTypeMaintenance(entity: ForGettingNotBustWorkersByDateAndTypeMaintenanceUuid):
    Observable<ForGettingNotBustWorkersByDateAndTypeMaintenanceUuid[]>;
}
