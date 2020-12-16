import {Observable} from 'rxjs';
import {ReturnedCode} from '../models/ReturnedCode';
import {Article} from '../models/Atricle';
import {Image} from '../models/Image'


export abstract class AbstractArticleService {
  abstract addArticle(article: Article): Observable<ReturnedCode>;
  abstract getPhoto(photoName: String):Observable<Image>;
  abstract getAllCArticles() : Observable<Article[]>;
}
