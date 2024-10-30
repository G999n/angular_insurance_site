import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  posts = [
    {
      imageUrl: 'assets/post1.png',
      date: '14 AUG 2021',
      category: 'Insurance',
      title: 'What Is Personal Liability Umbrella Coverage',
      author: 'Admin',
    },
    {
      imageUrl: 'assets/post2.png',
      date: '14 AUG 2021',
      category: 'Insurance',
      title: 'Insurance Covers Risk Of Fire Absence Of Fire Insurance',
      author: 'Admin',
    },
    {
      imageUrl: 'assets/post3.png',
      date: '14 AUG 2021',
      category: 'Insurance',
      title: 'Ambulance Cover Of Fire On Insurance Serving',
      author: 'Admin',
    }
  ];
}
