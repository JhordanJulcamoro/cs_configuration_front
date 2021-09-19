import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css'],
})
export class ConfirmDialogComponent implements OnInit {
  dialogTitle!: string;
  dialogText!: string;

  constructor(
    private dialogREf: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: any
  ) // public message:string
  {}

  ngOnInit(): void {
    this.dialogTitle = this.data.dialogTitle;
    this.dialogText = this.data.dialogText;
  }

  onClickNo(): void {
    this.dialogREf.close();
  }
}
