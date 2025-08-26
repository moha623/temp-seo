import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isNavOpen = false; // track nav toggle state

  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
  }

  
  openWhatsApp() {
    const phone = '21620678780'; // Tunisia number without plus
    const message = 'مرحباً! أريد الاستفسار.';
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }


}