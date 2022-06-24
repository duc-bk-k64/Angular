import {HttpClient,HttpHeaders} from '@angular/common/http';
import Swal from 'sweetalert2'
export class Login  {
    public static token="";
    constructor(public http: HttpClient) {
    };
    public login(data:any,Callback:any) {
        this.http.post("http://localhost:8080/api/v1/auth/signin", data).toPromise().then(Callback,(error)=>{
            console.log(error);
            Swal.fire("Incorrect username of password")
        })
    }
}