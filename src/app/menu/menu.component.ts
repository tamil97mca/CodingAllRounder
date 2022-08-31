import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuList: {};
  constructor() {
    this.menuList = {
      'General': {

      },
      'Dev': {
        'Angular':['Interceptor', 'HTTP & HTTPS', 'API', 'WEB SERVICE'],
        'jAVASCRIPT': ['FLAT', 'MAP', 'FILTER', 'FROM ARRAY']
      }
    }

    console.log("###", this.menuList)
  }


  ngOnInit(): void {
  }

}
