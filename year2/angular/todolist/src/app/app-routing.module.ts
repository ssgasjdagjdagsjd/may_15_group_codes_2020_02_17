import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { LogoutComponent } from './component/logout/logout.component';
import { AdminComponent } from './component/admin/admin.component';
import { ProductsComponent } from './component/products/products.component';
import { OrdersComponent } from './component/orders/orders.component';
import { AddProductComponent } from './component/add-product/add-product.component';
import { RouteGuardService } from './service/route-guard.service';
import { OrderConfirmComponent } from './component/order-confirm/order-confirm.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'logout',component:LogoutComponent,canActivate:[RouteGuardService]},
  {path:'admin',component:AdminComponent,canActivate:[RouteGuardService]},
  {path:'products',component:ProductsComponent},
  {path:'orders',component:OrdersComponent,canActivate:[RouteGuardService]},
  {path:'add-product',component:AddProductComponent,canActivate:[RouteGuardService]},
  {path:'order-confirm',component:OrderConfirmComponent,canActivate:[RouteGuardService]},
  {path:'**',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
