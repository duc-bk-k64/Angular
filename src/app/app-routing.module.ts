import { HomeComponent } from './View/User/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformationComponent } from './View/User/information/information.component';
import { StudentComponent } from './View/User/student/student.component';
import { LoginComponent } from './View/login/login.component';
import {RouteParamsComponent} from './View/User/route-params/route-params.component'
import { AdminHomeComponent } from './View/Admin/admin-home/admin-home.component';
import {LayoutComponent} from './View/User/layout/layout.component';
import {AdminLayoutComponent} from './View/Admin/admin-layout/admin-layout.component';
const routes: Routes = [
 
  {path:"login",component:LoginComponent},
  {path:"",component:LayoutComponent,  children: [
    {path: "home", component:HomeComponent},
  {path: "", component:HomeComponent},
  {path:"infor",component:InformationComponent},
  {path:"student",component:StudentComponent},
  {path:"route/:id",component:RouteParamsComponent}
  ]},
  {path:"",component:AdminLayoutComponent, children: [
    {path:"admin/home",component:AdminHomeComponent}

  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
