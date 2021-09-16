import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApirestService } from 'src/app/services/apirest.service';

@Component({
  selector: 'app-configuracion-global',
  templateUrl: './configuracion-global.component.html',
  styleUrls: ['./configuracion-global.component.css'],
})
export class ConfiguracionGlobalComponent implements OnInit {
  listConfiguracionesGlobales: any = [];
  displayedColumns: string[] = [
    // 'n',
    'id_equipo',
    'nombre',
    'icon',
    'es_global',
    'es_requerido',
    'valor',
  ];
  dataSource = new MatTableDataSource<any>(this.listConfiguracionesGlobales);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _Service: ApirestService) {}

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
}
