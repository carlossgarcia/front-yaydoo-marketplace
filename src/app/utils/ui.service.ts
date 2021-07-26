import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  public sideNav: boolean = false;

  constructor() { }
}
