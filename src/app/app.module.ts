import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { DetailComponent } from './details/detail/detail.component';
import { DetailListComponent } from './details/detail-list/detail-list.component';
import { DetailService } from './shared/detail.service';
import { HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {MatDialogModule} from "@angular/material/dialog";
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import {ReactiveFormsModule} from '@angular/forms';
import { UserService } from './shared/user.service';
import { LoginsComponent } from './user/logins/logins.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';







@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    DetailComponent,
    DetailListComponent,
    UserComponent,
    RegistrationComponent,
    LoginsComponent,
    HomeComponent,


   
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatDatepickerModule,
    ToastrModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ReactiveFormsModule,
    AppRoutingModule
   
  
    
   
  ],
  

  providers: [DetailService,UserService],
  bootstrap: [AppComponent],
  entryComponents: [DetailListComponent]
})
export class AppModule { }
