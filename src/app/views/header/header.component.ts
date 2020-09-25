import { Component, OnInit } from '@angular/core';
import { MenuItem } from "@app/views/header/menu-item"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  title = 'Next Generation LIMS';
  
  menuItems: MenuItem[] = [
    {
      label: 'Login',
      icon: 'power_settings_new',
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      label: 'Sign Up',
      icon: 'login',
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      label: 'API Access',
      icon: 'smart_button',
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true
    },
    
    {
      label: 'Settings',
      icon: 'settings',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: true
    },
    {
      label: 'Notifications',
      icon: 'notifications',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: false
    },
    {
      label: 'Biotech',
      icon: 'biotech',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: true
    },
    {
      label: 'About',
      icon: 'help',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: true
    },
  ];
  
  
  
  
  
  
  
  
  
  constructor() { }

  ngOnInit(){
  }

}
