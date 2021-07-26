import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  //New user
  public user: User = {
    email: "", 
    password: "",
    role: ""
  }

  //Validators
  public confirmPass: string = "";
  public isSeller: boolean = false;
  public isBuyer: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * validateRole
   */
   public validateRole(role: string) {
     this.user.role = role;
    if(role == 'seller'){
      this.isSeller = true;
      this.isBuyer = false;
    }else{
      this.isSeller = false;
      this.isBuyer = true;
    }
  }

  /**
   * signUp
   */
  public signUp() {
    console.log(this.user);
  }

}
