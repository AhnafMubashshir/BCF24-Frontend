import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Train } from '../interfaces/train.interface';

@Injectable({
  providedIn: 'root',
})
export class TrainService {
  private baseUrl = 'http://localhost:8001/v1/ticket/'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  getTrains(): Observable<Train[]> {
    return this.http.get<Train[]>(`${this.baseUrl}trains/`);
  }

  getTrainById(id: number): Observable<Train> {
    console.log(`${this.baseUrl}trains/${id}`);
    return this.http.get<Train>(`${this.baseUrl}trains/${id}`);
  }
}
