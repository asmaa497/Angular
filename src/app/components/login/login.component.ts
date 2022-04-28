import { ConstantPool } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private AuthSer:AuthService,private router:Router) { }
  Islogged:boolean=false;
  UserName:string="";
  password:string="";
  // LoginINFO:{
  //   UserName:string,
  //   password:string
  // }={UserName:"",password:""} 
  ngOnInit(): void {
    this.Islogged=this.AuthSer.IsLogged;
  }
  login()
  {
    this.AuthSer.Login(this.UserName,this.password).subscribe(tkn=>{
         localStorage.setItem("token",tkn.token);
         this.router.navigate(['/Home'])
         
    },(error)=>{
      alert("User name or passwors is incorrect");
    });
  }
  

}
