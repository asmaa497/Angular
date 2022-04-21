import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../ViewModels/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private httpOptions;
  constructor(private httpClient: HttpClient) {
    this.httpOptions={
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        // , Authorization': 'Token'
      })
   }

  }

  Register(newUser: User): Observable<User>
  {
    return this.httpClient.post<User>(`${environment.APIBaseURL}/users`, JSON.stringify(newUser),this.httpOptions);
  }
  Login()
  {
    // this should call login API 
    let UserToken="aamlkemfk2365rkmflkaa21g5aetg453t";
    localStorage.setItem("token",UserToken);
  }
  Logout()
  {
    localStorage.removeItem("token");
  }
  get IsLogged()
  {
     return (localStorage.getItem('token'))?true:false;
  }


}
