import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthResponse } from '../interfaces/auth-response.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:8000/v1/registration/'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  authenticate(username: string, password: string): Observable<HttpResponse<AuthResponse>> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { username, password };
    return this.http.post<AuthResponse>(`${this.baseUrl}api/token/`, body, { headers, observe: 'response' });
  }

  verifyToken(token: string): Observable<{ user_id: string }> {
    return this.http.post<{ user_id: string }>(`${this.baseUrl}verify/`, { token });
  }
}
