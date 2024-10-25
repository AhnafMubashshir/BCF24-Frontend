import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrainService } from '../../services/train.service';
import { Train } from '../../interfaces/train.interface';

@Component({
  selector: 'app-train-detail',
  templateUrl: './train-detail.component.html',
  styleUrls: ['./train-detail.component.css'],
})
export class TrainDetailComponent implements OnInit {
  train: Train | null = null; // Train object initialized as null

  constructor(private route: ActivatedRoute, private trainService: TrainService) {}

  ngOnInit(): void {
    const trainId = this.route.snapshot.paramMap.get('id');
    if (trainId) {
      this.fetchTrainDetails(Number(trainId));
    }
  }

  fetchTrainDetails(id: number): void {
    this.trainService.getTrainById(id).subscribe(
      (data: Train) => {
        this.train = data;
      },
      (error) => {
        console.error('Error fetching train details:', error);
      }
    );
  }
}
