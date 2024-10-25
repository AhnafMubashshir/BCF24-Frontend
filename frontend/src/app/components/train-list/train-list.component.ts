import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrainService } from '../../services/train.service';
import { Train } from '../../interfaces/train.interface';
@Component({
  selector: 'app-train-list',
  templateUrl: './train-list.component.html',
  styleUrls: ['./train-list.component.css'],
})
export class TrainListComponent implements OnInit {
  trains: Train[] = [];

  constructor(private trainService: TrainService, private router: Router) {}

  ngOnInit(): void {
    this.fetchTrains();
  }

  fetchTrains(): void {
    this.trainService.getTrains().subscribe(
      (data: Train[]) => {
        this.trains = data;
      },
      (error) => {
        console.error('Error fetching train data:', error);
      }
    );
  }

  navigateToTrainDetails(id: number): void {
    this.router.navigate(['/train', id]); // Redirects to /train/id
  }
}
