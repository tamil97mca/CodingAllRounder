import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class ANGULARComponent implements OnInit {

  popupTitle: string = 'Learning About APIS';

  popupSrc: any;

  sanitizedURL = [];

  constructor(public domSanitizer: DomSanitizer, public dialog: MatDialog) {
    this.popupSrc = [
      'CcQcdUEDD0h', 'Cd_Aea7j51p', 'CeYz-4xNbkp', 'CeYr9WUjP3g',
      'CeXoHfXlc_o', 'CevmvhQNaMT', 'Ce2eM4jNMIN', 'Ce6NHt3D9Jr', 'Ce_TBRvjjlF', 'Ce3ulx6Dirf', 'CfB15GAjSvs',
      'CfEgJ5cjkRH', 'CfgvNs9jFFB', 'CfdWK7QjxGP', 'CfbyC28jOUP', 'CfePZ2vjcwv', 'Cfl8lCkDH0c', 'CfwVt1xjxdp',
      'Cfy7hFFD7ti', 'Cf39zYYDp_Q', 'Cf9OrANjuu0', 'Cf6rW_xjiRW', 'Cf_snfaD-lV', 'CgHWrc5jq2k', 'CgirDPZIEXH',
      'Cgj3QXHPt61', 'CgkCOeIoKrl', 'CgmVf9TjREL', 'CgmVoKxPEtW', 'CV14h0ujQiX', 'CgwjWcqPG0J', 'CdYl6dOvHbs',
      'CdK5u5aryrv', 'CdFajAtL5q-', 'Cb1r8FAL6TP', 'CbdCssHv-Vf', 'CbW9VN4rbGk', 'CbUNo-HLGYv', 'CbKvBANPhOV',
      'CbH-5jFh7RD', 'CbFgTTArNOF', 'CbCV7JhLcA1', 'CaaBB_0vzy4', 'CaB8blQlfgR', 'CaAOqhIPHas', 'CZ8rxsoFQjO'
    ];
    this.imgLoader();
 }

 ngOnInit() {
  this.popupSrc = [
    'CZex4nfPFUt', 'CY9M3yaPVDD', 'CY13zTghPnL', 'CYZTRSqPJ6I', 'CYJGMgOlOjO', 'CXl1tuyv-og', 'CXZCa-iPcaU',
    'CW6LLFcBrtn', 'CWFURbAlBO1', 'CWCrsO-F27W', 'CWATYM8FWxD', 'CV4y29SFoH6', 'CVYBIfCBBXR', 'CVLTjyehSTA',
    'CUktHc2hZ2F', 'CTPhejPFlix', 'CTHzDdnFG8K', 'CSYshZqlJZ0', 'CSrd4NIlMOv', 'CRniZVEhe-A', 'CRfm5vHtOHf',
    'CQnea55jpKi', 'CQBTQqHDHWA', 'CP3kEl0gdgY', 'CPFjozkg6V-', 'COwn0tJgEqD', 'Cg6_aL0DdTT', 'Cg4ZxFYjqck',
    'ChFQ9JSjFqk', 'ChFA6rBPdSD', 'ChHxzboPNYm', 'ChH_NqaDIAp', 'ChHRkX6pt7c', 'ChG1zuWj7qH', 'ChU3ibBv9ih',
    'Chhk3xYKcEK', 'Chmj2yHv6Cj', 'ChlvhBALy48', 'ChhUc08D8fc', 'ChmYitDDkZ_', 'Ch2JbgjjisB', 'Ch1OYrRrXsA',
    'Ch14grFPj4k'
  ];
  this.imgLoader();
}
  imgLoader() {
    for (let src of this.popupSrc) {
      this.sanitizedURL.push(this.domSanitizer.bypassSecurityTrustResourceUrl(`https://www.instagram.com/p/${src}/embed`));
    }
  }

  openDialog(imgSrc: any): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '100%',
      hasBackdrop: true,
      height: 'auto',
      data: {popupTitle: this.popupTitle, imageSrc: imgSrc},
    });
    console.log("%%%", imgSrc);
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.popupTitle = result;
    });
  }

}
