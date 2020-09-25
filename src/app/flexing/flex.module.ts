import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexRoutingModule } from './flex-routing.module';

import {MatCardModule} from '@angular/material/card';

import { LayoutComponent } from './layout.component';
import { FlexingComponent } from './flexing.component';
import { Example2Component } from './example2.component';

import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    LayoutComponent,
    FlexingComponent,
    Example2Component,
  ],
  imports: [
    CommonModule,
    FlexRoutingModule,
    MatCardModule,
    FlexLayoutModule
  ],
})
export class FlexModule { }
