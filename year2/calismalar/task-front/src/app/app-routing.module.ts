import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksComponent } from './component/tasks/tasks.component';
 

const routes: Routes = [
   {path:'',component:TasksComponent},
   {path:'tasks',component:TasksComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
