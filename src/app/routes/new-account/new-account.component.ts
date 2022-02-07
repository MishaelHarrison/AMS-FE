import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../../HttpServices/customer.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
})
export class NewAccountComponent implements OnInit {
  money: number = 0;
  constructor(private service: CustomerService, private router: Router) {}

  ngOnInit(): void {}

  create() {
    if (this.money > 0) {
      this.service.createAccount(this.money).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }
}
