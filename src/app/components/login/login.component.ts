import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApirestService } from 'src/app/services/apirest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loading = false;
  form: FormGroup;
  logo =
    'https://www.ms4m.com/page/html/wp-content/uploads/2019/07/cropped-Web_MS4M_logo_navbar.png';

  constructor(
    private _Service: ApirestService,
    private router: Router,
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) {
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  login() {
    const usuario = this.form.value.usuario;
    const password = this.form.value.password;

    const user = { usuario: usuario, password: password };
    this._Service.signIn(user).subscribe(
      (data) => {
        this.fakeLoading();
      },
      (err) => {
        if (err.status == 404) {
          this.error('The data entered is incorrect!');
          this.form.reset();
        } else if (err.status == 401) {
          this.error('The password entered is incorrect!');
          this.form.reset();
        }
      }
    );
  }

  error(error: string) {
    this.snackBar.open(error, '', {
      horizontalPosition: 'center',
      duration: 5000,
      verticalPosition: 'bottom',
    });
  }

  fakeLoading() {
    this.loading = true;
    setTimeout(() => {
      this.router.navigateByUrl('/dashboard');
      this.loading = false;
    }, 1500);
  }
}
