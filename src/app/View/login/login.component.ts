import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Login} from 'src/app/Service/Login';
import {AuthService} from 'src/app/Service/AuthService'
import { Router } from '@angular/router';
import {Title} from '@angular/platform-browser'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginService: Login =new Login(this.http);
  public authservice: AuthService = new AuthService(this.http,this.router);
  public loginform:any= {
    username : "",
    password : ""

  };
  // public login():void {
  //   if(this.loginform.username==''||this.loginform.password=='') {
  //     return
  //   }
  //   this.loginService.login(this.loginform,(response: any)=> {
  //     Login.token=response.token;
  //     console.log(Login.token);
  //     console.log(response);
  //     Swal.fire('Login successfully');
  //   })

  // }
  public loginredirect():void {
    this.authservice.login(this.loginform)
  }

  constructor(private http:HttpClient,private router:Router, private titleService:Title) {
    this.titleService.setTitle(this.router.url.substring(1));

  }


  ngOnInit(): void {
  }

}
