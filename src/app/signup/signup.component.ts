import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  // password toggel
  hide = true;

  //  form details
  signupForm = new FormGroup({
    FirstName: new FormControl('devendran', [Validators.required, Validators.minLength(2)]),
    LastName: new FormControl('vemula', [Validators.required]),
    MobileNumber: new FormControl('9445296380', [Validators.required, Validators.maxLength(10)]),
    DOB: new FormControl(),
    email: new FormControl('devendranvemula@gmail.com', Validators.required),
    password: new FormControl('deva123', [Validators.required, Validators.minLength(6)]),
    gender: new FormControl(),

    // DatePicker
    date: new FormControl(new Date()),
    serializedDate: new FormControl((new Date()).toISOString()),
  });
  constructor(
    private router: Router,
    private logiservice: LoginService
  ) { }

  ngOnInit(): void {
  }


// let details = this.LoginService.loginDetails();

  handlesubmit(): void {
    // console.log(this.signupForm.value);
    this.logiservice.loginDetails( this.signupForm.value);
    this.router.navigate(['/userlist']);
  }

}
