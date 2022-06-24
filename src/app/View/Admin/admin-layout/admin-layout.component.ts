import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import Swal from 'sweetalert2'
import { JwtHelperService } from '@auth0/angular-jwt'
@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {

  constructor(private router: Router,private jwtHelper:JwtHelperService) { 
  //  if(AuthService.isLoggedIn==false) {
  //     AuthService.redirectURL=this.router.url;
  //     this.router.navigate(['/login'])
  //   } 
  if(localStorage.getItem('isLoggedIn')=='0'||localStorage.getItem('isLoggedIn')==null) {
   // AuthService.redirectURL=this.router.url;
    localStorage.setItem('redirectURL',this.router.url);
    this.router.navigate(['/login'])
  }
  if(this.jwtHelper.isTokenExpired(localStorage.getItem('token')||'{}'))  {
    Swal.fire("Token is expired");
    this.router.navigate(['/login'])
  }
    //token=localStorage.getItem('token')||'{}';
   // const tokenPayload = decode(token);
    if(localStorage.getItem('role')?.indexOf("ROLE_ADMIN")==-1)  {
      Swal.fire("Unauthorized");
      this.router.navigate(['/home']);
    };
  }

  ngOnInit(): void {
  }

}
