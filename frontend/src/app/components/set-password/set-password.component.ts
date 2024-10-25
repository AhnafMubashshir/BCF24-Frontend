import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SetPasswordResponse } from '../../interfaces/set-password.interface';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { SetPasswordService } from '../../services/set-password.service';

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.css']
})
export class SetPasswordComponent {
  password: string = '';  // To store the new password
  email: string = '';  // To store the email retrieved from localStorage
  resetToken: string = '';  // To store the X-reset-token from localStorage

  constructor(private setPasswordService: SetPasswordService, private router: Router) {
    this.email = localStorage.getItem('email') || '';  // Retrieve email from localStorage
    this.resetToken = localStorage.getItem('X_reset_token') || '';  // Retrieve X-reset-token from localStorage
  }

  onSubmit() {
    if (!this.email || !this.resetToken) {
      alert('Email or Reset Token not found in localStorage!');
      return;
    }

    this.setPasswordService.setPassword(this.email, this.password, this.resetToken).subscribe(
      (response: HttpResponse<SetPasswordResponse>) => {
        if (response.status === 200 && response.body?.success) {
          // Redirect to success page
          this.router.navigate(['/password-success']);  // Replace with your desired route
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
