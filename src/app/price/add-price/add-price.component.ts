import {Component, OnInit} from '@angular/core';
import {AbstractPriceService} from "../../services/abstract-price-service";
import {Redirect} from "../../models/Redirect";
import {AddFileDialogComponent} from "../../dialogs/add-file-dialog/add-file-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {Price} from "../../models/Price";
import {map} from "rxjs/operators";
import {Router} from "@angular/router";
import {DeletePricePositionComponent} from "../../dialogs/delete-price-position/delete-price-position.component";
import {MatTableDataSource} from "@angular/material/table";
import {Article} from "../../models/Atricle";

@Component({
  selector: 'app-add-price',
  templateUrl: './add-price.component.html',
  styleUrls: ['./add-price.component.css']
})
export class AddPriceComponent implements OnInit {
  public formData = new FormData();
  public checkFile = false;
  price: Price[] = [{
    uuidPosition: '',
    namePosition: '',
    modelPosition: '',
    priceUkr: 0.0,
    priceUsa: 0.0,
    priceMarketPosition: 0.0,
    workPricePosition: 0.0,
    coefficientPosition: 0.0,
    unitsPosition: '',
    descriptionPosition: ''
  }];

  constructor(private priceService: AbstractPriceService,
              private router: Router,
              public dialog: MatDialog) {
  }

  // apiUrl = 'https://conditioners.herokuapp.com/';
  dataSource
  displayedColumns: any;

  ngOnInit(): void {
    this.priceService.getAllPrice().pipe(map(value => {
      this.price = value;
      console.log(this.price)
    })).subscribe();
    this.displayedColumns = [ 'namePosition', 'modelPosition',
      'priceUsa', 'priceUkr', 'unitsPosition', 'priceMarketPosition',
      'coefficientPosition', 'workPricePosition', 'descriptionPosition', 'details', 'deleted', 'uuid_position']
    this.dataSource = this.price;
  }

  uploadFiles(file) {
    this.checkFile = true;
    console.log('file', file)
    for (let i = 0; i < file.length; i++) {
      console.log(file[i]['name'])
      this.formData.append("file", file[i], file[i]['name']);
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

    });
    this.ngOnInit();
  }

  delete(model: any) {
    const dialogRef = this.dialog.open(DeletePricePositionComponent, {
      data: {
        model
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('dialog was closed');
      this.reload();
    });
    this.ngOnInit();
  }


  details(uuidPosition: any) {
    this.router.navigate([Redirect.DETAIL_PRICE_POSITION + `${uuidPosition}`], uuidPosition).then();
  }

  private reload() {
    window.location.reload();
  }

  addPosition() {
    this.router.navigate([Redirect.ADD_PRICE_POSITION]).then();
  }
}
