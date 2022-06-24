import { StudentModel } from 'src/app/Model/StudentModel';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {StudentService} from 'src/app/Service/StudentService';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Service/AuthService';
import {Title} from '@angular/platform-browser'
@Component({
  selector: 'app-route-params',
  templateUrl: './route-params.component.html',
  styleUrls: ['./route-params.component.css']
})
export class RouteParamsComponent implements OnInit {
  id:any;
  private studentService: StudentService = new StudentService(this.http,this.router);
  student: StudentModel={};

  constructor(private route:ActivatedRoute,public http: HttpClient,public router: Router,public titleService:Title) { 
    this.route.paramMap.subscribe((params)=> {
      this.id=params.get('id');

     })
     this.getData();
     this.titleService.setTitle(this.router.url.substring(1));


  }

  ngOnInit(): void {
  }
  public getData():void {
    this.studentService.getStudentByCode(this.id,(response:any)=>{
      this.student=response;
      console.log(this.student);

    })
  }

}
