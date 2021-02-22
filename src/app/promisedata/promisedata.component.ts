import { Component, OnInit } from '@angular/core';
import { rejects } from 'assert';
import { promise } from 'protractor';

@Component({
  selector: 'app-promisedata',
  templateUrl: './promisedata.component.html',
  styleUrls: ['./promisedata.component.css']
})
export class PromisedataComponent implements OnInit {

  constructor() { }

  promisedata: any = [];
  displayloader = true;
  login(): Promise<any> {
    const x = new XMLHttpRequest();
    x.open('GET', 'https://jsonplaceholder.typicode.com/users');
    x.send();
    return new Promise((resolve, reject) => {
      x.addEventListener('load', () => {
        resolve(x);
      });

      x.addEventListener('error', () => {
        reject('error');
      });
    });

  }


  ngOnInit(): void {

    const p = this.login();
    this.displayloader = true;
    p.then((x) => {
      // console.log(x.responseText);
      this.promisedata = JSON.parse(x.responseText);
      console.log(this.promisedata);
    });

    p.catch(() => {
      console.log('error');
    });

    p.finally(() => {
      this.displayloader = false;

    });


  }


}
