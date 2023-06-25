import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators,FormControl,FormGroupDirective,NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginService]
})
export class LoginComponent implements OnInit {

  loginForm:any = FormGroup;
    submitted = false;
  
  
  constructor(private formBuilder:FormBuilder,private router:Router,private loginService:LoginService){
  }

  ngOnInit() { 
    this.loginForm = this.formBuilder.group({
      username: new FormControl('', [Validators.required,Validators.email,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      password: new FormControl('', [Validators.required,Validators.minLength(6)]),
  });
  }
    
  login(){
    this.submitted = true;
    this.loginService.onlogin('username','password');
  }
  get formControls(){
    return this.loginForm.controls;
  }
  


}
