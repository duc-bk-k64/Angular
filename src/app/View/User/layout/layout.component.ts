import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {AuthService} from 'src/app/Service/AuthService'
import Swal from 'sweetalert2'
import { JwtHelperService } from '@auth0/angular-jwt'
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  // constructor() { }

  ngOnInit(): void {
  }
  private authService: AuthService=new AuthService(this.http,this.router);
  public logout(): void {
    this.authService.logout();
  }
  constructor(private http: HttpClient, private  router: Router,private jwtHelper:JwtHelperService){
    // if(AuthService.isLoggedIn==false) {
    //   AuthService.redirectURL=this.router.url;
    //   this.router.navigate(['/login'])
    // }
    if(localStorage.getItem('isLoggedIn')=='0'||localStorage.getItem('isLoggedIn')==null) {
      // AuthService.redirectURL=this.router.url;
       localStorage.setItem('redirectURL',this.router.url);
       this.router.navigate(['/login'])
     } 
     if(this.jwtHelper.isTokenExpired(localStorage.getItem('token')||'{}'))  {
      Swal.fire("Token is expired");
      this.router.navigate(['/login'])
    }
  }

}
