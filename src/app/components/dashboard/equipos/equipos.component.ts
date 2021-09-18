import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {
  valor!:string;

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  openDialog():void{
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '250px',
      data:{dialogTitle: 'Information', dialogText: 'Are you sure return?'}
    });
    dialogRef.afterClosed().subscribe(res => {
      if(res){
        console.log("Boton no aplastado, debería regresar");
      } else{
        console.log("Acción del boton acepted")
      }
    })
      }

}
