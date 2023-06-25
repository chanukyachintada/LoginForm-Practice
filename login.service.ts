import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  users=[{
    username:"test1@gmail.com",
    password:"test12345",
  },
  {
    username:"test2@gmail.com",
    password:"test12346",
  },
  {
    username:"test3@gmail.com",
    password:"test12347",
  }];
  
  
 onlogin(username:string, password: string){
    let message = (this.users.find(x => {username == x.username && password == x.password})) ? 'success':'error';
        if(message != "success"){
          alert("Login failed, Please re-enter the correct details");
        }
        else{
          alert("Login successful");
        }
      }
            
}
      


