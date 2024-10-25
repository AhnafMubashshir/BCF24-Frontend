import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VerifyOtpResponse } from '../interfaces/verify-otp-response.interface';

@Injectable({
  providedIn: 'root',
})
export class VerifyOtpService {
  private baseUrl = 'https://api.projectsbd.me/v1/registration/';// Replace with your actual API URL

  constructor(private http: HttpClient) {}

  verifyOtp(email: string, otp: string): Observable<HttpResponse<VerifyOtpResponse>> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { email, otp };
    return this.http.post<VerifyOtpResponse>(`${this.baseUrl}verify-otp/`, body, { headers, observe: 'response' });
  }
}
