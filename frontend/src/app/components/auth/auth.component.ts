import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { AuthResponse } from '../../interfaces/auth-response.interface';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.authenticate(this.username, this.password).subscribe(
      (response: HttpResponse<AuthResponse>) => {
        if (response.status === 200) {
          // Store the access token in localStorage
          localStorage.setItem('token', response.body?.access || '');

          // Redirect to the home page or another route
          this.router.navigate(['/home']);  // Replace '/home' with your desired route
        } else {
          alert(`Error: Status Code ${response.status}`);
        }
      },
      (error: HttpErrorResponse) => {
        // Handle error case
        alert(`Error: ${error.status} - ${error.message}`);
      }
    );
  }
}
