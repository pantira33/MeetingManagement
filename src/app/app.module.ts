import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { DetailComponent } from './details/detail/detail.component';
import { DetailListComponent } from './details/detail-list/detail-list.component';
import { DetailService } from './shared/detail.service';
import { from } from 'rxjs';
import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {MatDialogModule} from "@angular/material/dialog";
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    DetailComponent,
    DetailListComponent,
 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ToastrModule.forRoot(),
    BsDatepickerModule.forRoot(),
  ],

  providers: [DetailService],
  bootstrap: [AppComponent],
  entryComponents: [DetailListComponent]
})
export class AppModule { }
