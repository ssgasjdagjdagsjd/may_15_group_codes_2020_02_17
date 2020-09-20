import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './component/menu/menu.component';
import { LoginComponent } from './component/login/login.component';
import { LogoutComponent } from './component/logout/logout.component';
import { AdminComponent } from './component/admin/admin.component';
import { ProductsComponent } from './component/products/products.component';
import { AddProductComponent } from './component/add-product/add-product.component';
import { ProductCategoriesComponent } from './component/product-categories/product-categories.component';
import { AddProductCategoryComponent } from './component/add-product-category/add-product-category.component';
import { ProductIncomeComponent } from './component/product-income/product-income.component';
import { ReportComponent } from './component/report/report.component';
import { SettingsComponent } from './component/settings/settings.component';
import { SaleManagerComponent } from './component/sale-manager/sale-manager.component';
 
import { ChequePrintPageComponent } from './component/cheque-print-page/cheque-print-page.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    LogoutComponent,
    AdminComponent,
    ProductsComponent,
    AddProductComponent,
    ProductCategoriesComponent,
    AddProductCategoryComponent,
    ProductIncomeComponent,
    ReportComponent,
    SettingsComponent,
    SaleManagerComponent,
  
    ChequePrintPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
