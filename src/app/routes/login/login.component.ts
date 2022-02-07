import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/HttpServices/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  id?: string;
  password?: string;

  constructor(
    private snackBar: MatSnackBar,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  login() {
    if (!this.id) {
      this.mesage('User Id is required');
    }
    if (!this.password) {
      this.mesage('Password is required');
    }
    if (!(this.id && this.password)) {
      return;
    }
    if (!this.id.match(/^\d+$/)) {
      this.mesage('User Id must be a number');
      return;
    }
    this.loginService.login(this.id, this.password).subscribe(
      (res) => {
        this.router.navigate(['/']);
      },
      () => {
        this.mesage('cannot find Username/Password');
      }
    );
  }

  private mesage(message: string): void {
    this.snackBar.open(message, 'Dismiss', {
      duration: 5 * 1000,
    });
  }
}
