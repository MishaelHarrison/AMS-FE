import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedInUserService } from './routerServices/logged-in-user.service';
import { DefaultComponent } from './routes/default/default.component';
import { LoginComponent } from './routes/login/login.component';
import { NewAccountComponent } from './routes/new-account/new-account.component';
import { TransactionComponent } from './routes/transaction/transaction.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    canActivate: [LoggedInUserService],
  },
  {
    path: 'newAccount',
    component: NewAccountComponent,
    canActivate: [LoggedInUserService],
  },
  {
    path: 'transaction',
    component: TransactionComponent,
    canActivate: [LoggedInUserService],
  },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [LoggedInUserService],
})
export class AppRoutingModule {}
