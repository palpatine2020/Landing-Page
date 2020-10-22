import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Component } from '@angular/core';

import { User } from '@app/_models';
import { AccountService } from '@app/_services';

@Component({ templateUrl: 'home.component.html',styleUrls: ['home.css'] })
export class HomeComponent {
    user: User;
    value: string;
    test:string;
    //x:any;
    //products: any = (this.x as any).default;
    //myEscapedJSONString: string

    constructor(private accountService: AccountService) {
        this.user = this.accountService.userValue;
        //var obj = angular
        //this.value = this.user.info;
        //this.test = JSON.stringify(this.user.info)

        //document.getElementById("json").innerHTML = JSON.stringify(this.user.info, undefined, 2);
        this.test = this.user.info;
        //JSON.stringify(this.value,null,"    ")
         
        
        //this.value.replace(/\r\n/g, '<br/>');
        

        //this.test = angular.fromJson(value);
        //this.myEscapedJSONString = this.value.replace(/\r\n/g, "<br>")
        //this.test = this.user.info;
        //angular.toJson(this.user.info, pretty);
        //angular.toJson(this.user.info, pretty);
    }
}