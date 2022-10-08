import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ANGULARComponent } from './angular/angular.component';
import { APIComponent } from './api/api.component';
import { DATASTRUCTURESComponent } from './datastructures/datastructures.component';
import { GITHUBANDGITLABComponent } from './githubandgitlab/githubandgitlab.component';
import { HTMLComponent } from './html/html.component';
import { HTTPANDHTTPSComponent } from './httpandhttps/httpandhttps.component';
import { InstafeedComponent } from './instafeed/instafeed.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { UserlistComponent } from './userlist/userlist.component';
import { WELCOMEComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: "", redirectTo: 'WELCOME', pathMatch: 'full' },
  { path: "WELCOME", component: WELCOMEComponent},
  { path: "HTML", component: HTMLComponent},
  { path: "HTTP&HTTPS", component: HTTPANDHTTPSComponent},
  { path: "GITHUB&GITLAB", component: GITHUBANDGITLABComponent},
  { path: "DATASTRUCTURE", component: DATASTRUCTURESComponent},
  { path: 'APIS', component: APIComponent},
  { path: 'ANGULAR', component: ANGULARComponent},

  { path: "Login", component: LoginComponent },
  { path: "about", component: AboutComponent },
  { path: "userlist", component: UserlistComponent},
  { path: "menu", component: MenuComponent},
  { path: "instafeed", component: InstafeedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
