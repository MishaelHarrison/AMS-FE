import { Component, OnInit } from '@angular/core';
import { ManagerServiceService } from '../HttpServices/manager-service.service';
import { Customer } from '../models/Customer';
import { newCustomer } from '../models/newUser';

@Component({
  selector: 'app-manager-home',
  templateUrl: './manager-home.component.html',
  styleUrls: ['./manager-home.component.css'],
})
export class ManagerHomeComponent implements OnInit {
  mode: 'requestPAN' | 'foundCustomer' | 'createUser' | 'created' =
    'requestPAN';

  customer: Partial<newCustomer> = {};

  foundCustomer?: Customer;

  date?: string;

  customerId?: number;

  constructor(private service: ManagerServiceService) {}

  ngOnInit(): void {}

  findUser() {
    this.service.findPAN(this.customer.pan!).subscribe((res) => {
      if (res != 'not found') {
        this.foundCustomer = res;
        this.mode = 'foundCustomer';
      } else {
        this.mode = 'createUser';
      }
    });
  }

  submit() {
    if (
      this.foundCustomer &&
      Object.values(this.foundCustomer).reduce(
        (prev, current) => prev && (current || current instanceof Date),
        true
      )
    )
      this.foundCustomer.dob = new Date(this.date!);
    this.service
      .createCustomer({
        ...(this.customer as newCustomer),
        dob: new Date(this.date!),
      })
      .subscribe((res) => {
        this.mode = 'created';
        this.customerId = res;
      });
  }
}
