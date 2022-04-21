import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { UserAuthGuard } from 'src/app/Guards/user-auth.guard';

const routes:Routes=[
  {path:'',redirectTo:'/User/UserProfile',pathMatch:'full'},
    {path:'UserProfile',component:UserProfileComponent,canActivate:[UserAuthGuard]},
    {path:"EditProfile",component:EditProfileComponent,canActivate:[UserAuthGuard]}
]
@NgModule({
  declarations: [
    UserProfileComponent,
    EditProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModModule { }
