import { Component, OnInit  } from '@angular/core';
import {Router} from '@angular/router';
import{LoginServices} from './login.services';
import {loginform} from './../Model/movie';
import { Validators,FormBuilder,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform:FormGroup;
  constructor(private _fb:FormBuilder , private _nav:Router) { }

  ngOnInit() {
    this.loginform = this._fb.group({
      'username':['',[Validators.required,Validators.minLength,LoginServices.username]],
      'password':['',[Validators.required,Validators.minLength,LoginServices.password]],
      'email':['',[Validators.required,LoginServices.email]]
    })

  }
  getuser(){
    this._nav.navigate(['/MovieList']);
  }
}
