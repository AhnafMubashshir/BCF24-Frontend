// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RegisterComponent } from './components/register/register.component';
import { VerifyOtpComponent } from './components/verify-otp/verify-otp.component';
import { SetPasswordComponent } from './components/set-password/set-password.component';
import { AuthComponent } from './components/auth/auth.component';
import { TrainListComponent } from './components/train-list/train-list.component';
import { TrainDetailComponent } from './components/train-detail/train-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    VerifyOtpComponent,
    SetPasswordComponent,
    AuthComponent,
    TrainListComponent,
    TrainDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
