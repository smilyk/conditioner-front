import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {AbstractArticleService} from '../../services/abstract-article-service';
import {Article} from '../../models/Atricle';
import { Redirect } from 'src/app/models/Redirect';
import { Picture } from 'src/app/models/Picture';
import { Image } from 'src/app/models/Image';

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {


  ImageBaseData:string | ArrayBuffer=null;
  base64textString = [];
  imageName: any;
  retrievedImage: any;
  private retrieveResonse: any;
  private base64Data: any;
  tmp: Image;

  constructor(private httpClient: HttpClient,
              private articleService: AbstractArticleService,
              private router: Router
  ) {
  }


  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  saveArticle(form: NgForm) {
    const article = form.value as Article;
    article.pictureBody = this.base64textString[0];
    this.articleService.addArticle(article)
      .subscribe(() => this.cancel());
  }


  // tslint:disable-next-line:typedef
  imagem: any;
   cancel() {
      this.router.navigate([Redirect.ARTICLES_LIST]).then();
    }

    onUploadChange(evt: any) {
      const file = evt.target.files[0];
    
      if (file) {
        const reader = new FileReader();
    
        reader.onload = this.handleReaderLoaded.bind(this);
        reader.readAsBinaryString(file);
      }
    }
    
    handleReaderLoaded(e) {
      this.base64textString.push(btoa(e.target.result));
    }

    getImage() {
      this.articleService.getPhoto(this.imageName)
      .subscribe(pic => {
        this.retrieveResonse = pic;
          console.log(pic)
          this.base64Data = this.retrieveResonse.pictureBody;
          this.retrievedImage = 'data:image/jpeg;base64,'+ this.base64Data;
      })
  }
}
