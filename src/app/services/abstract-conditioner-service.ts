import {Conditioner} from '../models/Conditioner';
import {Observable} from 'rxjs';
import {ReturnedCode} from '../models/ReturnedCode';
import {ConditionersForDetails} from '../models/ConditionersForDetails';

export abstract class AbstractConditionerService {

  abstract addConditioner(conditioner: Conditioner): Observable<ReturnedCode>;
  abstract getAllConditioners(): Observable<ReturnedCode>;
  abstract getConditioner(uuid: string): Observable<ConditionersForDetails>;
  abstract deleteConditioner(uuid: string): Observable<ConditionersForDetails>;
  //
  // abstract returnBook(returnBookData: ReturnBookData): Observable<ReturnedCode>;
  //
  // abstract getAuthorsBook(authorName: Author): Observable<ReturnedCode>;
  //
  // abstract mostPopularBook(): Observable<ReturnedCode>;
  //
  //
  // abstract getBook(isbn: string): Observable<ReturnedCode>;
  //
  // abstract getReturnedBook(): Observable<ReturnedCode>;
}
