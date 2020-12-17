import {Observable} from 'rxjs';
import {Calculator} from '../models/Calculator';
import {PlanningConditionerPower} from '../models/PlanningConditionerPower';


export abstract class AbstractCalculatorService {
  abstract getPower(data: Calculator): Observable<PlanningConditionerPower>;
}
