import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SetPasswordResponse } from '../interfaces/set-password.interface';
@Injectable({
  providedIn: 'root',
})
export class SetPasswordService {
  private baseUrl = 'http://localhost:8000/v1/registration/';// Replace with your actual API URL

  constructor(private http: HttpClient) {}

  setPassword(email: string, password: string, resetToken: string): Observable<HttpResponse<SetPasswordResponse>> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-reset-token': resetToken,
    });

    const body = { email, password };

    return this.http.post<SetPasswordResponse>(`${this.baseUrl}register/`, body, { headers, observe: 'response' });
  }
}
