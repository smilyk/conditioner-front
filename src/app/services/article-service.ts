import {Observable} from 'rxjs';
import {Article} from '../models/Atricle';
import {AbstractArticleService} from './abstract-article-service';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Path} from '../models/Path';

const apiUrlLocal = 'localhost:8082/';
const apiUrl = 'https://conditioners.herokuapp.com/';
@Injectable({
    providedIn: 'root'
  })
export class ArticleService implements AbstractArticleService{
    constructor(private httpClient: HttpClient) {
    }

    getAllCArticles(): Observable<any> {
        return this.httpClient.get(apiUrl + Path.GET_ALL_ARTICLES);
    }
    addArticle(article: Article): Observable<any> {
        console.log('article' + article);
        return this.httpClient.post(apiUrl + Path.ADD_ARTICLE, article);

    }
    getPhoto(photoName: string): Observable<any>{
        return this.httpClient.post(apiUrl + Path.GET_PHOTO + photoName, {});
    }

  getArticleByUuid(uuid: string): Observable<any> {
    return this.httpClient.get(apiUrl + Path.GET_ARTICLE_BY_UUID + uuid);
  }

}
