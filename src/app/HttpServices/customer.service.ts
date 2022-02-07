import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CustomerExtendedInfo } from '../models/CustomerExtendedInfo';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private http: HttpClient, private router: Router) {}

  getInfo(): Observable<CustomerExtendedInfo> {
    return this.http.get<CustomerExtendedInfo>(
      environment.api + '/info/self/extended'
    );
  }

  createAccount(balance: number): Observable<{ id: number; balance: number }> {
    return this.http.post<{ id: number; balance: number }>(
      environment.api + '/data/newAccount',
      { amount: balance }
    );
  }

  sendTransaction(
    type: 'deposit' | 'withdrawal' | 'transfer',
    amount: number,
    id: number,
    target?: number
  ): Observable<void> {
    return this.http.post<void>(
      `${environment.api}/transaction/${type}/${
        id + (type == 'transfer' ? `/${target}` : '')
      }`,
      { amount: amount }
    );
  }
}
