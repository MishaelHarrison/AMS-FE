import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient, private router: Router) {}

  login(id: string, password: string): Observable<{ jwt: string }> {
    return this.http
      .post<{ jwt: string }>(environment.api + '/login', {
        username: id,
        password: password,
      })
      .pipe(
        tap(
          (res) => {
            localStorage.setItem('token', res.jwt);
          },
          (error) => {
            console.log(JSON.stringify(error));
            localStorage.setItem('token', '');
          }
        )
      );
  }

  getRole(): Observable<'CUSTOMER' | 'MANAGER'> {
    return new Observable((o) => {
      let shortcut = localStorage.getItem('role') as
        | 'CUSTOMER'
        | 'MANAGER'
        | null;
      if (shortcut) {
        o.next(shortcut);
        o.complete();
      } else {
        this.http
          .get<{ role: 'CUSTOMER' | 'MANAGER' }>(environment.api + '/info/role')
          .subscribe((res) => {
            localStorage.setItem('role', res.role);
            o.next(res.role);
            o.complete();
          });
      }
    });
  }
}
