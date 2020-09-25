import { Component, OnInit,HostListener } from '@angular/core';

declare function toggleMenu(x: Element,y: Element):any;
declare function toggleItem(x: Element):any;

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.less']
})
export class NavComponent implements OnInit {

  constructor() { 
    
  }




  calltoggle() {
    const toggle = document.querySelector('.toggle');
    const menu = document.querySelector('.menu');
    const items = document.querySelectorAll(".item");
    toggleMenu(toggle,menu);
  }

  callitem() {
    const menu = document.querySelector('.menu');
    
    toggleItem(menu);
  }

  ngOnInit(): void {
  }

  


}
