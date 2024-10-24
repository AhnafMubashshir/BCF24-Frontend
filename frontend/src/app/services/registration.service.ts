import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserRegistration, RegistrationResponse } from '../interfaces/user-registration.interface';
import { OTPVerification, OTPVerificationResponse } from '../interfaces/otp-verification.interface';
import { PasswordSetup, PasswordSetupResponse } from '../interfaces/password-setup.interface';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private baseUrl = 'http://localhost:8000/v1/registration/';

  constructor(private http: HttpClient) {}

  registerUser(data: UserRegistration): Observable<RegistrationResponse> {
    return this.http.post<RegistrationResponse>(`${this.baseUrl}register/`, data);
  }

  verifyOTP(data: OTPVerification): Observable<OTPVerificationResponse> {
    return this.http.post<OTPVerificationResponse>(`${this.baseUrl}verify-otp/`, data);
  }

  setPassword(data: PasswordSetup, resetToken: string): Observable<PasswordSetupResponse> {
    const headers = new HttpHeaders().set('X-Reset-Token', resetToken);
    return this.http.post<PasswordSetupResponse>(`${this.baseUrl}set-password/`, data, { headers });
  }
}
