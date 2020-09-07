import {TypeMaintenance} from './TypeMaintenance';



export interface ConditionersForDetails {
  nameConditioner: string;
  place: string;
  inventoryNumber: string;
  startDate: string;
  uuidConditioner: string;
  maintenance: TypeMaintenance[];
}

