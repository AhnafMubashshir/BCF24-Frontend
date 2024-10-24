import { Component } from '@angular/core';
import { RegistrationService } from '../../services/registration.service';
import { PasswordSetup } from '../../interfaces/password-setup.interface';

@Component({
  selector: 'app-password-setup',
  templateUrl: './password-setup.component.html'
})
export class PasswordSetupComponent {
  email = '';
  password = '';
  resetToken = '';
  responseMessage = '';

  constructor(private registrationService: RegistrationService) {}

  setPassword(): void {
    const passwordData: PasswordSetup = { email: this.email, password: this.password };
    this.registrationService.setPassword(passwordData, this.resetToken).subscribe(
      (response) => {
        this.responseMessage = response.detail;
      },
      (error) => {
        this.responseMessage = error.error.detail;
      }
    );
  }
}
