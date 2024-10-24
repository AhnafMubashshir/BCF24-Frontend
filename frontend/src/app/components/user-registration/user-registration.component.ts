import { Component } from '@angular/core';
import { RegistrationService } from '../../services/registration.service';
import { UserRegistration } from '../../interfaces/user-registration.interface';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.css'
})
export class UserRegistrationComponent {
  username:string = '';
  email = '';
  responseMessage = '';

  constructor(private registrationService: RegistrationService,private router:Router) {}

  registerUser(): void {
    const userData: UserRegistration = { username: this.username, email: this.email };
    this.registrationService.registerUser(userData).subscribe(
      (response) => {
        this.responseMessage = response.detail;
        this.router.navigate(['/verify-otp']);
      },
      (error) => {
        this.responseMessage = error.error.detail;
      }
    );
  }
}
