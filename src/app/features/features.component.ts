import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule], // Import CommonModule for *ngFor and other directives
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css'] // Corrected property name
})
export class FeaturesComponent {
  features = [
    {
      icon: '💸',
      title: 'Money Back Guarantee',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis placerat arcu nibh sed.'
    },
    {
      icon: '📄',
      title: 'All Claims At Anytime',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis placerat arcu nibh sed.'
    },
    {
      icon: '🤝',
      title: 'Digital Insurance Policy',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis placerat arcu nibh sed.'
    },
    {
      icon: '💳',
      title: 'Direct Payment App',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis placerat arcu nibh sed.'
    }
  ];
}
