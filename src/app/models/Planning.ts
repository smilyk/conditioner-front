import {TypeMaintenance} from './TypeMaintenance';


export interface Planning {
  inventoryNumber: string;
  maintenance: TypeMaintenance;
  nameConditioner: string;
  place: string;
  dateLastTypeMaintenance: Date;
  dateNextTypeMaintenance: Date;
}
