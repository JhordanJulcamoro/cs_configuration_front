import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApirestService } from 'src/app/services/apirest.service';
import { EditValueGlobalComponent } from '../../shared/edit-value-global/edit-value-global.component';

@Component({
  selector: 'app-configuracion-global',
  templateUrl: './configuracion-global.component.html',
  styleUrls: ['./configuracion-global.component.css'],
})
export class ConfiguracionGlobalComponent implements OnInit {
  collapsed = false;
  listConfiguracionesGlobales: any = [];
  displayedColumns: string[] = [
    'id_equipo',
    'nombre',
    'icon',
    'es_global',
    'es_requerido',
    'valor',
    'acciones',
  ];
  dataSource = new MatTableDataSource<any>(this.listConfiguracionesGlobales);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _Service: ApirestService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getConfiguracionesGlobales();
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getConfiguracionesGlobales() {
    this._Service.getConfiguracionesGLobales().subscribe(
      (data) => {
        this.listConfiguracionesGlobales = data;
        this.dataSource = new MatTableDataSource<any>(
          this.listConfiguracionesGlobales
        );
        this.dataSource.paginator = this.paginator;
      },
      (err) => console.error(err)
    );
  }

  guardarConfiguracionGLobal() {
    this._snackBar.open('La configuración fue guardada exitosamente', '', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }

  openDialog(idDialog: number, nameDialog: string, valueDialog: string): void {
    const dialogRef = this.dialog.open(EditValueGlobalComponent, {
      width: '25%',
      data: {
        dialogTitle: 'Edit Value',
        dialogId: idDialog,
        dialogName: nameDialog,
        dialogValue: valueDialog,
      },
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (!res) {
        this.getConfiguracionesGlobales();
      }
    });
  }
}
