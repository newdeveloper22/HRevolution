import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  toggleMenu(event: MouseEvent) {
    event.stopPropagation(); // Evita que se propague el evento
    
  }
}
