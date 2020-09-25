import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';


//Tim Add for Angular material
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';


// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppRoutingModule } from './app-routing.module';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AppComponent } from './app.component';
import { AlertComponent } from './_components';
import { HomeComponent } from './home';
import { FooterComponent } from './views/footer/footer.component';
import { HeaderComponent } from './views/header/header.component';;
import { ResponsiveToolbarComponent } from './views/responsive-toolbar/responsive-toolbar.component';
import { NavComponent } from './views/nav/nav.component';
import { TestingComponent } from './testing/testing.component';
import { HeadexComponent } from './views/headex/headex.component';
import { SidenavListComponent } from './views/headex/navigation/sidenav-list/sidenav-list.component';


import { FlexModule } from './flexing/flex.module'


@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        MatMenuModule,
        MatSidenavModule,
        MatListModule,
        
        FlexModule
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        FooterComponent,
        HeaderComponent,
        ResponsiveToolbarComponent,
        NavComponent,
        TestingComponent,
        HeadexComponent,
        SidenavListComponent,
        
    
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { };