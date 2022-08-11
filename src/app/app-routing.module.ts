import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APIComponent } from './api/api.component';
import { DATASTRUCTURESComponent } from './datastructures/datastructures.component';
import { GITHUBANDGITLABComponent } from './githubandgitlab/githubandgitlab.component';
import { HTMLComponent } from './html/html.component';
import { HTTPANDHTTPSComponent } from './httpandhttps/httpandhttps.component';
import { WELCOMEComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: "", redirectTo: 'WELCOME', pathMatch: 'full' },
  { path: "WELCOME", component: WELCOMEComponent},
  { path: "HTML", component: HTMLComponent},
  { path: "HTTP&HTTPS", component: HTTPANDHTTPSComponent},
  { path: "GITHUB&GITLAB", component: GITHUBANDGITLABComponent},
  { path: "DATASTRUCTURE", component: DATASTRUCTURESComponent},
  { path: 'APIS', component: APIComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
