import { Component } from '@angular/core';
import { RegistrationService } from '../../services/registration.service';
import { OTPVerification } from '../../interfaces/otp-verification.interface';
import { Router } from '@angular/router';
@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.component.html'
})
export class OtpVerificationComponent {
  email = '';
  otp = '';
  responseMessage = '';
  resetToken = '';

  constructor(private registrationService: RegistrationService,private router:Router) {}

  verifyOTP(): void {
    const otpData: OTPVerification = { email: this.email, otp: this.otp };
    this.registrationService.verifyOTP(otpData).subscribe(
      (response) => {
        this.responseMessage = response.detail;
        this.resetToken = response.reset_token || '';
        localStorage.setItem('token',this.resetToken)
        this.router.navigate(['/set-password']);
      },
      (error) => {
        this.responseMessage = error.error.detail;
      }
    );
  }
}
