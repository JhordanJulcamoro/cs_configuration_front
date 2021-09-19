import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Menu } from 'src/app/interfaces/menu';
import { ApirestService } from 'src/app/services/apirest.service'
import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  menu: Menu[] = [];

  constructor(private _apiService: ApirestService, 
    public dialog:MatDialog,private router: Router) {}

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
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '25%',
      data: {
        dialogTitle:"Log out" ,
        dialogText:"Are you sure you want to log out?",
      }
    });
    dialogRef.afterClosed().subscribe(res => {
      if(!res){
        localStorage.removeItem('usuario');
        this.router.navigate(['/logout']);
      } 
    })


    
  }
}
