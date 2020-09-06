import {TypeMaintenance} from './TypeMaintenance';

export interface Conditioner {
  inventoryNumber: string;
  maintenance: TypeMaintenance[];
  nameConditioner: string;
  place: string;
  deleted: boolean;
}
