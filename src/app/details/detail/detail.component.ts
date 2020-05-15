import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { DetailService } from 'src/app/shared/detail.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { DetailListComponent } from '../detail-list/detail-list.component';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styles: []
})
export class DetailComponent implements OnInit {
  
  
  public get service(): DetailService {
    return this._service;
  }
  public set service(value: DetailService) {
    this._service = value;
  }

  constructor(private dialog: MatDialog,
   private _service: DetailService ,
   private toastr:ToastrService,
  
   ){}
  
  ngOnInit(){
    this.resetForm();
  }
  resetForm(form?:NgForm){
    if(form != null)
    form.form.reset();
    this.service.formData ={
      DetailId:0,
      Title:'',
      MeetingNo:'',
      Location:'',
      DMY:'',
      Details:''
    }
  }
  

AddEditDetailList(DetailIndex,DetailId){
  const dialogConfig = new MatDialogConfig();
  dialogConfig.autoFocus = true;
  dialogConfig.disableClose = true;
  dialogConfig.width="50%";
  dialogConfig.data={DetailIndex,DetailId}
  this.dialog.open(DetailListComponent,dialogConfig)
}
onSubmit(form:NgForm){
 
  if(this.service.formData.DetailId == 0)
  this.insertRecord(form);
  else
  this.updateRecord(form);
}
insertRecord(form:NgForm){
  this.service.postDetail().subscribe(
    res =>{
      this.resetForm(form);
      this.toastr.success('Submitted Successful','Create sucessfully');
      this.service.refreshlist();
    },
    err =>{
      console.log(err);
    }
  )
}
updateRecord(form:NgForm){
  this.service.putDetail().subscribe(
    res =>{
      this.resetForm(form);
      this.toastr.info('Submitted Successful')
      this.service.refreshlist();
    },
    err =>{
      console.log(err);
    }
  )
}


}
