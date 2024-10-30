import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience-members',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience-members.component.html',
  styleUrl: './experience-members.component.css'
})
export class ExperienceMembersComponent {
  members = [
    {
      name: 'Mesiva Sccot',
      position: 'Marketing Ex.',
      imageUrl: 'assets/mesiva_sccot.png',
      socialIcons: [
        { link: '#', image: 'assets/facebook.png', alt: 'Facebook' },
        { link: '#', image: 'assets/twitter.png', alt: 'Twitter' },
        { link: '#', image: 'assets/instagram.png', alt: 'Instagram' },
        { link: '#', image: 'assets/linkedin.png', alt: 'LinkedIn' }
      ]
    },
    {
      name: 'Jason Thomson',
      position: 'Marketing Ex.',
      imageUrl: 'assets/jason_thompson.png',
      socialIcons: [
        { link: '#', image: 'assets/facebook.png', alt: 'Facebook' },
        { link: '#', image: 'assets/twitter.png', alt: 'Twitter' },
        { link: '#', image: 'assets/instagram.png', alt: 'Instagram' },
        { link: '#', image: 'assets/linkedin.png', alt: 'LinkedIn' }
      ]
    },
    {
      name: 'Kohn Wright',
      position: 'Marketing Ex.',
      imageUrl: 'assets/kohn_wright.png',
      socialIcons: [
        { link: '#', image: 'assets/facebook.png', alt: 'Facebook' },
        { link: '#', image: 'assets/twitter.png', alt: 'Twitter' },
        { link: '#', image: 'assets/instagram.png', alt: 'Instagram' },
        { link: '#', image: 'assets/linkedin.png', alt: 'LinkedIn' }
      ]
    },
    {
      name: 'Andrew Schimke',
      position: 'Marketing Ex.',
      imageUrl: 'assets/andrew.png',
      socialIcons: [
        { link: '#', image: 'assets/facebook.png', alt: 'Facebook' },
        { link: '#', image: 'assets/twitter.png', alt: 'Twitter' },
        { link: '#', image: 'assets/instagram.png', alt: 'Instagram' },
        { link: '#', image: 'assets/linkedin.png', alt: 'LinkedIn' }
      ]
    }
  ];
}
