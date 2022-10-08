import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  criteria : {
    "selector": {
        "name": "Manikandan"
    }
}

  constructor(private http : HttpClient) {
    const collectionName = 'grocerystoreapp_users';

    const url = collectionName+"/_all_docs?include_docs=true";


    this.http.get(url).subscribe((res: any) => {
      console.log("###", res);
    })

  }

  // ngOnChanges() {
  //   console.log("AppComponent: OnChanges");
  // }

  // ngOnInit() {
  //   console.log("AppComponent: OnInit");
  // }

  // ngDoCheck() {
  //   console.log("AppComponent: DoCheck");
  // }

  // ngAfterContentInit() {
  //   console.log("AppComponent: AfterContentInit");
  // }

  // ngAfterContentChecked() {
  // console.log("AppComponent:AfterContentChecked");
  // }

  // ngAfterViewInit() {
  // console.log("AppComponent:AfterViewInit");
  // }

  // ngAfterViewChecked() {
  //   console.log("AppComponent:AfterViewChecked");
  // }

  // ngOnDestroy() {
  //   console.log("AppComponent:OnDestroy");
  // }
}
