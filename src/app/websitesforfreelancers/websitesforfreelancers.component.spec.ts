import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WEBSITESFORFREELANCERSComponent } from './websitesforfreelancers.component';

describe('WEBSITESFORFREELANCERSComponent', () => {
  let component: WEBSITESFORFREELANCERSComponent;
  let fixture: ComponentFixture<WEBSITESFORFREELANCERSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WEBSITESFORFREELANCERSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WEBSITESFORFREELANCERSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
