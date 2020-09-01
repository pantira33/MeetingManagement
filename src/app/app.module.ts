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
import { TreeViewModule } from '@syncfusion/ej2-angular-navigations';
import { DropDownListAllModule, MultiSelectAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { MaskedTextBoxModule, UploaderAllModule } from '@syncfusion/ej2-angular-inputs';
import { ToolbarAllModule, ContextMenuAllModule } from '@syncfusion/ej2-angular-navigations';
import { ButtonAllModule } from '@syncfusion/ej2-angular-buttons';
import { CheckBoxAllModule } from '@syncfusion/ej2-angular-buttons';
import { DatePickerAllModule, TimePickerAllModule, DateTimePickerAllModule } from '@syncfusion/ej2-angular-calendars';
import { NumericTextBoxAllModule, TextBoxAllModule } from '@syncfusion/ej2-angular-inputs';
import { ScheduleAllModule, RecurrenceEditorAllModule } from '@syncfusion/ej2-angular-schedule';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';








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
    AppRoutingModule,
    CommonModule,
    ScheduleAllModule,
    RecurrenceEditorAllModule,
    NumericTextBoxAllModule,
    TextBoxAllModule,
    DatePickerAllModule,
    TimePickerAllModule,
    DateTimePickerAllModule,
    CheckBoxAllModule,
    ToolbarAllModule,
    DropDownListAllModule,
    ContextMenuAllModule,
    MaskedTextBoxModule,
    UploaderAllModule,
    MultiSelectAllModule,
    TreeViewModule, 
    ButtonAllModule, 
    BrowserModule,
    HttpModule
    
   
  
    
   
  ],
  

  providers: [DetailService,UserService],
  bootstrap: [AppComponent],
  entryComponents: [DetailListComponent]
})
export class AppModule { }
