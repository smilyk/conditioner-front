import {Component, OnInit} from '@angular/core';
import {Article} from '../../models/Atricle';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {MatDialog} from '@angular/material/dialog';
import {Location} from '@angular/common';
import {AbstractArticleService} from '../../services/abstract-article-service';
import {map} from 'rxjs/operators';


@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {

  article: Article = {
    articleTitle: '',
    articleName: '',
    articleText: ' ',
    pictureName: ' ',
    pictureBody: ' ',
    pictureUrl: ' ',
    uuidArticle: ' '
  };
  imageName: string;
  retrievedImage: any;
  private retrieveResonse: any;
  private base64Data: any;

  constructor(
    private articleService: AbstractArticleService,
    private route: ActivatedRoute,
    private router: Router,
    private httpClient: HttpClient,
    public dialog: MatDialog,
    private location: Location,
  ) {
  }

  ngOnInit(): void {
    const uuid = this.route.snapshot.paramMap.get('uuid');
    this.articleService.getArticleByUuid(uuid).pipe(map(cond => cond))
      .subscribe(art => {
        this.article = art;
        this.imageName = this.article.pictureName;
        this.retrievedImage = 'assets/' + art.pictureName + '.png';
        // this.articleService.getPhoto(this.imageName)
          // .subscribe(pic => {
          //   // this.retrieveResonse = pic;
          //   this.base64Data = this.retrieveResonse.pictureBody;
          //   this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
          // });
      });
  }
}
