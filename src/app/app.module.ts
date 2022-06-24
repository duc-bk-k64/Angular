import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InformationComponent } from './View/User/information/information.component';
import { StudentComponent } from './View/User/student/student.component';
import { HomeComponent } from './View/User/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './View/login/login.component';
import { RouteParamsComponent } from './View/User/route-params/route-params.component';
import { AdminHomeComponent } from './View/Admin/admin-home/admin-home.component';
import { LayoutComponent } from './View/User/layout/layout.component';
import { AdminLayoutComponent } from './View/Admin/admin-layout/admin-layout.component';
import { JwtHelperService, JWT_OPTIONS  } from '@auth0/angular-jwt';
// import {SockJS} from 'sockjs-client'

@NgModule({
  declarations: [
    AppComponent,
    InformationComponent,
    StudentComponent,
    HomeComponent,
    LoginComponent,
    RouteParamsComponent,
    AdminHomeComponent,
    LayoutComponent,
    AdminLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
        JwtHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
