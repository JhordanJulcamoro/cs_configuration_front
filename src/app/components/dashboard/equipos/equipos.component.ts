import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { ApirestService } from 'src/app/services/apirest.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { EditValueComponent } from '../../shared/edit-value/edit-value.component';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css'],
})
export class EquiposComponent implements OnInit {
  valor!: string;
  id_equipo!: number;
  listConfigEquipment: any = [];
  displayedColumns: string[] = [
    'id',
    'nombre',
    'icon',
    'esglobal',
    'esrequerido',
    'valor',
    'configuracion',
  ];
  dataSource = new MatTableDataSource<any>(this.listConfigEquipment);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    public dialog: MatDialog,
    private _activateRoute: ActivatedRoute,
    private _Service: ApirestService
  ) {}

  ngOnInit(): void {
    this._activateRoute.params.subscribe((params) => {
      this.id_equipo = +params['id'];
    });
    this.getConfiguracionesEquipo();
    this.dataSource.sort = this.sort;
  }

  getConfiguracionesEquipo() {
    this._Service.getConfigurarEquipo(this.id_equipo).subscribe(
      (data) => {
        this.listConfigEquipment = data;
        this.dataSource = new MatTableDataSource<any>(this.listConfigEquipment);
        this.dataSource.paginator = this.paginator;
      },
      (err) => console.error(err)
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  configurarEquipo(id_config: number, name_config: string, value: string) {
    const dialogRef = this.dialog.open(EditValueComponent, {
      width: '25%',
      data: {
        dialogTitle: 'Edit Value',
        diaglogIdConfig: id_config,
        dialogName: name_config,
        diaglogIdEquipo: this.id_equipo,
        dialogValue: value,
      },
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (!res) {
        this.getConfiguracionesEquipo();
      }
    });
  }
}
