// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { OtpVerificationComponent } from './components/otp-verification/otp-verification.component';
import { PasswordSetupComponent } from './components/password-setup/password-setup.component';
import { TokenVerificationComponent } from './components/token-verification/token-verification.component';

@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationComponent,
    OtpVerificationComponent,
    PasswordSetupComponent,
    TokenVerificationComponent
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
