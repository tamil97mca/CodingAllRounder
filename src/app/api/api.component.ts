import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class APIComponent implements OnInit {

  popupTitle: string = 'Learning About APIS';

  popupSrc: any;

  sanitizedURL = [];

  constructor(public domSanitizer: DomSanitizer, public dialog: MatDialog) {
    this.popupSrc = [
      'CelKBAnvMA2', 'CfGEXnALBl5', 'Ce87Ah7PRNP', 'CdXcTzVqv5j',
      'Cg-_4P9MooP', 'Ca6PIgEDQaw', 'CVKISW8Fsv-', 'CR5dnGLjiLQ', 'ChHYSWeD5uj', 'ChMZ9HgDX88', 'Ch12dtWD6DF'
    ];

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


  ngOnInit(): void {
  }

}
