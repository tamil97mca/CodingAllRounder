import { Component, OnInit, Sanitizer } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { DialogComponent } from '../dialog/dialog.component';

export interface DialogData {
  popupTitle: string;
  imageSrc: string;
}

@Component({
  selector: 'app-datastructures',
  templateUrl: './datastructures.component.html',
  styleUrls: ['./datastructures.component.css']
})
export class DATASTRUCTURESComponent implements OnInit {

  popupTitle: string = 'Learning About DATA STRUCTURE';

  popupSrc: any;

  sanitizedURL: any;

  constructor(public dialog: MatDialog, public domSanitizer: DomSanitizer) {
    this.popupSrc = "https://www.instagram.com/p/CL6wvbIAkAc/embed";
    this.sanitizedURL = this.domSanitizer.bypassSecurityTrustResourceUrl(this.popupSrc);
  }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '100%',
      data: {popupTitle: this.popupTitle},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.popupTitle = result;
    });
  }

}
