import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  userId: string | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.checkToken();
  }

  checkToken(): void {
    const token = localStorage.getItem('token');

    if (token) {
      this.authService.verifyToken(token).subscribe(
        (response) => {
          this.userId = response.user_id; // Set user_id if verification is successful
        },
        (error) => {
          console.error('Token verification failed:', error);
          this.userId = null; // Clear userId if verification fails
        }
      );
    }
  }

  logout(): void {
    // Logic for logging out the user (e.g., removing token from local storage)
    localStorage.removeItem('token');
    this.userId = null; // Clear userId on logout
  }
}
