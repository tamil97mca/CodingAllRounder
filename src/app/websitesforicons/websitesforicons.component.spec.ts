import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WEBSITESFORICONSComponent } from './websitesforicons.component';

describe('WEBSITESFORICONSComponent', () => {
  let component: WEBSITESFORICONSComponent;
  let fixture: ComponentFixture<WEBSITESFORICONSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WEBSITESFORICONSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WEBSITESFORICONSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
