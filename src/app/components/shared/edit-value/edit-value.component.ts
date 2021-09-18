import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-value',
  templateUrl: './edit-value.component.html',
  styleUrls: ['./edit-value.component.css']
})
export class EditValueComponent implements OnInit {
  dialogTitle!: string;
  dialogId!:number;
  dialogName!: string;
  dialogValue!: string;

  constructor( private dialogREf: MatDialogRef<EditValueComponent>,
    @Inject(MAT_DIALOG_DATA)public data:any ) { }

  ngOnInit(): void {
    this.dialogTitle = this.data.dialogTitle;
    this.dialogId = this.data.dialogId;
    this.dialogName = this.data.dialogName;
    this.dialogValue = this.data.dialogValue;
  }

  onSaveValue(idConfig:number,value:string):void{
    console.log("Valores: ", idConfig,value);
    this.dialogREf.close();
  }

}
