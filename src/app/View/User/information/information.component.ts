import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {Router} from '@angular/router';
import * as Stomp from 'stompjs'
import * as SockJS from 'sockjs-client';
@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {
  @ViewChild("text", { static: true })
  text!: ElementRef;
  //recInterval ="";
  constructor(private router: Router) {
  // this.mymessage.nativeElement.innerHTML ="duc";
  }
  public respond:any[] = [];
 
 stompClient :any;
 public name:string="";
 //public i:any;

  ngOnInit(): void {
  }
  
    public connect():void {
   
      let socket=new SockJS('http://localhost:8080/ws',null,{});
      this.stompClient=Stomp.over(socket);
      console.log("make connection");
      const _this=this;
      this.stompClient.connect({'Authorization':localStorage.getItem('token')||'{}'}, function(frame:any) {
         console.log("Frame:"+frame);
        _this.stompClient.subscribe('/topic/duc',function(message:any) {
          message=JSON.stringify(message);
          message=JSON.parse(message);
          let arr=message.body.split("_");
          _this.respond.push({"Username":arr[1],"Message":arr[0],"Time":arr[2]});
          console.log("Message return from server : "+message.body);
  
        });
      });
    } 
    public sendname():void {
      if(this.name=="") {
        console.log("null");
      }
      else {
      this.stompClient.send('/app/chat/duc',{},this.name);
      this.text.nativeElement.value="";
      this.name="";
      }
    }
    public close():void {
      this.stompClient.disconnect();
    //  this.mymessage.nativeElement.innerHTML="";
    this.respond=[];
    }
   

  }
 

