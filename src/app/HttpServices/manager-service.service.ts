import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customer } from '../models/Customer';
import { newCustomer } from '../models/newUser';

@Injectable({
  providedIn: 'root',
})
export class ManagerServiceService {
  constructor(private http: HttpClient) {}

  findPAN(pan: number): Observable<Customer | 'not found'> {
    return new Observable<Customer | 'not found'>((o) => {
      this.http
        .get<Customer>(environment.api + `/manager/getPAN/${pan}`, {
          observe: 'response',
        })
        .subscribe(
          (res) => {
            o.next(res.body!);
            o.complete();
          },
          (error: { status: number }) => {
            if (error.status == 404) o.next('not found');
            o.complete();
          }
        );
    });
  }

  createCustomer(customer: newCustomer): Observable<number> {
    console.log(JSON.stringify(customer));
    return this.http.post<number>(
      environment.api + '/manager/newUser',
      customer
    );
  }
}
