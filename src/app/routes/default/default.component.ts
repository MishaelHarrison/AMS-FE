import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/HttpServices/login.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css'],
})
export class DefaultComponent implements OnInit {
  role: Observable<'CUSTOMER' | 'MANAGER'>;

  constructor(private service: LoginService) {
    this.role = service.getRole();
  }

  ngOnInit(): void {}
}
