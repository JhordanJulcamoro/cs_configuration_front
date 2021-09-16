import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from 'src/app/interfaces/menu';
import { ApirestService } from 'src/app/services/apirest.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  menu: Menu[] = [];

  constructor(private _apiService: ApirestService, private router: Router) {}

  ngOnInit(): void {
    this.cargaMenu();
  }

  cargaMenu() {
    this._apiService.getMenu().subscribe(
      (data) => {
        this.menu = data;
      },
      (err) => console.error(err)
    );
  }

  logout(){
    //  // routerLink="/logout"
    localStorage.removeItem('usuario');
    
    this.router.navigate(['/logout']);
    console.log(localStorage.getItem('usuario'));
  }
}
