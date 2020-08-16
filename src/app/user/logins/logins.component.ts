import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-logins',
  templateUrl: './logins.component.html',
  styles: []
})
export class LoginsComponent implements OnInit {
formModel={
  UserName:'',
  Password:''
}
  constructor(private service:UserService) { }

  ngOnInit(): void {
  }
  

}
