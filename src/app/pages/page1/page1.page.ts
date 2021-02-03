import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page implements OnInit {

  constructor() { }

  ngOnInit() {

    interface Man { fName: string, lName: string, nName: string; }
    const man: Man = {
      fName: "Zargham",
      lName: "Zahid",
      nName: "Ziggy"
    };
  }

}
