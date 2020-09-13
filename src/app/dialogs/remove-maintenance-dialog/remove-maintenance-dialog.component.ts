import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {AbstractMaintenanceService} from '../../services/abstract-maintenance-service';

@Component({
  selector: 'app-remove-maintenance-dialog',
  templateUrl: './remove-maintenance-dialog.component.html',
  styleUrls: ['./remove-maintenance-dialog.component.css']
})
export class RemoveMaintenanceDialogComponent implements OnInit {


  constructor(
    private maintenanceService: AbstractMaintenanceService,
    public dialogRef: MatDialogRef<RemoveMaintenanceDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

  remove(uuid: string): void {
    this.maintenanceService.deleteTypeMaintenance(uuid).subscribe(() => this.ngOnInit());
    this.dialogRef.close();
  }

}
