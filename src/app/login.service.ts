import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  details: any;
  constructor() { }

  loginDetails(data: any): void{
    // tslint:disable-next-line: prefer-const
    this.details = data;
    console.log(data);
  }
}
