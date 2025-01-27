import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fb:FormBuilder,private http: HttpClient) { }




  formModel = this.fb.group({
    UserName:['',Validators.required],
    Email:['',Validators.required],
    FullName:['',Validators.required],
    Passwords:this.fb.group({
    Password:['',[Validators.required,Validators.minLength(4)]],
    ConfirmPassword:['',Validators.required]
    },{validators:this.comparePasswords})
  });
  comparePasswords(fb:FormGroup){
    let confirmPswrdCtrl=fb.get('ConfirmPassword');
    //passwordMismatch
    //confirmPswrdCtrl.errors={passwordMismatch:true}
    if(confirmPswrdCtrl.errors==null || 'passwordMismatch' in confirmPswrdCtrl.errors){
      if(fb.get('Password').value!=confirmPswrdCtrl.value)
      confirmPswrdCtrl.setErrors({passwordMismatch:true});
      else
      confirmPswrdCtrl.setErrors(null);
    }
  }
  register(){
    var body={
      UserName:this.formModel.value.UserName,
      Email:this.formModel.value.Email,
      FullName:this.formModel.value.FullName,
      Password:this.formModel.value.Password,
    };
  
 
  
  }
 
}
