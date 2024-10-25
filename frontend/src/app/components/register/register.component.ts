import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../../services/register.service';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { RegisterResponse } from '../../interfaces/register-response.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email: string = '';
  username: string = '';

  constructor(private registerService: RegisterService, private router: Router) {}

  onSubmit() {
    this.registerService.register(this.email, this.username).subscribe(
      (response: HttpResponse<RegisterResponse>) => {
        // Handle the full response here
        if (response.status === 201 && response.body) {
          localStorage.setItem('email',this.email);
          this.router.navigate(['/verify-otp']); // Redirect to success page on 201
        } else {
          alert(`Error: Status Code ${response.status}`);
        }
      },
      (error: HttpErrorResponse) => {
        // Handle the error here
        alert(`Error: ${error.status} - ${error.message}`);
      }
    );
  }
}
