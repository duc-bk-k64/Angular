import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import{StudentService} from 'src/app/Service/StudentService';
import {StudentModel} from 'src/app/Model/StudentModel';
import {Router} from '@angular/router';
import {AuthService} from 'src/app/Service/AuthService'
import {Title} from '@angular/platform-browser'
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  private studentService: StudentService = new StudentService(this.http,this.router);
  student: StudentModel[]=[];

  constructor(public http: HttpClient,public router: Router,private titleService:Title) {

    this.titleService.setTitle(this.router.url.substring(1));

   }

  ngOnInit(): void {
  }
  public getStudent():void {
   
    this.studentService.getAllStudent((response:any)=> {
      this.student = response;
      console.log(response);
    })
  }
  selectedStudent?:StudentModel; 
  public onSelect(student:StudentModel):void {
    this.selectedStudent=student;
  }

}
