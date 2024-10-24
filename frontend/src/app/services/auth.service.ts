import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8000/v1/registrationapi/';

  constructor(private http: HttpClient) {}

  verifyToken(token: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}verify/`, { token });
  }
}
