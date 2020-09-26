import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './component/admin/admin.component';
import { LoginComponent } from './component/login/login.component';
import { LogoutComponent } from './component/logout/logout.component';
import { ProductsComponent } from './component/products/products.component';
import { ReportComponent } from './component/report/report.component';
import { SaleManagerComponent } from './component/sale-manager/sale-manager.component';
import { SettingsComponent } from './component/settings/settings.component';


const routes: Routes = [

  {path:'login',component:LoginComponent},
  {path:'logout',component:LogoutComponent},
   
  {path:'report',component:ReportComponent},
  {path:'sale-manager',component:SaleManagerComponent},
  {path:'admin',component:AdminComponent} ,
  {path:'settings',component:SettingsComponent},
  {path:'**',component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
