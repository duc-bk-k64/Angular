
import {HttpClient,HttpHeaders} from '@angular/common/http';
import Swal from 'sweetalert2';
import {Router} from '@angular/router'
export class StudentService {
    public static URL: string = "http://localhost:8080";
    public token: string="";
    constructor(public http: HttpClient,public router:Router) {
    };
    public setheader() {
     
      this.token =localStorage.getItem('token') || '{}';
    
     return new HttpHeaders({
      'Authorization':this.token
   
  })
}
    public getAllStudent(callback:any){
      if(localStorage.getItem('token')=='') {
        Swal.fire("Login");
        this.router.navigate(['/login']);
      }
      else {
        const header=this.setheader();
    this.http.get(this.createUrl("/api/v1/student/"),{headers:header}).toPromise().then(callback,(error)=>{
     console.log(error);
     Swal.fire(error.message);
    })
  }
    }
    public createUrl=(url: string):string=> {
        return StudentService.URL+url;
    }
    public getStudentByCode(data:any,callback:any) {
      if(data==null) Swal.fire("Data is null");
      else {
        const header=this.setheader();
        this.http.get(this.createUrl("/api/v1/student/getByCode/?code=")+data,{headers:header}).toPromise().then(callback,(error)=>{
          console.log(error);
         })
      }

    }

    
}