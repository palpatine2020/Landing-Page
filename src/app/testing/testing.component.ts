import { Component, OnInit } from '@angular/core';

declare const myFun:any;
declare var ExternalJSFileFunction:any;

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.less']
})
export class TestingComponent implements OnInit {

  constructor() { 
  }

  CallExternalJSFileFunction(){
    ExternalJSFileFunction();
  }

  callfun(){
    myFun();
  }

  ngOnInit(): void {
  }

}
