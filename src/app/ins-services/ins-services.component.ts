// // insurance-services.component.ts
// import { Component, OnInit } from '@angular/core';

interface InsuranceService {
  type: string;
  category: string;
  title: string;
  image: string;
}

// @Component({
//   selector: 'app-ins-services',
//   standalone: true,
//   imports: [],
//   templateUrl: './ins-services.component.html',
//   styleUrl: './ins-services.component.css'
// })



import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ins-services',
  standalone: true, // Ensures this component is standalone
  templateUrl: './ins-services.component.html',
  styleUrls: ['./ins-services.component.css'],
  imports: [CommonModule] // Import CommonModule here
})
export class InsServicesComponent {
  currentIndex = 0;
  services: InsuranceService[] = [
    {
      type: 'INSURANCE',
      category: 'VEHICLE',
      title: 'Business Insurance',
      image: 'assets/business_insurance.png'
    },
    {
      type: 'INSURANCE',
      category: 'VEHICLE',
      title: 'Vehicle Insurance',
      image: 'assets/vehicle_insurance.png'
    },
    {
      type: 'INSURANCE',
      category: 'CAR',
      title: 'Car Insurance',
      image: 'assets/car_insurance.png'
    }
  ];

  prev(): void {
    this.currentIndex = this.currentIndex === 0 ? this.services.length - 1 : this.currentIndex - 1;
  }

  next(): void {
    this.currentIndex = this.currentIndex === this.services.length - 1 ? 0 : this.currentIndex + 1;
  }
}