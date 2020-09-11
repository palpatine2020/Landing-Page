import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {
  title = 'Next Generation LIMS, created by the Avengers Team';
  constructor() { }

  ngOnInit() {
  }

}
