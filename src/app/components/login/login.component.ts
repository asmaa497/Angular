import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private AuthSer:AuthService) { }
  Islogged:boolean=false;
  ngOnInit(): void {
    this.Islogged=this.AuthSer.IsLogged;
  }
  login()
  {
    this.AuthSer.Login();
  }
  

}
