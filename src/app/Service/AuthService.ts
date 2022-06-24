import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {Login} from 'src/app/Service/Login';
import Swal from 'sweetalert2'

export class AuthService {
    public static isLoggedIn: boolean = false;
    public static redirectURL: string="";
    constructor(private http: HttpClient, private  router: Router) {

    }
    public login(data:any) {
        this.http.post("http://localhost:8080/api/v1/auth/signin", data).toPromise().then((response:any)=>{
            AuthService.isLoggedIn=true;

            //Login.token=response.token;
            localStorage.setItem("isLoggedIn","1");
            localStorage.setItem("token",response.token);
            localStorage.setItem("role",response.role);
            console.log(Login.token);
            console.log(response);
            Swal.fire('Login successfully');
            // if(AuthService.redirectURL!="") {
            //     this.router.navigate([AuthService.redirectURL]);
            //     AuthService.redirectURL="";    
            // }
            if(localStorage.getItem('redirectURL')!=null||localStorage.getItem('redirectURL')!='') {
                this.router.navigate([localStorage.getItem('redirectURL')]);
                localStorage.setItem('redirectURL','');    
            }
            else {
                this.router.navigate(['/home']);
            }

        },(err)=>{
            //AuthService.isLoggedIn=false;
            localStorage.setItem("isLoggedIn","1");
            localStorage.setItem("isLoggedIn","0");
            Swal.fire('Username or password incorrect');
            console.log(err);

        });
    }
    public  logout():void {
       // AuthService.isLoggedIn=false;
        localStorage.setItem("isLoggedIn","0");
        localStorage.setItem("token","");
        this.router.navigate(['/login']);
    }
}