import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  activeIndex = 0;

  images = [
    {
      src: 'https://images.unsplash.com/photo-1517732747537-877644b96f8b?q=80&w=1167&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'غرفة معيشة عصرية'
    },
 
    {
      src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      alt: 'منزل عصري من الخارج'
    },
    {
      src: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      alt: 'غرفة طعام أنيقة'
    },
    {
      src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      alt: 'مطبخ عصري'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  showNext(): void {
    this.activeIndex = (this.activeIndex + 1) % this.images.length;
  }

  showPrev(): void {
    this.activeIndex = (this.activeIndex - 1 + this.images.length) % this.images.length;
  }

  isActive(index: number): boolean {
    return this.activeIndex === index;
  }
}
