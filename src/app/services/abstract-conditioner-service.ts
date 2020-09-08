import {Conditioner} from '../models/Conditioner';
import {Observable} from 'rxjs';
import {ReturnedCode} from '../models/ReturnedCode';
import {ConditionersForDetails} from '../models/ConditionersForDetails';

export abstract class AbstractConditionerService {

  abstract addConditioner(conditioner: Conditioner): Observable<ReturnedCode>;
  abstract getAllConditioners(): Observable<ReturnedCode>;
  abstract getConditioner(uuid: string): Observable<ConditionersForDetails>;
  abstract deleteConditioner(uuid: string): Observable<ConditionersForDetails>;
  abstract startWorkConditioner(uuid: string): Observable<string>;
}
