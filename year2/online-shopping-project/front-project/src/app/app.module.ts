import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TestComponent } from './component/test/test.component';
import { TodolistComponent } from './component/todolist/todolist.component';
import { ClassTestComponent } from './component/class-test/class-test.component';
import { DatePipe } from '@angular/common';
import { BindableComponent } from './component/bindable/bindable.component';
import { QuizComponent } from './component/quiz/quiz.component';
import { MenuComponent } from './component/menu/menu.component';
import { LoginComponent } from './component/login/login.component';
import { LogoutComponent } from './component/logout/logout.component';
import { AdminComponent } from './component/admin/admin.component';
import { ProductsComponent } from './component/products/products.component';
import { OrdersComponent } from './component/orders/orders.component';
import { AddProductComponent } from './component/add-product/add-product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatDialogModule, 
  MatProgressSpinnerModule, MatButtonModule } 
  from '@angular/material';
  import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { SignupComponent } from './component/signup/signup.component';
import { DataTablesModule } from 'angular-datatables';
import { BasketComponent } from './component/basket/basket.component';
import { OrderConfirmComponent } from './component/order-confirm/order-confirm.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { InterceptorService } from './service/interceptor.service';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ChartExampleComponent } from './component/chart-example/chart-example.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TodolistComponent,
    ClassTestComponent,
    BindableComponent,
    QuizComponent,
    MenuComponent,
    LoginComponent,
    LogoutComponent,
    AdminComponent,
    ProductsComponent,
    OrdersComponent,
    AddProductComponent,
    SignupComponent,
    BasketComponent,
    OrderConfirmComponent,
    ChartExampleComponent 
  ],
  imports: [
    DataTablesModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule, MatDialogModule, 
  MatProgressSpinnerModule, MatButtonModule,
  ConfirmationPopoverModule.forRoot({
    confirmButtonType:'success',cancelButtonType:'danger',confirmText:'Təsdiq',cancelText:'Ləğv'
  }),
  HttpClientModule,InfiniteScrollModule,ChartsModule
  ],
  providers: [ DatePipe,
    {
      provide:HTTP_INTERCEPTORS,useClass:InterceptorService,multi:true
      
    }],
  bootstrap: [AppComponent],
  entryComponents:[AddProductComponent,SignupComponent,BasketComponent]
})
export class AppModule { }
