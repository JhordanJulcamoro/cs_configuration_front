import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu } from '../interfaces/menu';
import { Usuario } from '../interfaces/user';


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

  getConfiguracionesGLobales():Observable<any>{
    return this.http.get<any>(`${this.API_SERVICE}/all_configuracion_global`);
  }

  getConfigurarEquipo(id_equipo:number):Observable<any>{
    return this.http.get<any>(`${this.API_SERVICE}/configurar_equipo/${id_equipo}`);
  } 

  putEditConfiguracionesGlobales(id_configuracion:number, value:string):Observable<any>{
    return this.http.put<any>(`${this.API_SERVICE}/equipos_configuracion_global/${id_configuracion}`,{valorDefecto:value});
  }
  signIn(user:Usuario):Observable<Usuario> {
    return this.http.post<Usuario>(`${this.API_SERVICE}/login/`,user);
  }

}
