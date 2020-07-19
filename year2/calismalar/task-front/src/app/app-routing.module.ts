import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksComponent } from './component/tasks/tasks.component';
import { LoginComponent } from './component/login/login.component';
import { LogoutComponent } from './component/logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
 

const routes: Routes = [
   {path:'',component:TasksComponent,canActivate:[RouteGuardService]},
   {path:'tasks',component:TasksComponent,canActivate:[RouteGuardService]} ,
   {path:'login',component:LoginComponent} ,
   {path:'logout',component:LogoutComponent} 

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
