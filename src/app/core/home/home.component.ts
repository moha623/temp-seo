import { Component, HostListener } from '@angular/core';

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
whatsappButtonBgGradient: any;
Math: any;
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

  menuOpen = false;
  newsDropdownOpen = false;
  galleryDropdownOpen = false;

  // Toggle mobile menu open/close
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  // Toggle dropdowns in menu
  toggleDropdown(dropdown: 'news' | 'gallery') {
    if (dropdown === 'news') {
      this.newsDropdownOpen = !this.newsDropdownOpen;
    } else if (dropdown === 'gallery') {
      this.galleryDropdownOpen = !this.galleryDropdownOpen;
    }
  }
 
  openWhatsApp() {
    const phone = '21620678780'; // Tunisia number without plus
    const message = 'مرحباً! أريد الاستفسار.';
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }
 menuItems = [
    { label: 'Home', active: true },
    { label: 'About', active: false },
    { label: 'Start A Project', active: false },
    { label: 'Contact', active: false },
  ];

  setActive(selected: any) {
    this.menuItems.forEach(item => (item.active = false));
    selected.active = true;
  }
  
  
}
