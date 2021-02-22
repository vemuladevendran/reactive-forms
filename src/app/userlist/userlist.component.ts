import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  details: object = this.logiservice.details || {};
  constructor(
    private logiservice: LoginService,
    private router: Router
  ) { }


  // headers = Object.keys(this.logiservice.details || {});
  // logindetails = Object.values(this.logiservice.details || {});
  ngOnInit(): void {
    if (Object.keys(this.details).length === 0) {
      this.router.navigate(['/signup']);
    }
  }

}
