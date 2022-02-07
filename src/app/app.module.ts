import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultComponent } from './routes/default/default.component';
import { LoginComponent } from './routes/login/login.component';
import { FormsModule } from '@angular/forms';
import { AuthInterceptorService } from './auth-interceptor.service';
import { ManagerHomeComponent } from './manager-home/manager-home.component';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { NewAccountComponent } from './routes/new-account/new-account.component';
import { TransactionComponent } from './routes/transaction/transaction.component';

@NgModule({
  declarations: [AppComponent, DefaultComponent, LoginComponent, ManagerHomeComponent, CustomerHomeComponent, NewAccountComponent, TransactionComponent],
  imports: [
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
