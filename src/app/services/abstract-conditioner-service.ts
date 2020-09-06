import {Conditioner} from '../models/Conditioner';
import {Observable} from 'rxjs';
import {ReturnedCode} from '../models/ReturnedCode';

export abstract class AbstractConditionerService {

  abstract addConditioner(conditioner: Conditioner): Observable<ReturnedCode>;

  abstract getAllConditioners(): Observable<ReturnedCode>;
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
