import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/HttpServices/customer.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css'],
})
export class TransactionComponent implements OnInit {
  mode?: 'deposit' | 'withdrawal' | 'transfer';

  target?: number;
  amount?: number;

  constructor(
    private service: CustomerService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {}

  send() {
    let id: number = Number.parseInt(this.route.snapshot.params['id'] || '');
    if (id) {
      this.service
        .sendTransaction(this.mode!, this.amount!, id, this.target)
        .subscribe(() => this.router.navigate(['/']));
    } else {
      alert(`error when diserning account id ${id}`);
      this.router.navigate(['/']);
    }
  }
}
