import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ApirestService } from 'src/app/services/apirest.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  listEquipos: any = [];
  displayedColumns: string[] = [
    'id',
    'flotaPrincipal',
    'flotaSecundaria',
    'equipo',
    'configuracion',
  ];
  dataSource = new MatTableDataSource<any>(this.listEquipos);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _Service: ApirestService, private _router: Router) {}

  ngOnInit(): void {
    this.getEquipos();
    this.dataSource.sort = this.sort;
  }

  getEquipos() {
    this._Service.getAllEquipos().subscribe(
      (data) => {
        this.listEquipos = data;
        this.dataSource = new MatTableDataSource<any>(this.listEquipos);
        this.dataSource.paginator = this.paginator;
      },
      (err) => console.error(err)
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  listConfigurarEquipo(id_equipo: number) {
    this._router.navigate([`/dashboard/configuracion_equipo`, id_equipo]);
  }
}
