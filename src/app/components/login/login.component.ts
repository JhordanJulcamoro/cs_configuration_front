import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading=false;
  form: FormGroup;
  logo = 'https://www.ms4m.com/page/html/wp-content/uploads/2019/07/cropped-Web_MS4M_logo_navbar.png';

  constructor(private router: Router, private fb: FormBuilder, private snackBar: MatSnackBar) {
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required]
    })
   }


  ngOnInit(): void {
  }

  ingresar() {
    const usuario = this.form.value.usuario;
    const password = this.form.value.password;

    if(usuario == 'admin' && password == 'admin'){
      this.fakeLoading();
    } else{
      this.error();
      this.form.reset();
    }

  }

  error(){
    this.snackBar.open('Usuario o password ingresados son invalidos!', '', {
      horizontalPosition: 'center',
      duration: 5000,
      verticalPosition: 'bottom'
    })
  }

  fakeLoading(){
    this.loading = true;
    setTimeout(() => {
      this.router.navigateByUrl('/dashboard');
      this.loading = false;
    }, 1500)
  }

}
