import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-company-features',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './company-features.component.html',
  styleUrls: ['./company-features.component.css']
})
export class CompanyFeaturesComponent {
  features = [
    { title: 'Protective Protection' },
    { title: 'Money Back Guarantee' },
    { title: 'Homeowner Insurance' },
    { title: 'Partnership System' },
    { title: 'Consultations' },
    { title: 'Safety Ensure' }
  ];
}
