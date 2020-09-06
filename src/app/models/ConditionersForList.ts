import {TypeMaintenance} from './TypeMaintenance';


export interface ConditionersForList {
  nameConditioner: string;
  place: string;
  inventoryNumber: string;
  startDate: Date;
  maintenance: TypeMaintenance[];
  workedHours: number;
  uuidConditioner: string;
}

