import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent {
  reviews = [
    {
      name: 'Manika Selven',
      position: 'Marketing Ex.',
      imageUrl: 'assets/manika.png',
      rating: 5,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis placerat arcu nibh sed.Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Jhun Selven',
      position: 'Marketing Ex.',
      imageUrl: 'assets/jhun.png',
      rating: 5,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis placerat arcu nibh sed.Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
  ];

  averageRating = 4.6;
  totalReviews = 1200;
}
