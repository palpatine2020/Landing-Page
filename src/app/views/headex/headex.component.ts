import { Component, EventEmitter, OnInit, Output, } from '@angular/core';

@Component({
  selector: 'app-headex',
  templateUrl: './headex.component.html',
  styleUrls: ['./headex.component.less']
})
export class HeadexComponent implements OnInit {

  @Output() sidenavToggle = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public onToggleSidenav = () => { 
    this.sidenavToggle.emit();
  }

}
