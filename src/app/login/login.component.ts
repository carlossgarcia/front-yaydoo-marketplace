import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  //New user
  public user: User = {
    email: "", 
    password: "",
    role: ""
  }

  constructor() { }

  ngOnInit(): void {
  }

  public login(){
    console.log(this.user);
    
  }

}
