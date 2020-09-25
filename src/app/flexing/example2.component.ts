import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example2',
  templateUrl: './example2.component.html',
  styleUrls: ['./example2.component.less']
})
export class Example2Component implements OnInit {
  num = 2;

  constructor() { }

  ngOnInit(): void {
  }

}
