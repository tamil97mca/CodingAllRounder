import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WEBSITESTOGETFREETEXTBOOKSComponent } from './websitestogetfreetextbooks.component';

describe('WEBSITESTOGETFREETEXTBOOKSComponent', () => {
  let component: WEBSITESTOGETFREETEXTBOOKSComponent;
  let fixture: ComponentFixture<WEBSITESTOGETFREETEXTBOOKSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WEBSITESTOGETFREETEXTBOOKSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WEBSITESTOGETFREETEXTBOOKSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
