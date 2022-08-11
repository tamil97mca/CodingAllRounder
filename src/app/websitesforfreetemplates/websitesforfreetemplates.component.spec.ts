import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WEBSITESFORFREETEMPLATESComponent } from './websitesforfreetemplates.component';

describe('WEBSITESFORFREETEMPLATESComponent', () => {
  let component: WEBSITESFORFREETEMPLATESComponent;
  let fixture: ComponentFixture<WEBSITESFORFREETEMPLATESComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WEBSITESFORFREETEMPLATESComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WEBSITESFORFREETEMPLATESComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
