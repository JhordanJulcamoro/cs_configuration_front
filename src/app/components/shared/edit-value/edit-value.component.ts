import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApirestService } from 'src/app/services/apirest.service';

@Component({
  selector: 'app-edit-value',
  templateUrl: './edit-value.component.html',
  styleUrls: ['./edit-value.component.css'],
})
export class EditValueComponent implements OnInit {
  dialogTitle!: string;
  dialogName!: string;
  dialogIdConfig!: number;
  dialogIdEquipo!: number;
  dialogValue!: string;

  constructor(
    private _Service: ApirestService,
    private snackBar: MatSnackBar,
    private dialogREf: MatDialogRef<EditValueComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.dialogTitle = this.data.dialogTitle;
    this.dialogName = this.data.dialogName;
    this.dialogIdConfig = this.data.diaglogIdConfig;
    this.dialogIdEquipo = this.data.diaglogIdEquipo;
    this.dialogValue = this.data.dialogValue;
  }

  onSaveValue(value: string): void {
    console.log('Valores: ', this.dialogIdConfig, value, this.dialogIdEquipo);
    this._Service.putEditConfiguracionEquipo(this.dialogIdConfig, value, this.dialogIdEquipo).subscribe(
      (data) => {
        console.log("Hola soy",data);
        this.dialogREf.close();
      },
      (err) => {
        (err.status === 404)? this.error('The data entered is incorrect'): this.error("Error saving entered data");
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
