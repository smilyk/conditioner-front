import {Component, Inject, OnInit} from '@angular/core';
import {AbstractConditionerService} from '../../services/abstract-conditioner-service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-start-work-conditioner-dialog',
  templateUrl: './start-work-conditioner-dialog.component.html',
  styleUrls: ['./start-work-conditioner-dialog.component.css']
})
export class StartWorkConditionerDialogComponent implements OnInit {

  constructor(
    private conditionerService: AbstractConditionerService,
    public dialogRef: MatDialogRef<StartWorkConditionerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

  start(conditionerUuid: any): void {
    this.conditionerService.startWorkConditioner(conditionerUuid).subscribe(() => this.ngOnInit());
    this.dialogRef.close();
  }
}
