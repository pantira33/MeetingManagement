import { Component, OnInit,Inject } from '@angular/core';
import { DetailService } from 'src/app/shared/detail.service';
import { Detail } from 'src/app/shared/detail.model';
import { ToastrService } from 'ngx-toastr';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';




@Component({
  selector: 'app-detail-list',
  templateUrl: './detail-list.component.html',
  styles: []
})
export class DetailListComponent implements OnInit {
 
 
  public get service(): DetailService {
    return this._service;
  }
  public set service(value: DetailService) {
    this._service = value;
  }
  constructor(
    private dialogRef: MatDialogRef<DetailListComponent>,
        @Inject(MAT_DIALOG_DATA) data,
   
    private _service : DetailService,
    private toastr:ToastrService,
   
   ){}

  ngOnInit(): void {
    this.service.refreshlist();
    
  }
  
  onDelete(DetailId){
    if(confirm('Are you sure to delete this record?')){
    this.service.deleteDetail(DetailId)
    .subscribe(res =>{
      this.service.refreshlist();
      this.toastr.warning('Deleted sucessfully');
      this.dialogRef.close();
    },
    err=>{
      console.log(err)
    })
  }
}
edit(d:Detail) {
  this.service.formData = Object.assign({},d);
  this.dialogRef.close();
}


closewindow(){
  this.dialogRef.close();

}
}
