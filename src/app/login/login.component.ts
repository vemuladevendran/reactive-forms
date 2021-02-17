import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  hide = true;

  // details

  loginform = new FormGroup({
    Username: new FormControl('', Validators.required),
    MobileNumber: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
  }

  handlesubmit(): void {
    console.log(this.loginform.value);
  }

}
