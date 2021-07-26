import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  public isAuth: boolean = true;
  public user: User = {
    _id: "",
    email: "", 
    role: "",
    password: ""
  }

  constructor() { }
}
