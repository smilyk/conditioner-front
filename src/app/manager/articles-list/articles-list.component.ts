import {Component, OnInit, ViewChild} from '@angular/core';
import {AbstractArticleService} from 'src/app/services/abstract-article-service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {ActivatedRoute, Router} from '@angular/router';
import {Redirect} from '../../models/Redirect';
import {Subscription} from 'rxjs';
import {map} from 'rxjs/operators';
import {Article} from 'src/app/models/Atricle';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit {

  tmp: any;
  private array1: Article[];
  articles$: Subscription;
  dataSource: MatTableDataSource<Article>;
  displayedColumns: string[];
  filter: string;
  retrievedImage: any;
  private retrieveResonse: any;
  private base64Data: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private articleService: AbstractArticleService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.displayedColumns = ['uuidArticle', 'articleName', 'pictureName',
      'details', 'deleted'];
    this.articles$ = this.articleService.getAllCArticles().pipe(map(
      value => {
        this.array1 = value;
        this.array1.forEach(element => {

          this.tmp = this.articleService.getPhoto(element.pictureName)

            .subscribe(res => {
              this.retrieveResonse = res;
              this.base64Data = this.retrieveResonse.pictureBody;
              this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
              element.pictureBody = 'data:image/jpeg;base64,' + this.base64Data;
            });
        });
        return this.array1;
      }
    ))
      .subscribe(article => {
        this.dataSource = new MatTableDataSource<Article>(article);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.dataSource.filter = this.filter;
      });
  }

  applyFilter(filterValue: any): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  // tslint:disable-next-line:typedef
  addArticle() {
    this.router.navigate([Redirect.ADD_ARTICLE]).then();
  }

  // tslint:disable-next-line:typedef
  details(uuidArticle: any) {
    console.log(Redirect.GET_ARTICLE_BY_ID + `${uuidArticle}`);
    this.router.navigate([Redirect.GET_ARTICLE_BY_ID + `${uuidArticle}`], uuidArticle).then();
  }

  // tslint:disable-next-line:typedef
  delete(uuidArticle: any) {

  }
}
