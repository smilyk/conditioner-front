import { Observable } from 'rxjs';
import { Article } from '../models/Atricle';
import { ReturnedCode } from '../models/ReturnedCode';
import { AbstractArticleService } from './abstract-article-service';
import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Path} from '../models/Path';
import { Image } from '../models/Image';

const apiUrlLocal = 'localhost:8082/';
const apiUrl = 'https://conditioners.herokuapp.com/';
@Injectable({
    providedIn: 'root'
  })
export class ArticleService implements AbstractArticleService{
    constructor(private httpClient: HttpClient) {
    }
    addArticle(article: Article): Observable<any> {
        console.log('article' + article);
        return this.httpClient.post(apiUrl + Path.ADD_ARTICLE, article);
        
    }
    getPhoto(photoName:String): Observable<any>{
        console.log('photoName ', photoName)
         const x = this.httpClient.post(apiUrl + Path.GET_PHOTO + photoName, {});
        
        return this.httpClient.post(apiUrl + Path.GET_PHOTO + photoName, {})
    }

}
