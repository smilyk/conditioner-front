import {Observable} from 'rxjs';
import {ForGettingNotBustWorkersByDateAndTypeMaintenanceUuid} from '../models/ForGettingNotBustWorkersByDateAndTypeMaintenanceUuid';

export abstract class AbstractWorkersService {

abstract getNotBusyWorkersForTypeMaintenance(entity: ForGettingNotBustWorkersByDateAndTypeMaintenanceUuid):
Observable<ForGettingNotBustWorkersByDateAndTypeMaintenanceUuid[]>;

}
