import {Observable} from 'rxjs';


export abstract class AbstractPlanningService {
  abstract getPlanningRecord(uuidRecord: string): Observable<any>;
}
