import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApirestService } from 'src/app/services/apirest.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  Model: any;
  Result: any;
  listEquipos: any = [];
  displayedColumns: string[] = [
    'n',
    'id',
    'flotaPrincipal',
    'flotaSecundaria',
    'equipo',
    'configuracion',
  ];
  dataSource = new MatTableDataSource<any>(this.listEquipos);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _Service: ApirestService) {}

  // ngAfterViewInit() {
  //   setTimeout(() => (this.dataSource.paginator = this.paginator));
  //   // this.dataSource.sort = this.sort;
  // }

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
        this.dataSource.sort = this.sort;
      },
      (err) => console.error(err)
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  configurarEquipo(index: number) {
    console.log(index);

    this._Service.getConfigurarEquipo(index).subscribe(
      (data) => {
        console.log(data);
      },
      (err) => console.error(err)
    );
  }
}