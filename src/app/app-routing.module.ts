import { NgModule } from '@angular/core';

import {Routes, RouterModule} from '@angular/router'
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { LoginsComponent } from './user/logins/logins.component';
import { DetailsComponent } from './details/details.component';


const routes: Routes=[
  {path:'',redirectTo:'/user/logins',pathMatch:'full'},
  {path:'user',component:UserComponent,
children:[
  {path:'registration',component:RegistrationComponent},
  {path:'logins',component:LoginsComponent}
]
},
{path:'details',component:DetailsComponent}
 
];

@NgModule({
  
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
