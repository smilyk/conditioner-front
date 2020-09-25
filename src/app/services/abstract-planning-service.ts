import {Observable} from 'rxjs';
import {ForGettingNotBustWorkersByDateAndTypeMaintenanceUuid} from '../models/ForGettingNotBustWorkersByDateAndTypeMaintenanceUuid';
import {Workers} from '../models/Workers';
import {ToPlanEntity} from '../models/ToPlanEntity';


export abstract class AbstractPlanningService {
  abstract getPlanningRecord(uuidRecord: string): Observable<any>;
  abstract getNotBusyWorkersForTypeMaintenance(entity: ForGettingNotBustWorkersByDateAndTypeMaintenanceUuid):
    Observable<Workers[]>;
  abstract planRecord(entity: ToPlanEntity): Observable<string>;
}
