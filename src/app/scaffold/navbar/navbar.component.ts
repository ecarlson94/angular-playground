import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  menuItems = [
    // {
    //   label: 'Home',
    //   routerLink: "/welcome",
    //   icon: "/assets/images/atla_elementsLogo.png"
    // },
    {
      label: 'Air',
      routerLink: '/elements/air',
    },
    {
      label: 'Water',
      routerLink: '/elements/water',
    },
    {
      label: 'Earth',
      routerLink: '/elements/earth',
    },
    {
      label: 'Fire',
      routerLink: '/elements/fire',
    },
  ];
}
