import {Component, Inject, OnInit} from '@angular/core';
import {AbstractConditionerService} from '../../services/abstract-conditioner-service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-remove-conditioner-dialog',
  templateUrl: './remove-conditioner-dialog.component.html',
  styleUrls: ['./remove-conditioner-dialog.component.css']
})
export class RemoveConditionerDialogComponent implements OnInit {

  constructor(
    private conditionerService: AbstractConditionerService,
    public dialogRef: MatDialogRef<RemoveConditionerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

  remove(conditionerUuid: string) {
    this.conditionerService.deleteConditioner(conditionerUuid).subscribe(() => this.ngOnInit());
    this.dialogRef.close();
  }
}
