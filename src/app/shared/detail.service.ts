import { Injectable } from '@angular/core';
import { Detail } from './detail.model';
import {HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class DetailService {
  readonly rootURL ='http://localhost:53459/api';
  list : Detail[];
  formData:Detail={
    Title:null,
    MeetingNo:null,
    Location:null,
    DMY:null,
    Details:null,
    DetailId:null
 
  }

  
  constructor(private http:HttpClient) { }
  postDetail(){
    return this.http.post(this.rootURL+'/Details',this.formData);

  }
  putDetail(){
    return this.http.put(this.rootURL+'/Details/'+this.formData.DetailId,this.formData);
  }
  deleteDetail(id){
    return this.http.delete(this.rootURL+'/Details/'+ id);
  }
  refreshlist(){
    this.http.get(this.rootURL+'/Details')
    .toPromise()
    .then(res => this.list = res as Detail[]);
  }
}
