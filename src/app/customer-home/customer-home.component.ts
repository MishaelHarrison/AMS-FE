import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../HttpServices/customer.service';
import { CustomerExtendedInfo } from '../models/CustomerExtendedInfo';

@Component({
  selector: 'app-customer-home',
  templateUrl: './customer-home.component.html',
  styleUrls: ['./customer-home.component.css'],
})
export class CustomerHomeComponent implements OnInit {
  info?: CustomerExtendedInfo;
  abs = Math.abs;

  constructor(private service: CustomerService, private router: Router) {}

  ngOnInit(): void {
    this.service.getInfo().subscribe((x) => (this.info = x));
  }

  newAccount() {
    this.router.navigate(['/newAccount']);
  }

  makeTransaction(id: number) {
    this.router.navigate(['/transaction', { id: id }]);
  }
}
