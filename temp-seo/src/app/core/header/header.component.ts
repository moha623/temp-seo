import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {


 

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


}