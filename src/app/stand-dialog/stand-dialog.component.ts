import { Component, OnInit,Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Stand} from '../stand/stand';


@Component({
  selector: 'app-stand-dialog',
  templateUrl: './stand-dialog.component.html',
  styleUrls: ['./stand-dialog.component.css']
})
export class StandDialogComponent implements OnInit {

  private backupStand: Partial<Stand> = {...this.data.stand};

  constructor(public dialogRef: MatDialogRef<StandDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:StandDialogData) { 

    }

    cancel() {
      this.data.stand.title = this.backupStand.title;
      this.data.stand.description = this.backupStand.description;
      this.data.stand.price = this.backupStand.price;
      this.data.stand.location = this.backupStand.location;
      this.dialogRef.close(this.data);
    }

  ngOnInit(): void {
  }

}


export interface StandDialogData {
  stand: Partial<Stand>;
  enableDelete: boolean;
}

export interface StandDialogResult {
  stand: Stand;
  delete?:boolean;
}