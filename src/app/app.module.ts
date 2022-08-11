import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTMLComponent } from './html/html.component';
import { CSSComponent } from './css/css.component';
import { SCSSComponent } from './scss/scss.component';
import { SASSComponent } from './sass/sass.component';
import { LESSComponent } from './less/less.component';
import { ANGULARComponent } from './angular/angular.component';
import { JAVASCRIPTComponent } from './javascript/javascript.component';
import { ANGULARMATERIALComponent } from './angularmaterial/angularmaterial.component';
import { BOOTSTRAPComponent } from './bootstrap/bootstrap.component';
import { DEVELOPERTOOLComponent } from './developertool/developertool.component';
import { CHROMEBROWSERComponent } from './chromebrowser/chromebrowser.component';
import { CONSOLEComponent } from './console/console.component';
import { TERMINALComponent } from './terminal/terminal.component';
import { REACTComponent } from './react/react.component';
import { NODEJSComponent } from './nodejs/nodejs.component';
import { EXPRESSJSComponent } from './expressjs/expressjs.component';
import { NEXTJSComponent } from './nextjs/nextjs.component';
import { NPMComponent } from './npm/npm.component';
import { GITHUBANDGITLABComponent } from './githubandgitlab/githubandgitlab.component';
import { HTTPANDHTTPSComponent } from './httpandhttps/httpandhttps.component';
import { CLOUDSTORAGEComponent } from './cloudstorage/cloudstorage.component';
import { VSCODEANDEXTENSIONSComponent } from './vscodeandextensions/vscodeandextensions.component';
import { WEBSITESFORICONSComponent } from './websitesforicons/websitesforicons.component';
import { WEBSITESFORFREETEMPLATESComponent } from './websitesforfreetemplates/websitesforfreetemplates.component';
import { WEBSITESTOGETFREETEXTBOOKSComponent } from './websitestogetfreetextbooks/websitestogetfreetextbooks.component';
import { ONLINEPLAYGROUNDComponent } from './onlineplayground/onlineplayground.component';
import { INTERVIEWPREPARATIONComponent } from './interviewpreparation/interviewpreparation.component';
import { SOCKETIOComponent } from './socketio/socketio.component';
import { MONGODBComponent } from './mongodb/mongodb.component';
import { COUCHDBComponent } from './couchdb/couchdb.component';
import { POUCHDBComponent } from './pouchdb/pouchdb.component';
import { MSSQLComponent } from './mssql/mssql.component';
import { MYSQLComponent } from './mysql/mysql.component';
import { POSTGRESQLComponent } from './postgresql/postgresql.component';
import { WINDOWSSHORTCUTKEYSComponent } from './windowsshortcutkeys/windowsshortcutkeys.component';
import { EXCELComponent } from './excel/excel.component';
import { TAILWINDComponent } from './tailwind/tailwind.component';
import { YOUTUBECHANNELSFORWEBDEVELOPERComponent } from './youtubechannelsforwebdeveloper/youtubechannelsforwebdeveloper.component';
import { IONICFRAMEWORKComponent } from './ionicframework/ionicframework.component';
import { FIGMAComponent } from './figma/figma.component';
import { FILEEXTENSIONSComponent } from './fileextensions/fileextensions.component';
import { TYPESOFERRORINPROGRAMMINGComponent } from './typesoferrorinprogramming/typesoferrorinprogramming.component';
import { TYPESOFALGORITHMSComponent } from './typesofalgorithms/typesofalgorithms.component';
import { WEBSITESFORFREELANCERSComponent } from './websitesforfreelancers/websitesforfreelancers.component';
import { DATASTRUCTURESComponent } from './datastructures/datastructures.component';
import { IDEANDSOURCECODEEDITORSComponent } from './ideandsourcecodeeditors/ideandsourcecodeeditors.component';
import { TOOLSYOUUSEASADEVELOPERComponent } from './toolsyouuseasadeveloper/toolsyouuseasadeveloper.component';
import { PLANYOURPROJECTSASADEVELOPERComponent } from './planyourprojectsasadeveloper/planyourprojectsasadeveloper.component';
import { APIComponent } from './api/api.component';
import { WELCOMEComponent } from './welcome/welcome.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogComponent } from './dialog/dialog.component';

// Below Material Imports
import {MatCardModule} from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    HTMLComponent,
    CSSComponent,
    SCSSComponent,
    SASSComponent,
    LESSComponent,
    ANGULARComponent,
    JAVASCRIPTComponent,
    ANGULARMATERIALComponent,
    BOOTSTRAPComponent,
    DEVELOPERTOOLComponent,
    CHROMEBROWSERComponent,
    CONSOLEComponent,
    TERMINALComponent,
    REACTComponent,
    NODEJSComponent,
    EXPRESSJSComponent,
    NEXTJSComponent,
    NPMComponent,
    GITHUBANDGITLABComponent,
    HTTPANDHTTPSComponent,
    CLOUDSTORAGEComponent,
    VSCODEANDEXTENSIONSComponent,
    WEBSITESFORICONSComponent,
    WEBSITESFORFREETEMPLATESComponent,
    WEBSITESTOGETFREETEXTBOOKSComponent,
    ONLINEPLAYGROUNDComponent,
    INTERVIEWPREPARATIONComponent,
    SOCKETIOComponent,
    MONGODBComponent,
    COUCHDBComponent,
    POUCHDBComponent,
    MSSQLComponent,
    MYSQLComponent,
    POSTGRESQLComponent,
    WINDOWSSHORTCUTKEYSComponent,
    EXCELComponent,
    TAILWINDComponent,
    YOUTUBECHANNELSFORWEBDEVELOPERComponent,
    IONICFRAMEWORKComponent,
    FIGMAComponent,
    FILEEXTENSIONSComponent,
    TYPESOFERRORINPROGRAMMINGComponent,
    TYPESOFALGORITHMSComponent,
    WEBSITESFORFREELANCERSComponent,
    DATASTRUCTURESComponent,
    IDEANDSOURCECODEEDITORSComponent,
    TOOLSYOUUSEASADEVELOPERComponent,
    PLANYOURPROJECTSASADEVELOPERComponent,
    APIComponent,
    WELCOMEComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatNativeDateModule,
    MatButtonModule,
    MatDialogModule,
  ],
  providers: [
    MatDialog,
  ],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule { }
