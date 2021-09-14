import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu } from '../interfaces/menu';

@Injectable({
  providedIn: 'root'
})
export class ApirestService {
  private API_SERVICE = "http://localhost:4500/api";

  constructor(private http: HttpClient) { }

  getMenu(): Observable<Menu[]> {
    return this.http.get<Menu[]>('./assets/data/menu.json');
  }

  getAllEquipos():Observable<any>{
    return this.http.get<any>(`${this.API_SERVICE}/all_equipos`);
  } 

  getConfigurarEquipo(id_equipo:number):Observable<any>{
    return this.http.get<any>(`${this.API_SERVICE}/configurar_equipo/${id_equipo}`);
  } 
}
