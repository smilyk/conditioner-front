import {Component, OnInit} from '@angular/core';
import {AbstractPriceService} from "../../services/abstract-price-service";
import {Router} from "@angular/router";
import {Redirect} from "../../models/Redirect";
import {AddFileDialogComponent} from "../../dialogs/add-file-dialog/add-file-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-add-price',
  templateUrl: './add-price.component.html',
  styleUrls: ['./add-price.component.css']
})
export class AddPriceComponent implements OnInit {
  public formData = new FormData();
public checkFile = false;
  constructor(private priceService: AbstractPriceService,
              private router: Router,
              public dialog: MatDialog) { }
  // apiUrl = 'https://conditioners.herokuapp.com/';
  ngOnInit(): void {
  }

  uploadFiles( file ) {
    this.checkFile = true;
    console.log( 'file', file )
    for ( let i = 0; i < file.length; i++ ) {
      console.log(file[i]['name'])
      this.formData.append( "file", file[i], file[i]['name'] );
    }
  }

  RequestUpload() {
    this.priceService.uploadFile(this.formData).subscribe(() => this.openDialog());
  }

  public cancel() {

    this.router.navigate([Redirect.HOME]).then();
  }

  private openDialog() {
      const dialogRef = this.dialog.open(AddFileDialogComponent, {
        data: {
         message: this.formData
        }
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('dialog was closed');
        this.cancel();
      });
      this.ngOnInit();
    }

}
