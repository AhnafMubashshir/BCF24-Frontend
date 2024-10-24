// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { OtpVerificationComponent } from './components/otp-verification/otp-verification.component';
import { PasswordSetupComponent } from './components/password-setup/password-setup.component';
import { TokenVerificationComponent } from './components/token-verification/token-verification.component';

const routes: Routes = [
  { path: 'register', component: UserRegistrationComponent },
  { path: 'verify-otp', component: OtpVerificationComponent },
  { path: 'set-password', component: PasswordSetupComponent },
  { path: 'verify-token', component: TokenVerificationComponent },
  { path: '**', redirectTo: 'register' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
