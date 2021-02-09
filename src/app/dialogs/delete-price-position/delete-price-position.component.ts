import {Component, Inject, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {AbstractPriceService} from "../../services/abstract-price-service";
import {Redirect} from "../../models/Redirect";

@Component({
  selector: 'app-delete-price-position',
  templateUrl: './delete-price-position.component.html',
  styleUrls: ['./delete-price-position.component.css']
})
export class DeletePricePositionComponent implements OnInit {


  constructor(private priceService: AbstractPriceService,
              private router: Router,
              public dialogRef: MatDialogRef<DeletePricePositionComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  remove(model: any) {
    this.priceService.deletePricePosition(model).subscribe(() => this.ngOnInit());
    this.dialogRef.close();
    this.toPrice();
  }

  // tslint:disable-next-line:typedef
  private toPrice() {
    this.router.navigate([Redirect.UPLOAD_FILE]).then();
  }
}
