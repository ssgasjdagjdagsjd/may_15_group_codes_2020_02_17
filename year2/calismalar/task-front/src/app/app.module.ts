import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatDialogModule, MatProgressSpinnerModule, MatButtonModule } from '@angular/material';
 
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
 import {MatSelectModule} from '@angular/material/select';
 
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { TasksComponent } from './component/tasks/tasks.component';
import { AddTaskComponent } from './component/add-task/add-task.component';
import { InterceptorService } from './service/interceptor.service';
@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    AddTaskComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
MatDialogModule,
MatProgressSpinnerModule,
MatButtonModule,
InfiniteScrollModule,MatSelectModule,
ConfirmationPopoverModule.forRoot({
  confirmButtonType:'success',cancelButtonType:'danger',confirmText:'Təsdiq',cancelText:'Ləğv'
})
  ],
  providers: [ {
    provide:HTTP_INTERCEPTORS,useClass: InterceptorService,multi:true
    
  } ],
  bootstrap: [AppComponent],
  entryComponents:[AddTaskComponent ]
})
export class AppModule { }
