import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegisterResponse } from '../interfaces/register-response.interface';
import { HttpResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private baseUrl = 'http://localhost:8000/v1/registration/'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  register(email: string, username: string): Observable<HttpResponse<RegisterResponse>> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { email, username };
    return this.http.post<RegisterResponse>(`${this.baseUrl}register/`, body, { headers, observe: 'response' });
  }
}
