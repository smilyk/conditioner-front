import {Observable} from "rxjs";

export abstract class AbstractPriceService {

  abstract uploadFile(formData: FormData): Observable<string>;
}




