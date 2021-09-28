import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApirestService } from 'src/app/services/apirest.service';

@Component({
  selector: 'app-edit-value-global',
  templateUrl: './edit-value-global.component.html',
  styleUrls: ['./edit-value-global.component.css'],
})
export class EditValueGlobalComponent implements OnInit {
  dialogTitle!: string;
  dialogId!: number;
  dialogName!: string;
  dialogValue!: string;

  constructor(
    private _Service: ApirestService,
    private snackBar: MatSnackBar,
    private dialogREf: MatDialogRef<EditValueGlobalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.dialogTitle = this.data.dialogTitle;
    this.dialogId = this.data.dialogId;
    this.dialogName = this.data.dialogName;
    this.dialogValue = this.data.dialogValue;
  }

  onSaveValue(value: string): void {
    this._Service
      .putEditConfiguracionesGlobales(this.dialogId, value)
      .subscribe(
        (data) => {
          this.dialogREf.close();
        },
        (err) => {
          err.status === 404
            ? this.error('The data entered is incorrect')
            : this.error('Error saving entered data');
          this.dialogREf.close();
        }
      );
  }

  error(error: string) {
    this.snackBar.open(error, '', {
      horizontalPosition: 'center',
      duration: 5000,
      verticalPosition: 'bottom',
    });
  }
}
