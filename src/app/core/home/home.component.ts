import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  currentIndex = 0;
  activeIndex = 0;
  images = [
    {
      src: 'https://plus.unsplash.com/premium_photo-1661842822606-6f361ff0a4e8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODV8fHN0YWlubGVzc3xlbnwwfHwwfHx8MA%3D%3D',
      alt: 'غرفة طعام أنيقة',
    },
    {
      src: 'https://images.unsplash.com/photo-1710020125176-d3a105b6c5b2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTF8fHN0YWlubGVzc3xlbnwwfHwwfHx8MA%3D%3D',
      alt: 'مطبخ عصري',
    },
  ];
  isActive(index: number): boolean {
    return this.currentIndex === index;
  }

  showPrev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  showNext() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }
}
