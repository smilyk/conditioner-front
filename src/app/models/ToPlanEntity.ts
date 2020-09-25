import {Workers} from './Workers';
import {TypeMaintenanceForPlan} from './TypeMaintenanceForPlan';

export interface ToPlanEntity {
  inventoryNumber: string;
  nameConditioner: string;
  startTime: string;
  workers: Workers[];
  place: string;
  typeMaintenance: TypeMaintenanceForPlan;
  // UUid записи планирования
  planningRecordUuid: string;
}
