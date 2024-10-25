import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VerifyOtpService } from '../../services/verify-otp.service';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { VerifyOtpResponse } from '../../interfaces/verify-otp-response.interface';

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.css']
})
export class VerifyOtpComponent {
  otp: string = '';  // To store the user-entered OTP
  email: string = '';  // To store the email retrieved from localStorage

  constructor(private verifyOtpService: VerifyOtpService, private router: Router) {
    this.email = localStorage.getItem('email') || ''; // Retrieve email from localStorage
  }

  onSubmit() {
    if (!this.email) {
      alert('Email not found in localStorage!');
      return;
    }

    this.verifyOtpService.verifyOtp(this.email, this.otp).subscribe(
      (response: HttpResponse<VerifyOtpResponse>) => {
        if (response.status === 200 && response.body?.success) {
          // Check if reset_token is present and store it in localStorage
          if (response.body?.reset_token) {
            localStorage.setItem('X_reset_token', response.body.reset_token);
          }
          // Redirect to next page on successful verification
          this.router.navigate(['/next-page']);  // Replace '/next-page' with your desired route
        } else {
          alert(`Error: Status Code ${response.status}. Message: ${response.body?.message}`);
        }
      },
      (error: HttpErrorResponse) => {
        // Handle error case
        alert(`Error: ${error.status} - ${error.message}`);
      }
    );
  }
}
